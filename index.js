function ChangeMode(){
    let body = document.querySelector("body");
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
            btn.innerHTML = "Light ☀";
        } else {
            btn.innerHTML = "Dark🌙";
        }
}
let btn = document.querySelector("button");
btn.addEventListener("click", ChangeMode);

let heading = document.querySelector("h1");
heading.style.background = "lightblue";

function RemoveMe(){
    let paragraph = document.querySelector("header p");
    if (paragraph) {
        paragraph.remove(); 
    }

    let newParagraph = document.createElement("p");
    newParagraph.textContent = "Enjoy our freshly brewed coffee! ☕";
    let header = document.querySelector("header");
    header.appendChild(newParagraph);
}

let remove = document.querySelector(".remove");
remove.addEventListener("click", RemoveMe);

 