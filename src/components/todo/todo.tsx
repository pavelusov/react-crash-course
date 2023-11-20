import React from "react";
import { TodoItem } from "../../model/TodoItem";

type TodoProps = {
  data: TodoItem,
}

export const Todo: React.FC<TodoProps> = ({ data }) => {
  const { userId, title } = data;
  return (
    <div style={{ border: "5px solid red", margin: 20, padding: 20  }}>
      <h2>{title}</h2>
      <div>user: {userId}</div>
    </div>
  )
}