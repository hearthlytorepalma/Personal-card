//let addBtn = document.getElementById('add-btn')
let nameEl = document.getElementById('name-element')
let countEl = document.getElementById('count-element')
let prankCount = 0

prankBtn = () => {
prankCount ++
return countEl.innerHTML = `${prankCount} people already added ${nameEl.innerHTML} to their contact.`


}

generateBtn = () => {

   prankBtn()
   
}