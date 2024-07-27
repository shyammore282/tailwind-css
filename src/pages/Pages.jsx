import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicForm from "../components/BasicForm/BasicForm";
import Header from "../components/Header";
import Object from "../components/Object/Object";
import ToDoList from "../components/todolist/ToDoList";
import Form from "../components/form/Form";

const Pages = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/object" element={<Object />} />
          <Route exact path="/loginform" element={<BasicForm />} />
          <Route exact path="/todo" element={<ToDoList />} />
          <Route exact path="/basicform" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Pages;
