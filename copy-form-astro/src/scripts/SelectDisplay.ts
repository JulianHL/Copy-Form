import { TargetDisplay } from "./TargetDisplay";

export class SelectDisplay{
    private _selectComponent: HTMLSelectElement;
    private _targetDisplayElements: Array<TargetDisplay>;

    constructor(selectComponentId: string, targetDisplayElements: Array<TargetDisplay>) {
        this._selectComponent = document.getElementById(selectComponentId) as HTMLSelectElement;
        this._targetDisplayElements = targetDisplayElements;
    }

    get selectComponent(): HTMLSelectElement{
        return this._selectComponent;
    }

    get selectComponentValue(): string {
        return this._selectComponent.value;
    }

    get targetDisplayElements(): Array<TargetDisplay>{
        return this._targetDisplayElements
    }
}