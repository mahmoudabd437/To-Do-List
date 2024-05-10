let input = document.querySelector('.input');
let submit = document.querySelector('.add');
let divTasks = document.querySelector('.tasks');

let arrTasks = [];

// check localStorage empty or Not
if (localStorage.getItem('task') !== null) {
    arrTasks = JSON.parse(localStorage.getItem('task'));
} else {
    arrTasks = [];
}
// add tasks in div
function addTasks() {
    let taskValue = '';
    for (let i = 0; i < arrTasks.length; i++) {
        taskValue += `<div class="allTask"><p class="task" onclick="doneTask(${i})">${arrTasks[i]}</p><span class="delete"onclick="deleteTask(${i})">delete</span></div>`;
    }
    divTasks.innerHTML = taskValue;
}
addTasks();

// add tasks in div when click on submit

submit.onclick = function () {

    if (input.value !== "") {
        arrTasks.push(input.value);
        localStorage.setItem('task', JSON.stringify(arrTasks));
        addTasks();
    }
    input.value = '';
};

// delete tasks from div

function deleteTask(i) {
    arrTasks.splice(i, 1);
    localStorage.setItem('task', JSON.stringify(arrTasks));
    addTasks();
};

// add class done when click on done

function doneTask(i) {
    let task = document.querySelectorAll('.task');
    task[i].classList.toggle('done');
};
