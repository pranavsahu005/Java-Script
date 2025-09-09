/*
let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () =>
{
   console.log("button - hadler 1 was Click ");
});


btn1.addEventListener("click", () =>
{
   console.log("button - hadler 2 was Click ");
});

const handler3=() => {
    console.log("Button was clicked -Handler 3")
}
btn1.addEventListener("click",handler3)


btn1.addEventListener("click", () =>
{
   console.log("button - hadler 4 was Click ");
});

btn1.removeEventListener("click",handler3)

Qs Create a toggle button those that change the screen to dark-mode when 
click & light-mode when clicked again.*/

let modeBtn = document.querySelector("#mode")
let body = document.querySelector("body")
let currMode="light";

modeBtn.addEventListener("click",()=>{
    if(currMode === "light"){
        currMode = "dark"
       body.classList.add("dark")
       body.classList.remove("light")
       body.classList.remove("body")
    }
    else{
        currMode = "light"
       body.classList.add("light")
       body.classList.remove("dark")
       body.classList.remove("body")
    }   
    console.log(currMode)
});

const btn4=() =>{
   StyleSheet.Style
}