import { getTasks, saveTasks } from "./taskStorage.js";
import { renderTasks } from "./taskRender.js";
import { openTaskModal, closeModal } from "./modalManager.js";

/**
 * Handles the submission for create task form.
 * Calculates the next id and saves the new task.
 * @param {Event} event - The form submission event.
 */
function handleFormSubmit(event) {
  event.preventDefault(); //Stop the page from refreshing

  const tasks = getTasks(); //Fetch current tasks from Local Storage

  //Ensures the new id increments from the last existing task
  let newId;
  if (tasks.length > 0) {
    const lastTask = tasks[tasks.length - 1];
    newId = lastTask.id + 1;
  } else {
    newId = 1;
  }

  //Create the new task object
  const newTask = {
    id: newId,
    title: document.getElementById("task-title").value,
    description: document.getElementById("task-desc").value,
    status: document.getElementById("task-status").value
  };

  tasks.push(newTask);               // Add new task to array
  saveTasks(tasks);                   // Save to Local Storage
  renderTasks(tasks, openTaskModal); //Update UI with ne task
  closeModal();                      // Close modal and reset the form fields
}

/**
 * Initializes app on startup.
 */
function initApp() {
  const tasks = getTasks(); // Load tasks
  renderTasks(tasks, openTaskModal); // Initial render

  //Open modal listener
  document.getElementById("add-task-btn").addEventListener("click", () => {
    openTaskModal(); 
  });

  //Close modal listener
  document.getElementById("close-modal-btn").addEventListener("click", closeModal);

  //Form submission listener
  document.getElementById("task-form").addEventListener("submit", handleFormSubmit);
}

//Make sure DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
