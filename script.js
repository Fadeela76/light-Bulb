let btn = document.createElement("button");

let bulb = document.querySelector("#bulb");
let body = document.querySelector("body");

body.style.textAlign = "center";
body.style.background = "black";
body.style.height = "97.7vh";

body.append(btn);
btn.style.padding = "10px";
btn.style.borderRadius = "10px";
btn.style.fontWeight = "900";
btn.style.cursor = "pointer";

btn.innerText = "Turn On";
btn.addEventListener("click", () => {
  if (btn.innerText == "Turn On") {
      bulb.src = "bulb.png";
      btn.innerText = "Turn Off";
      if(body.style.background = "black"){
          body.style.background = "linear-gradient( rgb(184, 145, 9),rgb(0, 0, 0) )";
      }
  } else {
    btn.innerText = "Turn On";
    bulb.src="bulb-off.png";
    body.style.background = "black";
  }
});