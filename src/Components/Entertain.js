import React from "react";
import toggle from "./image/toggle.png";
import ActionMovies from "./ActionMovies";
import "./Entertain.css";
import{ Link} from "react-router-dom";



const Entertain = () => {
    const handleMovieData=(movies)=>{
        console.log('Received movies:', movies);   
    }
  return (
    <div className="container2">
      <div className="header">
        <h3 className="catelog">SuperApp</h3>
        <Link to="/Dashboard">
        <img  className="movies_toggle" src={toggle} alt="" />
        </Link>
      </div>

      <h1 className="heading">Entertainment According to your Choice</h1>
      <h4  className="sub_heading">Action Movies</h4>
      <div className="actionMovies">
        <ActionMovies onDataReceived={handleMovieData} />
      </div>
      <h4 className="sub_heading">Thriller Movies</h4>
      <div className="actionMovies">
        <ActionMovies onDataReceived={handleMovieData} />
      </div>
      <h4 className="sub_heading">fantasy Movies</h4>
      <div className="actionMovies">
        <ActionMovies onDataReceived={handleMovieData} />
      </div>
     
    </div>
  );
};

export default Entertain;
