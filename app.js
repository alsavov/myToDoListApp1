loadEvents();

// load every event in the page
function loadEvents() {
  document.querySelector('form').addEventListener('submit', submit);
  document.getElementById('clear').addEventListener('click', clearList);
  document.querySelector('ul').addEventListener('click', deleteOrTick);
}

// delete or tick
function deleteOrTick(e) {
  if (e.target.className === 'delete')
    deleteTask(e);
  else {
    tickTask(e);
  }
}

// delete task
function deleteTask(e) {
  e.target.parentNode.parentNode.removeChild(e.target.parentNode);
}

// tick a task
function tickTask(e) {
  const task = e.target.nextSibling;
  if (e.target.checked) {
    task.style.textDecoration = "line-through";
    task.style.color = "#ff0000";
  } else {
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}

function clearList(e) {
  let ul = document.querySelector('ul').innerHTML = '';
}

//submit data function
function submit(e) {
  e.preventDefault();
  let input = document.querySelector('input');
  if (input.value !== '')
    addTask(input.value);
  input.value = '';
}

// add task
function addTask(task) {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
  document.querySelector('.tasksBoard').style.display = 'block';
}

