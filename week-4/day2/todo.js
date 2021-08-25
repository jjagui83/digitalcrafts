const container = document.querySelector(".main-container");
const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const second = document.querySelector(".container2");

function addTask(){
    const taskItems = document.createElement("li")
    const task = input.value;
    taskItems.innerHTML = task;
    second.append(taskItems);
    console.log(taskItems)
}
submit.addEventListener('click', ()=> {
    addTask();
})