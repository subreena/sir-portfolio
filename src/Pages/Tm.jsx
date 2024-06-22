import { useEffect, useState } from "react";
import axios from 'axios';

const Tm = () => {
  const [students, setStudents] = useState(null);

  const handleGet = async () => {
    try {
      const response = await axios.get("https://portfolio-server-black-phi.vercel.app/api/students");
      console.log(response.data); // Check the structure of response.data
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="tm">
          <div className="container">
            <h2 className="tm-title">Teaching and Mentoring</h2>
            <hr />
          </div>

          <div className="container">
            <div className="tm-section">
              <h4 className="green-text mt-5 mb-3">
                <u>Course Taught:</u>{" "}
              </h4>
              <p>
                Introduction to Programming Environment, Computer Programming
                with C, Database Management Systems, Microprocessor and
                Interfacing, Assembly Language, Digital Signal Processing,
                Internet and Web Programming, System Analysis and Design,
                Software Engineering, Digital Image Processing.
              </p>
            </div>

            <div className="tm-section">
              <h4 className="green-text mt-5 mb-3">
                <u>Mentored Students for Thesis/Project</u>
              </h4>
              <div className="scrollbar scrollbar-primary">
                <table className="thesis-table table table-striped-columns">
                  <thead className="text-center table-success">
                    <tr>
                      <th colSpan="6">
                        <p className="black-txt text-center">
                          UnderGrad Students
                        </p>
                      </th>
                    </tr>
                    <tr>
                      <th>Sl. No</th>

                      <th>Name</th>
                      <th>ID</th>
                      <th>Thesis/Project Work</th>
                      <th>Link</th>
                      <th>University</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      students ? (
                        students.map((student,i) => (
                          <tr key={student._id}>
                            <td>{i+1}</td>
                            <td>{student.name}</td>
                            <td>{student.roll}</td>
                            <td>
                              {student.thesis_project} &nbsp;
                             <small>
                             <span className="text-sm">
                                ({student.thesis_or_project ? 'Thesis' : 'Project'})
                              </span>
                             </small>
                            </td>
                              <td>
                                <a href={student.workLink} target="_blank" rel="noopener noreferrer">
                                  See Work
                                </a>
                              </td>
                            <td>{student.university}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="4" className="text-center">
                            <div className="spinner-border text-success" role="status" style={{ fontSize: "20px" }}>
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tm;
