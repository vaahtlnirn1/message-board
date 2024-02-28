const EditorPanel = ({ newMessage, setNewMessage, handleNewMessageSubmit }) => {
  return (
    <div className="editor-panel">
      <h2>Editor</h2>
      <textarea
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={handleNewMessageSubmit} disabled={!newMessage}>
        Submit
      </button>
    </div>
  );
};

export default EditorPanel;
