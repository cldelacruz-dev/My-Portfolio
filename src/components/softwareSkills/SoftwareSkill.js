import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                 {skills.image ? (
                  // For images (PNG logos, SVGs)
                  <img
                    src={skills.image} // Assuming the image is a URL or relative path
                    alt={skills.skillName}
                    style={{ width: 40, height: 40 }} // Adjust size as needed
                  />
                ) : (
                  // For FontAwesome icons (or any other icon class)
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
