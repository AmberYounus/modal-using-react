import { useState } from "react";
import "./App.css";
import {dialogModal} from "./dialogModal";

function App() {
  const [customModal, setCustomModal] = useState(false);
  const [dialogModal, setDialogModal] = useState(false);

  return (
    <div className="App">
      <button>Show Custom Modal</button>
      <button>Show Dialog Modal</button>
      <customModal></customModal>
    </div>
  );
}

export default App;
