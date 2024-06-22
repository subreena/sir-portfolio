import  { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import img from '../assets/Image/intro-image.png';
const Navigation = () => {
  const [activeItem, setActiveItem] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveItem(location.pathname); // Set the active item based on the current route
  }, [location.pathname]);

  useEffect(() => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const contentMain = document.querySelector('.contentMain');

    const handleToggle = () => {
      menuToggle.classList.toggle('is-active');
      sidebar.classList.toggle('is-active');
      contentMain.classList.toggle('blurred');
    };

    menuToggle.addEventListener('click', handleToggle);

    // Cleanup event listener on component unmount
    return () => {
      menuToggle.removeEventListener('click', handleToggle);
    };
  }, []);

  const handleMenuItemClick = (path) => {
    setActiveItem(path);

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Close the sidebar
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const contentMain = document.querySelector('.contentMain');

    menuToggle.classList.remove('is-active');
    sidebar.classList.remove('is-active');
    contentMain.classList.remove('blurred');
  };

  return (
    <>
      <div className="menu-toggle">
        <div className="hamburger">
          <span></span>
        </div>
      </div>
      <aside className="sidebar">
        <img src={img} className="img-responsive img-thumbnail rounded mx-auto d-block" alt="" width="100" height="200"/>
        <h3 className="text-center">Md. Sabbir Ejaz</h3>
        <nav className="menu">
          <Link
            to="/"
            className={`menu-item ${activeItem === "/" ? "is-active" : ""}`}
            onClick={() => handleMenuItemClick("/")}
          >
            Profile
          </Link>
          <Link
            to="/skills-and-job-details"
            className={`menu-item ${activeItem === "/skills-and-job-details" ? "is-active" : ""}`}
            onClick={() => handleMenuItemClick("/skills-and-job-details")}
          >
            Skills and Job details
          </Link>
          <Link
            to="/research-and-publications"
            className={`menu-item ${activeItem === "/research-and-publications" ? "is-active" : ""}`}
            onClick={() => handleMenuItemClick("/research-and-publications")}
          >
            Research and Publications
          </Link>
          <Link
            to="/teaching-and-mentoring"
            className={`menu-item ${activeItem === "/teaching-and-mentoring" ? "is-active" : ""}`}
            onClick={() => handleMenuItemClick("/teaching-and-mentoring")}
          >
            Teaching and Mentoring
          </Link>
          <Link
            to="/professional-activities"
            className={`menu-item ${activeItem === "/professional-activities" ? "is-active" : ""}`}
            onClick={() => handleMenuItemClick("/professional-activities")}
          >
            Professional Activities
          </Link>
          <Link
            to="/contact-details"
            className={`menu-item ${activeItem === "/contact-details" ? "is-active" : ""}`}
            onClick={() => handleMenuItemClick("/contact-details")}
          >
            Contact Details
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Navigation;
