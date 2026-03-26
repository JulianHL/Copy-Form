import type { selectBindingDisplay } from "./SelectBindingDisplay";


export function targetElementDisplayer(selectBindingElements: Array<selectBindingDisplay>) {
    selectBindingElements.forEach((selectBinding) => {
        selectBinding.displayTarget();
        selectBinding.selectComponent.addEventListener("change", function (e) {
            selectBinding.displayTarget();
        })
    })
}


