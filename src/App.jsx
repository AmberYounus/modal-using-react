import { useState } from "react";
import "./App.css";
import { dialogModal } from "./dialogModal";
import { customModal } from "./customModal";

function App() {
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [dialogModalOpen, setDialogModalOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setCustomModalOpen(true)}>
        Show Custom Modal
      </button>
      <br />
      <button onClick={() => setDialogModalOpen(true)}>
        Show Dialog Modal
      </button>
      <customModal
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
      >
        <p>
          This is<strong>CUSTOM</strong>Modal
        </p>
        <button onClick={() => setCustomModalOpen(false)}>close</button>
      </customModal>
    </div>
  );
}

export default App;
