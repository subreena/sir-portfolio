import introImg from "../assets/Image/intro-image.png";

const Intro = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="intro-section">
          <div className="container">
            <div className="row d-flex flex-lg-row flex-sm-row-reverse">
            <div className="col-lg-6 col-12">
                <div className="intro-img">
                  <img
                    src={introImg}
                    alt="image"
                    className="img-thumbnail img-responsive"
                    height="400"
                    width="300"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-12">
                <div className="intro-text">
                  <div className="intro-about">
                    <h2 className="intro-title">About</h2>
                    <hr />
                    <p>
                      I am passionate about my work. Because I love what I do, I
                      have a steady source of inspiration that pushes me to do
                      my best. I am a person who is positive about every aspect
                      of life.{" "}
                    </p>
                    <br />
                    <p>
                      <span className="black-txt">
                        {" "}
                        <strong>Current Profession: </strong>
                      </span>
                      <span className="green-text text-bold text-bg">
                        Lecturer <br /> Department of Information and Communication
                        Engineering, Noakhali Science and Technology University
                      </span>
                    </p>
                    <p>
                      <strong>
                        <span className="black-txt">Phone Number:</span>
                        <span className="green-text"> +8801725990631</span>
                      </strong>
                    </p>
                    <p>
                      <strong>
                        <span className="black-text">Email: </span>
                        <span className="green-text">
                          {" "}
                          sabbirejaz.ice@nstu.edu.bd{" "}
                        </span>
                      </strong>
                    </p>
                    <br />
                  </div>

                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-6 col-sm-12">
                      <div className="intro-details">
                        <p className="black-txt">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            width="20"
                            height="20"
                          >
                            <path
                              fill="#2e3047"
                              d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z"
                            />
                          </svg>
                          <strong>&nbsp; Research Interests</strong>{" "}
                        </p>
                        <ul>
                          <li>Image Processing</li>
                          <li>Deep Learning</li>
                          <li>Artificial Intelligence</li>
                          <li>Machine Learning</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                      <div className="intro-details">
                        <p className="black-txt">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 512"
                            width="20"
                            height="20"
                          >
                            <path
                              fill="#2e3047"
                              d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"
                            />
                          </svg>
                          <strong> &nbsp; External Links</strong>{" "}
                        </p>
                        <ul>
                          <li>
                            <a
                              href="https://www.nstu.edu.bd/faculty-member.php?faculty=md-sabbir-ejaz-fbr554"
                              target="_blank"
                            >
                              NSTU
                            </a>{" "}
                          </li>
                          <li>
                            <a
                              href="https://scholar.google.com/citations?user=Jwo-L8YAAAAJ&hl=en"
                              target="_blank"
                            >
                              Google Scholar
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.researchgate.net/profile/Md-Ejaz"
                              target="_blank"
                            >
                              Research Gate
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://github.com/sabbir7"
                              target="_blank"
                            >
                              Github
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
