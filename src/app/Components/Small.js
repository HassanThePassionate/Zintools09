"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Small = () => {
  const data = [
    {
      title: "PDF to Word",
      image: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
    },
    {
      title: "PDF to PPT",
      image: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
    },
    {
      title: "PDF to Excel",
      image: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
    },
    {
      title: "PDF to JPG",
      image: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
    },
    {
      title: "PDF to TXT",
      image: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
    },
    {
      title: "PDF to RTX",
      image: "https://images.hipdf.com/images2022/icons/PDF-RTX.svg",
    },
    {
      title: "PDF to Pages",
      image: "https://images.hipdf.com/images2022/icons/PDF-Pages.svg",
    },
    {
      title: "PDF to HTML",
      image: "https://images.hipdf.com/images2022/icons/pdf-html.svg",
    },
    {
      title: "PDF to DXF",
      image: "https://images.hipdf.com/images2022/icons/PDF-DXF.svg",
    },
    {
      title: "PDF to EPUB",
      image: "https://images.hipdf.com/images2022/icons/PDF-EPUB.svg",
    },
    {
      title: "OCR",
      image: "https://images.hipdf.com/images2022/icons/OCR.svg",
    },
  ];
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
    setShowSuggestion(true);
  };
  const cancel = () => {
    const full = document.querySelector(".full");
    full.style.display = "none";
  };

  return (
    <div className="full">
      <div className="small-flex">
        <input
          type="text"
          placeholder="Search for Movies, TV Shows, Themes &amp; Cast"
          className="input"
          value={input}
          onChange={handleChange}
        />
        <Link href="/" onClick={cancel}>
          Cancel
        </Link>
      </div>
      <ul className="small-list">
        {data.map((item, index) => (
          <li key={index}>
            <Image src={item.image} alt="image" width={20} height={20} />
            <p className="paras">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Small;
