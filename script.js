const body = document.body;
body.style.margin = "0";
body.style.padding = "0";
body.style.boxSizing = "border-box";
body.style.fontFamily = "'Open Sans', sans-serif";
body.style.background = "linear-gradient(to right, #eef2f3, #8e9eab)";
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.minHeight = "100vh";

const background = document.querySelector("#background");

const div1 = document.createElement("div");
div1.id = "div1";
background.appendChild(div1);
div1.style.width = "50%";
div1.style.height = "75vh";
div1.style.background = "#c9e0f3";
div1.style.display = "flex";
div1.style.flexDirection = "column";
div1.style.alignItems = "center";
div1.style.justifyContent = "center";
div1.style.padding = "2px";
div1.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
div1.style.borderRadius = "18px";
div1.style.gap = "15px";

const header = document.querySelector("header");
div1.appendChild(header);

const form = document.createElement("form");
div1.appendChild(form);
form.onsubmit = add;

const div2 = document.createElement("div");
div2.id = "input-label";
form.appendChild(div2);
div2.style.width = "100%";
div2.style.height = "15%";
div2.style.display = "flex";
div2.style.flexDirection = "row";
div2.style.justifyContent = "center";
div2.style.gap = "1%";

const btEnter = document.createElement("button");
btEnter.type = "submit";
btEnter.textContent = "➕";
btEnter.style.backgroundColor = "white";
btEnter.style.borderRadius = "10px";
btEnter.style.width = "4vw";
btEnter.style.height = "4.7vh";
btEnter.style.border = "none";
btEnter.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.25)";
btEnter.style.padding = "0px";
btEnter.style.fontSize = "20px";
btEnter.style.transition = "all 0.3s ease";

btEnter.addEventListener("mouseover", () => {
  btEnter.style.cursor = "pointer";
  btEnter.style.backgroundColor = "#ececec";
});

btEnter.addEventListener("mouseout", () => {
  btEnter.style.backgroundColor = "white";
});

div2.appendChild(btEnter);

const input = document.createElement("input");
div2.appendChild(input);
input.style.marginTop = "0";
input.style.width = "15vw";
input.style.height = "4.5vh";
input.style.fontSize = "18px";
input.style.borderRadius = "10px";
input.style.paddingLeft = "8px";
input.style.border = "none";
input.style.outline = "none";
input.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
input.style.transition = "all 0.3s ease";

const list = document.createElement("div");
div1.appendChild(list);
list.style.marginTop = "1%";
list.style.display = "flex";
list.style.flexDirection = "column";
list.style.alignItems = "center";
list.style.height = "55%";
list.style.width = "80%";
list.style.borderRadius = "10px";
list.style.overflowY = "auto";
list.style.background = "white";
list.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";

const div3 = document.createElement("div");
div3.id = "div3";
div1.appendChild(div3);
div3.style.display = "flex";
div3.style.flexDirection = "row";
div3.style.justifyContent = "space-between";
div3.style.width = "80%";
div3.style.height = "8%";
div3.style.marginTop = "1.5%";
div3.style.gap = "10px";

const btRest = document.createElement("button");
div3.appendChild(btRest);
btRest.textContent = "Reset list";
btRest.style.backgroundColor = "white";
btRest.style.borderRadius = "10px";
btRest.style.width = "12vw";
btRest.style.height = "5vh";
btRest.style.fontSize = "20px";
btRest.style.border = "none";
btRest.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.25)";
btRest.style.padding = "8px";
btRest.style.transition = "all 0.3s ease";

btRest.addEventListener("click", () => {
  if (list.innerHTML !== "") {
    const isConfirmed = confirm(
      "Are you sure that you want to delete all items?"
    );
    if (isConfirmed) list.innerHTML = "";
    localStorage.clear();
    productIndex=1;
  }
   btRest.style.backgroundColor = "white";
});

btRest.addEventListener("mouseover", () => {
  btRest.style.cursor = "pointer";
  btRest.style.backgroundColor = "#ececec";
});

btRest.addEventListener("mouseout", () => {
  btRest.style.backgroundColor = "white";
});

const btRemove = document.createElement("button");
div3.appendChild(btRemove);
btRemove.textContent = "Remove last item";
btRemove.style.backgroundColor = "white";
btRemove.style.borderRadius = "10px";
btRemove.style.width = "12vw";
btRemove.style.height = "5vh";
btRemove.style.fontSize = "20px";
btRemove.style.border = "none";
btRemove.style.boxShadow = "0 6px 10px rgba(0, 0, 0, 0.25)";
btRemove.style.padding = "8px";
btRemove.style.transition = "all 0.3s ease";

btRemove.addEventListener("click", () => {
  if (list.firstChild) {
    list.removeChild(list.firstChild);
    localStorage.removeItem(`product ${--productIndex}`);
  }
  btRemove.style.backgroundColor = "white";
});

btRemove.addEventListener("mouseover", () => {
  btRemove.style.cursor = "pointer";
  btRemove.style.backgroundColor = "#ececec";
});

btRemove.addEventListener("mouseout", () => {
  btRemove.style.backgroundColor = "white";
});
let productIndex=1;
// פונקציה להוספת מוצר לרשימה
function add(event) {
  event.preventDefault();
  if (input.value!== "") {
    const temp = newProduct(input.value);
    list.insertBefore(temp, list.firstChild);
    temp.style.width = "100%";
    temp.style.textAlign = "center";
    temp.style.borderBottom = "1px solid lightgray";
    temp.style.fontSize = "20px";
    temp.style.padding = "10px 0";
    temp.style.boxSizing = "border-box";
    localStorage.setItem(`product ${productIndex}`, input.value);
    productIndex++;
    input.value = "";
  }
   btEnter.style.backgroundColor = "white";
}

// פונקציה ליצירת אלמנט מוצר
function newProduct(name) {
  const newP = document.createElement("div");
  newP.textContent = name;
  return newP;
}


// פונקציה להתאמת עיצוב רספונסיבי
function applyResponsiveStyles() {
  // איפוס עיצובים קיימים לפני התאמה
  div1.style.width = "";
  div1.style.height = "";
  div1.style.padding = "";
  div1.style.gap = "";

  div2.style.flexDirection = "";
  div2.style.gap = "";
  div2.style.justifyContent = "";
  div2.style.width = "";
  div2.style.height = "";

  input.style.width = "";
  input.style.height = "";
  input.style.fontSize = "";

  btEnter.style.width = "";
  btEnter.style.height = "";
  btEnter.style.fontSize = "";

  list.style.width = "";
  list.style.height = "";

  div3.style.flexDirection = "";
  div3.style.gap = "";
  div3.style.width = "";

  btRest.style.width = "";
  btRemove.style.width = "";
  btRest.style.fontSize = "";
  btRemove.style.fontSize = "";

  header.style.fontSize = "";
  header.style.marginTop = "";
  header.style.transform = "";

  // התאמה לפי רוחב חלון
  const w = window.innerWidth;

  if (w >= 1450) {
    // 1. Very large desktop
    header.style.fontSize = "2.5rem";
    header.style.marginTop = "1%";

    div1.style.width = "45%";
    div1.style.height = "75vh";
    div1.style.padding = "20px";
    div1.style.gap = "20px";

    div2.style.flexDirection = "row";
    div2.style.gap = "2%";

    input.style.width = "18vw";
    input.style.height = "5vh";
    input.style.fontSize = "20px";

    btEnter.style.width = "4vw";
    btEnter.style.height = "5vh";
    btEnter.style.fontSize = "22px";

    list.style.width = "80%";
    list.style.height = "55%";

    div3.style.flexDirection = "row";
    div3.style.gap = "15px";

    btRest.style.width = "10vw";
    btRemove.style.width = "13vw";
    btRest.style.fontSize = "20px";
    btRemove.style.fontSize = "20px";
  } else if (w >= 1024 && w < 1450) {
    // 2. Regular desktop
    header.style.fontSize = "2.5rem";
    header.style.marginTop = "5%";

    div1.style.width = "50%";
    div1.style.height = "75vh";
    div1.style.padding = "18px";
    div1.style.gap = "18px";

    div2.style.flexDirection = "row";
    div2.style.gap = "2%";

    input.style.width = "17vw";
    input.style.height = "4.5vh";
    input.style.fontSize = "18px";

    btEnter.style.width = "8vw";
    btEnter.style.height = "4.5vh";
    btEnter.style.fontSize = "20px";

    list.style.width = "80%";
    list.style.height = "55%";

    div3.style.flexDirection = "row";
    div3.style.gap = "12px";

    btRest.style.width = "12vw";
    btRemove.style.width = "15vw";
    btRest.style.fontSize = "18px";
    btRemove.style.fontSize = "18px";
  } else if (w >= 768 && w < 1024) {
    // 3. Tablet
    header.style.fontSize = "2rem";
    header.style.marginTop = "0%";

    div1.style.width = "70%";
    div1.style.height = "80vh";
    div1.style.padding = "15px";
    div1.style.gap = "15px";

    div2.style.flexDirection = "row";
    div2.style.justifyContent = "space-around";
    div2.style.gap = "4%";
    div2.style.width = "60vw";

    input.style.width = "50vw";
    input.style.height = "5vh";
    input.style.fontSize = "18px";

    btEnter.style.width = "12vw";
    btEnter.style.height = "5vh";
    btEnter.style.fontSize = "18px";

    list.style.width = "85%";
    list.style.height = "50%";

    div3.style.flexDirection = "row";
    div3.style.gap = "10px";

    btRest.style.width = "30vw";
    btRemove.style.width = "30vw";
    btRest.style.fontSize = "18px";
    btRemove.style.fontSize = "18px";
  } else if (w >= 481 && w < 768) {
    // 4. Mobile landscape

    div2.innerHTML = ""; // לרוקן
    div2.appendChild(input); // קודם האינפוט
    div2.appendChild(btEnter); // אחר כך הכפתור

    header.style.transform = "none";
    header.style.fontSize = "1.8rem";
    header.style.marginTop = "4%";

    div1.style.width = "90%";
    div1.style.height = "auto";
    div1.style.padding = "12px";
    div1.style.gap = "12px";

    div2.style.flexDirection = "column";
    div2.style.alignItems = "center";
    div2.style.gap = "20px";
    div2.style.height = "17vh";

    input.style.width = "70%";
    input.style.height = "50%";
    input.style.fontSize = "18px";

    btEnter.style.width = "20%";
    btEnter.style.height = "6vh";
    btEnter.style.fontSize = "20px";

    list.style.width = "90%";
    list.style.height = "45vh";

    div3.style.flexDirection = "row";
    div3.style.gap = "10px";
    div3.style.width = "90%";

    btRest.style.width = "45%";
    btRemove.style.width = "45%";
    btRest.style.fontSize = "18px";
    btRemove.style.fontSize = "18px";
  } else {
    // 5. Mobile portrait
    div2.innerHTML = "";
    div2.appendChild(input);
    div2.appendChild(btEnter); 

    header.style.transform = "none";
    header.style.fontSize = "1.6rem";
    header.style.marginTop = "6%";

    div1.style.width = "80%";
    div1.style.height = "90vh";
    div1.style.padding = "10px";
    div1.style.gap = "10px";

    div2.style.flexDirection = "column";
    div2.style.alignItems = "center";
    div2.style.gap = "8px";

    input.style.width = "90%";
    input.style.height = "6vh";
    input.style.fontSize = "16px";

    btEnter.style.width = "80%";
    btEnter.style.height = "6vh";
    btEnter.style.fontSize = "18px";

    list.style.width = "95%";
    list.style.height = "40vh";

    div3.style.flexDirection = "column";
    div3.style.gap = "10px";
    div3.style.width = "100%";

    btRest.style.width = "80vw";
    btRemove.style.width = "80vw";
    btRest.style.fontSize = "16px";
    btRemove.style.fontSize = "16px";
  }
}

// קריאה ראשונית + חיבורים
applyResponsiveStyles();
let lastWindowWidth = window.innerWidth;

window.addEventListener("resize", () => {
  const newWidth = window.innerWidth;
  if (Math.abs(newWidth - lastWindowWidth) > 50) { 
    applyResponsiveStyles(); 
    lastWindowWidth = newWidth;
  }
});

window.addEventListener("orientationchange", () => {
  applyResponsiveStyles();
  lastWindowWidth = window.innerWidth; // עדכון גם כאן
});

window.addEventListener("load", applyResponsiveStyles);
