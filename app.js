const toDoInput = document.querySelector(".todo-input")
const toDoButton = document.querySelector(".todo-button")
const toDoList = document.querySelector(".todo-list")

toDoButton.addEventListener('click',addTodo)
toDoList.addEventListener('click',deleteCheck)

function addTodo(event){
    event.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    
    const newTodo = document.createElement('li')
    newTodo.innerText = toDoInput.value
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
    toDoInput.value = ''
}

function deleteCheck(event){
    const item = event.target
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement
        todo.remove()
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}