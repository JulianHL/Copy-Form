export function requiredInputSwitch() {
    const inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>

    console.log("Switch Activated")

    if (!inputs || inputs.length == 0) return;

    inputs.forEach((input) => {
        if (input.dataset.required === "true") {
            const isHidden = isElementHidden(input);
            input.required = !isHidden;
            console.log(input.name, "hidden?", input.closest(".hidden") !== null, "required?", input.required, " const = ", isHidden) 
        }

    })
}

function isElementHidden(element: HTMLElement | null): boolean {
    let current = element;
    while (current && current !== document.body) {
        if (getComputedStyle(current).display === "none") return true;
        current = current.parentElement;
    }
    return false;
}