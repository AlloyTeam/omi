// @ts-nocheck
import {
  isArray,
  hyphenate,
  capitalize,
  camelCase,
  createStyleSheet,
  getClassStaticValue,
} from './utils'
import { diff } from './diff'
import { ExtendedElement } from './dom'
import 'weakmap-polyfill'
import { ObjectVNode, VNode } from './vdom'
import { setActiveComponent, clearActiveComponent } from 'reactive-signal'
import { options } from './options'
import { define } from './define'

let id = 0

const adoptedStyleSheetsMap = new WeakMap()
type Module = { default: string }
type CSSItem = Module | string

type PropType = Object | Number | String | Boolean

type PropTypes = {
  [key: string]: PropType | Array<PropType>
}

type ReflectProps = {
  [key: string]: boolean | ((propValue: any) => any)
}

export class Component extends HTMLElement {
  static is = 'Component'
  static defaultProps: Record<string, unknown>
  static reflectProps: ReflectProps
  static propTypes: PropTypes
  static css: CSSItem | CSSItem[]
  static isLightDOM: boolean
  static noSlot: boolean

  // 可以延迟定义，防止 import { }  被 tree-shaking 掉
  static define(name: string): void {
    define(name, this)
  }
  // 不能声明 props，不然懒加载的 props 执行完构造函数会变成 udnefined, 会导致元素升级为自定义元素之前的 props 丢失
  // props: Record<string, unknown>
  // 不能声明 prevProps，不然懒加载的 prevProps 执行完构造函数会变成 udnefined, 会导致元素升级为自定义元素之前的 prevProps 丢失
  // prevProps: Record<string, unknown> | null
  elementId: number
  isInstalled: boolean
  inject?: string[]
  injection?: { [key: string]: unknown }
  renderRoot?: ExtendedElement | ShadowRoot | Component
  rootElement: ExtendedElement | ExtendedElement[] | null

  constructor() {
    super()

    this.handleProps()
    // if (!this.constructor.defaultProps) {
    //   this.constructor.defaultProps = {}
    // }
    // if (!this.constructor.propTypes) {
    //   this.constructor.propTypes = {}
    // }
    // if (!this.constructor.reflectProps) {
    //   this.constructor.reflectProps = {}
    // }
    // if (this.constructor.props) {
    //   for (const propName in this.constructor.props) {
    //     const prop = this.constructor.props[propName]
    //     this.constructor.defaultProps[propName] = prop.default
    //     this.constructor.propTypes[propName] = prop.type
    //     this.constructor.reflectProps[propName] = prop.reflect
    //   }
    // }

    // // @ts-ignore fix lazy load props missing
    // this.props = Object.assign(
    //   {},
    //   (this.constructor as typeof Component).defaultProps,
    //   this.props,
    // )
    this.elementId = id++
    this.isInstalled = false
    this.rootElement = null
  }

  /**
   * 处理props
   *
   * 为方便组件继承，会读取类继承链上的props、defaultProps、propTypes、reflectProps等属性进行合并
   * 这样子组件就可以继承父组件的props、defaultProps、propTypes、reflectProps等属性
   *
   *
   */
  private handleProps() {
    this.constructor.defaultProps =
      getClassStaticValue(this, 'defaultProps', { default: {} }) || {}
    this.constructor.propTypes =
      getClassStaticValue(this, 'propTypes', { default: {} }) || {}
    this.constructor.reflectProps =
      getClassStaticValue(this, 'reflectProps', { default: {} }) || {}
    const props = getClassStaticValue(this, 'props', {
      default: {},
      merge: 'uniqueMerge',
    })

    if (this.constructor.props) {
      for (const propName in props) {
        const prop = props[propName]
        this.constructor.defaultProps[propName] = prop.default
        this.constructor.propTypes[propName] = prop.type
        this.constructor.reflectProps[propName] = prop.reflect
      }
    }

    // @ts-ignore fix lazy load props missing
    this.props = Object.assign({}, this.constructor.defaultProps, this.props)
  }

  attributeChangedCallback(name, oldValue, newValue) {
    const propsName = camelCase(name)
    if (this.constructor.props && this.constructor.props[propsName]) {
      const prop = this.constructor.props[propsName]
      if (prop.changed) {
        const newTypeValue = this.getTypeValueofProp(propsName, newValue)
        const oldTypeValue = this.getTypeValueofProp(propsName, oldValue)
        prop.changed.call(this, newTypeValue, oldTypeValue)
      }
    }
  }

  static get observedAttributes() {
    return this.props ? Object.keys(this.props).map(hyphenate) : []
  }

  injectObject() {
    let p: ExtendedElement = this.parentNode as ExtendedElement
    // @ts-ignore deprecated
    while (p && !this.store && !options.mixin.store) {
      // @ts-ignore deprecated
      this.store = p.store
      p = (p.parentNode || p.host) as ExtendedElement
    }

    if (this.inject) {
      this.injection = {}
      p = this.parentNode as ExtendedElement
      let provide: unknown
      while (p && !provide) {
        provide = p.provide
        p = (p.parentNode || p.host) as ExtendedElement
      }
      if (provide) {
        this.inject.forEach((injectKey) => {
          // @ts-ignore
          this.injection[injectKey] = provide[injectKey]
        })
      }
    }

    for (const key in options.mixin) {
      if (!this.hasOwnProperty(key)) {
        Object.defineProperty(this, key, {
          get: () => {
            return options.mixin[key]
          },
        })
      }
    }
  }

  createRenderRoot(): ShadowRoot | Component {
    if ((this.constructor as typeof Component).isLightDOM) {
      return this
    } else {
      if (this.shadowRoot) {
        let fc: ChildNode | null
        while ((fc = this.shadowRoot.firstChild)) {
          this.shadowRoot.removeChild(fc)
        }
        return this.shadowRoot
      } else {
        return this.attachShadow({
          mode: 'open',
        })
      }
    }
  }

  applyAdoptedStyleSheets() {
    if (
      !(this.constructor as typeof Component).isLightDOM &&
      !adoptedStyleSheetsMap.has(this.constructor)
    ) {
      const css = (this.constructor as typeof Component).css
      if (css) {
        let styleSheets: CSSStyleSheet[] = []
        if (typeof css === 'string') {
          styleSheets = [createStyleSheet(css)]
        } else if (isArray(css)) {
          styleSheets = (css as Module[]).map((styleSheet) => {
            if (typeof styleSheet === 'string') {
              return createStyleSheet(styleSheet)
            } else if (
              (styleSheet as Module).default &&
              typeof (styleSheet as Module).default === 'string'
            ) {
              return createStyleSheet((styleSheet as Module).default)
            } else {
              return styleSheet
            }
          }) as CSSStyleSheet[]
        } else if (
          (css as Module).default &&
          typeof (css as Module).default === 'string'
        ) {
          styleSheets = [createStyleSheet((css as Module).default)]
        } else {
          styleSheets = [css as unknown as CSSStyleSheet]
        }

        // add globalCSS
        styleSheets = [...options.globalCSS, ...styleSheets]
        ;(this.renderRoot as ShadowRoot).adoptedStyleSheets = styleSheets
        adoptedStyleSheetsMap.set(this.constructor, styleSheets)
      } else {
        if (options.globalCSS.length) {
          ;(this.renderRoot as ShadowRoot).adoptedStyleSheets =
            options.globalCSS
        }
      }
    } else {
      ;(this.renderRoot as ShadowRoot).adoptedStyleSheets =
        adoptedStyleSheetsMap.get(this.constructor)
    }
  }

  appendStyleVNode(rendered: VNode | VNode[]) {
    if (this.props.css && rendered) {
      const styleVNode = {
        nodeName: 'style',
        attributes: {},
        children: [this.props.css],
      }
      if ((rendered as VNode[]).push) {
        ;(rendered as VNode[]).push(styleVNode as ObjectVNode)
      } else {
        ;(rendered as ObjectVNode).children.push(styleVNode as ObjectVNode)
      }
    }
  }

  connectedCallback(): void {
    this.injectObject()
    this.attrsToProps()
    this.install()
    this.fire('install', this)
    this.renderRoot = this.createRenderRoot()
    this.applyAdoptedStyleSheets()
    setActiveComponent(this)
    this.beforeRender()
    this.fire('beforeRender', this)
    // @ts-ignore
    const rendered = this.render(this.props, this.store)
    this.appendStyleVNode(rendered)
    this.rendered(rendered)
    clearActiveComponent()
    this.rootElement = diff(null, rendered as VNode, null, this, false)

    if (isArray(this.rootElement)) {
      ;(this.rootElement as Element[]).forEach((item) => {
        this.renderRoot?.appendChild(item)
      })
    } else {
      this.rootElement &&
        this.renderRoot?.appendChild(this.rootElement as Element)
    }
    this.installed()
    this.fire('installed', this)
    this.isInstalled = true

    Promise.resolve().then(() => {
      this.ready()
      this.fire('ready', this)
    })
  }

  disconnectedCallback(): void {
    this.uninstall()
    this.fire('uninstall', this)
    this.isInstalled = false
  }

  update(updateSelf?: boolean): void {
    this.beforeUpdate()
    this.fire('beforeUpdate', this)
    this.attrsToProps()
    setActiveComponent(this)
    this.beforeRender()
    this.fire('beforeRender', this)
    // @ts-ignore
    const rendered = this.render(this.props, this.store)
    this.appendStyleVNode(rendered)
    this.rendered(rendered)
    clearActiveComponent(null)

    this.rootElement = diff(
      this.rootElement,
      rendered as VNode,
      this.renderRoot as ExtendedElement,
      this,
      !!updateSelf,
    )
    this.updated()
    this.fire('updated', this)
  }

  private updateQueued = false

  queuedUpdate(): void {
    if (!this.updateQueued) {
      this.updateQueued = true
      Promise.resolve().then(() => {
        this.update()
        this.updateQueued = false
      })
    }
  }

  updateProps(obj: Record<string, unknown>): void {
    Object.keys(obj).forEach((key) => {
      this.props[key] = obj[key]
      if (this.prevProps) {
        this.prevProps[key] = obj[key]
      }
    })
    this.update()
  }

  updateSelf(): void {
    this.update(true)
  }

  removeProp(key: string): void {
    this.removeAttribute(key)
    // Avoid executing removeAttribute methods before connectedCallback
    this.isInstalled && this.update()
  }

  setProp(key: string, val: string | object): void {
    if (val && typeof val === 'object') {
      this.setAttribute(key, JSON.stringify(val))
    } else {
      this.setAttribute(key, val)
    }
    // Avoid executing setAttribute methods before connectedCallback
    this.isInstalled && this.update()
  }

  attrsToProps(): void {
    if (this.props.ignoreAttrs) return
    const ele = this
    ele.props['css'] = ele.getAttribute('css')
    const attrs = (this.constructor as typeof Component).propTypes
    if (!attrs) return
    Object.keys(attrs).forEach((key) => {
      const val = ele.getAttribute(hyphenate(key))
      if (val !== null) {
        ele.props[key] = this.getTypeValueofProp(key, val)
      } else {
        if (
          (ele.constructor as typeof Component).defaultProps &&
          (ele.constructor as typeof Component).defaultProps.hasOwnProperty(key)
        ) {
          ele.props[key] = (ele.constructor as typeof Component).defaultProps[
            key
          ]
        } else {
          ele.props[key] = null
        }
      }
    })
  }

  getTypeValueofProp(key: string, val: string) {
    const attrs = (this.constructor as typeof Component).propTypes
    const types = isArray(attrs[key]) ? attrs[key] : [attrs[key]]

    for (let i = 0; i < (types as Array<PropType>).length; i++) {
      const type = (types as Array<PropType>)[i]
      switch (type) {
        case String:
          return val
        case Number:
          return Number(val)
        case Boolean:
          return Boolean(val !== 'false' && val !== '0')
        case Array:
        case Object:
          try {
            return JSON.parse(val)
          } catch (e) {
            console.warn(
              `The ${key} object prop does not comply with the JSON specification, the incorrect string is [${val}].`,
            )
          }
      }
    }
  }

  fire(
    name: string,
    data: unknown,
    options?: { bubbles: boolean; composed: boolean },
  ): void {
    const { bubbles, composed } = Object.assign(
      { bubbles: false, composed: false },
      options,
    )
    const handler = this.props[`on${capitalize(name)}`] as Function
    if (handler) {
      handler(
        new CustomEvent(name, {
          detail: data,
          bubbles,
          composed,
        }),
      )
    } else {
      this.dispatchEvent(
        new CustomEvent(name, {
          detail: data,
          bubbles,
          composed,
        }),
      )
    }
  }

  install() {}

  installed() {}

  ready() {}

  uninstall() {}

  beforeUpdate() {}

  updated() {}

  beforeRender() {}

  rendered(vnode: VNode | VNode[]) {}

  receiveProps() {}
}
