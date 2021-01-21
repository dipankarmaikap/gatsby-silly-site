import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useSpeechSynthesis } from "react-speech-kit";
const defaultState = [];

export const SoundContext = createContext(defaultState);

export default function SoundContextProvider({ children }) {
  const [activeID, setActiveID] = useState(null);
  const { speak, cancel, speaking } = useSpeechSynthesis({
    onEnd: () => {
      setActiveID(null);
    },
  });
  const [sound, setSound] = useLocalStorage("sound", true);

  const toggleSound = () => {
    setSound(!sound);
  };
  const startSpeaking = (id, text) => {
    if (speaking) {
      cancel();
      speak({ text });
      setActiveID(id);
    } else {
      speak({ text });
      setActiveID(id);
    }
  };
  const cancelSpeak = () => {
    cancel();
    setActiveID(null);
  };
  return (
    <SoundContext.Provider
      value={{
        sound,
        toggleSound,
        startSpeaking,
        cancelSpeak,
        activeID,
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}
