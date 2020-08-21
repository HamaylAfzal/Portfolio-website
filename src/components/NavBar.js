import React from "react"
import Pdf from '../components/HamaylAfzal.pdf'
import Github from "../pictures/github.png";
import Linkdin from "../pictures/linkdin.png";
import Gmail from "../pictures/gmail.png";

function NavBar(props) {
  return (
    <div>
      <header className="Nav-bar">
        <nav className="Nav-BarResume">
          <div>
            <a className="Resume" href={Pdf} target="_HamaylAfzal.pdf">
              Resume
            </a>
          </div>
          <div className="spacer" />
      <div className="Nav-BarItems">
        <ul>
          <li>
            <a
              href="https://github.com/hamaylafzal"
              target="_https://github.com/hamaylafzal"
            >
            <img src={Github} className="picture" alt="github link" /> 
            </a>
          </li>

          <li>
            <a
              href="http://www.linkedin.com/in/hamayl-afzal"
              target="_http://www.linkedin.com/in/hamayl-afzal"
            >
            <img src={Linkdin} className="picture" alt="Linkdin" /> 
            </a>
          </li>

          <li>
            <a
              href="hamaylafzal_2023@depauw.edu"
              target="_hamaylafzal_2023@depauw.edu"
            >
            <img src={Gmail} className="picture" alt="gmail" /> 
            </a>
          </li>
        </ul>
      </div>
        </nav>
      </header>
    </div>
  );
}

export default NavBar;
