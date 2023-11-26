import React from "react";

const Title = ({ data }) => {
  console.log(data);
  return (
    <div className="Title">
      {data.volumeInfo.imageLinks.smallThumbnail ? (
        <img
          src={data.volumeInfo.imageLinks.smallThumbnail}
          alt="Img not found"
        />
      ) : (
        <img src={data.volumeInfo.imageLinks.thumbnail} alt="Img not found" />
      )}
      <div className="Book-info">
        <h1 className="Book-heading">{data.volumeInfo.title}</h1>
        <div className="Author-details">
          <p className="Book-author">{data.volumeInfo.authors[0]}</p>
          <p className="Publish-date">Published On : {data.volumeInfo.publishedDate}</p>
        </div>
        <p className="Book-desc">{data.volumeInfo.description}</p>
        <div className="Ratings">
          {data.volumeInfo.averageRating ? (
            <p>Avg Rating : {data.volumeInfo.averageRating}</p>
          ) : (
            <p>Avg Rating : 0</p>
          )}
          {data.volumeInfo.ratingsCount ? (
            <p>Rating Count : {data.volumeInfo.ratingsCount}</p>
          ) : (
            <p>Rating Count : 0</p>
          )}
          {data.volumeInfo.publisher ? (
            <p>Publisher : {data.volumeInfo.publisher}</p>
          ) : (
            <p>Publisher : none</p>
          )}
          {data.volumeInfo.language ? (
            <p>Language : {data.volumeInfo.language}</p>
          ) : (
            <p>Language : none</p>
          )}
        </div>
        <div className="Info-buttons">
          <a href={data.volumeInfo.previewLink} target="_blank" ><button>Now Read!</button></a>
          <a href={data.volumeInfo.infoLink} target="_blank"><button>More Info!</button></a>
        </div>
      </div>
    </div>
  );
};

export default Title;
