import { useState } from "react";
import {CustomModal} from "./CustomModal";
import  {DialogModal} from "./DialogModal";

function App() {
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [dialogModalOpen, setDialogModalOpen] = useState(false);

  return (
    <>
    <div className="modal">
      <button onClick={() => setCustomModalOpen(true)}>
        Show Custom Modal
      </button>
      <br />
      <button onClick={() => setDialogModalOpen(true)}>
        Show Dialog Modal
      </button>
      <CustomModal
        isOpen={customModalOpen}
        onClose={() => setCustomModalOpen(false)}
      >
        <p>
          This is<strong> CUSTOM</strong>Modal
        </p>
        <button onClick={() => setCustomModalOpen(false)}>close</button>
      </CustomModal>
      <DialogModal isOpen={dialogModalOpen} onClose={()=>setDialogModalOpen}>
         <p>
          This is<strong> CUSTOM</strong>Modal
        </p>
        <button onClick={() => setDialogModalOpen(false)}>close</button>
      </DialogModal>
    </div>
    </>
  );
}

export default App;
