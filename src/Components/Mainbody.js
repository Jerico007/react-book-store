import React from "react";
import Title from "./Title";
import { useEffect, useState } from "react";
import axios from "axios";
const Mainbody = () => {
  //useState to store data
  const [Arrdata, setData] = useState([]);

  //useState to show book which clicked
  const [bookId, setBookId] = useState("");

  //Error
  const [Error, setError] = useState("");

//   console.log(Arrdata);

  //Function to fetch book data
  async function fetchData(query) {
    // console.log(query);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      let arr = response.data.items;
      arr.forEach((val) => {
        Arrdata.push(val);
      });
      setData([...Arrdata]);
    } catch (e) {
        setError(e.message);
    }
  }

  //useEffect to fetch harrypotter/SherlockHolmes
  useEffect(() => {
    fetchData("HarryPotter");
    fetchData("SherlockHolmes");
  }, []);

  return (
    <div className="Mainbody">
      {
        bookId === "" ? <Title data={[Arrdata[0],Arrdata[3],Arrdata[2]]}/> : ""
      }
    </div>
  );
};

export default Mainbody;
