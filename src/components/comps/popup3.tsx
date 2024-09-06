const Popup3 = ({ onClose }: { onClose: () => void }) => (
    <div className="popup">
      <div className="popup-content">
        <h2>Welcome to Fake Busters!</h2>
        <p>This is your first popup message.</p>
        <button onClick={onClose}>Next</button>
      </div>
    </div>
  );
  
  export default Popup3