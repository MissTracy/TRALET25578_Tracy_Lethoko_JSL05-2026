# Kanban Task Management App

A modular Kanban board built vanilla JavaScript. This application allows users to manage tasks across different stages while ensuring data persistence.

##  Features
- **Data Persistence:** Uses `localStorage` as the source of truth to keep tasks saved after page refreshes.
- **Task Management:** Add new tasks with unique, auto-incrementing IDs.
- **Responsive Design:** Fully functional on desktop and mobile (with a transforming Add Task button).
- **Modular Architecture:** Code is split into specialized modules for easier maintenance.
- **JSDoc Documentation:** Every function is documented with parameters and return types.

## Project Structure
- **scripts**: Logic for rendering, storage, and modal management.
- **main.js**: The central orchestrator for the application.
- **index.html**: The layout and task modal structure.
- **styles.css**: Custom styling based on Figma designs.
