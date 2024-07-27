import React, { useState } from "react";
import { formField } from "../data/Data";

const Form = () => {
  const [userDetail, setUserDetail] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUserDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitDetails = (e) => {
    const detail = {
      fname: "fname",
      mname: "mname",
      lname: "lname",
      email: "email",
      phone: "phone",
      address: "address",
    };
    setUserDetail([...userDetail, detail]);

    e.preventDefault();
  };
  console.log(userDetail);
  return (
    <>
      <section className=" p-5 mt-8 pt-6 ">
        <form
          action=""
          className=" grid grid-cols-1 lg:grid-cols-3 gap-5 "
          onSubmit={onSubmitDetails}
        >
          {formField.map((value) => {
            const { name, type, plac, label, id } = value;
            return (
              <div className="  px-6 py-2" key={id}>
                <label htmlFor=""> {label} </label>
                <input
                  className=" px-5 py-2 focus:outline-none border-b-2 border-gray-500 w-[300px]"
                  type={type}
                  name={name}
                  placeholder={plac}
                  onChange={handleOnChange}
                />
              </div>
            );
          })}
        </form>
        <div className=" mx-5 mt-8">
          <button
            className=" bg-blue-600 text-white px-5 py-2 rounded-lg"
            type="submit"
          >
            Submit
          </button>
        </div>
      </section>
    </>
  );
};

export default Form;
