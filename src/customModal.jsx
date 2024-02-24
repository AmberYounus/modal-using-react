import { useEffect, useState } from "react";

function CustomModal({onClose}) {
  useEffect(() => {
    function handler(e) {
      if (e.key === "escape") onClose();
    }
    document.addEventListener("keydown", handler);
  });
}
