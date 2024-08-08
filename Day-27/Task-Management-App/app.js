const tasks = [];

const taskForm = document.getElementById("task-form");

const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("task-title").value;
  const description = document.getElementById("task-desc").value;
  const dueDate = document.getElementById("task-due-date").value;

  const editIndex = document
    .getElementById("task-form")
    .getAttribute("data-edit-index");

  if (editIndex !== null) {
    tasks[editIndex] = { title, description, dueDate };
    document.getElementById("task-form").removeAttribute("data-edit-index");
    document.getElementById("task-form").removeAttribute("data-edit-index");
  } else {
    tasks.push({ title, description, dueDate });
    document.getElementById("task-form").reset();
    displayTasks();
  }

  taskForm.reset();
  displayTasks();
});

function editTask(index) {
  const task = tasks[index];

  document.getElementById("task-title").value = task.title;
  document.getElementById("task-desc").value = task.description;
  document.getElementById("task-due-date").value = task.dueDate;

  document.getElementById("task-form").setAttribute("data-edit-index", index);
}

function displayTask(task, index) {
  const li = document.createElement("li");

  const taskHeader = document.createElement("div");
  taskHeader.classList.add("task-header");

  const taskTitle = document.createElement("h3");
  taskTitle.textContent = task.title;

  const taskDueDate = document.createElement("span");
  taskDueDate.textContent = `Due: ${task.dueDate}`;

  taskHeader.appendChild(taskTitle);
  taskHeader.appendChild(taskTitle);
  taskHeader.appendChild(taskDueDate);

  const taskDesc = document.createElement("p");
  taskDesc.textContent = task.description;

  const editButton = document.createElement("button");
  editButton.classList.add("edit-btn");
  editButton.textContent = "Edit";
  editButton.onclick = () => editTask(index);

  // Delete Button
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = () => deleteTask(index);

  li.appendChild(taskHeader);
  li.appendChild(taskDesc);
  li.appendChild(editButton);
  li.appendChild(deleteButton); // Add Delete Button

  taskList.appendChild(li);
}

function deleteTask(index) {
  const confirmDelete = confirm("Are you sure you want to delete this task?");

  if (confirmDelete) {
    tasks.splice(index, 1); // Remove task from array
    displayTasks(); // Refresh task list display
  }
}

function displayTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    displayTask(task, index);
  });
}

displayTasks();
