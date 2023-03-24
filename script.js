let myLeads = [];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

inputBtn.addEventListener("click",() =>{
    myLeads.push(inputEl.value);
    inputEl.value = '';
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    renderLeads();
})

function renderLeads(){
    let listItems = ""
for(let x = 0; x < myLeads.length; x++){
    //  listItems +=  "<li><a target = '_blank' href = '"+ myLeads[x] +"'>" + myLeads[x] + "</a></li>"
     listItems +=  `
     <li>
       <a target = '_blank' href = '${myLeads[x]}'>
           ${myLeads[x]}
       </a>
     </li>`
    //     const li = document.createElement('li')
//     li.textContent = myLeads[x];
//     ulEl.append(li);
}
ulEl.innerHTML = listItems
}