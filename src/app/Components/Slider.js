"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
// import Bookmark from "@/assets/icons/Bookmark";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookmark, removeBookmark } from "../reducer/bookmarkSlice";

const Slider = (props) => {
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
  const dispatch = useDispatch();
  const bookMarks = useSelector((state) => state.bookmark.items);

  const clickBookmark = (id, e) => {
    if (bookMarks.some((item) => item.id === id)) {
      dispatch(removeBookmark(id));
    } else {
      dispatch(
        addBookmark({ id: id, title: e.title, des: e.des, image: e.image })
      );
    }
  };
  const [swiperInstance, setSwiperInstance] = useState(null);

  const goNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <main className={`main ${props.mode === "dark" ? "dark-main" : "main"}`}>
      <section className="container slider">
        <h2>Convert from PDF</h2>
        <div className="slider-content">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            onSwiper={(swiper) => setSwiperInstance(swiper)}
            navigation={{
              nextEl: "#next",
              prevEl: "#prev",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            {data.map((e, index) => (
              <SwiperSlide key={index}>
                <div className="relate">
                  <div
                    className="btn-book"
                    onClick={() => clickBookmark(e.id, e)}
                  >
                    {bookMarks.some((item) => item.id === e.id) ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                          fill: props.mode === "dark" ? "white" : "black",
                        }}
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23"
                        height="23"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                      </svg>
                    )}
                  </div>
                  <Link
                    href="https://www.hipdf.com/word-to-pdf"
                    className="card"
                  >
                    <Image
                      src={e.image}
                      alt=""
                      width={65}
                      height={65}
                      className="card-img"
                    />
                    <h3>{e.title}</h3>
                    <p>{e.des}</p>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="slider-btns">
            <div id="prev" onClick={goPrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-left-circle"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
                  id="mainIconPathAttribute"
                  stroke-width="0.3"
                  stroke="#000000"
                  fill={props.mode === "dark" ? "#ffff" : "#000000"}
                ></path>{" "}
              </svg>
            </div>
            <div id="next" onClick={goNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-arrow-right-circle"
                viewBox="0 0 16 16"
                id="IconChangeColor"
              >
                {" "}
                <path
                  fill-rule="evenodd"
                  d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  id="mainIconPathAttribute"
                  fill={props.mode === "dark" ? "#ffff" : "#000000"}
                  stroke="#000000"
                  stroke-width="0.3"
                ></path>{" "}
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Slider;
