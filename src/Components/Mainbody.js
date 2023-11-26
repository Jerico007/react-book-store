import React from "react";
import Title from "./Title";
import { useEffect, useState } from "react";
import axios from "axios";
const Mainbody = ({ query }) => {
  //useState to store data
  const [Arrdata, setData] = useState([]);

  //useState to show book which clicked
  const [titleData, setTitle] = useState("");

  //Error
  const [Error, setError] = useState("");


  //Function to fetch book data
  async function fetchData(query, def) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      let arr = response.data.items;
      if (def) {
        
        arr.forEach((val) => {
          Arrdata.push(val);
        });
        setData([...Arrdata]);
      } else {
        setError("");
        setTitle("");
        setData([...arr]);
      }
    } catch (e) {
      setError(e.message);
    }
  }

  //useEffect to fetch harrypotter/SherlockHolmes
  useEffect(() => {
    fetchData("HarryPotter", true);
    fetchData("SherlockHolmes", true);
  }, []);

  //useEffect to fetch searched query
  useEffect(() => {
    query && fetchData(query, false);
  }, [query]);

  //Function to handel click on books
  function handelClick(e) {
    console.log(e.target.id);
    let obj = "";
    for (let i = 0; i < Arrdata.length; i++) {
      if (e.target.id === Arrdata[i].id) {
        obj = Arrdata[i];
        break;
      }
    }
    setTitle(obj);
  }

  return (
    <div className="Mainbody">
      {titleData !== "" ? <Title data={titleData} /> : ""}
      {Error ? <h1>{Error}</h1> : ""}
      {
        titleData ? <h1 className="Show-more">More books like this</h1> : ""
      }
      {Arrdata.length > 0 ? (
        <div className="Cards">
          {Arrdata.map((val) => (
            <div >
              {val.volumeInfo.imageLinks.smallThumbnail ? (
                <img
                  src={val.volumeInfo.imageLinks.smallThumbnail}
                  alt="Img not found"
                  onClick={handelClick}
                  id={val.id}
                />
              ) : (
                <img
                  src={val.volumeInfo.imageLinks.thumbnail}
                  alt="Img not found"
                />
              )}
            </div>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Mainbody;
