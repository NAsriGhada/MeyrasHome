import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Content.css'
import Virtualstaging from '../Virtual-staging/Virtualstaging'

const Content = () => {
  const [active, setActive] = useState(1);
  return (
    <>
      <section className="galleryContentContainer">
        <ul className="nav-tabs">
          <li>
            <NavLink className="active" onClick={() => setActive(1)}>
              Virtual staging
            </NavLink>
            <Virtualstaging />
          </li>
          <li>
            <NavLink
              to={"/gallery"}
              className="active"
              onClick={() => setActive(2)}
            >
              3D modeling
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/gallery"}
              className="active"
              onClick={() => setActive(3)}
            >
              Virtual renovation
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/gallery"}
              className="active"
              onClick={() => setActive(5)}
            >
              Item removal
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/gallery"}
              className="active"
              onClick={() => setActive(8)}
            >
              Virtual tour
            </NavLink>
          </li>
        </ul>
        {/* <div [ngbNavOutlet]="nav" class="mt-2"></div> */}
      </section>
    </>
  );
};

export default Content;
