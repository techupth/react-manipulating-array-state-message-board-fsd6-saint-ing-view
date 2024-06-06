import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageShow, setMessageShow] = useState([]);

  const handleMessageShow = (event) => {
    let newMessageShow = [...messageShow];
    newMessageShow.push(messageInput);
    setMessageShow(newMessageShow);
    setMessageInput(" ");
  };
  const handleKeyDownMessageShow = (event) => {
    if (event.key === "Enter") {
      handleMessageShow();
    }
  };
  const deleteMessageShow = (messageIndex) => {
    let newMessageShow = [...messageShow];
    newMessageShow.splice(messageIndex, 1);
    setMessageShow(newMessageShow);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event) => setMessageInput(event.target.value)}
            onKeyDown={handleKeyDownMessageShow}
            value={messageInput}
          />
        </label>
        <button className="submit-message-button" onClick={handleMessageShow}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageShow.map((message, index) => (
          <div className="message">
            <h1 key={index}>{message}</h1>
            <button
              className="delete-button"
              onClick={() => {
                deleteMessageShow(index);
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
