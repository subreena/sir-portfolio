import { useState } from "react";


const Rp = () => {
  const [isResearchVisible, setIsResearchVisible] = useState(true);
  const [isPublicationsVisible, setIsPublicationsVisible] = useState(true);
  const [activeItem, setActiveItem] = useState("");

  const handleNavClick = (section) => {
    if (section === "research") {
      setIsResearchVisible(true);
      setIsPublicationsVisible(false);
      setActiveItem("research");
    } else if (section === "publications") {
      setIsResearchVisible(false);
      setIsPublicationsVisible(true);
      setActiveItem("publication")
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="rp">
          <div className="rpNav">
            <div className="container">
              <ul className="rpNav-item">
                <li 
                className={` ${activeItem === "research" ? "rpNav-is-active" : ""}`}
                onClick={() => handleNavClick("research")}>
                 
                 Research
              
                </li>
                <li
                  className={`${activeItem === "publication" ? "rpNav-is-active" : ""}`} 
                onClick={() => handleNavClick("publications")}>
                
               
               Publications
                 
                  
                </li>
              </ul>
            </div>
          </div>
          {/* <RpNav/> */}
          <div className="container-fluid">
            {isResearchVisible && (
              <div className="rp-section">
                <div className="container">
                  <h2 className="rp-title">Research Experience</h2>
                </div>
                <hr />
                <div className="container">
                  <div className="rp-sub-sec">
                    <ul>
                      <li>
                        <p className="rp-sub-sec-text">
                          <strong>
                            {" "}
                            Master’s Research Work (November, 2018 – January, 2020)
                          </strong>{" "}
                          <br />
                          Rajshahi University of Engineering and Technology (RUET){" "}
                          <br />
                          <strong>Synopsis:</strong> A machine learning framework
                          for masked face recognition to aid surveillance research
                          within a realistic time frame utilizing Python
                          programming. <br />
                          <strong>Thesis title:</strong> “Masked Face Recognition
                          Using Convolutional Neural Network” <br />
                          <strong>Research Supervisor: </strong> Dr. Md. Rabiul
                          Islam <br />
                        </p>
                      </li>
                      <li>
                        <p className="rp-sub-sec-text">
                          <strong>
                            {" "}
                            Undergraduate Research Work (December, 2014 – January,
                            2016)
                          </strong>{" "}
                          <br />
                          Rajshahi University of Engineering and Technology (RUET){" "}
                          <br />
                          <strong>Synopsis:</strong> Detecting significant clusters
                          in iris images to select the initial center for improved
                          segmentation and preprocessing using Matlab programming.{" "}
                          <br />
                          <strong>Thesis title: </strong>“Performance Comparison of
                          Partition Based Clustering Algorithms on Iris Image
                          Preprocessing” <br />
                          <strong>Research Supervisor: </strong>Dr. Md. Ali Hossain{" "}
                          
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {isPublicationsVisible  && (
              <div className="pub-sec">
                <div className="container">
                  <h2 className="rp-title">List of Publications</h2>
                </div>
                <hr />
                <div className="container">
                  <div className="pub-sub-sec">
                    <ol>
                      <li>
                        <p>
                          Hossain M.I., Maruf M.H., Khan M.A.R., Prity F.S., Fatema
                          S., <strong>Ejaz M. S.</strong>, and Khan, M.A.S., 2023.
                          Heart disease prediction using distinct artificial
                          intelligence techniques: performance analysis and
                          comparison. Iran Journal of Computer Science, pp.1-21.
                        </p>
                      </li>
                      <li>
                        <p>
                          Khan M.A.R., Akter J., Ahammad I.,{" "}
                          <strong>Ejaz M. S.</strong>, and Jaman Khan T., 2022. Dengue
                          outbreaks prediction in Bangladesh perspective using
                          distinct multilayer perceptron NN and decision tree. Health
                          Information Science and Systems, 10(1), p.32.
                        </p>
                      </li>
                      <li>
                        <p>
                          U. K. Shrabony and <strong>M. S. Ejaz</strong>, &quot; Early
                          Identification of Diabetic Retinopathy Using Deep Learning
                          Model: A Survey, &quot; 2022 International Conference on
                          Recent Progresses in Science, Engineering and Technology
                          (ICRPSET), Rajshahi, Bangladesh, 2022, pp. 1-4
                        </p>
                      </li>
                      <li>
                        <p>
                          M. J. Hossein and <strong>M. Sabbir Ejaz</strong>, &quot;
                          Recognition of Bengali Sign Language using Novel Deep
                          Convolutional Neural Network, &quot; 2nd International
                          Conference on Sustainable Technologies for Industry 4.0
                          (STI), Dhaka, Bangladesh, 2020, pp. 1-5
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong> Md. Sabbir Ejaz</strong>, Md. Rabiul Islam, &quot;
                          Masked Face Recognition Using FaceNet Model &quot;, in
                          Computer Science and Engineering Research Journal (CSERJ),
                          2020
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Md. Sabbir Ejaz</strong>, Md. Rabiul Islam, &quot;
                          Masked Face Recognition Using Convolutional Neural Network
                          &quot;, in International Conference on Sustainable
                          Technologies for Industry 4.0 (STI), 24-25 December, 2019
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Md. Sabbir Ejaz</strong>, Md. Rabiul Islam, Md
                          Sifatullah, Ananya Sarker, &quot;Implementation of Principal
                          Component Analysis on Masked and Non-masked Face Recognition
                          &quot;, in 1st International Conference on Advances in
                          Science, Engineering and Robotics Technology (ICASERT), May,
                          2019
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong> Md. Sabbir Ejaz</strong>, Md. Ali Hossain, Abdul
                          Matin, and Md Tanvir Ahmed, &quot; Performance Comparison of
                          Partition Based Clustering Algorithms on Iris Image
                          Preprocessing &quot;, in 2017 2nd International Conference
                          on Electrical & Electronic Engineering (ICEEE), pp. 1-4.
                          IEEE, Dec. 2017
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Rp;
