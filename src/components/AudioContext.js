import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

// Create Context
const AudioContext = createContext();

// Provider Component
export const AudioProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(error => {
                    console.error("Audio playback error:", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, []);

    return (
        <AudioContext.Provider value={{ isPlaying, toggleAudio, audioRef }}>
            {children}
            <audio ref={audioRef} src="/audio-clip.mp3" preload="auto" loop />
        </AudioContext.Provider>
    );
};

// Custom Hook for consuming context
export const useAudio = () => useContext(AudioContext);
