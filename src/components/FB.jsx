import { useState } from "react";

const FB = () => {
  const [g, setG] = useState(0);
  const [n, setN] = useState(0);
  const [b, setB] = useState(0);

  const total = g + n + b;

  return (
    <>
      <div>{g}</div>
      <div>{n}</div>
      <div>{b}</div>
      <div>Sum fb - {total}</div>
    </>
  );
};

export default FB;
