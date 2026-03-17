import { Target } from "./Target";

export class TargetDisplay extends Target {
    private _displayClass: string;
    private _hiddenClass: string;

    constructor(targetElementId: string, expectedValue: string, displayClass: string = "block", hiddenClass: string = "hidden") {
        super(targetElementId, expectedValue)
        this._displayClass = displayClass;
        this._hiddenClass = hiddenClass;
    }


    get displayClass(): string {
        return this._displayClass;
    }
    get hiddenClass(): string {
        return this._hiddenClass;
    }
}