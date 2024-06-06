import { useState } from "react";

function MessageBoard() {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  //let arr = [];
  const handleInput = (e) => {
    setInputMessage(e.target.value);
  };

  const handleClick = () => {
    const newMessages = [...messages, inputMessage];
    setMessages(newMessages);
    setInputMessage("");
  };

  const handleDelete = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={handleInput}
            value={inputMessage}
          />
        </label>
        <button className="submit-message-button" onClick={handleClick}>
          Submit
        </button>
      </div>
      {messages.map((message, index) => (
        <div key={index} className="board">
          <div className="message">
            <h1>{message}</h1>
            <button
              className="delete-button"
              onClick={() => handleDelete(index)}
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageBoard;
