const todoList = document.querySelector("#todo-list");
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");

todoForm.addEventListener("sabmit", formHandler);

function formHandler(event) {
   event.preventDefault();
}
    // получаем название задачи из инпута
    const taskText = todoInput.value;
   /* console.log(taskText);

    // сщздаем тег ли через разметку
    const li=`<li>${taskText}</li>`;
    console.log(li);

    // добавляем разметку на страницу
    todoList.insertAdjacentHTML("beforeend", li);

    // очищаем поле ввода
    todoInput.value="";
    // перенести фокус на поле ввода
    todoInput.focus();
}
*/
// Сщздаем тег li с помощью создания элемента

const newTask = document.createElement("li");
newTask.innerText = taskText;
todoList.append(newTask);