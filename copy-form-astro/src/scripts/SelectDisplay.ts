import { Target } from "./Target";

export class SelectDisplay{
    private _selectComponent: HTMLSelectElement;
    private _targetElements: Array<Target>;

    constructor(selectComponentId: string, targetDisplayElements: Array<Target>) {
        this._selectComponent = document.getElementById(selectComponentId) as HTMLSelectElement;
        this._targetElements = targetDisplayElements;
    }

    get selectComponent(): HTMLSelectElement{
        return this._selectComponent;
    }

    get selectComponentValue(): string {
        return this._selectComponent.value;
    }

    get targetDisplayElements(): Array<Target>{
        return this._targetElements
    }
}