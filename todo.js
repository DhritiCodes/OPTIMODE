//define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector(' .collection');
const clearBtn = document.querySelector(' .clear-tasks');
const filter = document.querySelector(' #filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
	//add task event
	form.addEventListener('submit', addTask);
	//remove task event
	taskList.addEventListener('click', removeTask);
	//clear task event
	clearBtn.addEventListener('click', clearTasks);
	//filter tasks event
	filter.addEventListener('keyup', filterTasks);
}

//add task
function addTask(e) {
	e.preventDefault();
	if (taskInput.value === '') {
		alert('Add a Task');
	} else {
		//create li element
		const li = document.createElement('li');
		//add class to li
		li.className = 'collection-item';
		//create text node and append to li
		li.appendChild(document.createTextNode(taskInput.value));
		//create new link elemnt
		const link = document.createElement('a');
		//add class
		link.className = 'secondary-content delete-item';
		//add innerHTML
		link.innerHTML = '<i class="fas fa-times-circle"></i>';
		li.appendChild(link);
		//append li to ul
		taskList.appendChild(li);
		console.log(li);
		//clear input
		taskInput.value = '';
	}
	e.preventDefault();
}

//remove task event
function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		e.target.parentElement.parentElement.remove();
	}
}

//clear task event
function clearTasks() {
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
}

//filter task event
function filterTasks(e) {
	const text = e.target.value.toLowerCase();

	//filtering letters
	document.querySelectorAll(' .collection-item').forEach(function (task) {
		const item = task.firstChild.textContent;
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block';
		} else {
			task.style.display = 'none';
		}
	});
}

// naren added code

const todoBox = document.getElementById('todo-list');
const todoIcon = document.getElementById('todo-icon');

console.log(todoIcon);
todoIcon.addEventListener('click', () => {
	todoBox.classList.toggle('visible');
});
