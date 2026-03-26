/**
 * Opens the modal dialog with pre-filled task details and resets the modal.
 * @param {Object|null} task - Existing task or null for new
 */
export function openTaskModal(task = null) {
    const modal = document.getElementById("task-modal");
    const form = document.getElementById("task-form");
  
    // Always reset to clear previous states
    form.reset();
  
    if (task) {
      document.getElementById("task-title").value = task.title;
      document.getElementById("task-desc").value = task.description || "";
      document.getElementById("task-status").value = task.status;
    }
    
    modal.showModal();
  }
  
  //Closes and clears the modal
   
  export function closeModal() {
    const modal = document.getElementById("task-modal");
    const form = document.getElementById("task-form");
    
    modal.close();
    form.reset(); // Clears any unsaved input
  }
  