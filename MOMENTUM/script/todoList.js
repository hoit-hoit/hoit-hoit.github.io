const TODOS_KEY = "todos";
let todo_list = []; //{id,input.value}
const todoForm = document.querySelector("#todoForm");
const inputTodo = document.querySelector("#todoForm>input")
const ulTodo = document.querySelector("#todoList");

const storageSave = ()=>{
  const strObj = JSON.stringify(todo_list);
  localStorage.setItem(TODOS_KEY,strObj);
}
const storageLoad =()=>{
  return localStorage.getItem(TODOS_KEY);
}
const saveTodoList = (num,txt) =>{
  const obj = { id:num, value:txt};
  todo_list.push(obj);  
  storageSave();
}
const handlerDelBtn =(event)=>{
  const delID = event.target.parentElement.id;
  todo_list = todo_list.filter((item)=>{
  return delID !=item.id;
  });
  event.target.parentElement.remove();
  storageSave();
}


const addTodoList = (id,value)=>{
  //li로 추가
  // console.log(id,value);
  //
  const li = document.createElement("li"); 
  li.id = id; 
  const span = document.createElement("span");
  span.textContent = value;
  const btn = document.createElement("button");
  btn.innerHTML = "&times";
  btn.className = "todo-btn";
  btn.addEventListener("click",handlerDelBtn);
  li.appendChild(span);
  li.appendChild(btn);
  ulTodo.appendChild(li);
  //todo_list배열 추가 및 로컬스토리지에 저장  
  saveTodoList(id,value);
}
const handlerTodoSubmit = (event)=>{
  event.preventDefault();
  let value = inputTodo.value;
  inputTodo.value = null;
  addTodoList(Date.now(),value);  
}
const todo_init = ()=>{
  let loadTodos = storageLoad();
  if( loadTodos ){
    const obj = JSON.parse(loadTodos);
    obj.forEach((item)=>{
      addTodoList(item.id,item.value);
    });
  }
  todoForm.addEventListener("submit",handlerTodoSubmit);  
}
todo_init();