//Clock
const deg = 6,
  hr = document.getElementById("hr"),
  mn = document.querySelector("#mn"),
  sc = document.querySelector("#sc");
setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;
});
//clock end
//info
const greetings = document.getElementById("greetings");
const name_dom = document.getElementById("name");
const focus_dom = document.getElementById("focus");
const info = document.getElementById("info");
// Set AM/PM
let today = new Date();
const hour = today.getHours();
if (hour < 12) {
  //morning
  greetings.textContent = "Good Morning";
  document.body.style.backgroundImage = "url('images/morning.jpg')";
  focus_dom.style.backgroundColor = "transparent";
} else if (hour < 18) {
  //afternoon
  greetings.textContent = "Good Afternoon";
  document.body.style.backgroundImage = "url('images/afternoon.jpg')";
  info.style.color = "black";
} else {
  //evening
  greetings.textContent = "Good Evening";
  document.body.style.backgroundImage = "url('images/night.jpg')";
  info.style.color = "white";
  focus_dom.style.backgroundColor = "black";
}

function getName() {
  if (localStorage.getItem("name") === null) {
    name_dom.textContent = "[Enter Name]";
  } else {
    name_dom.textContent = localStorage.getItem("name");
  }
}

function getFocus() {
  if (localStorage.getItem("focus") === null) {
    focus_dom.textContent = "Here your focus will go";
  } else {
    focus_dom.textContent = localStorage.getItem("focus");
  }
}

getName();
getFocus();

function setName(e) {
  console.log(e);
  if (e.type == "keypress") {
    if (e.which == "13" || e.keyCode == "13") {
      localStorage.setItem("name", e.target.innerText);
      name_dom.blur();
    }
  } else {
    localStorage.setItem("name", e.target.innerText);
  }
}

function setFocus(e) {
  if (e.type == "keypress") {
    if (e.which == "13" || e.keyCode == "13") {
      localStorage.setItem("focus", e.target.innerText);
      focus_dom.blur();
    }
  } else {
    localStorage.setItem("focus", e.target.innerText);
  }
}
name_dom.addEventListener("keypress", setName);
name_dom.addEventListener("blur", setName);
focus_dom.addEventListener("keypress", setFocus);
focus_dom.addEventListener("keypress", setFocus);
async function ali() {
  const fun_fun = await fetch("index.html");
  console.log(fun_fun);
}
ali()
  .then(() => {
    console.log("success");
  })
  .catch(() => {
    console.log("error");
  });
