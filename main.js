function addtask() {
    var taskslist = document.getElementById("tasks");
    var newtask = document.createElement("li");
    var removetask = document.createElement("div");
    var taskbox = document.createElement('div');
    var addtaskInput = document.getElementById("add-task"); // Input field element
    var tasktext = addtaskInput.value.trim(); // Get the current value from the input

    if (tasktext !== "") {
        removetask.classList.add('remove-button');
        removetask.textContent = "X";
        taskbox.classList.add('task-container');
        newtask.textContent = tasktext;
        taskslist.appendChild(taskbox);
        taskbox.appendChild(newtask);
        taskbox.appendChild(removetask);
        addtaskInput.value = ""; // Clear the input after adding the task
        
        removetask.addEventListener('click', function() {
            taskslist.removeChild(taskbox);
        });
    } else {
        alert("Please enter a task!");
    }
}

// Attach the event listener to the input field, not the function
document.addEventListener("keydown", function(e) {
    if(e.key == 'Enter'){
        addtask();
    }
   
});
