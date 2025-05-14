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
          <div className="max-w-xl mb-6 md:mb-0">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#21525f] mb-4">Siamo un&apos;azienda specializzata in soluzioni per l&apos;efficientamento energetico</h3>
            <div className="h-1 w-16 bg-[#77a655] my-6"></div>
          </div>
          
          {/* Indirizzo - per mobile sotto l'azienda, per desktop posizione assoluta */}
          <div className={`md:absolute left-0 md:bottom-20 w-full lg:max-w-[400px] md:w-full mt-6 md:mt-0`}>
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#33596c] tracking-tight">COSA OFFRIAMO</h2>
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
      
      {/* I Vantaggi per il Cliente */}
      <section className="bg-[#21525f] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#77a655] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#b7c1e4] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4">
          {/* Header con stile sofisticato e moderno */}
          <div className="flex flex-col items-center justify-center mb-16 relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24  opacity-20 rounded-full blur-xl"></div>
            <div className="relative z-10 mb-4">
              <h2 className="text-4xl md:text-4xl font-extrabold tracking-wider uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#b7c1e4] pb-2 relative">
                I VANTAGGI
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#77a655] to-transparent"></span>
              </h2>
            </div>
            <div className="relative z-10 flex items-center">
              <div className="h-[2px] w-8 md:w-16 bg-[#77a655] mr-4"></div>
              <h2 className="text-3xl md:text-3xl font-black tracking-wider uppercase text-center">
                <span className="relative">
                  <span className="bg-clip-text  ">PER IL CLIENTE</span>
                  <span className="absolute -inset-1 blur-sm  opacity-30 rounded-lg -z-10"></span>
                </span>
              </h2>
              <div className="h-[2px] w-8 md:w-16 bg-[#77a655] ml-4"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 relative z-10">
            {/* Colonna di sinistra con vantaggi */}
            <div className="p-6 md:p-10 flex flex-col justify-between">
              <div className="bg-[#21525f]/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-[#77a655]">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#77a655]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Risparmio concreto</h3>
                <div className="w-16 h-1 bg-[#77a655] mb-4"></div>
                <p className="text-xl leading-relaxed">
                  sulle bollette<br />
                  e maggiore comfort<br />
                  abitativo
                </p>
              </div>
              
              <div className="bg-[#21525f]/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg mt-8 transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-[#77a655]">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#77a655]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Aumento del valore</h3>
                <div className="w-16 h-1 bg-[#77a655] mb-4"></div>
                <p className="text-xl leading-relaxed">
                  dell&apos;immobile
                </p>
              </div>
            </div>
            
            {/* Colonna centrale con immagini interattive */}
            <div className="bg-gradient-to-b from-[#f0f2ed] to-[#e5ebe3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-3 hover:p-1 transition-all duration-300">
                <div className="overflow-hidden rounded-xl">
                  <Image 
                    src="/H-57_CEOGROUP_Efficentra_-011.jpg" 
                    alt="Dashboard energetica su tablet" 
                    width={600} 
                    height={400}
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-3 hover:p-1 transition-all duration-300">
                <div className="overflow-hidden rounded-xl">
                  <Image 
                    src="/H-57_CEOGROUP_Efficentra_-010.jpg" 
                    alt="Manopola classe energetica" 
                    width={600} 
                    height={400}
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
              <div className="p-3 hover:p-1 transition-all duration-300">
                <div className="overflow-hidden rounded-xl">
                  <Image 
                    src="/H-57_CEOGROUP_Efficentra_-009.jpg" 
                    alt="Consulenza efficientamento energetico" 
                    width={600} 
                    height={400}
                    className="w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
            
            {/* Colonna di destra con altri vantaggi */}
            <div className="p-6 md:p-10 flex flex-col justify-between">
              <div className="relative">
                {/* Elemento decorativo moderno */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#77a655] rounded-full opacity-80 transform translate-x-1/3 -translate-y-1/3"></div>
              </div>
              
              <div className="bg-[#21525f]/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-[#77a655] mt-16">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#77a655]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Accesso facilitato</h3>
                <div className="w-16 h-1 bg-[#77a655] mb-4"></div>
                <p className="text-xl leading-relaxed">
                  a <span className="">bonus e finanziamenti</span>
                </p>
              </div>
              
              <div className="relative my-8">
                {/* Elemento decorativo moderno */}
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#b7c1e4] rounded-full opacity-60 transform -translate-x-1/4 translate-y-1/4"></div>
              </div>
              
              <div className="bg-[#21525f]/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-[#77a655] mt-4">
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[#77a655]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Assistenza <span className="font-normal">tecnica e</span></h3>
                <div className="w-16 h-1 bg-[#77a655] mb-4"></div>
                <p className="text-xl leading-relaxed">
                  amministrativa continua
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sezione Contattaci - Form */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header della sezione */}
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#21525f] uppercase tracking-wide mb-4">Richiedi Informazioni</h2>
              <div className="w-24 h-1 bg-[#77a655] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600">Compila il modulo sottostante per richiedere un preventivo o maggiori informazioni sui nostri servizi</p>
            </div>
            
            {/* Form di contatto */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome *</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655]"
                  placeholder="Inserisci il tuo nome"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="cognome" className="block text-sm font-medium text-gray-700">Cognome *</label>
                <input 
                  type="text" 
                  id="cognome" 
                  name="cognome" 
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655]"
                  placeholder="Inserisci il tuo cognome"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655]"
                  placeholder="La tua email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Telefono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655]"
                  placeholder="Facoltativo"
                />
                <p className="text-xs text-gray-500 mt-1">Campo non obbligatorio</p>
              </div>
              
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="note" className="block text-sm font-medium text-gray-700">Note / Richieste</label>
                <textarea 
                  id="note" 
                  name="note" 
                  rows={4}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655]"
                  placeholder="Inserisci qui eventuali richieste specifiche (facoltativo)"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">Campo non obbligatorio</p>
              </div>
              
              <div className="md:col-span-2 mt-4">
                <div className="flex items-start mb-4">
                  <div className="flex items-center h-5">
                    <input
                      id="privacy"
                      name="privacy"
                      type="checkbox"
                      required
                      className="h-4 w-4 text-[#77a655] border-gray-300 rounded focus:ring-[#77a655]"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="privacy" className="font-medium text-gray-700">Accetto la Privacy Policy *</label>
                    <p className="text-gray-500">Acconsento al trattamento dei dati personali secondo la normativa vigente</p>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full md:w-auto px-8 py-4 bg-[#77a655] text-white font-medium rounded-md shadow hover:bg-[#5d8442] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#77a655] transition-colors duration-300"
                >
                  Invia Richiesta
                </button>
                
                <p className="mt-4 text-sm text-gray-500">* Campi obbligatori</p>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="bg-[#21525f] text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo e info azienda */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-4">
                <Image src="/IconCasa.JPG" alt="Efficentra Icon" width={50} height={50} className="mr-3 shadow-md rounded-lg" />
                <h3 className="text-3xl font-bold">Efficentra</h3>
              </div>
              <p className="text-gray-300 text-center md:text-left">Il centro del risparmio per la tua casa</p>
            </div>
            
            {/* Info di contatto */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-xl font-semibold mb-4 text-[#77a655]">Contatti</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#77a655]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>023560917</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#77a655]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:info@efficentra.it" className="hover:text-[#77a655] transition-colors duration-300">info@efficentra.it</a>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-[#77a655]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>Corso Genova 5, Milano MI 20123</span>
                </div>
              </div>
            </div>
            
            {/* Orari e social */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-xl font-semibold mb-4 text-[#77a655]">Seguici</h4>
              <div className="flex space-x-4 mb-6">
                <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-[#77a655] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-[#77a655] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white bg-opacity-20 p-2 rounded-full hover:bg-[#77a655] transition-colors duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
              </div>
              <div>
                <h5 className="text-lg font-medium mb-2 text-[#77a655]">Orari di apertura</h5>
                <p className="text-gray-300">Lun - Ven: 9:00 - 18:00</p>
                <p className="text-gray-300">Sab - Dom: Chiuso</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Efficentra. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
