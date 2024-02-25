import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

const Small = () => {
  const data = [
    {
      title: "PDF to Word",
      id: 1,
      des: "Easily convert PDF to Word document.",
      image: "https://images.hipdf.com/images2022/icons/pdf-word.svg",
    },
    {
      title: "PDF to PPT",
      image: "https://images.hipdf.com/images2022/icons/PDF-PPT.svg",
      id: 2,
      des: "Convert PDF to Powerpoint online.",
    },
    {
      title: "PDF to Excel",
      image: "https://images.hipdf.com/images2022/icons/pdf-excel.svg",
      id: 3,
      des: "Convert PDF to xls for free",
    },
    {
      title: "PDF to JPG",
      image: "https://images.hipdf.com/images2022/icons/PDF-JPG.svg",
      id: 4,
      des: "Convert PDF files to a set of optimized JPG, PNG, BMP, GIF or TIFF images.",
    },
    {
      title: "PDF to TXT",
      image: "https://images.hipdf.com/images2022/icons/PDF-TXT.svg",
      id: 5,
      des: "Convert your PDF to TXT, and extract text from your PDF.",
    },
    {
      title: "PDF to RTX",
      image: "https://images.hipdf.com/images2022/icons/PDF-RTX.svg",
      id: 6,
      des: "Convert PDF to RTX online and free..",
    },
    {
      title: "PDF to Pages",
      image: "https://images.hipdf.com/images2022/icons/PDF-Pages.svg",
      id: 7,
      des: "Convert PDF to Pages on Mac and Windows.",
    },
    {
      title: "PDF to HTML",
      image: "https://images.hipdf.com/images2022/icons/pdf-html.svg",
      id: 8,
      des: "Convert your PDF documents to HTML web page.",
    },
    {
      title: "PDF to DXF",
      image: "https://images.hipdf.com/images2022/icons/PDF-DXF.svg",
      id: 9,
      des: "The best online tool to convert PDF to DXF online.",
    },
    {
      title: "PDF to EPUB",
      image: "https://images.hipdf.com/images2022/icons/PDF-EPUB.svg",
      id: 10,
      des: "Convert PDF file to EPUB ebook.",
    },
    {
      title: "OCR",
      image: "https://images.hipdf.com/images2022/icons/OCR.svg",
      id: 11,
      des: "  Convert your scanned PDFs and images into editable Word, Excel, and PPT.",
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
            <Image src={item.src} alt={item.text} width={20} height={20} />
            <p className="paras">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Small;
