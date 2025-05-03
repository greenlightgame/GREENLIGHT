
import { useState } from "react";
import "./index.css";

const obstacles = [
  {
    title: "Forest of Maybes",
    question: "What does 'maybe' mean in our world?",
    options: ["No", "Yes", "Depends", "Ask again"],
    answer: "Yes"
  },
  {
    title: "Dictionary Dungeon",
    question: "Which word best describes him?",
    options: ["Technophile", "Logophile", "Bibliophile", "Anglophile"],
    answer: "Logophile"
  },
  {
    title: "Slytherin Riddle Room",
    question: "Which trait is most Slytherin, and most like us?",
    options: ["Bravery", "Loyalty", "Ambition", "Wisdom"],
    answer: "Ambition"
  },
  {
    title: "Cross-Border Bridge",
    question: "How do you say 'I love you' the Argentine-Brazilian way?",
    options: ["Eu te amo, che", "Oi, mi amor", "Amor lindo", "Che, eu te amo"],
    answer: "Che, eu te amo"
  },
  {
    title: "The Archer’s Trial",
    question: "Which lyric is from Taylor Swift's 'The Archer'?",
    options: [
      "I've been the archer, I've been the prey",
      "You're the reason for the teardrops on my guitar",
      "Loving him was red",
      "I'm a blank space, baby"
    ],
    answer: "I've been the archer, I've been the prey"
  }
];

export default function GreenlightGame() {
  const [step, setStep] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleAnswer = (option) => {
    if (option === obstacles[step].answer) {
      if (step + 1 < obstacles.length) {
        setStep(step + 1);
      } else {
        setComplete(true);
      }
    } else {
      alert("Oops! Try again — maybe means yes, remember?");
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#d1fae5', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
      <div style={{ maxWidth: '28rem', width: '100%', textAlign: 'center', backgroundColor: 'white', borderRadius: '1rem', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ padding: '1.5rem' }}>
          {!complete ? (
            <>
              <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#065f46', marginBottom: '1rem' }}>
                {obstacles[step].title}
              </h1>
              <p style={{ marginBottom: '1rem', color: '#047857' }}>{obstacles[step].question}</p>
              <div style={{ display: 'grid', gap: '0.5rem' }}>
                {obstacles[step].options.map((option, i) => (
                  <button key={i} onClick={() => handleAnswer(option)} style={{ backgroundColor: '#059669', color: 'white', padding: '0.5rem 1rem', borderRadius: '0.5rem', border: 'none', cursor: 'pointer' }}>
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <h1 style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#065f46' }}>You found him!</h1>
              <p style={{ marginTop: '1rem', color: '#047857' }}>
                Through forests, riddles, and lyrics — you followed the green light.
                And maybe? It was always a yes.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
