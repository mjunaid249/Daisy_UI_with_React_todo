import { useState } from "react";

function Todo() {
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);

  //Add Task
  const addTodo = (todoTitle) => {
    const newTodo = {
      title: todoTitle,
      id: Math.random() * 1000,
      isCompleted: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    setInputVal("");
  };

  //Delete Task
  const deleteTask = (id) => {
    const filteredTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodoList);
  };
  //Edit Todo
  const editTodo = (id, newTitle) => {
    const editedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: newTitle };
      } else {
        return todo;
      }
    });
    setTodoList(editedTodoList);
  };

  //Complete Todo
  const completeTodo = (id, isCompleted) => {
    const completedTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !isCompleted };
      } else {
        return todo;
      }
    });
    setTodoList(completedTodoList);
  };

  return (
    <>
      <main className="mt-10 flex items-center min-w-[60vw] justify-center flex-col ">
        {/* Add TODO   */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (inputVal !== "") addTodo(inputVal);
          }}
          className="flex items-center w-full justify-center gap-2"
        >
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="New Task..."
            className="input input-bordered min-w-[30vw] max-w-xs"
          />
          <button className="btn btn-success btn-circle" type="submit">
            <i className="fa-solid fa-plus"></i>
          </button>
        </form>
        {/* //Display Todos  */}
        <div className="todos flex flex-col gap-3 mt-7">
          {todoList.map((todo) => {
            return (
              <div
                key={todo.id}
                className="card max-h-[16vh] min-w-[36vw] bg-base-100 shadow-xl"
              >
                <div className="card-body flex items-center justify-center flex-row">
                  <input
                    type="checkbox"
                    required
                    className="checkbox checkbox-success"
                    value={todo.isCompleted}
                    onChange={() => completeTodo(todo.id, todo.isCompleted)}
                  />
                  <p
                    className={
                      todo.isCompleted === true
                        ? "line-through decoration-red-700"
                        : ""
                    }
                  >
                    {todo.title}
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="btn btn-success btn-circle"
                      onClick={() =>
                        editTodo(todo.id, prompt("Edit you Todo", todo.title))
                      }
                    >
                      <i className="fa-regular fa-pen-to-square"></i>
                    </button>
                    <button
                      className="btn btn-error btn-circle"
                      onClick={() => deleteTask(todo.id)}
                    >
                      <i className="fa-regular fa-trash-can"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Todo;
