const toDoInput = document.querySelector(".todo-input")
const toDoButton = document.querySelector(".todo-button")
const toDoList = document.querySelector(".todo-list")
const filterOption = document.querySelector(".filter-todo")

document.addEventListener('DOMContentLoaded',getTodos)
toDoButton.addEventListener('click',addTodo)
toDoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click',filterTodo)

function addTodo(event){
    event.preventDefault()

    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    
    const newTodo = document.createElement('li')
    newTodo.innerText = toDoInput.value
    newTodo.classList.add('todo-item')
    
    todoDiv.appendChild(newTodo)
    saveLocalTodos(toDoInput.value)

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
        todo.classList.add('fall')
        todo.addEventListener('transitionend',function(){
            todo.remove()})
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}

function filterTodo(e){
    const todos = toDoList.childNodes
    console.log(todos)
    // console.log(e.target.value)
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex'
                break
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }else{
                    
                    todo.style.display = 'none'
                }
                break
            case "uncompleted":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex'
                }else{
                    
                    todo.style.display = 'none'
                }
                break
        }

    })
}

function saveLocalTodos(todo){
    let todos
    if(localStorage.getItem('todos')===null){
    todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos',JSON.stringify(todos))
}
function getTodos(){
    console.log('hello')
    let todos
    if(localStorage.getItem('todos')===null){
    todos=[]
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    
    const newTodo = document.createElement('li')
    newTodo.innerText = todo
    newTodo.classList.add('todo-item')
    
    todoDiv.appendChild(newTodo)

    const compButton = document.createElement('button')
    compButton.innerHTML = '<i class="fas fa-check"></i>'
    compButton.classList.add('complete-btn')
    todoDiv.append(compButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.append(trashButton)

    toDoList.appendChild(todoDiv)
    })
}
