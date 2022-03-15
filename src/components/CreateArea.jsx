import React, { useState } from "react";
function CreateArea(props) {
  const [title, content] = useState({ title: "", content: "" });
  function change(event) {
    const { name, value } = event.target;

    content((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function submit(event) {
    props.additem(title);
    event.preventDefault();
    // console.log(title);
    content({
      title: "",
      content: ""
    });
  }
  return (
    <div>
      <form onSubmit={submit}>
        <input
          onChange={change}
          name="title"
          placeholder="Title"
          value={title.title}
        />
        <textarea
          onChange={change}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={title.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
