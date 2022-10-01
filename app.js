const addform = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {

    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center text-light">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
    </li>
    `;

    list.innerHTML += html;

}

addform.addEventListener('submit',e=>{

    e.preventDefault();
    const todo = addform.add.value.trim();
    if(todo.length){
        generateTemplate(todo);
        addform.reset();
    }

});

// delete todos
list.addEventListener('click', e=>{

    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }

});

// function for filtering through list
const filterTodos = term => {

    // select all li Elements those do not match the search term and add filter class to them 
    Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach( todos => todos.classList.add('filtered'));
    
    // select all li Elements those do match the search term and remove the filter class from them 
    Array.from(list.children)
        .filter(todo => todo.textContent.toLowerCase().includes(term))
        .forEach( todos => todos.classList.remove('filtered'));

}

// searching the todos
search.addEventListener('keyup',()=>{

    const term = search.value.trim().toLowerCase();
    filterTodos(term);

});
