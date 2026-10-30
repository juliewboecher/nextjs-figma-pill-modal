"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.css";

// Figma: the component "Modal".
// Open it with showModal() (step 1.1), and style it with your tokens (step 1.3).
export default function Modal({
  isOpen,
  title = "Modal",
  description = "",
  onClose,
}) {
  const dialogRef = useRef(null);
  const closeTimerRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (!dialog) return undefined;

    if (isOpen && !dialog.open) {
      setIsClosing(false);
      dialog.showModal();
    }

    return () => clearTimeout(closeTimerRef.current);
  }, [isOpen]);

  function closeModal() {
    const dialog = dialogRef.current;

    if (!dialog?.open || isClosing) return;

    setIsClosing(true);
    closeTimerRef.current = setTimeout(() => {
      dialog.close();
      setIsClosing(false);
      onClose();
    }, 180);
  }

  function handleCancel(event) {
    event.preventDefault();
    closeModal();
  }

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) closeModal();
  }

  return (
    <dialog
      ref={dialogRef}
      className={`${styles.modal} ${isClosing ? styles.closing : ""}`}
      aria-labelledby="modal-title"
      onCancel={handleCancel}
      onClick={handleBackdropClick}
    >
      <div className={styles.content}>
        <div className={styles.separator} aria-hidden="true" />
        <h2 id="modal-title">{title}</h2>
        <p>{description}</p>
        <button type="button" className={styles.close} onClick={closeModal}>
          Luk
        </button>
      </div>
    </dialog>
  );
}
