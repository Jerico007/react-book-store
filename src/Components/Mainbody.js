import React from "react";
import Title from "./Title";
import { useEffect, useState } from "react";
import axios from "axios";
const Mainbody = ({query}) => {
  //useState to store data
  const [Arrdata, setData] = useState([]);

  //useState to show book which clicked
  const [bookId, setBookId] = useState("");

  //Error
  const [Error, setError] = useState("");

  console.log(Arrdata);

  //Function to fetch book data
  async function fetchData(query,def) {
    // console.log(query);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );
      let arr = response.data.items;
      if(def)
      {
        arr.forEach((val) => {
          Arrdata.push(val);
        });
        setData([...Arrdata]);
      }
      else{
        setData([...arr]);  
      }
     
    } catch (e) {
        setError(e.message);
    }
  }

  //useEffect to fetch harrypotter/SherlockHolmes
  useEffect(() => {
    fetchData("HarryPotter",true);
    fetchData("SherlockHolmes",true);
  }, []);

  
  useEffect(()=>{
    query && fetchData(query);
  },[query]);
   
  function handelClick(e){
     console.log(e.target);
  }

  return (
    <div className="Mainbody">
      {
        bookId !=="" ? <Title data={bookId}/> : ""
      }
      {
        Error ? <h1>{Error}</h1> : ""
      }
      {
        Arrdata.length > 0 ? <div className="Cards">
            {
              Arrdata.map((val)=>(
                <div key={val.id} onClick={handelClick} id={val.id}>
                  <img src={val.volumeInfo.imageLinks.smallThumbnail} alt="Img not found" />
                </div>
              ))
            }
        </div> :""
      }
    </div>
  );
};

export default Mainbody;
