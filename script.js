let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');


inputBtn.addEventListener("click",() =>{
    myLeads.push(inputEl.value);
    renderLeads();
})

function renderLeads(){
    let listItems = ""
for(let x = 0; x < myLeads.length; x++){
     listItems +=  "<li>" + myLeads[x] + "</li>"
//     const li = document.createElement('li')
//     li.textContent = myLeads[x];
//     ulEl.append(li);
}
ulEl.innerHTML = listItems
}