import React from "react";
import NavBar from "./NavBar";
import wom from "../pictures/wom.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <header className="Project-Word">Project</header>
      <h1 className="intro"> G' Day!!</h1>
      <img src={wom} className="background" alt="background" />
      <h1 className="intro"> G' Day!!</h1>
      <h2 className="body">
        <p>I am Hamayl Afzal an undergradute student at DePauw University!!</p>
        <p>
          {" "}
          I am a Web Developer and my hobbies include Martial Arts and Web
          Designing. Feel free to connect for a cup of coffee!!
        </p>
      </h2>

      <Link to="/Page2">
        <li className="Word">Projects</li>
      </Link>
    </div>
  );
}

export default Home;
