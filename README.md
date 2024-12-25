

## Features

1. **Add Tasks**: Create new tasks to track.
2. **Start/Stop Timer**: Start or stop a timer for each task to calculate time spent.
3. **View Time**: Real-time display of elapsed time for each task.
4. **Complete Tasks**: Remove tasks once completed.

---

## File Structure

```
project
├── backend
│   └── server.js
└── frontend
    └── index.html
```

### Backend (`server.js`)

- **Framework**: Node.js with Express.js.
- **Purpose**: Provides RESTful APIs for managing tasks.
- **APIs**:
  - `GET /tasks`: Fetch all tasks.
  - `POST /tasks`: Add a new task.
  - `PUT /tasks/:id`: Update the status of a task (start/stop timer).
  - `DELETE /tasks/:id`: Delete a task.
- **Key Modules**:
  - `express`: Web framework for routing.
  - `cors`: Enables cross-origin requests.
  - `express.json()`: Parses incoming JSON requests.
- **Why Node.js**:
  - Lightweight and efficient for real-time applications.
  - Simplifies handling RESTful APIs.

### Frontend (`index.html`)

- **Framework**: Pure HTML, CSS, and JavaScript.
- **Purpose**: User interface for task management.
- **Features**:
  - Add tasks using an input field.
  - Start/Stop timers for tasks.
  - Dynamically update task timers.
  - Mark tasks as complete to remove them.
- **Key Functions**:
  - `addTask()`: Sends a POST request to create a new task.
  - `toggleTimer(id)`: Toggles the timer status (start/stop).
  - `completeTask(id)`: Sends a DELETE request to remove a task.
  - `fetchTasks()`: Fetches tasks from the backend and renders them on the UI.
- **Why Vanilla JS**:
  - Lightweight and fast for simple applications.
  - No need for complex libraries or frameworks.

---

## Getting Started

### Prerequisites

- Node.js installed on your machine.

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd project
   ```
2. **Navigate to backend**:
   ```bash
   cd backend
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the server**:
   ```bash
   node server.js
   ```
5. **Open the frontend**:
   - Open `frontend/index.html` in a web browser.

---

## Usage

1. Open the application in a web browser.
2. Enter a task name in the input field and click "Add Task."
3. Use the "Start" button to begin timing a task.
4. Click "Stop" to pause the timer.
5. Click "Complete" to remove a task.

---

## Deployment

### Local Deployment

- Backend: Ensure Node.js is running the server.
- Frontend: Serve `index.html` using a local server or open it directly in a browser.

### Cloud Deployment

#### Using Vercel (Frontend)
1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Deploy frontend**:
   ```bash
   vercel ./frontend
   ```

#### Using Render (Backend)
1. **Create a Render account** and link your repository.
2. **Deploy backend**:
   - Follow the Render deployment instructions for Node.js.

---

## Why This Approach?

1. **Backend with Node.js and Express**:
   - Simple and effective for RESTful APIs.
   - Scalable and suitable for real-time updates.
2. **Frontend with Vanilla JS**:
   - Lightweight, avoiding unnecessary dependencies.
   - Provides full control over the UI.
3. **Task Timer Features**:
   - Real-time updates create a dynamic user experience.
   - Minimalist design ensures focus on functionality.
4. **Deployment Platforms**:
   - Vercel for quick and reliable frontend hosting.
   - Render for scalable backend management.

---


