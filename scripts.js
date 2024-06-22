document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const submitBtn = document.getElementById('submit-btn');
    const taskList = document.getElementById('task-list');

    submitBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    const addTask = (taskText) => {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            taskItem.classList.toggle('completed');
        });

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
    };
});