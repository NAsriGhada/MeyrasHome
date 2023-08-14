import React, { useState } from "react";
import { Link} from "react-router-dom";
import './Content.css'
import Virtualstaging from '../Virtual-staging/Virtualstaging'
import Modeling from "../Modeling/Modeling";
import VirtualRenovation from "../Virtual-renovation/VirtualRenovation";
import ItemRemoval from "../Item-removal/ItemRemoval";
import VirtualTour from "../Virtual-tour/VirtualTour";

const Content = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <section className="galleryContentContainer">
        <ul className="nav nav-tabs">
          <li
            className={active === 1 ? "nav-item active" : "nav-item"}
            onClick={() => setActive(1)}
          >
            <Link className="nav-link">Virtual staging</Link>
            {active === 1 && <Virtualstaging />}
          </li>
          <li
            className={active === 2 ? "nav-item active" : "nav-item"}
            onClick={() => setActive(2)}
          >
            <Link className="nav-link">3D modeling</Link>
            {active === 2 && <Modeling />}
          </li>
          <li
            className={active === 3 ? "nav-item active" : "nav-item"}
            onClick={() => setActive(3)}
          >
            <Link className="nav-link">Virtual renovation</Link>
            {active === 3 && <VirtualRenovation />}
          </li>
          <li
            className={active === 5 ? "nav-item active" : "nav-item"}
            onClick={() => setActive(5)}
          >
            <Link className="nav-link">Item removal</Link>
            {active === 5 && <ItemRemoval />}
          </li>
          <li
            className={active === 8 ? "nav-item active" : "nav-item"}
            onClick={() => setActive(8)}
          >
            <Link className="nav-link">Virtual tour</Link>
            {active === 8 && <VirtualTour />}
          </li>
        </ul>

        {/* <div className="tab-content mt-2">
          <div lassName={`tab-pane fade ${active === 1 ? "show active" : ""}`}>
            {<Virtualstaging />}
          </div>
          {active === 1 && <Virtualstaging />}
          {active === 2 && <app-modeling />}
          {active === 3 && <app-virtual-renovation />}
          {active === 5 && <app-item-removal />}
          {active === 8 && <app-virtual-tour />}
        </div> */}
      </section>
    </>
  );
};

export default Content;
