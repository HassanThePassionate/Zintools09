import Link from "next/link";

const Footer = (props) => {
  return (
    <>
      <footer
        className={`main-footer ${
          props.mode === "dark" ? "main-dark" : "main-footer"
        }`}
      >
        <div className="container">
          <div className="socials">
            <span className="follow">Follow us</span>
            <ul className="social-icons">
              <li>
                <Link
                  href={"https://www.youtube.com/"}
                  target="blank"
                  className="link-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 409.592 409.592"
                  >
                    <path d="M403.882 107.206c-2.15-17.935-19.052-35.133-36.736-37.437a1316.32 1316.32 0 0 0-324.685 0C24.762 72.068 7.86 89.271 5.71 107.206c-7.613 65.731-7.613 129.464 0 195.18 2.15 17.935 19.052 35.149 36.751 37.437a1316.32 1316.32 0 0 0 324.685 0c17.684-2.284 34.586-19.502 36.736-37.437 7.614-65.71 7.614-129.449 0-195.18zM170.661 273.074V136.539l102.4 68.27-102.4 68.265z"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.twitter.com/"}
                  target="blank"
                  className="link-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M8.29 19.936c7.547 0 11.675-6.13 11.675-11.446 0-.175-.004-.348-.012-.52A8.259 8.259 0 0 0 22 5.886a8.319 8.319 0 0 1-2.356.633 4.052 4.052 0 0 0 1.804-2.225c-.793.46-1.67.796-2.606.976A4.138 4.138 0 0 0 15.847 4c-2.266 0-4.104 1.802-4.104 4.023 0 .315.036.622.107.917a11.728 11.728 0 0 1-8.458-4.203 3.949 3.949 0 0 0-.556 2.022 4 4 0 0 0 1.826 3.348 4.136 4.136 0 0 1-1.858-.503l-.001.051c0 1.949 1.415 3.575 3.292 3.944a4.193 4.193 0 0 1-1.853.07c.522 1.597 2.037 2.76 3.833 2.793a8.34 8.34 0 0 1-5.096 1.722A8.51 8.51 0 0 1 2 18.13a11.785 11.785 0 0 0 6.29 1.807"></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.facebook.com/"}
                  target="blank"
                  className="link-icon"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 155.139 155.139"
                  >
                    <path d="M89.584 155.139V84.378h23.742l3.562-27.585H89.584V39.184c0-7.984 2.208-13.425 13.67-13.425l14.595-.006V1.08C115.325.752 106.661 0 96.577 0 75.52 0 61.104 12.853 61.104 36.452v20.341H37.29v27.585h23.814v70.761h28.48z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className="middle-footer">
            <div className="footer-links">
              <h3 className="top-text">Internal Links</h3>
              <ul className="flex-links">
                <li>
                  <Link className="f-link" href="">
                    Documentaries
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Themes
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Chrome casts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3 className="top-text">Enterprise</h3>
              <ul className="flex-links">
                <li>
                  <Link className="f-link" href="">
                    Download Chrome Browser
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Chrome Browser for Enterprise
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Chrome Browser Devices
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    ChromeOS
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Google Cloud
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Google Workspace
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3 className="top-text">Internal Links</h3>
              <ul className="flex-links">
                <li>
                  <Link className="f-link" href="">
                    Documentaries
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Themes
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Chrome casts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3 className="top-text">Enterprise</h3>
              <ul className="flex-links">
                <li>
                  <Link className="f-link" href="">
                    Download Chrome Browser
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Chrome Browser for Enterprise
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Chrome Browser Devices
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    ChromeOS
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Google Cloud
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Google Workspace
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3 className="top-text">Internal Links</h3>
              <ul className="flex-links">
                <li>
                  <Link className="f-link" href="">
                    Documentaries
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Themes
                  </Link>
                </li>
                <li>
                  <Link className="f-link" href="">
                    Chrome casts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="ending-footer">
            <div className="footer-logo">
              <Link href="">
                <div className="logo-text">
                  <span className="similar">Similar</span>
                  <span className="black">
                    <span className="watch">Watch</span>
                  </span>
                </div>
              </Link>
            </div>
            <ul className="end-links">
              <li>
                <Link href="" className="end-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="" className="end-link">
                  Terms and conditions
                </Link>
              </li>
              <li>
                <Link href="" className="end-link">
                  Cookies Policy
                </Link>
              </li>
              <li>
                <Link href="" className="end-link">
                  About us
                </Link>
              </li>
              <li>
                <Link href="" className="end-link">
                  EULA
                </Link>
              </li>
              <li>
                <Link href="" className="end-link">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="dark-mode">
              <div className="moon">
                {props.mode === "dark" ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 -960 960 960"
                      onClick={props.toggle}
                      className="sun"
                      fill="#e8e8e8"
                    >
                      <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM80-440q-17 0-28.5-11.5T40-480q0-17 11.5-28.5T80-520h80q17 0 28.5 11.5T200-480q0 17-11.5 28.5T160-440H80Zm720 0q-17 0-28.5-11.5T760-480q0-17 11.5-28.5T800-520h80q17 0 28.5 11.5T920-480q0 17-11.5 28.5T880-440h-80ZM480-760q-17 0-28.5-11.5T440-800v-80q0-17 11.5-28.5T480-920q17 0 28.5 11.5T520-880v80q0 17-11.5 28.5T480-760Zm0 720q-17 0-28.5-11.5T440-80v-80q0-17 11.5-28.5T480-200q17 0 28.5 11.5T520-160v80q0 17-11.5 28.5T480-40ZM226-678l-43-42q-12-11-11.5-28t11.5-29q12-12 29-12t28 12l42 43q11 12 11 28t-11 28q-11 12-27.5 11.5T226-678Zm494 495-42-43q-11-12-11-28.5t11-27.5q11-12 27.5-11.5T734-282l43 42q12 11 11.5 28T777-183q-12 12-29 12t-28-12Zm-42-495q-12-11-11.5-27.5T678-734l42-43q11-12 28-11.5t29 11.5q12 12 12 29t-12 28l-43 42q-12 11-28 11t-28-11ZM183-183q-12-12-12-29t12-28l43-42q12-11 28.5-11t27.5 11q12 11 11.5 27.5T282-226l-42 43q-11 12-28 11.5T183-183Zm297-297Z"></path>
                    </svg>
                  </>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                    onClick={props.toggle}
                  >
                    <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
