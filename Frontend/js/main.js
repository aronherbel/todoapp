// Start by setting up the mock tasks array and a variable for the current task ID.
const uri = 'https://localhost:7140/todoitems';
let tasks = [];



// TODO: Initialize the page with tasks by calling the displayTasks function on page load.
// Hint: Use window.onload
async function fetchData(){
    try {
        
        const response = await fetch('https://localhost:7140/todoitems');
        
        if (!response.ok) {
          throw new Error('Die Anfrage war nicht erfolgreich.');
        }
    
        const data = await response.json();
        console.log(data);
        tasks =  data;
      } catch (error) {
        console.error('Fehler beim Abrufen der Daten:', error);
      }
}


window.addEventListener("load",async function(event) {
 
    await fetchData();
    displayTasks();
    });
  







var input = document.getElementById("taskInput");




input.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }
    
});



function createTaskHTML(task, isPriority, isDone) {
    return `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <i class="${isDone ? 'doneTaskActive' : ''} checkTask material-icons " onclick="checkTask(${task.id})">check_circle</i>
            <span class="${isDone ? 'text-decoration-line-through' : ''} tasktext">${task.name}</span>
        <i class="${isPriority ? 'priorityStarActive' : ''} priorityTask material-icons" onclick="priorityTask(${task.id})">star</i>
        <i class="${isDone ? 'priorityTaskActive' : ''} deleteTask material-icons" onclick="deleteTask(${task.id})">remove</i>
      </li>
      <hr>
    `;
  }
  
  
  
  
  
  


// This function displays the tasks from the mock array onto the webpage.
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clear existing tasks
    const taskListImportant = document.getElementById('taskListImportant');
    taskListImportant.innerHTML = ''; // Clear existing tasks
    const taskListDone = document.getElementById('taskListDone');
    taskListDone.innerHTML = ''; // Clear existing tasks
    
    tasks.forEach(task =>{

    if (task.isDone === false && task.isPriority === false) {
    
      taskList.innerHTML += createTaskHTML(task, task.isPriority, task.isDone);
      
    } else if (task.isPriority === true && task.isDone === false) {
        
      taskListImportant.innerHTML += createTaskHTML(task, task.isPriority, task.isDone);
      let showImportantTask = document.getElementById('listImportant');
      showImportantTask.classList.remove('d-none');
    } else if (task.isDone === true && task.isPriority === false) {
      
      taskListDone.innerHTML += createTaskHTML(task, task.isPriority, task.isDone);

      let showDoneTask = document.getElementById('listDone');
      showDoneTask.classList.remove('d-none');
    }
  });

    //Remove Done List if none of the Tasks Done 

    let doneTaskfalse = tasks.filter(task => task.isDone === true);
    let doneTaskfalseCount = doneTaskfalse.length;
    if(doneTaskfalseCount === 0){
        let showDoneTask = document.getElementById('listDone');
            showDoneTask.classList.add('d-none');
    }

    //Remove Important List if none of the Tasks are important

    let importantTaskfalse = tasks.filter(task => task.isPriority === true);
    let importantTaskfalseCount = importantTaskfalse.length;
    if(importantTaskfalseCount === 0){
        let showDoneTask = document.getElementById('listImportant');
            showDoneTask.classList.add('d-none');
    }

    
    
}




// This function adds a new task to the mock array and then displays it on the webpage.
async function addTask() {
    // TODO:
    // 1. Get the input value from the taskInput element.
    let taskInput = document.getElementById("taskInput").value;
    // 2. Create a new task object with an incremented ID and the input value.

   
    if(taskInput !== ''){

        const task =
            {
                name: taskInput, isDone : false, isPriority : false
            
            };

            try{
                const response = await fetch(uri, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(task)
                });
                
                if(!response.ok){
                    throw new Error('die Anfrage war nicht erfolgreich')
                }
                
                await fetchData();
                    
            }
            catch(error){
                console.error('add task failed', error);
            }
           
        
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
    
    fetch(`${uri}/${taskId}`,{
        method: 'DELETE'
    })
    .then(async () => {
        await fetchData();
        displayTasks();
    })
    .catch(error => console.error('Unable to delete item.',error))
    // TODO:
    // 1. Filter out the task with the given ID from the tasks array.
   
    // 2. Call the displayTasks function to refresh the task list on the webpage.
    
}

async function checkTask(taskId){

    let taskToCheck = tasks.find(task => task.id === taskId);

    taskToCheck.isDone = !taskToCheck.isDone

    if(taskToCheck.isDone === true && taskToCheck.isPriority === true){
        taskToCheck.isPriority = false;
       
    }
    

   
    try{
        const response = await fetch(`${uri}/${taskId}` ,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(taskToCheck)
        });
        
        if(!response.ok){
            throw new Error('Unable to check')
        }
        
        await fetchData();
            
    }
    catch(error){
        console.error('Check task is not available', error);
    }
   

    displayTasks();
}




async function priorityTask(taskId){

    let taskToPriority = tasks.find(task => task.id === taskId);

    taskToPriority.isPriority = !taskToPriority.isPriority

    if(taskToPriority.isDone === true && taskToPriority.isPriority === true){
        taskToPriority.isDone = false;
       
    }
    

   
    try{
        const response = await fetch(`${uri}/${taskId}` ,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(taskToPriority)
        });
        
        if(!response.ok){
            throw new Error('Unable to check')
        }
        
        await fetchData();
            
    }
    catch(error){
        console.error('Important task is not available', error);
    }
   

    displayTasks();
}