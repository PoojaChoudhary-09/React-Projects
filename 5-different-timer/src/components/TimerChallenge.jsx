import { useEffect, useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const [challengeState, setChallengeState] = useState("idle");
  const [modalInfo, setModalInfo] = useState(null);

  const timerIsActive = challengeState === "active";
  const formattedTime = (timeRemaining / 1000).toFixed(1);

  useEffect(() => {
    if (challengeState !== "active") {
      return;
    }

    const timerId = window.setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 10) {
          window.clearInterval(timerId);
          setChallengeState("lost");
          setModalInfo({ result: "lost", timeLeft: 0 });
          return 0;
        }

        return prevTime - 10;
      });
    }, 10);

    return () => window.clearInterval(timerId);
  }, [challengeState]);

  useEffect(() => {
    if (modalInfo && dialog.current) {
      dialog.current.showModal();
    }
  }, [modalInfo]);

  function handleStart() {
    setTimeRemaining(targetTime * 1000);
    setModalInfo(null);
    setChallengeState("active");
  }

  function handleStop() {
    if (challengeState !== "active") {
      return;
    }

    const timeLeft = timeRemaining;
    setChallengeState("stopped");
    setModalInfo({ result: "stopped", timeLeft });
  }

  return (
    <>
      {modalInfo && (
        <ResultModal
          ref={dialog}
          targetTime={targetTime}
          result={modalInfo.result}
          timeLeft={modalInfo.timeLeft}
        />
      )}

      <section className="challenge">
        <h2>{title}</h2>
        {challengeState === "lost" && <p>You lost!</p>}
        {challengeState === "stopped" && <p>Challenge stopped</p>}

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          Time remaining: {formattedTime} second{formattedTime !== "1.0" ? "s" : ""}
        </p>

        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>

        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}