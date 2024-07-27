import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alldata, setAllData] = useState([]);

  const onSubmitForm = (e) => {
    const newData = { id: new Date().getTime().toString(), email, password };

    if (email && password) {
      setAllData([...alldata, newData]);

      setEmail("");
      setPassword("");
    } else alert("plz fill the required field");
    e.preventDefault();
  };
  return (
    <>
      <section className="mt-20 p-8 ">
        <form
          className=" bg-black/80 px-8 py-5"
          action=""
          onSubmit={onSubmitForm}
        >
          <div className=" flex gap-3 flex-col">
            <div className=" my-5 bg-blue-700 p-6">
              <label htmlFor="email"> Name:</label>
              <input
                type="email"
                name="name"
                id="name"
                value={email}
                placeholder="email@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className=" my-5 bg-blue-700 p-6">
              <label htmlFor="passwoed"> password:</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder=" password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <button className="bg-blue-700 px-5 rounded-lg" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>

        {alldata.map((item) => {
          return (
            <div className=" bg-blue-600 mt-9 px-8  flex gap-6" key={item.id}>
              <h1>{item.email}</h1>
              <h1>{item.password}</h1>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default BasicForm;
