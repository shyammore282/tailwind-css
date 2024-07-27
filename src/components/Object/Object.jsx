import React, { useState } from "react";

const Object = () => {
  const obj = [
    {
      id: 0,
      name: "shyam",
      age: "25",
    },
    {
      id: 1,
      name: "shyam more",
      age: "25",
    },

    {
      id: 2,
      name: "shyam kumar more",
      age: "25",
    },
  ];

  const [myObj, setObj] = useState(obj);

  const onRemove = (id) => {
    const myNew = myObj.filter((myid) => {
      return myid.id !== id;
    });
    console.log(myNew);

    setObj(myNew);
  };

  return (
    <>
      <section>
        {myObj.map((item) => {
          return (
            <h1
              className=" flex gap-5 bg-slate-300 my-5 p-4 "
              onClick={() => onRemove(item.id)}
              key={item.id}
            >
              {item.name} {item.age}
              <button className=" bg-red-400">remove</button>
            </h1>
          );
        })}
      </section>
    </>
  );
};

export default Object;
