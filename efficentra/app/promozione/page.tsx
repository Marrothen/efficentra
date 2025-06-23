'use client';

import Link from 'next/link';
import DigitalNumber from '../components/DigitalNumber';

export default function PromozionePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#77a655] to-[#33596c] flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 drop-shadow-lg">
          Promozione Speciale
        </h1>
        
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h2 className="text-2xl md:text-3xl text-white mb-6">
            Sconto Limitato Nel Tempo
          </h2>
          
          {/* Display digitale con percentuale di sconto */}
          <div className="flex flex-col items-center space-y-6">
            <div className="text-white text-lg md:text-xl mb-2">
              Risparmia fino al:
            </div>
            
            <div className="bg-black/50 p-6 rounded-xl">
              <DigitalNumber value="50%" size="large" />
            </div>
            
            <div className="text-white text-sm md:text-base opacity-90">
              Su caldaie e climatizzatori
            </div>
          </div>
        </div>

        {/* Esempi di utilizzo del componente */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-xl md:text-2xl text-white mb-6">
            Esempi DigitalNumber Component
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Small size */}
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white text-sm mb-2">Size: Small</div>
              <div className="bg-black/50 p-3 rounded">
                <DigitalNumber value="123" size="small" />
              </div>
            </div>
            
            {/* Medium size */}
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white text-sm mb-2">Size: Medium</div>
              <div className="bg-black/50 p-3 rounded">
                <DigitalNumber value="456" size="medium" />
              </div>
            </div>
            
            {/* Large size */}
            <div className="bg-black/30 p-4 rounded-lg">
              <div className="text-white text-sm mb-2">Size: Large</div>
              <div className="bg-black/50 p-3 rounded">
                <DigitalNumber value="789" size="large" />
              </div>
            </div>
          </div>
        </div>

        {/* Countdown timer esempio */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-xl md:text-2xl text-white mb-6">
            Countdown Timer
          </h3>
          
          <div className="flex justify-center items-center space-x-4">
            <div className="text-center">
              <div className="text-white text-sm mb-2">Giorni</div>
              <div className="bg-black/50 p-3 rounded">
                <DigitalNumber value="07" size="medium" />
              </div>
            </div>
            
            <div className="text-white text-2xl">:</div>
            
            <div className="text-center">
              <div className="text-white text-sm mb-2">Ore</div>
              <div className="bg-black/50 p-3 rounded">
                <DigitalNumber value="23" size="medium" />
              </div>
            </div>
            
            <div className="text-white text-2xl">:</div>
            
            <div className="text-center">
              <div className="text-white text-sm mb-2">Minuti</div>
              <div className="bg-black/50 p-3 rounded">
                <DigitalNumber value="45" size="medium" />
              </div>
            </div>
          </div>
        </div>

        {/* Testo e lettere */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <h3 className="text-xl md:text-2xl text-white mb-6">
            Testo Digitale
          </h3>
          
          <div className="space-y-4">
            <div className="bg-black/50 p-4 rounded">
              <DigitalNumber value="EFFICENTRA" size="medium" />
            </div>
            
            <div className="bg-black/50 p-4 rounded">
              <DigitalNumber value="OFFERTA 2025" size="small" />
            </div>
          </div>
        </div>        {/* Bottone per tornare alla home */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-block bg-white text-[#33596c] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Torna alla Home
          </Link>
        </div>
      </div>
    </div>
  );
}
