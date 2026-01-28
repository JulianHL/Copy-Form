export function updateSelectBox(options: NodeListOf<Element>, input: HTMLInputElement){

    options.forEach((option) => {
        option.addEventListener("mousedown", () => {
          if (input) {
            input.value = option.textContent?.trim() || "";
          }
        });
    });
}

export function updateMultipleSelectBox(containers: NodeListOf<Element>) {
  
  containers.forEach(container => {
    const options = container.querySelectorAll("[data-drop-label]");
    const input = container.querySelector("input") as HTMLInputElement;

    updateSelectBox(options, input);
  });
}