import { Target } from "./Target";

export class TargetType extends Target{
    private _text: string;
    private _lastText: string;

    constructor(targetElementId: string, expectedValue: string, text: string) {
        super(targetElementId, expectedValue);
        this._targetElement = document.getElementById(targetElementId) as HTMLInputElement;
        this._text = text;
        this._lastText = this.targetElement.value
    }

    get targetElement(): HTMLInputElement {
        return this._targetElement as HTMLInputElement;
    }

    get text(): string {
        return this._text;
    }

    get lastText(): string {
        return this._lastText;
    }

    set lastText(value: string) {
        this._lastText = value;
    }
}