'use client';

import { useState, useEffect } from 'react';
import DigitalNumber from './components/DigitalNumber';

const targetDate = new Date('2030-01-01T00:00:00');

const calculateTimeLeft = () => {
  const difference = targetDate.getTime() - new Date().getTime();
  
  if (difference < 0) {
    return {
      anni: 0,
      mesi: 0,
      giorni: 0,
      ore: 0,
      minuti: 0,
      secondi: 0
    };
  }

  return {
    anni: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
    mesi: Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12),
    giorni: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
    ore: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minuti: Math.floor((difference / (1000 * 60)) % 60),
    secondi: Math.floor((difference / 1000) % 60)
  };
};

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Funzione di countdown semplice senza altre funzionalità

  return (
    <main className="flex flex-col">
      {/* Countdown Section - Full Page */}
      <div className="bg-[#21525f] text-white min-h-screen flex flex-col justify-center items-center px-8 py-20">
        <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="w-full mb-16">
              <div className="flex items-center justify-center mb-12">
                <div className="mr-12 flex items-center">
                  <DigitalNumber value="Mancano" size="large" />
                </div>
                <div className="flex items-center gap-20">
                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.anni.toString().padStart(2, '0')} size="large" />
                    <div className="uppercase text-2xl mt-6 tracking-wide font-bold">ANNI</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.mesi.toString().padStart(2, '0')} size="large" />
                    <div className="uppercase text-2xl mt-6 tracking-wide font-bold">MESI</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-b border-white/40 py-16 w-full mb-16">
              <div className="flex items-center justify-center max-w-7xl mx-auto">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.giorni.toString().padStart(2, '0')} size="large" />
                    <div className="uppercase text-2xl mt-6 tracking-wide font-bold">GIORNI</div>
                  </div>
                  
                  <div className="flex items-center self-start mt-4">
                    <DigitalNumber value=":" size="large" />
                  </div>

                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.ore.toString().padStart(2, '0')} size="large" />
                    <div className="uppercase text-2xl mt-6 tracking-wide font-bold">ORE</div>
                  </div>
                  
                  <div className="flex items-center self-start mt-4">
                    <DigitalNumber value=":" size="large" />
                  </div>

                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.minuti.toString().padStart(2, '0')} size="large" />
                    <div className="uppercase text-2xl mt-6 tracking-wide font-bold">MINUTI</div>
                  </div>
                  
                  <div className="flex items-center self-start mt-4">
                    <DigitalNumber value=":" size="large" />
                  </div>

                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.secondi.toString().padStart(2, '0')} size="large" />
                    <div className="uppercase text-2xl mt-6 tracking-wide font-bold">SECONDI</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 flex justify-center w-full">
              <div className="flex justify-center">
                <DigitalNumber value="Sei ancora in tempo?" size="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
