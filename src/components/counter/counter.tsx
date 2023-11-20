import React from "react";
import { useCounterPresenter } from "./counter-presenter";

type CounterProps = {
  title: string;
  children?: React.JSX.Element;
}

export const Counter: React.FC<CounterProps> = ({ title, children }) => {
  const { state, handler }  = useCounterPresenter();
  const { isTrue, isLoading, value, count } = state;
  const { setValue, setCount } = handler;

  if (isLoading) {
    return <div>... Loading</div>
  }

  return (
    <div>
      <h1>{title}</h1>
      <div style={{ display: "flex", gap: 20}}>
        <div style={{
          padding: 30,
          border: `2px solid red`,
        }}>{value}</div>
        <div style={{
          padding: 30,
          border: "2px solid green",
        }}>{count}</div>
      </div>
      {children ? children : isTrue ? <div>Empty component</div> : null }
      <div>
        <div onClick={setValue}>set value</div>
        <div onClick={setCount}>set count</div>
      </div>
    </div>
  )
}
