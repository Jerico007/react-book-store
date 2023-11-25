import React from "react";

const Title = ({ data }) => {
  console.log(data);
  return (
    <div className="Title">
      {data.length > 0
        ? data.map((val) => (
            <div>
              <img
                src={val.volumeInfo.imageLinks.thumbnail}
                alt="Img not found"
              />
              <div className="Book-details">
                <h1>{val.volumeInfo.title}</h1>
                <p>{val.volumeInfo.description}</p>
                <button id={val.id}>Read Now</button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Title;
