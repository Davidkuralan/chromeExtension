let myLeads = [];
let inputEl = document.getElementById('input-el')
let inputBtn = document.getElementById('input-btn');

inputBtn.addEventListener("click",() =>{
    myLeads.push(inputEl.value)
    console.log(myLeads);
})