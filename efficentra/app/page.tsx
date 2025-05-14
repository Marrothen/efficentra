'use client';

import Image from 'next/image';

// Commentato temporaneamente in quanto non utilizzato
/*
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
*/

export default function Home() {
  // Rimuoviamo il timer del countdown che non viene utilizzato attualmente
  // ma lo teniamo pronto per quando servirà
  /*
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  */

  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-[#77a655] text-white flex flex-col justify-center items-center px-4 py-8 md:px-8 md:py-12 relative shadow-xl z-10">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="flex items-center justify-center mb-4 drop-shadow-lg">
              <Image src="/IconCasa.JPG" alt="Efficentra Icon" width={80} height={80} className="mr-4 shadow-md rounded-lg" />
              <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">Efficentra</h1>
            </div>
            <p className="text-xl md:text-2xl font-light drop-shadow">Il centro del risparmio per la tua casa</p>
          </div>
        </div>
      </div>
      
      {/* Chi Siamo Section */}
      <div className="bg-[#f5f7f2] flex flex-col md:flex-row relative shadow-md">
        <div className="w-full md:w-1/2 relative">
          <Image 
            src="/H-57_CEOGROUP_Efficentra_-000.jpg" 
            alt="Efficentra Moss Wall" 
            width={1000} 
            height={800}
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute top-0 left-0 bg-[#f5f7f275] bg-opacity-70 p-5 md:p-8 m-5 md:m-8">
            <h2 className="text-3xl md:text-5xl font-bold text-[#21525f]">Chi siamo</h2>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center relative">
          <div className="max-w-xl">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#21525f] mb-4">Siamo un&apos;azienda specializzata in soluzioni per l&apos;efficientamento energetico</h3>
            <div className="h-1 w-16 bg-[#77a655] my-6"></div>
          </div>
          <div className="absolute left-0 bottom-16 md:bottom-20 w-full max-w-[400px]">
            <div className="bg-[#21525f] text-white p-6 md:p-8 flex items-center ml-0 md:-ml-24">
              <div className="mr-5">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                </svg>
              </div>
              <div>
                <p className="font-bold text-lg md:text-xl">CORSO GENOVA 17, MILANO</p>
                <p className="font-bold text-lg md:text-xl">ITALIA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cosa Offriamo Section - Modern Design */}
      <div className="bg-gradient-to-b from-[#edf3ec] to-[#e5ebe3]">
        {/* Header */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          <div className="flex items-center justify-center mb-12">
            <div className="h-1 w-16 bg-[#77a655] mr-6"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#33596c] tracking-tight">COSA OFFRIAMO</h2>
            <div className="h-1 w-16 bg-[#77a655] ml-6"></div>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 pb-16 relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Sistemi di climatizzazione */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-3"></div>
                <Image 
                  src="/H-57_CEOGROUP_Efficentra_-003.jpg" 
                  alt="Caldaie e sistemi di climatizzazione" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-2 text-[#77a655]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-[#33596c]">Caldaie e climatizzazione</h3>
                </div>
                <p className="text-[#33596c] text-lg mb-2">A basso impatto energetico</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655]">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Caldaie ad alta efficienza e pompe di calore</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 2 - Impianti fotovoltaici */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-3 bg-[#d9dce4] z-10"></div>
                <Image 
                  src="/H-57_CEOGROUP_Efficentra_-004.jpg" 
                  alt="Pannelli fotovoltaici" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-2 text-[#77a655]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-[#33596c]">Impianti fotovoltaici</h3>
                </div>
                <p className="text-[#33596c] text-lg">Su misura, con o senza accumulo</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655]">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Energie rinnovabili</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Feature 3 - Serramenti isolanti */}
            <div className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
              <div className="relative h-64 overflow-hidden">
                <Image 
                  src="/H-57_CEOGROUP_Efficentra_-002.jpg" 
                  alt="Serramenti isolanti" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <svg className="w-6 h-6 mr-2 text-[#77a655]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h.01a1 1 0 011 1v2h1v-2a1 1 0 011-1h.01a1 1 0 011 1v2h1v-2a1 1 0 011-1h.01a1 1 0 011 1v2h1zm-1-5H8v4h7V8z" clipRule="evenodd" />
                  </svg>
                  <h3 className="text-2xl font-semibold text-[#33596c]">Serramenti isolanti</h3>
                </div>
                <p className="text-[#33596c] text-lg">Per ridurre la dispersione termica</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655]">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Riduzione fino al 60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bonus Features Row */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Incentivi e Pratiche */}
            <div className="bg-[#33596c] text-white rounded-xl p-8 shadow-lg flex items-center">
              <div className="mr-6">
                <svg className="w-16 h-16 text-[#77a655]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-2">Pratiche per detrazioni fiscali</h3>
                <p className="text-xl mb-4">Ecobonus e incentivi statali</p>
                <div className="inline-flex items-center bg-[#77a655] px-4 py-2 rounded-full">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Risparmia fino al 65%</span>
                </div>
              </div>
            </div>
            
            {/* Servizio Completo */}
            <div className="bg-[#77a655] text-white rounded-xl p-8 shadow-lg flex items-center">
              <div className="mr-6">
                <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-2">Servizio &ldquo;chiavi in mano&rdquo;</h3>
                <p className="text-xl mb-4">Dall&apos;idea alla realizzazione</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Sopralluogo</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Progettazione</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Installazione</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Assistenza</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Countdown Section - Più compatta 
      <div className="bg-[#21525f] text-white py-6 md:py-10 flex flex-col justify-center items-center px-4 md:px-8">
        <div className="w-full max-w-5xl mx-auto flex flex-col justify-center items-center">
          <div className="text-center">
            <div className="w-full mb-6 md:mb-8">
              <div className="flex flex-col md:flex-row items-center justify-center mb-4 md:mb-6">
                <div className="mb-3 md:mb-0 md:mr-6 flex items-center">
                  <DigitalNumber value="Mancano" size="small" />
                </div>
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.anni.toString().padStart(2, '0')} size="small" />
                    <div className="uppercase text-xs md:text-sm mt-2 tracking-wide font-bold">ANNI</div>
                  </div>
                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.mesi.toString().padStart(2, '0')} size="small" />
                    <div className="uppercase text-xs md:text-sm mt-2 tracking-wide font-bold">MESI</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-b border-white/40 py-4 md:py-8 w-full mb-6 md:mb-10">
              <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto">
                <div className="flex flex-wrap items-center justify-center gap-1 md:gap-3">
                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.giorni.toString().padStart(2, '0')} size="small" />
                    <div className="uppercase text-[10px] md:text-xs mt-1 md:mt-2 tracking-wide font-bold">GIORNI</div>
                  </div>
                  
                  <div className="flex items-center self-start mt-0 md:mt-1">
                    <DigitalNumber value=":" size="small" />
                  </div>

                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.ore.toString().padStart(2, '0')} size="small" />
                    <div className="uppercase text-[10px] md:text-xs mt-1 md:mt-2 tracking-wide font-bold">ORE</div>
                  </div>
                  
                  <div className="flex items-center self-start mt-0 md:mt-1">
                    <DigitalNumber value=":" size="small" />
                  </div>

                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.minuti.toString().padStart(2, '0')} size="small" />
                    <div className="uppercase text-[10px] md:text-xs mt-1 md:mt-2 tracking-wide font-bold">MINUTI</div>
                  </div>
                  
                  <div className="flex items-center self-start mt-0 md:mt-1">
                    <DigitalNumber value=":" size="small" />
                  </div>

                  <div className="flex flex-col items-center">
                    <DigitalNumber value={timeLeft.secondi.toString().padStart(2, '0')} size="small" />
                    <div className="uppercase text-[10px] md:text-xs mt-1 md:mt-2 tracking-wide font-bold">SECONDI</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 md:mt-8 flex justify-center w-full">
              <div className="flex justify-center">
                <DigitalNumber value="Sei ancora in tempo?" size="small" />
              </div>
            </div>
          </div>
        </div>
      </div>*/}
    </main>
  );
}
