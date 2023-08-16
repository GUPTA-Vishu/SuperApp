import React, { useState } from "react";
import action from "./image/action.png";
import { Link } from "react-router-dom";

import "./Onboarding.css";
import drama from "./image/drama.png";
import Romance from "./image/Romance.png";
import Thriller from "./image/Thriller.png";
import western from "./image/western.png";
import horror from "./image/horror.png";
import fantasy from "./image/fantasy.png";
import music from "./image/music.png";
import fiction from "./image/fiction.png";
import X from "./image/X.png";

const Onboarding = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const MAX_SELECTED_CATEGORIES = 3;

  const [actionCategorySelected, setactionCategorySelected] = useState(false);
  const [romanceCategorySelected, setromanceCategorySelected] = useState(false);
  const [thrillerCategorySelected, setthrillerCategorySelected] =
    useState(false);
  const [dramaCategorySelected, setdramaCategorySelected] = useState(false);
  const [fictionCategorySelected, setfictionCategorySelected] = useState(false);
  const [westernCategorySelected, setwesternCategorySelected] = useState(false);
  const [horrorCategrySelected, sethorrorCategorySelected] = useState(false);
  const [fantasyCategorySelected, setfantasyCategorySelected] = useState(false);
  const [musicCategorySelected, setmusicCategorySelected] = useState(false);

  const actionDisplay = () => {
    setactionCategorySelected(!actionCategorySelected);
    toggleCategory("action");
  };

  const RomanceDisplay = () => {
    setromanceCategorySelected(!romanceCategorySelected);
    toggleCategory("romance");
  };
  const ThrillerDisplay = () => {
    setthrillerCategorySelected(!thrillerCategorySelected);
    toggleCategory("thriller");
  };

  const dramaDisplay = () => {
    setdramaCategorySelected(!dramaCategorySelected);
    toggleCategory("drama");
  };
  const fictionDisplay = () => {
    setfictionCategorySelected(!fictionCategorySelected);
    toggleCategory("fiction");
  };
  const westernDisplay = () => {
    setwesternCategorySelected(!westernCategorySelected);
    toggleCategory("western");
  };
  const horrorDisplay = () => {
    sethorrorCategorySelected(!horrorCategrySelected);
    toggleCategory("horror");
  };
  const fantasyDisplay = () => {
    setfantasyCategorySelected(!fantasyCategorySelected);
    toggleCategory("fantasy");
  };
  const musicDisplay = () => {
    setmusicCategorySelected(!musicCategorySelected);
    toggleCategory("music");
  };

  const deleteRomance = () => {
    setromanceCategorySelected(false);
  };
  const deleteAction = () => {
    setactionCategorySelected(false);
  };
  const deleteDrama = () => {
    setdramaCategorySelected(false);
  };
  const deleteThriller = () => {
    setthrillerCategorySelected(false);
  };
  const deleteFantasy = () => {
    setfantasyCategorySelected(false);
  };
  const deleteWestern = () => {
    setwesternCategorySelected(false);
  };
  const deleteFiction = () => {
    setfictionCategorySelected(false);
  };
  const deleteHorror = () => {
    sethorrorCategorySelected(false);
  };
  const deleteMusic = () => {
    setmusicCategorySelected(false);
  };

  // const toggleCategory = (category) => {
  //   setSelectedCategories((prevCategories) => {
  //     if (prevCategories.includes(category)) {
  //       return prevCategories.filter((cat) => cat !== category);
  //     } else {
  //       return [...prevCategories, category];
  //     }
  //   });
  // };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter((cat) => cat !== category)
      );
    } else {
      if (selectedCategories.length < MAX_SELECTED_CATEGORIES) {
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  };

  const handleSubmit = () => {
    if (selectedCategories.length >= MAX_SELECTED_CATEGORIES) {
      console.log("Selected categories:", selectedCategories);

      localStorage.setItem('selectedCategories', JSON.stringify(selectedCategories));
      // You can navigate to the next page here using your preferred method
    }
  };

  return (
    <div className="container">
      <div className="left_side">
        <h3>Superapp</h3>
        <h4>Select your Entertainment Category</h4>
        <div className="group1">
          <div>
            <button
              className={`select_action ${
                actionCategorySelected ? "visible" : ""
              }`}
            >
              Action
              <img onClick={deleteAction} className="delete" src={X} alt="" />
            </button>
          </div>

          <div>
            {" "}
            <button
              className={`select_romance ${
                romanceCategorySelected ? "visible" : ""
              }`}
            >
              Romance
              <img onClick={deleteRomance} className="delete" src={X} alt="" />
            </button>
          </div>

          <div>
            <button
              className={`select_action ${
                thrillerCategorySelected ? "visible" : ""
              }`}
            >
              Thriller
              <img onClick={deleteThriller} className="delete" src={X} alt="" />
            </button>
          </div>
        </div>
        <div className="group2">
          <div>
            <button
              className={`select_action ${
                dramaCategorySelected ? "visible" : ""
              }`}
            >
              Drama
              <img onClick={deleteDrama} className="delete" src={X} alt="" />
            </button>
          </div>

          <div>
            <button
              className={`select_action ${
                westernCategorySelected ? "visible" : ""
              }`}
            >
              Western
              <img onClick={deleteWestern} className="delete" src={X} alt="" />
            </button>
          </div>

          <div>
            <button
              className={`select_action ${
                horrorCategrySelected ? "visible" : ""
              }`}
            >
              Horror
              <img onClick={deleteHorror} className="delete" src={X} alt="" />
            </button>
          </div>
        </div>

        <div className="group3">
          <div>
            <button
              className={`select_action ${
                fantasyCategorySelected ? "visible" : ""
              }`}
            >
              Fantasy
              <img onClick={deleteFantasy} className="delete" src={X} alt="" />
            </button>
          </div>

          <div>
            <button
              className={`select_action ${
                musicCategorySelected ? "visible" : ""
              }`}
            >
              Music
              <img onClick={deleteMusic} className="delete" src={X} alt="" />
            </button>
          </div>

          <div>
            <button
              className={`select_action ${
                fictionCategorySelected ? "visible" : ""
              }`}
            >
              Fiction
              <img onClick={deleteFiction} className="delete" src={X} alt="" />
            </button>
          </div>
        </div>
        <p className="warn">Minimum Three category Required</p>
      </div>
      <div className="right_side">
        <div className="category">
          <div onClick={actionDisplay} className="action">
            <p className="text">Action</p>
            <img className="image" src={action} alt="" />
          </div>
          <div onClick={RomanceDisplay} className="romance">
            <p className="text">Romance</p>
            <img className="image" src={Romance} alt="" />
          </div>
          <div onClick={ThrillerDisplay} className="thriller">
            <p className="text">Thriller</p>
            <img className="image" src={Thriller} alt="" />
          </div>
          <div onClick={dramaDisplay} className="drama">
            <p className="text">Drama</p>
            <img className="image" src={drama} alt="" />
          </div>
          <div onClick={westernDisplay} className="western">
            <p className="text">Western</p>
            <img className="image" src={western} alt="" />
          </div>

          <div onClick={horrorDisplay} className="horror">
            <p className="text">Horror</p>
            <img className="image" src={horror} alt="" />
          </div>
          <div onClick={fantasyDisplay} className="fantasy">
            <p className="text">Fantasy</p>
            <img className="image" src={fantasy} alt="" />
          </div>
          <div onClick={musicDisplay} className="music">
            <p className="text">Music</p>
            <img className="image" src={music} alt="" />
          </div>

          <div onClick={fictionDisplay} className="fiction">
            <p className="text">Fiction</p>
            <img className="image" src={fiction} alt="" />
          </div>
        </div>
        <Link to="/Dashboard">
          <button
            onClick={handleSubmit}
            className={`next-button ${
              selectedCategories.length >= MAX_SELECTED_CATEGORIES
                ? ""
                : "disabled"
            }`}
            disabled={selectedCategories.length < MAX_SELECTED_CATEGORIES}
          >
            Next Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Onboarding;
