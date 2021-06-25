import { WeElement } from 'omi';
import '@omiu/checkbox';
interface Props {
    dataSource: any[];
    columns: object;
    checkbox: boolean;
    border: boolean;
    stripe: boolean;
}
export default class Table extends WeElement<Props> {
    static css: any;
    static defaultProps: {
        dataSource: any[];
        columns: any[];
        checkbox: boolean;
        border: boolean;
        stripe: boolean;
    };
    static propTypes: {
        dataSource: ObjectConstructor;
        columns: ObjectConstructor;
        checkbox: BooleanConstructor;
        border: BooleanConstructor;
        stripe: BooleanConstructor;
    };
    removeItem: (item: any) => void;
    _changeHandlerTh: (e: any, item: any) => void;
    _changeHandlerTd: (e: any, item: any) => void;
    _getCheckedState(): {
        indeterminate: boolean;
        unchecked?: undefined;
        checked?: undefined;
    } | {
        unchecked: boolean;
        indeterminate?: undefined;
        checked?: undefined;
    } | {
        checked: boolean;
        indeterminate?: undefined;
        unchecked?: undefined;
    };
    render(props: any): JSX.Element;
}
export {};
