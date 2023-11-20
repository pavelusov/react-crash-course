import { useEffect, useState } from "react";

export const useCounterPresenter = () => {
  const [value, setValue] = useState<number>(0);
  const [count, setCount] = useState<number>(0);

  const handleSetValue = () => {
    setValue(value + 1);
  }

  const handleSetCount = () => {
    setCount(count + 1);
  }

  const isTrue = false;
  const isLoading = true;

  const state = {
    value,
    count,
    isTrue,
    isLoading,
  };

  const handler = {
    setValue: handleSetValue,
    setCount: handleSetCount,
  }

  return { state, handler };
}