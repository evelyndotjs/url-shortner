import React, { useState, useEffect } from "react";

function Shortener() {
  const [user, setUser] = useState("");

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleClick = () => {};

  //   //   const [data, setData] = useState("");

  //   const fetchData = () => {
  //     return fetch(
  //       "https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => console.log(data));
  //   };

  //   useEffect(() => {
  //     fetchData();
  //   });

  return (
    <form onSubmit>
      <input
        onChange={handleChange}
        type="text"
        placeholder="Shorten a link here..."
      ></input>
      <button onClick={handleClick} type="Submit">
        Shorten It!
      </button>
    </form>
  );
}

export default Shortener;
