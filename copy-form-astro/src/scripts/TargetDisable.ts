import { Target } from "./Target";

export class TargetDisable extends Target{
    private _lastDisableValue: boolean;
    private _defaultValue: boolean | string;
    private _linkedElement: HTMLElement | null;

    constructor(targetElementId: string, expectedValue: string, defaultValue: boolean | string, linkedElement: string | null = null) {
        super(targetElementId, expectedValue);
        this._targetElement = document.getElementById(targetElementId) as HTMLInputElement;
        this._lastDisableValue = this.targetElement.disabled
        this._defaultValue = defaultValue
        this._linkedElement = linkedElement ? document.getElementById(linkedElement) as HTMLElement : null;
    }

    get targetElement(): HTMLInputElement {
        return this._targetElement as HTMLInputElement;
    }

    get disable(): boolean {
        return this.targetElement.disabled;
    }

    get lastDisable(): boolean {
        return this._lastDisableValue;
    }

    set lastDisable(value: boolean) {
        this._lastDisableValue = value;
    }

    get defaultValue(): boolean | string {
        return this._defaultValue;
    }

    get linkedElement(): HTMLElement | null {
        return this._linkedElement;
    }
}