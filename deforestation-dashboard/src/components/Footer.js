import React from 'react';
import wbgLogo from "../assets/logo-wbg-footer.svg";

export default function Footer() {
   return (
      <footer>
         <div className="footer-data">
            <p>Data References:</p>
            <div className="data-group">
               <a href="https://databank.worldbank.org/source/world-development-indicators/preview/on" target="_blank"><img src={wbgLogo} /></a>
               <span> | </span>
               <a href="https://databank.worldbank.org/reports.aspx?source=2&series=AG.LND.FRST.K2" target="_blank"> Forest cover in km<sup>2</sup> </a>
               <a href="https://databank.worldbank.org/reports.aspx?source=2&series=AG.LND.FRST.ZS" target="_blank"> Forest cover in % of land area </a>
            </div>
            <div className="data-group">
               <a className="tm-logo" href="http://thematicmapping.org/" target="_blank">
                  <strong>thematic</strong>
                  mapping
                  <sup>.org</sup>
               </a>
               <span> | </span>
               <a href="http://thematicmapping.org/downloads/world_borders.php" target="_blank">World Borders Dataset</a>
            </div>
         </div>
         <div>
            <contact>info@deforestationdashboard.com</contact>
            <p>© 2019 Deforestation Dashboard</p>
         </div>
      </footer>
   )
}
