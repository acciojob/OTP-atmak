//your JS code here. If required.
let inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        if(input.value.length === 1) {
            if(index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (event) => {
        if(event.key === "Backspace" && input.value.length === 0) {
            if(index > 0) {
                inputs[index - 1].focus();
            }
        }
    });
});