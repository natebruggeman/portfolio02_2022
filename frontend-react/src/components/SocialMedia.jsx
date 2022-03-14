import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { images } from "../constants";

const SocialMedia = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className="app__social">
      <a href={images.NateBruggemanResume} download>
        <div>
          <img src={images.REZ} alt="Resume" height="24" />
        </div>
      </a>
      <a href="https://github.com/natebruggeman" target="_blank">
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="https://twitter.com/NateOnThursday" target="_blank">
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://www.linkedin.com/in/nathanbruggeman/" target="_blank">
        <div>
          <BsLinkedin />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
