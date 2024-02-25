import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { removeBookmark } from "../reducer/bookmarkSlice";

const Bookmark = ({ mode }) => {
  const dispatch = useDispatch();
  const bookmarkedItems = useSelector((state) => state.bookmark.items);

  const handleRemoveBookmark = (id) => {
    dispatch(removeBookmark(id));
  };

  if (bookmarkedItems.length === 0) {
    return null;
  }

  return (
    <>
      <main className={`main ${mode === "dark" ? "dark-main" : "main"}`}>
        <section className="container slider">
          <h2>Your Bookmark</h2>
          <div className="grid">
            {bookmarkedItems.map((item) => (
              <div className="relate" key={item.id}>
                <div
                  className="btn-book"
                  onClick={() => handleRemoveBookmark(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 24 24"
                    fill={mode === "dark" ? "white" : "black"}
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                  </svg>
                </div>
                <div className="card">
                  <Image src={item.image} alt="" width={65} height={65} />
                  <h3>{item.title}</h3>
                  <p>{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Bookmark;
