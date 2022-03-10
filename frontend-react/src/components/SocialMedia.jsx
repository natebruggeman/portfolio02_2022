import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
  const preventDefault = (event) => event.preventDefault();

  return (
    <div className="app__social">
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
