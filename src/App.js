import { useState } from "react";
import "./App.css";
import Pages from "./pages/Pages";
import ImgSlider from "./components/imgslider/ImgSlider";

function App() {
  const [myWork, setMyWork] = useState("ready to develop");
  const changeData = () => {
    const val = myWork;

    val === "ready to develop"
      ? setMyWork("web pages design")
      : setMyWork("ready to develop");
  };
  return (
    <div className=" flex flex-col items-center justify-center py-6 gap-6">
      <div className=" flex flex-col">
        <h1 className=" text-2xl font-semibold text-center text-orange-600">
          {myWork}
        </h1>
      </div>
      <button
        className=" bg-blue-500 text-xl text-white rounded-lg px-5 text-center py-1"
        onClick={changeData}
      >
        click Me
      </button>

      {/*-------object  */}

      <Pages />
      <ImgSlider />
    </div>
  );
}

export default App;
