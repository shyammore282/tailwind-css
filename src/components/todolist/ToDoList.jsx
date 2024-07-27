import React, { useState } from "react";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [date, setDate] = useState("");
  const [alldata, setAllData] = useState([]);

  const onInput = (e) => {
    setInput(e.target.value);
  };
  const onDate = (e) => {
    setDate(e.target.value);
  };
  console.log(input);

  const onSubmitdata = (e) => {
    const newData = { id: new Date().getTime().toString(), date, input };
    if (input && date) {
      setAllData([...alldata, newData]);
      setInput("");
      setDate("");
    } else {
      alert("please fill the required field");
    }

    e.preventDefault();
  };

  const onDelete = (id) => {
    const newData = alldata.filter((e) => {
      return e.id !== id;
    });
    setAllData(newData);
  };
  console.log(alldata);
  return (
    <>
      <section className=" mt-6 p-8">
        <form action="" onSubmit={onSubmitdata}>
          <h1>Todo List</h1>
          <div className=" flex gap-4 items-center py-3">
            <input
              className="px-4 py-2 w-[400px] hover:outline-none focus:outline-none border-gray-500 border-2"
              type="text"
              name="input"
              value={input}
              placeholder=" please enter the list here"
              onChange={onInput}
            />
            <input
              className="px-4 py-2 w-[400px] hover:outline-none focus:outline-none border-gray-500 border-2"
              type="date"
              name="time"
              value={date}
              placeholder=" please enter the time"
              onChange={onDate}
            />
            <button
              className=" bg-blue-400 px-5 py-2 text-white rounded-md text-center "
              type="submit"
            >
              save
            </button>
          </div>
        </form>

        <div className=" mt-8 py-8 ">
          {alldata.map((item) => {
            return (
              <div
                className=" bg-blue-500 py-3 px-7 hover:cursor-pointer my-4"
                key={item.id}
                onClick={() => {}}
              >
                <li className=" flex justify-between text-red-700 font-bold">
                  <div className=" flex gap-8">
                    <h1> {item.date} </h1>
                    <h1> {item.input} </h1>
                  </div>

                  <div
                    className=" hover:cursor-pointer"
                    onClick={() => onDelete(item.id)}
                  >
                    cross
                  </div>
                </li>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ToDoList;
