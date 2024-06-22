// css in style1

// skills and job details
const Saj = () => { 
  return (
    <>
    <div className="container-fluid">
    
    <div className="saj">
      <div className="container p-2">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="education-section">
          <div className="">
           <>
           <div className="">
              <h2 className="skill-title">Education</h2>
            </div>
           </>
            <hr />
            <>
            <div className="timeline">
              <table className="edu-table" >
                <div className="timeline-item">
                  <div className="timeline-icon"></div>
                <tr style={{display:"flex", justifyContent:"space-between"}}>
                  <td>
                    <strong>
                    Masters of Science in Computer Science & Engineering
                    </strong>
                  </td>
                
                </tr>
                <tr>
                  <td>
                    Rajshahi University of Engineering and Technology (RUET)
                  </td>
                </tr>
                <tr>
                  <td>March, 2017 – January, 2020</td>
                </tr>
                </div>
                <hr />
                <div className="timeline-item">
                  <div className="timeline-icon"></div>
                <tr style={{display:"flex", justifyContent:"space-between"}}>
                  <td>
                    <strong>
                    Bachelor of Science in Computer Science & Engineering
                    </strong>
                  </td>
                 
                  {/* <td rowSpan="2">
                    <strong>
                      GPA: 3.69/4.00 <br />
                      <small>
                      (Position: 5th /60)
                      </small>
                    </strong>
                  </td> */}
                </tr>
                <tr>
                  <td>
                    Rajshahi University of Engineering and Technology (RUET)
                  </td>
                </tr>
                <tr>
                  <td>April, 2011 – January, 2016</td>
                </tr>
                </div>
              </table>
            </div>
            </>
          </div>
        </div>
        <br />
        <br />
        </div>
        <div className="col-lg-6 col-sm-12">
        <div className="education-section">
              <h2 className="skill-title">Skills</h2>
              <hr />
              <p className="green-text"><strong>
                
              <ul className="skill-list">
                <table>
                  <tr>
                    <td>
                    <li>
                C
                </li>
                    </td>
                    <td>
                    <li>
                  C++
                </li>
                    </td>
                    <td>
                    <li>Java</li>
                    </td>
                  </tr>
                  <tr>
                    
                    <td>
                    <li>SQL</li>
                    </td>
          
                    <td>
                    <li>HTML</li>
                    </td>
                    <td>
                    <li>CSS</li>
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <li>JavaScript</li>
                    </td>
                    <td>
                    <li>PHP</li>
                    </td>
                    <td>
                    <li>Matlab</li>
                    </td>
                  </tr>
                  <tr>
                    
                    <td>
                    <li>Python</li>
                    </td>
                 
                    <td>
                    <li>Git</li>
                    </td>
                  </tr>
                </table>
             
              </ul></strong></p>
            </div>
        </div>
      
      </div>
        <div className="experience-section">
          <div className="container">
            <h2 className="exp-header">Job Experience</h2>
          </div>
          <hr />
          <div className="container">
            <div className="experience-sub-section">
             <div className="timeline">
             <table className="edu-table">
                <div className="timeline-item">
                <div className="timeline-icon"></div>
                <tr> 

                  <td>
                    <p>
                      <strong>
                        Noakhali Science and Technology University (NSTU)
                      </strong>
                    </p>
                  </td>
                  <td>
                    <p>
                      <strong>Noakhali, Bangladesh</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Lecturer, Department of Information and Communication
                      Engineering
                    </p>
                  </td>
                  <td>
                    <p>January 2022–Present</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <p>
                      <ul>
                        <li>
                          Supervising and assisting undergraduate students with
                          their research and project work.
                        </li>
                        <li>
                          Working together with professionals from academia and
                          industry to develop an outcome-based curriculum for
                          the department.
                        </li>
                        <li>
                          Supporting students in a range of extracurricular club
                          activities, such as the Programming Club and the
                          Innovation Club.
                        </li>
                        <li>
                          Participate in frequent training sessions,
                          conferences, and seminars for professional growth.
                        </li>
                       
                      </ul>
                    </p>
                  </td>
                </tr>
                </div>
                {/* next 4444444444444444444444444444444444444444444444444444444444444444444444444 */}
               <tr className="border-lage"></tr>
               <div className="timeline-item">
                <div className="timeline-icon"></div>
                 <tr>
                  <td>
                    <p>
              
                      <strong>
                        Bangladesh Army University of Engineering & Technology
                        (BAUET)
                      </strong>
                    </p>
                  </td>
                  <td>
                    <p>
               
                      <strong>Natore, Bangladesh</strong>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>
                      Lecturer, Department of Computer Science & Engineering
                    </p>
                  </td>
                  <td>
                    <p>August 2016– January 2022</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <p>
                      <ul>
                        <li>
                          Over twenty undergraduate students were mentored and
                          supervised, providing support for their research and
                          project work.
                        </li>
                        <li>
                          The curriculum and course syllabuses were revised in
                          collaboration with faculty members.
                        </li>
                        <li>
                          Took part in activities related to student placement,
                          registration, recruiting, and assisting students in
                          various extra-curricular club activities.
                        </li>
                        <li>
                          Participated in academic or administrative committees
                          that handle departmental concerns, academic issues,
                          and institutional policies.
                        </li>
                       
                      </ul>
                    </p>
                  </td>
                </tr>
               </div>
              </table>
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

export default Saj;
