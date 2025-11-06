window.onload = init;

function init() {
    console.log("Hello, World! PAGE IS LOADED AND ALL HTML ELEMENTS ARE AVAILABLE");
    console.log("aka The DOM is ready");

    let myTitle = document.querySelector("#myTitle");
    myTitle.style.color = "red";
    myTitle.style.border = "5px solid green";
    myTitle.style.padding = "20px";
    myTitle.style.textAlign = "left";
    myTitle.innerText = "This title has been modified by JavaScript";
}

