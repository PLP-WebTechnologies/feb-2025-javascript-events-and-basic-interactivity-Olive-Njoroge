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

function validateEmail(email) {
    // Basic email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validationForm(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let nameFeedback = document.querySelector("#nameFeedback");

    let email = document.querySelector("#email").value;
    let emailFeedback = document.querySelector("#emailFeedback");

    let password = document.querySelector("#password").value;
    let passwordFeedback = document.querySelector("#passwordFeedback");

    if (name.length < 3){
        nameFeedback.textContent = ` Name must be at least 3 characters`;
        nameFeedback.style.color = "red";
    }else{
        nameFeedback.textContent = `Looks Good`;
        nameFeedback.style.color = "green";
    }

     if(!validateEmail(email)){
        emailFeedback.textContent = `Invalid email format`;
        emailFeedback.style.color = "red";
    }else{
        emailFeedback.textContent = `Looks Good`;
        emailFeedback.style.color = "green";
    }
    if(password.length < 8){
        passwordFeedback.textContent =  `Password must be at least 8 characters.`;
        passwordFeedback.style.color = "red";
    }
    else{
        passwordFeedback.textContent =  `Looks Good`;
        passwordFeedback.style.color = "green";
    }


}

// Add real-time validation
document.querySelector("#name").addEventListener("input", validationForm);

// Handle form submission
let submit = document.querySelector("#Submit");
submit.addEventListener("click", validationForm);


 