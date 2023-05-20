import './style.css'

const submitButton = document.getElementById("submit") as HTMLButtonElement;

submitButton.onclick = () => submit();

function submit() {
  const elementInput = document.getElementById("element") as HTMLInputElement;
  const element: string = elementInput.value;
  const colorInput = document.getElementById("color") as HTMLInputElement;
  const color: string = colorInput.value;
  const valueInput = document.getElementById("value") as HTMLInputElement;
  const value: string = valueInput.value;
  const output = document.getElementById("output");

  if (element !== "") {
    if (output) {
      output.innerHTML = `<${element} style="color: ${color};">${value}</${element}>`;
    }
  }
  else {
    if (output) {
      output.innerHTML = `<span style="color: ${color};">${value}</span>`;
    }
  }
}