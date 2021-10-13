import React, { useState } from "react";
import "./styles.css";

var emojiList = {
  "😀": "Grinng",
  "😉": "Winking",
  "🤩": "Star-struck",
  "😍": "Loving",
  "😇": "Angelic smiley",
  "😗": "Kissing",
  "😵": "Dizzy",
  "😒": "Unamused",
  "😌": "Relieved",
  "😪": "Sleepy",
  "😲": "Astonished"
};

var emojis = Object.keys(emojiList);

export default function App() {
  const [typeReader, setTypeReader] = useState("");
  const [meaning, setMeaning] = useState("translation will appear here..");

  function typeEventHandler(event) {
    var emoji = event.target.value;
    setTypeReader(emoji);

    if (emoji in emojiList) {
      setMeaning(emojiList[emoji]);
    } else {
      setMeaning("we don't have this in our list");
    }
    //console.log(emojiList[emoji]);
  }
  function emojiClickHandler(emoji) {
    setMeaning(emojiList[emoji]);
    //console.log(emoji);
  }

  return (
    <div className="App">
      <h1>Emoji Reader</h1>
      <h4>
        Enter the emoji you want to search or click on the emojis given below to
        know the meaning of them.
      </h4>
      <input
        onChange={typeEventHandler}
        value={typeReader}
        placeholder="Enter the emoji you want to search"
        style={{
          padding: "1em",
          minWidth: "80%"
        }}
      />
      <hr></hr>
      <h2>{typeReader}</h2>
      <h3>{meaning}</h3>{" "}
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
        >
          {" "}
          {emoji}{" "}
        </span>
      ))}
    </div>
  );
}
