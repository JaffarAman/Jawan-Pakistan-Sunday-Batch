import React from "react";
import { useState } from "react";

const HeadingCmp = (props) => {
  // console.log("props", props);
  const [childData, setChildData] = useState(
    "CHILD data AJDKSAJDLKAJSDLKJSALKDJ"
  );
  const { text, name, getData, bool } = props;
  console.log(getData, "fucction getData");
  return (
    <>
      <h1>{text}</h1>
      <h1>{name}</h1>
      <button onClick={() => getData(childData)}>SUBMIT CHILD DATA</button>

      {bool ? (
        <div>
          <h1>GOOD EVENING</h1> <h1>GOOD EVENING</h1>
        </div>
      ) : (
        <h1>TATA KAHTAM</h1>
      )}
    </>
  );
};

export default HeadingCmp;
