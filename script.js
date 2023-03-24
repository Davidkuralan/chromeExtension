let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const deleteBtn = document.getElementById('delete-btn');
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

function render(leads){
    let listItems = ""
for(let x = 0; x  < leads.length; x++){
    //  listItems +=  "<li><a target = '_blank' href = '"leads[x] +"'>" leads[x] + "</a></li>"
     listItems +=  `
     <li>
       <a target = '_blank' href = '${leads[x]}'>
           ${leads[x]}
       </a>
     </li>`
    //     const li = document.createElement('li')
//     li.textContent = myLeads[x];
//     ulEl.append(li);
}
ulEl.innerHTML = listItems
}


inputBtn.addEventListener("click",() =>{
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads);
})

deleteBtn.addEventListener('dblclick',() =>{
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

