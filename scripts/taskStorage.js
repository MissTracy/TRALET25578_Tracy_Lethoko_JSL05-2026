// storing getters and setters from local storage for persistance

import { initialTasks } from "./initialData.js";

/**
 * Fetches tasks from local storage. 
 * If local storage is empty, it saves and returns initialTasks
 * @returns {Array<Object>} The array of task objects
 */
export function getTasks() {
  const storedTasks = localStorage.getItem('tasks');
  
  if (!storedTasks) {
    //Save initial set to local storage
    localStorage.setItem('tasks', JSON.stringify(initialTasks));
    return initialTasks;
  }
  
  // Loads tasks from local storage when starting
  return JSON.parse(storedTasks);
}

/**
 * Saves the current state of tasks to local storage
 * ensuring persistence
 * @param {Array<Object>} tasks - Updated array of tasks to be saved
 */
export function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
