import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <NavBar />
      <header className="Project-Word">Project</header>
      
      
      
      <h2 className="body">
      <h1>G' Day</h1>
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
