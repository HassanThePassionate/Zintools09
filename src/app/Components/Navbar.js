"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Small from "./Small";
import Navbtn from "./Navbtn";
import Suggestion from "./Suggestion";

const Navbar = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const [input, setInput] = useState("");
  const [showSuggestion, setShowSuggestion] = useState(false);
  const suggestionRef = useRef(null);
  const [rotate, setRotate] = useState(0);
  const [debouncedInput, setDebouncedInput] = useState("");

  const handle = () => {
    const by = document.getElementsByClassName("drop-icon")[0];
    if (rotate === 0) {
      setRotate(1);
      by.style.transform = "rotate(180deg)";
    } else {
      setRotate(0);
      by.style.transform = "rotate(0)";
    }
  };

  const handleSearch = () => {
    document.querySelector(".full").style.display = "inline-block";
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const focus = () => {
    setShowSuggestion(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  useEffect(() => {
    setShowSuggestion(!!debouncedInput);
  }, [debouncedInput]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionRef.current &&
        !suggestionRef.current.contains(event.target) &&
        !event.target.classList.contains("input")
      ) {
        setShowSuggestion(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={`light  ${props.mode === "dark" ? "dark-nav" : "light"}`}>
        <Small />
      </div>
      <header
        className={`header ${props.mode === "dark" ? "dark-nav" : "header"}`}
      >
        <div className="container">
          <Link href="index.html" className="logo">
            <Logo />
          </Link>

          <div className="flex-box">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search for Movies, TV Shows, Themes &amp; Cast"
                className="input"
                value={input}
                onChange={handleChange}
                onFocus={focus}
              />
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </span>
              <div ref={suggestionRef}>
                <Suggestion show={showSuggestion} input={debouncedInput} />
              </div>
            </div>
            <span className="search-icon">
              <svg
                onClick={handleSearch}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </span>

            <div className="menu-icon">
              <span className="menu" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-text-primary"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </span>
            </div>
          </div>

          <Navbtn />
        </div>

        <nav className={`navbar ${showMenu ? "tx" : "ty"}`}>
          <div className="cross" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </div>

          <div className="container">
            <ul className="list-iteams">
              <li className="relative">
                <Link className="group-link" href="/">
                  Stock Video
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Video Templates
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Music
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Sound Effects
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Graphic Templates
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Graphics
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Presentation Templates
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Photos
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Fonts
                </Link>
              </li>
              <li className="relative">
                <Link className="group-link" href="/">
                  Add-ons
                </Link>
              </li>
              <li className="relative group hid">
                <span className="group-link">More</span>
                <ul className="dropdown">
                  <li>
                    <Link href="">Another Link</Link>
                  </li>
                  <li>
                    <Link href="">Yet Another Link</Link>
                  </li>
                </ul>
              </li>
              <li className="relative none group" onClick={handle}>
                <details className="gp">
                  <summary className="gt">
                    <div className="lp">
                      <span className="group-link block">More</span>
                    </div>
                    <span className="drop-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                  </summary>
                  <ul className="dropdown-none">
                    <li>
                      <Link href="" className="de">
                        Another Link
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="de">
                        Yet Another Link
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <div className="nav-btns">
                <Link className="nav-btn" href="/">
                  Log in
                </Link>
                <Link className="nav2-btn" href="/">
                  Sign up
                </Link>
              </div>
            </ul>

            <Link href="" className="more-btn">
              More
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
