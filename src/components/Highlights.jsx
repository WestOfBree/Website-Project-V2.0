import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Highlight from "./ui/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="colored-text">Bilbo's Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Quick and Easy"
              description="Get access to your purchased books instantly"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book" />}
              title="10,000+ Books"
              description="Library has access to all your favorite titles"
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              description="Get your hands on popular books for as little as $10!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
