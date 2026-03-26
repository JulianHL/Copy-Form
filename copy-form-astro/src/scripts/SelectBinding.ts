import { Target } from "./Target";
import type { TargetDisable } from "./TargetDisable";
import type { TargetType } from "./TargetType";

export abstract class SelectBinding{
    protected _selectComponent: HTMLSelectElement;
    protected _targetElements: Array<Target>;

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

    get targetElements(): Array<Target>{
        return this._targetElements
    }




}