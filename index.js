
let saveElement = document.querySelector(".save-element")
let countElement = document.querySelector(".count-element")
let count = 0


const increment= () =>{
    count += 1
    countElement.textContent = count
}
const save = event =>{
    saveElement.textContent += `${countElement.textContent}-` 
    countElement.textContent = '0'
    count = 0
}