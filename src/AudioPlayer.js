import { useEffect } from 'react';

const AudioPlayer = () => {
  useEffect(() => {
    const audio = new Audio('./audio.mp3'); // Substitua pelo caminho do arquivo de áudio desejado
    audio.loop = true;
    audio.play();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  return null;
};

export default AudioPlayer;
