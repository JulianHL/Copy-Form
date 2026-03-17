export class TargetDisplay {
    private _displayElement: HTMLElement;
    private _expectedValue: string;
    private _displayClass: string;
    private _hiddenClass: string;

    constructor(displayElementId: string, expectedValue: string, displayClass: string="block", hiddenClass: string = "hidden") {
        this._displayElement = document.getElementById(displayElementId) as HTMLElement;
        this._expectedValue = expectedValue;
        this._displayClass = displayClass;
        this._hiddenClass = hiddenClass;
    }

    get displayElement(): HTMLElement {
        return this._displayElement
    }
    get expectedValue(): string{
        return this._expectedValue;
    }
    get displayClass(): string {
        return this._displayClass;
    }
    get hiddenClass(): string {
        return this._hiddenClass;
    }
}