import { useState } from "react";
function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");
  const [messageList, setMessageList] = useState([]);
  const deleteMessage = (messageIndex) => {
    const newMessage = [...messageList];
    newMessage.splice(messageIndex, 1);
    setMessageList(newMessage);
  };
  const handleMessage = (event) => {
    setMessageInput(event.target.value);
    console.log(event.target.value);
  };
  const addMessage = (event) => {
    event.preventDefault();
    const newMessage = [...messageList];
    newMessage.push(messageInput);
    setMessageList(newMessage);
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
            value={messageInput}
            onChange={handleMessage}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div className="board">
        {messageList.map((item, index) => {
          return (
            <div className="message" key={index}>
              <h1>Hello all ! This is {item} message.</h1>
              <button
                className="delete-button"
                onClick={() => {
                  deleteMessage(index);
                }}
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
