let myLeads = ['www.cool.com','www.hot.com', 'www.mind.com'];
const inputEl = document.getElementById('input-el');
const inputBtn = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');


inputBtn.addEventListener("click",() =>{
    myLeads.push(inputEl.value)
    // myLeads.pop();
    console.log(myLeads);
})

for(let x = 0; x < myLeads.length; x++){
    ulEl.innerHTML +=  "<li>" + myLeads[x] + "</li>"
}