import type { selectBindingType } from "./SelectBindingType";

export function targetElementTyper(seclectBindingTypeElements: Array<selectBindingType>) {
    seclectBindingTypeElements.forEach((selectBinding) => {
        selectBinding.typeTarget();
        selectBinding.selectComponent.addEventListener("change", function (e) {
            seclectBindingTypeElements.forEach((selectBindingListener) => {
                selectBindingListener.typeTarget();
            })
        })
    })
}
