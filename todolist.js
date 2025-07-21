// Optional: Load from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Write something, don't leave your brain on idle");
    return;
  }

  tasks.push(taskText);
  input.value = "";
  saveTasks();
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  saveTasks();
  renderTasks();
}

// Initial render on page load
renderTasks();