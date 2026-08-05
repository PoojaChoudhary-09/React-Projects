import React, { useImperativeHandle, useRef } from "react";

const ResultModal = React.forwardRef(function ResultModal({ result, targetTime, timeLeft }, ref) {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    showModal() {
      dialogRef.current?.showModal();
    },
    open() {
      dialogRef.current?.showModal();
    },
    close() {
      dialogRef.current?.close();
    }
  }));

  const secondsLeft = (timeLeft / 1000).toFixed(1);

  return (
    <dialog ref={dialogRef} className="result-modal">
      <h2>{result === "lost" ? "You lost!" : "Challenge stopped"}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        {result === "lost"
          ? "You ran out of time."
          : `You stopped the timer with ${secondsLeft} seconds left.`}
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
