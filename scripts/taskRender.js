/**
 * Finds the task container element based on task status.
 * @param {string} status - The task status ('todo', 'doing', or 'done').
 * @returns {HTMLElement|null} The container element, or null if not found.
 */
function getTaskContainerByStatus(status) {
    const column = document.querySelector(`.column-div[data-status="${status}"]`);
    return column ? column.querySelector(".tasks-container") : null;
  }
  
  /**
   * Creates a single task DOM element.
   * @param {Object} task - Task data object.
   * @param {string} task.title - Title of the task.
   * @param {number} task.id - Unique task ID.
   * @param {string} task.status - Status column: 'todo', 'doing', or 'done'.
   * @param {Function} onClick - The function to run when the task is clicked.
   * @returns {HTMLElement} The created task div element.
   */
  export function createTaskElement(task, onClick) {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task-div";
    taskDiv.textContent = task.title;
    taskDiv.dataset.taskId = task.id;
  
    taskDiv.addEventListener("click", () => {
      onClick(task);
    });
  
    return taskDiv;
  }
  
  /**
   * Renders all tasks from data to the UI.
   * Groups tasks by status and appends them to their respective columns.
   * @param {Array<Object>} tasks - Array of task objects.
   * @param {Function} onTaskClick - Callback for clicking a task.
   */
  export function renderTasks(tasks, onTaskClick) {
    // Clear containers
    document.querySelectorAll(".tasks-container").forEach((container) => {
      container.innerHTML = "";
    });
  
    tasks.forEach((task) => {
      const container = getTaskContainerByStatus(task.status);
      if (container) {
        const taskElement = createTaskElement(task, onTaskClick);
        container.appendChild(taskElement);
      }
    });
  }
  