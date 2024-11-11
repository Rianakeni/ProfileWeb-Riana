import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

const Footer = () => {
  return (
    <footer>
      {" "}
      <ul class="social-media">
        {" "}
        <li>
          <a href="#">Facebook</a>
        </li>{" "}
        <li>
          <a href="#">WhatApp</a>
        </li>{" "}
        <li>
          <a href="#">Instagram</a>
        </li>{" "}
        <li>
          <a href="#">LinkedIn</a>
        </li>{" "}
      </ul>{" "}
    </footer>
  );
};

export default Footer;
