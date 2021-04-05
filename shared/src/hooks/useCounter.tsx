import React from "react";

export function useCounter() {
  const [counter, setCounter] = React.useState(0);

  React.useEffect(() => {
    const t = setTimeout(() => setCounter((n) => n + 1), 1000);
    return () => {
      clearTimeout(t);
    };
  });

  return counter;
}
