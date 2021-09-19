const addForm = document.querySelector('.add');
const list = document.querySelector('.todos')
const message = document.querySelector('.message')
const search = document.querySelector('.search input')

const generateTemplate = todo => {
  const html = ` 
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
      </li>
  `;
  list.innerHTML += html
}

//Add Todo
addForm.addEventListener('submit', e => {

  e.preventDefault();

  const todo = addForm.add.value.trim();

  if (todo.length) {
    generateTemplate(todo)
    addForm.reset();
  } else {
    message.innerHTML += `<p style="color:red;">Please write a todo first</p>`
  }
});

//Delete todos
list.addEventListener('click', e => {

  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {

  //Filtra y agrega la clase 
  Array.from(list.children) //lo convierte en array para pdoer filtrar
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.add('filtered'))

  //Filtra y saca la clase 
  Array.from(list.children) //lo convierte en array para pdoer filtrar
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach((todo) => todo.classList.remove('filtered'))
};

//keyup event
search.addEventListener('keyup', () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);

})