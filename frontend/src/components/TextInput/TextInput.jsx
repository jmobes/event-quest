import { useState } from "react";
import "./TextInput.css";

import SearchIcon from "@material-ui/icons/Search";

const TextInput = (props) => {
  const [input, setInput] = useState("");
  const [classname, setClassname] = useState("");

  return (
    <div className="textinput">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        class={`textinput__input ${classname}`}
        onFocus={() => setClassname("textinput__input--focused")}
        onBlur={() => setClassname("")}
        placeholder="enter an address, city, or zip"
      />
      <SearchIcon className="textinput__icon" />
    </div>
  );
};

export default TextInput;
