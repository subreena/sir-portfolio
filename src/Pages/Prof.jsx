import { useState } from "react";
const Prof = () => {
  const [isHonour, setHonour] = useState(true);
  const [isSeminar, setSeminar] = useState(true);
  const [isReview, setReview] = useState(true);
  const [isExtra, setExtra] = useState(true);
  const [isActive, setActive] = useState("");

  const handleNavClick = (section) => {
    if (section === "honour-award") {
      setHonour(true);
      setSeminar(false);
      setReview(false);
      setExtra(false);
      setActive(section);
    } else if (section === "review-work") {
      setHonour(false);
      setSeminar(false);
      setReview(true);
      setExtra(false);
      setActive(section);
    } else if (section === "seminar") {
      setHonour(false);
      setSeminar(true);
      setReview(false);
      setExtra(false);
      setActive(section);
    } else if (section === "extra-curri") {
      setHonour(false);
      setSeminar(false);
      setReview(false);
      setExtra(true);
      setActive(section);
    } else {
      setHonour(true);
      setSeminar(true);
      setReview(true);
      setExtra(true);
      setActive(section);
    }
  };
  return (
    <>
      <div className="container-fluid">
        <div className="prof">
          <div className="rpNav">
            <ul className="rpNav-item">
              <li
                onClick={() => handleNavClick("honour-award")}
                className={isActive === "honour-award" ? "rpNav-is-active" : ""}
              >
                Honours/Award
              </li>
              <li
                onClick={() => handleNavClick("review-work")}
                className={isActive === "review-work" ? "rpNav-is-active" : ""}
              >
                Review Works
              </li>
              <li
                onClick={() => handleNavClick("seminar")}
                className={isActive === "seminar" ? "rpNav-is-active" : ""}
              >
                SEMINAR/WORKSHOP/TRAINING
              </li>
              <li
                onClick={() => handleNavClick("extra-curri")}
                className={isActive === "extra-curri" ? "rpNav-is-active" : ""}
              >
                EXTRA-CURRICULAR ACTIVITIES
              </li>
            </ul>
          </div>
          <div className="container">
            {isHonour && (
              <div className="honour-award">
                <div className="">
                  <h2 className="prof-title">Honours and Awards</h2>
                </div>
                <hr />
                <div className="">
                  <ul className="prof-list honour-list">
                    <li>
                      <p>
                        Received two times Research grants from Research Cell,
                        Noakhali Science and Technology University in Bangladesh
                        in 2022 and 2023.
                      </p>
                    </li>
                    <li>
                      <p>
                        Received Best Paper Award at the 2019 International
                        Conference on Sustainable Technology for Industry 4.0,
                        hosted by Green University in Bangladesh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Got Academic Merit Scholarship (2012-2016) Rajshahi
                        University of Engineering and Technology, Bngladesh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Achieve first runner-up position in the Higher Secondary
                        category of the Divisional Mathematic Olympiad 2009 in
                        Bangladesh.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {isReview && (
              <div className="review-work">
                <div className="">
                  <h2 className="prof-title">REVIEW WORKS</h2>
                </div>
                <hr />
                <div className="">
                  <ul className="prof-list">
                    <li>
                      <p>
                        Worked as a reviewer at the International Conference on
                        Embracing Industry 4.0 for Sustainable Business Growth
                        (EISBG), hosted by Noakhali Science and Technology
                        University, Bangladesh, February 2024
                      </p>
                    </li>
                    <li>
                      <p>
                        Contributed as a reviewer to the scholarly publication
                        Bulletin of Electrical Engineering and Informatics,
                        September 2023
                      </p>
                    </li>
                    <li>
                      <p>
                        Took part as a reviewer in the BAUET Journal published
                        in June 2023 by the Bangladesh Army University of
                        Engineering & Technology, Bangladesh.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {isSeminar && (
              <div className="seminar">
                <div className="">
                  <h4 className="prof-title">
                    SEMINAR /WORKSHOP /TRAINING ACTIVITIES
                  </h4>
                </div>
                <hr />
                <div className="">
                  <ul className="prof-list">
                    <li>
                      <p>
                        Participated in a webinar AI for Mental Health on May
                        23rd, 2024, organized by the Finnish Center for
                        Artificial Intelligence (FCAI) in collaboration with
                        Helsinki Brain & Mind, Finland.
                      </p>
                    </li>
                    <li>
                      <p>
                        Participated in various training sessions and seminars
                        in IQAC, hosted by Noakhali Science and Technology
                        University, Bangladesh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attended “Aviation & Space Technology Research” webinars
                        hosted by the Bangabandhu Sheikh Mujibur Rahman Aviation
                        and Aerospace University, Bangladesh on October 18, 2023
                      </p>
                    </li>
                    <li>
                      <p>
                        Participated in a “Python” workshop series from March 16
                        to 17, 2022 arranged by East West University, Bangladesh
                      </p>
                    </li>
                    <li>
                      <p>
                        Took part in the Youth Bees, Bangladesh workshop on
                        &quot; Big Data Analytics &quot; on August 20, 2022.
                      </p>
                    </li>
                    <li>
                      <p>
                        Completed five online courses from Coursera on Deep
                        Learning offered by deeplearning.ai, in July 2020
                      </p>
                    </li>
                    <li>
                      <p>
                        Participated in On-Site Training on Outcome Based
                        Education (OBE), Bangladesh Army University of
                        Engineering & Technology, Bangladesh, March 2019
                      </p>
                    </li>
                    <li>
                      <p>
                        Three days long workshop on Method of Instructions,
                        Bangladesh Army University of Engineering & Technology,
                        Bangladesh, 2016
                      </p>
                    </li>
                    <li>
                      <p>
                        Attended several Research-related webinars organized by
                        the Bangladeshi Students' Union, Malaysia.
                      </p>
                    </li>
                    <li>
                      <p>
                        Attend an International Conference on Sustainable
                        Technologies for Industry 4.0, Green University,
                        Bangladesh on 25th December 2019
                      </p>
                    </li>
                    <li>
                      <p>
                        Attend in the International Conference on Electrical and
                        Electronic Engineering (ICEEE), Rajshahi University of
                        Engineering and Technology, Rajshahi, Bangladesh,
                        December 2017
                      </p>
                    </li>
                    <li>
                      <p>
                        Attend in the International Conference on Electrical,
                        Computer and Communication Engineering (ECCE),
                        Chittagong University of Engineering and Technology,
                        Cox’s Bazar, Bangladesh, February 2017
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {isExtra && (
              <div className="extra-curri">
                <div className="">
                  <h2 className="prof-title">extra-curricular activities</h2>
                </div>
                <hr />
                <div className="">
                  <ul className="prof-list">
                    <li>
                      <p>
                        Serving as an advisor at Noakhali Science and Technology
                        University's Innovation Club, Bangladesh, March 2024 -
                        Present.
                      </p>
                    </li>
                    <li>
                      <p>
                        From August 2023 to March 2024, acted as an adviser for
                        the ICE Programming Club at Noakhali Science and
                        Technology University in Bangladesh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Served as a Session Moderator Chair for the
                        International Conference on Machine Intelligence and
                        Emerging Technologies in September 2022, hosted by
                        Noakhali Science and Technology University in
                        Bangladesh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Worked as an advisor at Hult Prize BAUET, Bangladesh,
                        November 2020
                      </p>
                    </li>
                    <li>
                      <p>
                        Participated as a guest speaker at an online talk &quot;
                        Research & Development &quot; on July 7, 2020.
                      </p>
                    </li>
                    <li>
                      <p>
                        Served as Vice President of the BAUET Computer Society
                        at Bangladesh Army University of Engineering and
                        Technology, Bangladesh from March 2020 to January 2022.
                      </p>
                    </li>
                    <li>
                      <p>
                        Mentored and coached several teams at the Mobile Game
                        and Apps Testing Lab at Bangladesh Army University of
                        Engineering & Technology, Bangladesh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Judged the national IEEE Computer Society's Poster
                        Presentation & Project Showcasing contest on August 2,
                        2019, at Rajshahi University of Engineering and
                        Technology, Bangladesh.
                      </p>
                    </li>
                    <li>
                      <p>
                        Served as a House Tutor of the Students Residence Hall
                        at Bangladesh Army University of Engineering and
                        Technology, Bangladesh
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Prof;
