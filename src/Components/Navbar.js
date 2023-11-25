import React from "react";
import logo from "../image Assets/Standard Collection 11.png";
import word_logo from "../image Assets/KeazoNBOOKS.png";
import search_logo from "../image Assets/ant-design_search-outlined.png";
import heart_logo from "../image Assets/bx_bx-book-heart.png";
import bell_logo from "../image Assets/ic_round-notifications-none.png";
import diamond_logo from "../image Assets/Vector.png";
import user_logo from "../image Assets/IMG20210528181544.png";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Logo">
        <img src={logo} alt="Img not found" />
        <div className="Word-logo">
        <img src={word_logo} alt="Img not found"/>
        </div>
      </div>
      <div className="Search">
        <div className="Search-bar">
          <div className="Search-logo">
            <img src={search_logo} alt="Img not found" />
          </div>
          <input
            type="text"
            placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
          />
        </div>
            <button className="Search-btn">Search</button>
      </div>
      <div className="Other-logo">
        <div><img src={heart_logo} alt="Img not found"/></div>
        <div><img src={bell_logo} alt="Img not found"/></div>
        <div><img src={diamond_logo} alt="Img not found"/></div>
        <div><img src={user_logo} alt="Img not found"/></div>
      </div>
    </div>
  );
};

export default Navbar;
