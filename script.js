let completedTasks = 0;

function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;

    span.onclick = function () {
        if (!li.classList.contains("completed")) {
            li.classList.add("completed");
            completedTasks++;
        } else {
            li.classList.remove("completed");
            completedTasks--;
        }

        updateProgress();
    };

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    deleteButton.onclick = function () {
        if (li.classList.contains("completed")) {
            completedTasks--;
        }

        li.remove();
        updateProgress();
    };

    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);

    input.value = "";
}

function updateProgress() {

    const tasks = document.querySelectorAll("#taskList li");

    const totalTasks = tasks.length;

    let progress = 0;

    if (totalTasks > 0) {
        progress = Math.round(
            (completedTasks / totalTasks) * 100
        );
    }

    document.getElementById("completed").textContent = completedTasks;
    document.getElementById("progress").textContent = progress + "%";
}

const quotes = [
    "Success is the result of small efforts repeated every day.",
    "Don't stop when you're tired. Stop when you're done.",
    "Your future is created by what you do today.",
    "Believe in yourself and keep moving forward.",
    "Every expert was once a beginner."
];

function changeQuote() {

    const randomIndex = Math.floor(
        Math.random() * quotes.length
    );

    document.getElementById("quote").textContent =
        quotes[randomIndex];
}
