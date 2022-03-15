import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setitem] = useState([]);
  function additem(item) {
    if (item.title == "" && item.content == "") return;
    setitem((prev) => {
      // console.log( [...prev, item]);
      return [...prev, item];
    });
  }
  function itemdelete(id) {
    setitem((prev) => {
      return prev.filter((item, index) => {
        if (index !== id) return item;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea additem={additem} />
      {/* {   console.log(items) } */}
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            Ondelete={itemdelete}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
