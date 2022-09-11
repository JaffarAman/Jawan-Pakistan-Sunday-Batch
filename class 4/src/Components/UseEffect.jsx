import { useEffect, useState } from "react";

const UseEffect = () => {
  const [name, setName] = useState(false);
  const [name1, setName1] = useState(false);

  //   useEffect(() => {
  //     console.log("component run");
  //   }, []);

  //   useEffect(() => {
  //     console.log("component run");
  //   });

  //   useEffect(() => {
  //     console.log("state depend useState");
  //   }, [name, name1]);

  useEffect(() => {
    console.log("har dafa chalna hai isko ");
  });

  useEffect(() => {
    console.log("cmp create ky time ek dafa bus mount ky waqt");
  }, []);

  useEffect(() => {
    console.log("depended on state");
  }, [name]);
  return (
    <div>
      <button onClick={() => setName(!name)}>UPDATE STATE</button>
      <button onClick={() => setName1(!name1)}>UPDATE STATE 2</button>
    </div>
  );
};

export default UseEffect;
