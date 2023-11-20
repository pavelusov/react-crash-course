import React from 'react';

import { Counter } from './components/counter';
import { TodoList } from "./components/todo/todo-list";

function App() {

  return (
    <div className="App">
      <Counter title={"Big counter"} />
      <TodoList />
    </div>
  );
}

export default App;
