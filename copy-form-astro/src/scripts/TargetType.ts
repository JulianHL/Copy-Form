import { Target } from "./Target";

export class TargetType extends Target{
    private _sufix: string;

    constructor(targetElementId: string, expectedValue: string, sufix: string) {
        super(targetElementId, expectedValue);
        this._targetElement = document.getElementById(targetElementId) as HTMLInputElement;
        this._sufix = sufix;
    }

    get targetElement(): HTMLInputElement {
        return this._targetElement as HTMLInputElement;
    }

    get sufix(): string {
        return this._sufix
    }
}