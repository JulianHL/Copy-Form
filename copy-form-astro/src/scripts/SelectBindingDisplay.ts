import { SelectBinding } from "./SelectBinding";
import { TargetDisable } from "./TargetDisable";
import type { TargetDisplay } from "./TargetDisplay";


export class selectBindingDisplay extends SelectBinding{
    displayTarget() {
        this._targetElements.forEach((target) => {
            const t: TargetDisplay = target as TargetDisplay;
            const isVisible = this._selectComponent.value === t.expectedValue
            t.targetElement.classList.toggle(t.hiddenClass, !isVisible)
            t.targetElement.classList.toggle(t.displayClass, isVisible)    
      });
    }
}