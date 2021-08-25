var addBtn = document.getElementById('add');

addBtn.addEventListener('click', function() {

	var value = document.getElementById('txt').value;


	if(value) {
		// console.log(value);
		addListTodo(value);
		document.getElementById('txt').value = "";
	} 

})

function addListTodo(text) {
	
	var list = document.getElementById('todo');
	var item = document.createElement('li');
	item.textContent = text;

	var buttons = document.createElement('div');
	buttons.classList.add('buttons');

	var remove = document.createElement('button');
	remove.classList.add('remove');
	remove.addEventListener('click', removeList);

	var complete = document.createElement('button');
	complete.classList.add('complete');
	complete.addEventListener('click', completeList);

	buttons.appendChild(remove);
	buttons.appendChild(complete);
	item.appendChild(buttons);

	list.insertBefore(item, list.childNodes[0]);
}



function removeList() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;
	
	parent.removeChild(item);
}


function completeList() {
	var item = this.parentNode.parentNode;
	var parent = item.parentNode;   // 여기서 parent는 결과적으로 ul태그를 의미
	var id = parent.id;

	var target = (id === 'todo')
					? document.getElementById('completed')
					: document.getElementById('todo');

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}


