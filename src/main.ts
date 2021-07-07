import "./style.css";

let information = [{ title: "a" }, { title: "b" }, { title: "c" }];
let idx = 0;
let changableSection = document.getElementById("changable")!;
const changeChangableSection = (step: string) => {
  if (step === "forward") {
    ++idx;
    if (idx >= information.length) {
      idx = 0;
    }
  } else if (step === "backward") {
    --idx;
    if (idx < 0) {
      idx = information.length - 1;
    }
  }
  changableSection.innerHTML = `<h1>${information[idx].title}</h1>`;
};

changeChangableSection("");

setInterval(() => {
  changeChangableSection("forward");
}, 2000);
