const URL = "https://jsonplaceholder.typicode.com/users"
const factPara = document.querySelector("#fact")
const btn = document.querySelector("btn")

btn.addEventListener("click",getFacts)
// https://randomuser.me/api/
let getFacts = async () => {
    console.log("Getting  data......")
    let response = await fetch(URL)
    console.log(response.status) // 200 if OK

    let data = await response.json()
    // console.log(data)       // pura array
    // console.log(data[0])    // array ka pehla element
    // console.log(data[0].name) // pehle user ka name
    factPara.innerText = data[0].name + " - " + data[0].email
}   

getFacts()
