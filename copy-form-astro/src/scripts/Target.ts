export abstract class Target {
    protected _targetElement: HTMLElement;
    private _expectedValue: string;

    constructor(targetElementId: string, expectedValue: string) {
        this._targetElement = document.getElementById(targetElementId) as HTMLElement;
        this._expectedValue = expectedValue;
    }

    get targetElement(): HTMLElement {
        return this._targetElement
    }

    get expectedValue(): string{
        return this._expectedValue;
    }
}