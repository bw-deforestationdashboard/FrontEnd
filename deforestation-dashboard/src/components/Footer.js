import React, {Component} from "react";
import wbgLogo from "../assets/logo-wbg-footer.svg";

class Footer extends React.Component {

  constructor(){
    super(); //unnecessary bc not using methods but CCR!!
  }
  
  render(){
    return (
    <footer>
      <div className="footer-data">
        <p>Data References:</p>
        <div className="data-group">
          <a
            href="https://databank.worldbank.org/source/world-development-indicators/preview/on"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={wbgLogo} alt="World Bank Logo"/>
          </a>
          <span> | </span>
          <a
            href="https://databank.worldbank.org/reports.aspx?source=2&series=AG.LND.FRST.K2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Forest cover in km<sup>2</sup>{" "}
          </a>
          <a
            href="https://databank.worldbank.org/reports.aspx?source=2&series=AG.LND.FRST.ZS"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Forest cover in % of land area{" "}
          </a>
        </div>
        <div className="data-group">
          <a
            className="tm-logo"
            href="http://thematicmapping.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>thematic</strong>
            mapping
            <sup>.org</sup>
          </a>
          <span> | </span>
          <a
            href="http://thematicmapping.org/downloads/world_borders.php"
            target="_blank"
            rel="noopener noreferrer"
          >
            World Borders Dataset
          </a>
        </div>
      </div>
      <div>
        <address>info@deforestationdashboard.com</address>
        <p>© 2019 Deforestation Dashboard</p>
      </div>
    </footer>
  );
}}

export default Footer
