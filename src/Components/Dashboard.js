import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Profile from "./image/Profile.png";
import Weather from "./Weather";
import { format, addDays } from "date-fns";
import News from "./News";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [formData, setFormData] = useState({});
  const [selectedCategories, setSelectedCategories] = useState([]);

  const currentDate = new Date();
  const formattedDate = format(currentDate, "MMMM d, yyyy");
  const futureDate = addDays(currentDate, 3);
  const formattedFutureDateTime = format(futureDate, "MMMM d, yyyy HH:mm:ss");

  useEffect(() => {
    // Get the form data from localStorage
    const data = localStorage.getItem("formData");

    // Set the form data in the state
    setFormData(data ? JSON.parse(data) : {});
  }, []);

  useEffect(() => {
    // Get the selected categories from localStorage
    const data = localStorage.getItem("selectedCategories");

    // Set the selected categories in the state
    setSelectedCategories(data ? JSON.parse(data) : []);
  }, []);

  return (
    <div className="container_1">
      <div className="profile">
        <img src={Profile} alt="" />
        <ul className="login_details">
          {Object.keys(formData).map((key, index) => (
            <li className={`list user-details-${index + 1}`} key={key}>
              {formData[key]}
            </li>
          ))}
        </ul>

        <ul className="categories_details">
          {selectedCategories.map((category, index) => (
            <li className={`list category-details-${index + 1}`} key={category}>
              {category}
            </li>
          ))}
        </ul>
      </div>

      <Weather
        formattedDate={formattedDate}
        formattedFutureDateTime={formattedFutureDateTime}
      />
      <News />
      <Link to="/Entertain">
        <button className="button2">Next page</button>
      </Link>
    </div>
  );
};

export default Dashboard;
