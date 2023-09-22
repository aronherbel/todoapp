// Start by setting up the mock tasks array and a variable for the current task ID.
let tasks = [
    { id: 0, name: "Buy groceries", done: false, priority: false},
    { id: 1, name: "Go for a run", done: false, priority: false}
];



let currentId = tasks.length;


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

let isImportant = false;
let isDone = false;

function createTaskHTML(task, isImportant, isDone) {
    return `
      <li class="${isDone ? 'text-decoration-line-through' : ''} list-group-item d-flex justify-content-between align-items-center">
        ${task.name}
        <i class="${isImportant ? 'priorityStarActive' : ''} priorityTask material-icons" onclick="priorityTask(${task.id})">star</i>
        <i class="checkTask material-icons" onclick="checkTask(${task.id})">check</i>
        <i class="${isDone ? 'priorityTaskActive' : ''} deleteTask material-icons" onclick="deleteTask(${task.id})">remove</i>
      </li>
      <hr>
    `;
  }
  
  
  
  
  
  


// This function displays the tasks from the mock array onto the webpage.
function displayTasks() {
    console.log(tasks);
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks
    const taskListImportant = document.getElementById('taskListImportant');
    taskListImportant.innerHTML = ''; // Clear existing tasks
    const taskListDone = document.getElementById('taskListDone');
    taskListDone.innerHTML = ''; // Clear existing tasks
    
    
    //for each task that get added do this
    tasks.forEach(task =>{

    
        
    if (task.done === false && task.priority === false) {
    
      taskList.innerHTML += createTaskHTML(task, task.priority, task.done);
      
    } else if (task.priority === true && task.done === false) {
        
      taskListImportant.innerHTML += createTaskHTML(task, task.priority, task.done);
      let showImportantTask = document.getElementById('listImportant');
      showImportantTask.classList.remove('d-none');
    } else if (task.done === true && task.priority === false) {
      
      taskListDone.innerHTML += createTaskHTML(task, task.priority, task.done);

      let showDoneTask = document.getElementById('listDone');
      showDoneTask.classList.remove('d-none');
    }
  });

    //Remove Done List if none of the Tasks Done 

    let doneTaskfalse = tasks.filter(task => task.done === true);
    let doneTaskfalseCount = doneTaskfalse.length;
    if(doneTaskfalseCount === 0){
        let showDoneTask = document.getElementById('listDone');
            showDoneTask.classList.add('d-none');
    }

    //Remove Important List if none of the Tasks are important

    let importantTaskfalse = tasks.filter(task => task.priority === true);
    let importantTaskfalseCount = importantTaskfalse.length;
    if(importantTaskfalseCount === 0){
        let showDoneTask = document.getElementById('listImportant');
            showDoneTask.classList.add('d-none');
    }

    
    
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
                id: currentId++, name: taskInput, done : false, priority : false
            
            };
            console.log(task);
        // 3. Push this task into the tasks array.
        tasks.push(task);
        // 4. Display this new task in the task list on the webpage.
        // 5. Clear the input field.
        const inputClear = document.getElementById('taskInput');
        inputClear.value = '';
        errorFunctionReverse();
    }else{
        errorFunction();
        
        toastError();
    }
    displayTasks();

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

    let taskToCheck = tasks.find(task => task.id === taskId);

    taskToCheck.done = !taskToCheck.done;

    if(taskToCheck.done === true && taskToCheck.priority === true){
        taskToCheck.priority = false;
       
    }
   
    displayTasks();
}

function priorityTask(taskId){

    let taskToPriority = tasks.find(task => task.id === taskId);

    taskToPriority.priority = !taskToPriority.priority;



    if(taskToPriority.priority === true && taskToPriority.done === true){
        taskToPriority.done = false;
        }
    
    displayTasks();

    
}



