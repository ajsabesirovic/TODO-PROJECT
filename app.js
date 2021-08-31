const toDoInput = document.querySelector(".todo-input")
const toDoButton = document.querySelector(".todo-button")
const toDoList = document.querySelector(".todo-list")

toDoButton.addEventListener('click',addTodo)

function addTodo(event){
    event.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    
    const newTodo = document.createElement('li')
    newTodo.innerText = 'hey'
    newTodo.classList.add('todo-item')
    
    todoDiv.append(newTodo)

    const compButton = document.createElement('button')
    compButton.innerHTML = '<i class="fas fa-check"></i>'
    compButton.classList.add('complete-btn')
    todoDiv.append(compButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.append(trashButton)

    toDoList.appendChild(todoDiv)
}