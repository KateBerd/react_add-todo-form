import './App.scss';

import todosFromServer from './api/todos';
import { TodoInfo } from './components/TodoInfo';
import { TodoList } from './components/TodoList';
import { getUserById } from './services/user';
import { Todo } from './types/Todo';
import { useState } from 'react';

const initialTodos: Todo[] = todosFromServer.map(todo => ({
  ...todo,
  user: getUserById(todo.userId),
}));

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (newTodo: Todo) => {
    setTodos(currentTodos => [...currentTodos, newTodo]);
  };

  return (
    <div className="App">
      <h1>Add todo form</h1>

      <TodoInfo onSubmit={addTodo} todos={todos} />
      <TodoList todos={todos} />
    </div>
  );
};
