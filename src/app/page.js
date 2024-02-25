"use client";
import { useState } from "react";
import Converter from "./Components/Converter";
import Cpdf from "./Components/Cpdf";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Bookmark from "./Components/Bookmark";
import { Provider } from "react-redux";
import store from "./redux/store";
const Page = () => {
  const [mode, setMode] = useState("light");

  const toggle = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    document.body.style.backgroundColor =
      newMode === "dark" ? "black" : "white";
  };

  return (
    <>
      <Provider store={store}>
        <Navbar mode={mode} />
        <Bookmark mode={mode} />
        <Slider mode={mode} />
        <Converter mode={mode} />
        <Cpdf mode={mode} />
        <Footer mode={mode} toggle={toggle} />
      </Provider>
    </>
  );
};

export default Page;
