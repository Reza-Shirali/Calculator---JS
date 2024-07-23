const display = document.querySelector(".value");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    try {
      if (button.dataset.button === "C") {
        display.value = "";
      } else if (button.dataset.button === "CE") {
        display.value = display.value.toString().slice(0, -1);
      } else if (button.dataset.button === "=") {
        if (display.value !== "") {
          display.value = eval(display.value);
        }
      } else {
        display.value += button.dataset.button;
      }
    } catch (err) {
      display.value = `Invalid Entry`;
      setTimeout(() => (display.value = ""), 1000);
    }
  });
});
