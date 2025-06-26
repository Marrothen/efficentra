/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

// Dati delle card per la dialog
const cardData = {
  caldaie: {
    title: "CALDAIE",
    subtitle: "DI ULTIMA GENERAZIONE",
    image: "/H-57_CEOGROUP_Efficentra_-003.jpg",
    icon: "/Caldia icon 2.png",
    smallTitle: "Comfort immediato, risparmio garantito.",
    description: "Le nostre caldaie rappresentano il massimo dell'efficienza e dell'affidabilità. Sostituiamo il tuo vecchio impianto con modelli di ultima generazione, pensati per offrirti l'ideale comfort termico e una sensibile riduzione dei consumi.",
    features: [
      "Installazione in 48 ore",
      "Sopralluogo tecnico gratuito",
      "Caldaie a condensazione ad alta efficienza",
      "Riduzione dei consumi fino al 40%",
      "Servizio chiavi in mano: dalla fornitura alla prima accensione",
      "Tecnici certificati e assistenza garantita"
    ],
    greenText: "Tecnologia, professionalità e rapidità d'esecuzione al servizio del tuo benessere."
  },
  climatizzatori: {
    title: "CLIMATIZZATORI",
    subtitle: "PER IL RAFFRESCAMENTO",
    image: "/Climatizzatore.jpg",
    icon: "/Climatizzatori icon 2.png",
    smallTitle: "La temperatura perfetta, tutto l'anno.",
    description: "Climatizzatori silenziosi e ad alta efficienza energetica. Soluzioni personalizzate per abitazioni, uffici e attività commerciali. Rapidità e cura nell'installazione.",
    features: [
      "Impianti monosplit e multisplit",
      "Inverter di ultima generazione",
      "50% di detrazione fiscale"
    ],
    greenText: "Servizio chiavi in mano: dalla consulenza tecnica alla messa in funzione."
  },
  fotovoltaico: {
    title: "IMPIANTO",
    subtitle: "FOTOVOLTAICO",
    image: "/impiantofotovoltaico.jpg",
    icon: "/fotovoltaico ifcon 2.png",
    smallTitle: "Energia pulita, risparmio reale.",
    description: "Realizziamo impianti fotovoltaici residenziali e aziendali con componenti ad alta resa, inverter intelligenti e batterie di accumulo opzionali. Offriamo soluzioni chiavi in mano, pensate per garantire autonomia energetica, risparmio immediato e zero burocrazia.",
    features: [
      "Impianti su misura a partire da 3 kW",
      "Inverter e pannelli di ultima generazione",
      "Sistemi di accumulo integrati",
      "Iscrizione alla CER \"Comunità Energetica Rinnovabile\": con la CER si condivide l'energia prodotta, ottenendo incentivi e aumentando il valore del proprio immobile.",
      "Contributo a fondo perduto fino al 40% grazie agli incentivi del GSE",
      "Accesso al Bonus Ristrutturazione 50% o Superbonus (se applicabile)"
    ],
    greenText: "Produci. Risparmia. Guadagna."
  },
  pompe: {
    title: "POMPE",
    subtitle: "DI CALORE",
    image: "/PompeCalore.jpg",
    icon: "/Pompe icon 2.png",
    smallTitle: "Efficienza energetica, tutto l'anno.",
    description: "Le pompe di calore sono una soluzione sostenibile e versatile per il riscaldamento, il raffrescamento e la produzione di acqua calda sanitaria. Ideali per case e abitazioni ed uffici, garantiscono comfort continuo e un notevole risparmio in bolletta.",
    features: [
      "Sistemi aria-acqua e ibridi",
      "Compatibilità con impianti radiatori, a pavimento o fancoil",
      "Installazione rapida e personalizzata",
      "Tecnologie ad alta efficienza energetica",
      "Detrazione del 50% con Bonus Casa"
    ],
    greenText: "Un unico impianto per gestire clima e acqua calda, con il massimo dell'efficienza."
  },
  infissi: {
    title: "SERRAMENTI",
    subtitle: "E INFISSI ISOLANTI",
    image: "/Infissi.jpg",
    icon: "/infissi icon 2.png",
    smallTitle: "Isolamento termico, sicurezza e design.",
    description: "Serramenti in PVC, alluminio e legno-alluminio, progettati per migliorare l'efficienza energetica della tua casa, ridurre i costi di riscaldamento e aumentare il comfort abitativo.",
    features: [
      "Finestre e porte-finestre su misura",
      "Vetri basso emissivi e certificati",
      "Detrazione del 50% con Bonus Infissi"
    ],
    greenText: "Estetica, funzionalità e risparmio: la scelta che fa bene alla casa e al portafoglio"
  },
  pareti: {
    title: "COIBENTAZIONE",
    subtitle: "PARETI E TETTO",
    image: "/pareti.jpg",
    icon: "/pareti icon 2.png",
    smallTitle: "Il primo passo verso una casa ad alte prestazioni.",
    description: "La coibentazione del tetto è fondamentale per ridurre dispersioni termiche, mantenere la temperatura ideale tutto l'anno e accedere ai principali incentivi fiscali.",
    features: [
      "Interventi rapidi e non invasivi",
      "Materiali certificati e isolanti ad alte prestazioni",
      "Accesso al Superbonus (se combinato con altri interventi trainanti) o al Bonus Casa"
    ],
    greenText: "Massimo comfort invernale ed estivo, minimo consumo."
  }
};

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const openDialog = (cardKey: string) => {
    setSelectedCard(cardKey);
    setIsMenuOpen(false); // Chiudi il menu quando si apre la dialog
  };
  
  const closeDialog = () => {
    setSelectedCard(null);
  };

  const scrollToContact = () => {
    closeDialog();
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleServiceMenuClick = (serviceKey: string) => {
    setIsMenuOpen(false); // Chiudi il menu
    setTimeout(() => {
      // Scrolla alla sezione servizi
      const servicesSection = document.querySelector('[data-section="services"]');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Apri la dialog del servizio dopo un breve ritardo
      setTimeout(() => {
        openDialog(serviceKey);
      }, 500);
    }, 100);
  };

  const handleContactsMenuClick = () => {
    setIsMenuOpen(false); // Chiudi il menu
    setTimeout(() => {
      const contactSection = document.getElementById('contact-form');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    setSubmitError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('nome') as string,
      cognome: formData.get('cognome') as string,
      email: formData.get('email') as string,
      telefono: formData.get('telefono') as string || '',
      note: formData.get('note') as string || ''
    };

    try {
      const queryParams = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => {
        if (value) queryParams.append(key, value);
      });

      const response = await fetch(`https://innovationhub.ceogroup.it/api/Efficentra/sendEmail?${queryParams}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        setSubmitMessage('Email inviata con successo! Ti contatteremo presto.');
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Errore nella risposta del server');
      }
    } catch (error) {
      console.error('Errore invio email:', error);
      setSubmitError('Errore durante l\'invio dell\'email. Riprova più tardi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Disabilita lo scroll quando la dialog è aperta
  useEffect(() => {
    if (selectedCard) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup al dismount
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCard]);

  // Handle escape key per chiudere la dialog
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && selectedCard) {
        closeDialog();
      }
    };

    if (selectedCard) {
      document.addEventListener('keydown', handleEscape);
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [selectedCard]);

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
    <>
      {/* Logo per Facebook Open Graph - visibile ai crawler ma nascosto agli utenti */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px', width: '1px', height: '1px' }}>
        <Image 
          src="/logo.JPG" 
          alt="Efficentra - Il centro del risparmio per la tua casa" 
          width={742} 
          height={608}
          priority
        />
      </div>
      <div className={`${selectedCard ? 'blur-sm' : ''} transition-all duration-300`}>
        <main className="flex flex-col">
          {/* Hero Section with Navigation */}
      <div className="bg-[#77a655] text-white flex flex-col justify-center items-center px-4 py-6 md:py-8 relative shadow-xl">
        <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-b from-transparent to-black/5 pointer-events-none"></div>
        
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="absolute top-3 right-3 md:top-1/2 md:right-6 md:-translate-y-1/2 z-[99998] bg-white p-2 md:p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          aria-label="Menu"
        >
          <div className="w-5 h-5 md:w-6 md:h-6 flex flex-col justify-center items-center space-y-1">
            <span className={`block w-4 md:w-6 h-0.5 bg-[#21525f] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-4 md:w-6 h-0.5 bg-[#21525f] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-4 md:w-6 h-0.5 bg-[#21525f] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`fixed top-0 right-0 sm:h-full w-72 sm:w-80 bg-white shadow-2xl transform transition-transform duration-300 z-[99999] ${isMenuOpen && !selectedCard ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Header del menu con pulsante chiusura */}
          <div className="flex justify-between items-center p-6 sm:p-8 border-b border-gray-200">
            <h2 className="text-lg sm:text-xl font-semibold text-[#21525f]">Menu</h2>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Chiudi menu"
            >
              <svg className="w-6 h-6 text-[#21525f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="p-6 sm:p-8 pt-6 sm:pt-8">
            <nav className="space-y-4 sm:space-y-6">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-[#21525f] text-base sm:text-lg font-semibold mb-3 sm:mb-4 pb-2 border-b border-gray-200">Servizi</h3>
                <div className="space-y-1 sm:space-y-2 pl-3 sm:pl-4">
                  <button 
                    onClick={() => handleServiceMenuClick('caldaie')}
                    className="block text-gray-600 hover:text-[#77a655] transition-colors duration-300 py-1.5 sm:py-2 text-sm sm:text-base text-left w-full"
                  >
                    Caldaie
                  </button>
                  <button 
                    onClick={() => handleServiceMenuClick('climatizzatori')}
                    className="block text-gray-600 hover:text-[#77a655] transition-colors duration-300 py-1.5 sm:py-2 text-sm sm:text-base text-left w-full"
                  >
                    Climatizzatori
                  </button>
                  <button 
                    onClick={() => handleServiceMenuClick('fotovoltaico')}
                    className="block text-gray-600 hover:text-[#77a655] transition-colors duration-300 py-1.5 sm:py-2 text-sm sm:text-base text-left w-full"
                  >
                    Impianto fotovoltaico
                  </button>
                  <button 
                    onClick={() => handleServiceMenuClick('pompe')}
                    className="block text-gray-600 hover:text-[#77a655] transition-colors duration-300 py-1.5 sm:py-2 text-sm sm:text-base text-left w-full"
                  >
                    Pompe di calore
                  </button>
                  <button 
                    onClick={() => handleServiceMenuClick('infissi')}
                    className="block text-gray-600 hover:text-[#77a655] transition-colors duration-300 py-1.5 sm:py-2 text-sm sm:text-base text-left w-full"
                  >
                    Serramenti
                  </button>
                  <button 
                    onClick={() => handleServiceMenuClick('pareti')}
                    className="block text-gray-600 hover:text-[#77a655] transition-colors duration-300 py-1.5 sm:py-2 text-sm sm:text-base text-left w-full"
                  >
                    Coibentazione
                  </button>
                </div>              </div>
              
              <div>
                <button 
                  onClick={handleContactsMenuClick}
                  className="block text-[#21525f] hover:text-[#77a655] transition-colors duration-300 py-2 sm:py-3 text-base sm:text-lg font-semibold border-b border-gray-200 text-left w-full"
                >
                  Contatti
                </button>
              </div>
            </nav>
          </div>
        </div>        <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col items-center text-center mt-4 mb-4 md:mt-0 md:mb-0">            <Image 
              src="/CEO_Efficentra_logo-02.svg" 
              alt="Efficentra - Risparmia sui consumi, investi sulla casa" 
              width={400} 
              height={200} 
              className="drop-shadow-lg max-w-[90%] sm:max-w-[80%] md:max-w-[400px] h-auto"
            />
          </div>
        </div>
      </div>
      
      {/* Video Section */}
      <div className="relative">
        {/* Video Container */}
        <div className="relative w-full h-[28vh] sm:h-[35vh] md:h-[70vh] overflow-hidden">
          <video 
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/Efficentra_video.mp4" type="video/mp4" />
            Il tuo browser non supporta i video HTML5.
          </video>
        </div>
        
        {/* Address Section - Attached to video */}
        <div className="bg-[#21525f] text-white">
          <div className="container mx-auto px-4 py-4 sm:py-6">
            <div className="flex items-center justify-center">
              <div className="mr-3 sm:mr-4 flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-6 sm:h-6">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                </svg>
              </div>
              <div className="text-center">
                <p className="font-bold text-base sm:text-lg md:text-xl">Corso Genova 5, Milano | Italia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Cosa Offriamo Section - Modern Design */}
      <div className="bg-gradient-to-b from-[#edf3ec] to-[#e5ebe3]" data-section="services">
        {/* Header */}
        <div className="container mx-auto px-4 pt-12 sm:pt-16 pb-6 sm:pb-8">
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#33596c] tracking-tight text-center">I NOSTRI SERVIZI</h2>
          </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 md:px-8 pb-12 sm:pb-16 relative">
          {/* Prima riga - 3 card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
            {/* Card 1 - Caldaie di ultima generazione */}
            <div 
              className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => openDialog('caldaie')}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image 
                  src="/H-57_CEOGROUP_Efficentra_-003.jpg" 
                  alt="Caldaie di ultima generazione" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Image 
                      src="/Caldia icon.png" 
                      alt="Caldaie icon" 
                      width={48} 
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#33596c] leading-tight">Caldaie di ultima generazione</h3>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655] mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Alta efficienza energetica</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 2 - Climatizzatori per il raffrescamento */}
            <div 
              className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => openDialog('climatizzatori')}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image 
                  src="/Climatizzatore.jpg" 
                  alt="Climatizzatori per il raffrescamento" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Image 
                      src="/Climatizzatori icon.png" 
                      alt="Climatizzatori icon" 
                      width={48} 
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#33596c] leading-tight">Climatizzatori per il raffrescamento</h3>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655] mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Raffrescamento a basso impatto energetico</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 3 - Impianto fotovoltaico */}
            <div 
              className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer sm:col-span-2 md:col-span-1"
              onClick={() => openDialog('fotovoltaico')}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image 
                  src="/impiantofotovoltaico.jpg" 
                  alt="Impianto fotovoltaico" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Image 
                      src="/fotovoltaico ifcon.png" 
                      alt="Fotovoltaico icon" 
                      width={48} 
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#33596c] leading-tight">Impianto fotovoltaico</h3>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655] mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Rendi la tua casa indipendente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seconda riga - 3 card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Card 4 - Pompe di calore */}
            <div 
              className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => openDialog('pompe')}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image 
                  src="/PompeCalore.jpg" 
                  alt="Pompe di calore" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Image 
                      src="/Pompe icon.png" 
                      alt="Pompe icon" 
                      width={48} 
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#33596c] leading-tight">Pompe di calore</h3>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655] mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Clima domestico ideale</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 5 - Serramenti e infissi isolanti */}
            <div 
              className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
              onClick={() => openDialog('infissi')}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image 
                  src="/Infissi.jpg" 
                  alt="Serramenti e infissi isolanti" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Image 
                      src="/infissi icon.png" 
                      alt="Infissi icon" 
                      width={48} 
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#33596c] leading-tight">Serramenti e infissi isolanti</h3>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655] mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Per ridurre la dispersione termica fino al 60%</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Card 6 - Coibentazione pareti e tetto */}
            <div 
              className="group bg-white rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer sm:col-span-2 md:col-span-1"
              onClick={() => openDialog('pareti')}
            >
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <Image 
                  src="/pareti.jpg" 
                  alt="Coibentazione pareti e tetto" 
                  width={600} 
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <Image 
                      src="/pareti icon.png" 
                      alt="Pareti icon" 
                      width={48} 
                      height={48}
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#33596c] leading-tight">Coibentazione pareti e tetto</h3>
                  </div>
                </div>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                  <div className="flex items-center text-[#77a655] mb-2">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm font-medium">Per massimizzare il risparmio energetico</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bonus Features Row */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Incentivi e Pratiche */}
            <div className="bg-[#33596c] text-white rounded-xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-start sm:items-center">
              <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-[#77a655]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-2xl font-semibold mb-2">Pratiche per detrazioni fiscali</h3>
                <p className="text-lg sm:text-xl mb-3 sm:mb-4">Ecobonus e incentivi statali</p>
                <div className="inline-flex items-center bg-[#77a655] px-3 sm:px-4 py-2 rounded-full">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-sm sm:text-base">Risparmia fino al 65%</span>
                </div>
              </div>
            </div>
            
            {/* Servizio Completo */}
            <div className="bg-[#77a655] text-white rounded-xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-start sm:items-center">
              <div className="mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl sm:text-2xl font-semibold mb-2">Servizio &ldquo;chiavi in mano&rdquo;</h3>
                <p className="text-lg sm:text-xl mb-3 sm:mb-4">Dall&apos;idea alla realizzazione</p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">Sopralluogo</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">Progettazione</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">Installazione</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm sm:text-base">Assistenza</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* I Vantaggi per il Cliente */}
      <section className="bg-[#21525f] text-white py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-64 sm:h-64 bg-[#77a655] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#b7c1e4] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-4">
          {/* Header con stile sofisticato e moderno */}
          <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 relative">
            <div className="absolute -top-6 sm:-top-12 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-24 sm:h-24 opacity-20 rounded-full blur-xl"></div>
            <div className="relative z-10 mb-3 sm:mb-4">
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold tracking-wider uppercase text-center bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#b7c1e4] pb-2 relative">
                I VANTAGGI
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#77a655] to-transparent"></span>
              </h2>
            </div>
            <div className="relative z-10 flex items-center">
              <div className="h-[2px] w-6 sm:w-8 md:w-16 bg-[#77a655] mr-3 sm:mr-4"></div>
              <h2 className="text-2xl sm:text-3xl md:text-3xl font-black tracking-wider uppercase text-center">
                <span className="relative">
                  <span className="bg-clip-text">PER IL CLIENTE</span>
                  <span className="absolute -inset-1 blur-sm opacity-30 rounded-lg -z-10"></span>
                </span>
              </h2>
              <div className="h-[2px] w-6 sm:w-8 md:w-16 bg-[#77a655] ml-3 sm:ml-4"></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 relative z-10">
            {/* Colonna di sinistra con vantaggi */}
            <div className="p-4 sm:p-6 md:p-10 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="bg-[#21525f]/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-[#77a655]">
                <div className="mb-4">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#77a655]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Risparmio concreto</h3>
                <div className="w-12 sm:w-16 h-1 bg-[#77a655] mb-4"></div>
                <p className="text-lg sm:text-xl leading-relaxed">
                  sulle bollette<br />
                  e maggiore comfort<br />
                  abitativo
                </p>
              </div>
              
              <div className="bg-[#21525f]/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-[#77a655]">
                <div className="mb-4">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#77a655]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Aumento del valore</h3>
                <div className="w-12 sm:w-16 h-1 bg-[#77a655] mb-4"></div>
                <p className="text-lg sm:text-xl leading-relaxed">
                  dell&apos;immobile
                </p>
              </div>
            </div>
            
            {/* Colonna centrale con immagini interattive */}
            <div className="bg-gradient-to-b from-[#f0f2ed] to-[#e5ebe3] rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-2 sm:p-3 hover:p-1 transition-all duration-300">
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
              <div className="p-2 sm:p-3 hover:p-1 transition-all duration-300">
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
              <div className="p-2 sm:p-3 hover:p-1 transition-all duration-300">
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
            <div className="p-4 sm:p-6 md:p-10 flex flex-col justify-between space-y-6 sm:space-y-8">
              <div className="relative">
                {/* Elemento decorativo moderno */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-[#77a655] rounded-full opacity-80 transform translate-x-1/3 -translate-y-1/3"></div>
              </div>
              
              <div className="bg-[#21525f]/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-[#77a655]">
                <div className="mb-4">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#77a655]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Accesso facilitato</h3>
                <div className="w-12 sm:w-16 h-1 bg-[#77a655] mb-4"></div>
                <p className="text-lg sm:text-xl leading-relaxed">
                  a <span className="">bonus e finanziamenti</span>
                </p>
              </div>
              
              <div className="relative">
                {/* Elemento decorativo moderno */}
                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 bg-[#b7c1e4] rounded-full opacity-60 transform -translate-x-1/4 translate-y-1/4"></div>
              </div>
              
              <div className="bg-[#21525f]/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:translate-y-[-5px] border-l-4 border-[#77a655]">
                <div className="mb-4">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#77a655]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2">Assistenza <span className="font-normal">tecnica e</span></h3>
                <div className="w-12 sm:w-16 h-1 bg-[#77a655] mb-4"></div>
                <p className="text-lg sm:text-xl leading-relaxed">
                  amministrativa continua
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sezione Contattaci - Form */}
      <section id="contact-form" className="bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header della sezione */}
            <div className="text-center mb-8 sm:mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#21525f] uppercase tracking-wide mb-4">Richiedi Informazioni</h2>
              <div className="w-16 sm:w-24 h-1 bg-[#77a655] mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 px-4">Compila il modulo sottostante per richiedere un preventivo o maggiori informazioni sui nostri servizi</p>
            </div>
            
            {/* Form di contatto */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" onSubmit={handleFormSubmit}>
              <div className="space-y-2">
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome *</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  required
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655] text-sm sm:text-base"
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
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655] text-sm sm:text-base"
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
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655] text-sm sm:text-base"
                  placeholder="La tua email"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Telefono</label>
                <input 
                  type="tel" 
                  id="telefono" 
                  name="telefono"
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655] text-sm sm:text-base"
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
                  className="mt-1 block w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:border-[#77a655] text-sm sm:text-base"
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
                
                {/* Messaggi di successo e errore */}
                {submitMessage && (
                  <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-4">
                    <div className="flex">
                      <svg className="w-5 h-5 text-green-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-700 text-sm sm:text-base">{submitMessage}</p>
                    </div>
                  </div>
                )}
                
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-4">
                    <div className="flex">
                      <svg className="w-5 h-5 text-red-400 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p className="text-red-700 text-sm sm:text-base">{submitError}</p>
                    </div>
                  </div>
                )}
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-[#77a655] text-white font-medium rounded-md shadow hover:bg-[#5d8442] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#77a655] transition-colors duration-300 text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Invio in corso...
                    </span>
                  ) : (
                    'Invia Richiesta'
                  )}
                </button>
                
                <p className="mt-4 text-sm text-gray-500">* Campi obbligatori</p>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Footer Section */}
      <footer className="bg-[#21525f] text-white">
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Logo e info azienda */}            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center mb-3 sm:mb-4">                <Image 
                  src="/CEO_Efficentra_logo-02.svg" 
                  alt="Efficentra" 
                  width={280} 
                  height={140} 
                  className="h-auto"
                />
              </div>
            </div>
            
            {/* Info di contatto */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#77a655]">Contatti</h4>
              <div className="space-y-2 sm:space-y-3 flex flex-col items-center md:items-start">
                <div className="flex items-center justify-center md:justify-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#77a655] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '8px' }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span className="text-sm sm:text-base">023560917</span>
                </div>
                <div className="flex items-start justify-center md:justify-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#77a655] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-sm sm:text-base leading-tight">
                    <a href="mailto:info@efficentra.it" className="hover:text-[#77a655] transition-colors duration-300">info@efficentra.it</a>
                  </span>
                </div>
                <div className="flex items-start justify-center md:justify-start">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-[#77a655] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-sm sm:text-base leading-tight">Corso Genova 5, Milano MI 20123</span>
                </div>
              </div>
            </div>
            
            {/* Orari di apertura */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-[#77a655]">Orari di apertura</h4>
              <div className="space-y-1 sm:space-y-2 text-center md:text-left">
                <p className="text-sm sm:text-base">Lun - Ven: 9:00 - 18:00</p>
                <p className="text-sm sm:text-base">Sab - Dom: Chiuso</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 sm:mt-10 pt-4 sm:pt-6 text-center text-xs sm:text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Efficentra. Tutti i diritti riservati.</p>
          </div>
        </div>
      </footer>
        </main>
      </div>
      
      {/* Dialog Modal - Fuori dal blur */}
      {selectedCard && (
        <div 
          className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4 dialog-overlay"
          onClick={closeDialog}
          style={{ 
            left: 0, 
            right: 0, 
            top: 0, 
            bottom: 0,
            width: '100vw',
            height: '100vh',
            overflow: 'hidden'
          }}
        >
          <div 
            className=" w-[95vw] sm:w-full max-w-none sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto rounded-lg relative shadow-2xl"
            style={{ filter: 'none' }}
            onClick={(e) => e.stopPropagation()}
          >
            
            {/* Sezione 1: Logo Efficentra - Stesso layout della pagina principale */}            <div className="bg-[#77a655] px-3 sm:px-6 py-3 sm:py-5 relative">
              <div className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
                <div className="flex flex-col items-center text-center">                  <Image 
                    src="/CEO_Efficentra_logo-02.svg" 
                    alt="Efficentra - Risparmia sui consumi, investi sulla casa" 
                    width={260} 
                    height={130} 
                    className="drop-shadow-lg h-auto max-w-[325px] sm:max-w-[390px]"
                  />
                </div>
              </div>
              

              {/* Close Button */}              <button
                onClick={closeDialog}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors duration-200 cursor-pointer"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Sezione 2: Immagine */}
            <div className="relative h-32 sm:h-56 md:h-82">
              <Image
                src={cardData[selectedCard as keyof typeof cardData].image}
                alt={cardData[selectedCard as keyof typeof cardData].title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Sezione 3: Icona + Titolo */}
            <div className="bg-[#33596c] px-3 sm:px-6 py-3 sm:py-5">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <div className="w-8 h-8 sm:w-16 sm:h-16 flex items-center justify-center flex-shrink-0">
                  <Image
                    src={cardData[selectedCard as keyof typeof cardData].icon}
                    alt="Icon"
                    width={32}
                    height={32}
                    className="w-8 h-8 sm:w-16 sm:h-16"
                  />
                </div>
                <div className="text-white min-w-0 flex-1">
                  <h2 className="text-lg sm:text-3xl font-bold mb-0 sm:mb-1 leading-tight">
                    {cardData[selectedCard as keyof typeof cardData].title}
                  </h2>
                  <p className="text-xs sm:text-lg opacity-90">
                    {cardData[selectedCard as keyof typeof cardData].subtitle}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Sezione 4: Testo */}
            <div className="bg-[#ebf1ea] p-4 sm:p-10 space-y-3 sm:space-y-5">
              {/* Titolo piccolo in bold */}
              {(cardData[selectedCard as keyof typeof cardData] as any).smallTitle && (
                <h3 className="text-[#33596c] font-bold text-base sm:text-xl mb-2 sm:mb-4 leading-tight">
                  {(cardData[selectedCard as keyof typeof cardData] as any).smallTitle}
                </h3>
              )}
              
              <div className="space-y-2 sm:space-y-4">
                <p className="text-gray-700 leading-relaxed text-xs sm:text-base">
                  {cardData[selectedCard as keyof typeof cardData].description}
                </p>
              </div>
              
              <div className="space-y-1 sm:space-y-2">
                {cardData[selectedCard as keyof typeof cardData].features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-[#77a655] font-bold mt-0.5 sm:mt-1 flex-shrink-0 text-xs sm:text-base">•</span>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-base">{feature}</p>
                  </div>
                ))}
              </div>
              
              {/* Testo verde finale */}
              {(cardData[selectedCard as keyof typeof cardData] as any).greenText && (
                <p className="text-[#77a655] font-medium italic text-xs sm:text-base mt-3 sm:mt-6">
                  {(cardData[selectedCard as keyof typeof cardData] as any).greenText}
                </p>
              )}
              
              {/* Bottone RICHIEDI INFORMAZIONI */}
              <div className="flex justify-center pt-3 sm:pt-6">
                <button
                  onClick={scrollToContact}
                  className="px-4 py-2 sm:px-8 sm:py-3 bg-[#77a655] hover:bg-[#6a9549] text-white font-medium rounded-full transition-colors duration-200 text-xs sm:text-sm shadow-md focus:outline-none focus:ring-2 focus:ring-[#77a655] focus:ring-offset-2"
                >
                  RICHIEDI INFORMAZIONI
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
