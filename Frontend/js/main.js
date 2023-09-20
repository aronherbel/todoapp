// Start by setting up the mock tasks array and a variable for the current task ID.
let tasks = [
    { id: 0, name: "Buy groceries", done: false, priority: false, order: 1 },
    { id: 1, name: "Go for a run", done: false, priority: false, order: 2}
];

/*
1 1
2 2
3 3
4 4

2 1
1 2
3 3
4 4

2 1
3 2
1 3
4 4*/

//tasks.find(0).order = 3
//tasks[1].done = 2

let currentId = tasks.length;
let currentOrder = tasks.length;

// TODO: Initialize the page with tasks by calling the displayTasks function on page load.
// Hint: Use window.onload


window.addEventListener("load",function(event) {
    displayTasks();
    
    });
  





var input = document.getElementById("taskInput");

input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }
    
});







// This function displays the tasks from the mock array onto the webpage.
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks
    tasks.forEach(task => {
        taskList.innerHTML += `
            <li class="${ task.done ? 'text-decoration-line-through' : ''} list-group-item d-flex justify-content-between align-items-center">
                
                ${task.name}
                
                <i class="checkTask material-icons" onclick="checkTask(${task.id})">check</i>
                <i class="deleteTask material-icons" onclick="deleteTask(${task.id})">remove</i>
            </li>
            <hr>
            <br>
        `;
    });
}



// This function adds a new task to the mock array and then displays it on the webpage.
function addTask() {
    // TODO:
    // 1. Get the input value from the taskInput element.
    let taskInput = document.getElementById("taskInput").value;
    // 2. Create a new task object with an incremented ID and the input value.

   
if(taskInput !== ''){

    let task =
        {
            id: currentId++, name: taskInput, done : false, priority : false, order: currentOrder++
           
        };
        console.log(task);
    // 3. Push this task into the tasks array.
    tasks.push(task);
    // 4. Display this new task in the task list on the webpage.
    displayTasks();
    // 5. Clear the input field.
    const inputClear = document.getElementById('taskInput');
    inputClear.value = '';
    errorFunctionReverse();
}
else{
    
    errorFunction();
    
    toastError();
}
   
}

function errorFunction() {
    let errorInput = document.getElementById('taskInput');
    errorInput.classList.remove("border-info");
    errorInput.classList.add("border-danger");
    let errorInputButton = document.getElementById('btn-task-add');
    errorInputButton.classList.remove("btn-info");
    errorInputButton.classList.add("btn-danger");



}

function errorFunctionReverse() {
    let errorInput = document.getElementById('taskInput');
    errorInput.classList.remove("border-danger");
    errorInput.classList.add("border-info");
    let errorInputButton = document.getElementById('btn-task-add');
    errorInputButton.classList.remove("btn-danger");
    errorInputButton.classList.add("btn-info");

    let hideError = document.getElementById('inputError');
    hideError.classList.remove('show');
}


function toastError() {
    console.log("test");
    let showError = document.getElementById('inputError');
    showError.classList.add('show')
    //toast.show();
    
}



// This function deletes a task from the mock array based on its ID and refreshes the displayed list.
function deleteTask(taskId) {
    // TODO:
    // 1. Filter out the task with the given ID from the tasks array.
  tasks = tasks.filter(task => task.id !== taskId);
    // 2. Call the displayTasks function to refresh the task list on the webpage.
    displayTasks();
}

function checkTask(taskId){
    //tasks[taskId].done = !tasks[taskId].done;
    tasks.find(task => task.id === taskId).done = !tasks.find(task => task.id === taskId).done;
    console.log(tasks);
    displayTasks();
}

/*
function orderTaskPriority(taskId){
    tasks.find(task => task.id === taskId).priority = !tasks.find(task => task.id === taskId).priority;
    displayTasks;
}*/