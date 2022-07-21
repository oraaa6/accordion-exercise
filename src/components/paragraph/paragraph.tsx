import { useState } from "react";
import arrow from "../../images/arrow.png";
import "./paragraph.scss";
import clsx from "clsx";

type PropsTypes = {
  title: string;
  description: string;
};

const Paragraph = ({ title, description }: PropsTypes) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <div className={clsx("title", isOpen && "title--dark")}>
          <h3 className="title__text">{title}</h3>
          <img
            className={clsx("title__arrow", isOpen && "title__arrow--up")}
            src={arrow}
            alt="arrow"
            onClick={openAccordion}
          />
        </div>
        <div className={clsx("description", isOpen && "description--opened")}>
          <p className="description__text">{description}</p>
        </div>
      </div>
    </>
  );
};

export default Paragraph;
