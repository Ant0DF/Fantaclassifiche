import { useState } from 'react';

// Tipi per le icone
interface IconProps {
  className?: string;
}

// Componenti Icone (Senza librerie esterne per evitare errori di import)
const Trophy = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>);
const Crown = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>);
const Medal = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>);
const Star = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const Music = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>);
const Sparkles = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>);
const Users = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const X = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);

// Tipi per i dati
interface RankData {
  rank: number;
  name: string;
  score: number;
  team?: string[]; // <-- Aggiunto il campo per la squadra
}

interface CompetitionData {
  2024: RankData[];
  2025: RankData[];
  2026: RankData[];
}

interface MockData {
  fantasanremo: CompetitionData;
  fantaeurovision: CompetitionData;
}

// Dati (Mock Data) con le Squadre aggiunte
const mockData: MockData = {
  fantasanremo: {
    2024: [
      { rank: 1, name: "Matteo", score: 1783, team: ["Angelina Mango", "Geolier", "Annalisa", "Ghali", "Irama"] },
      { rank: 2, name: "Giuseppe", score: 1763, team: ["Mahmood", "Loredana Bertè", "Emma", "Dargen D'Amico", "The Kolors"] },
      { rank: 3, name: "Antonio", score: 1741, team: ["Ricchi e Poveri", "Il Tre", "Rose Villain", "Alfa", "Gazzelle"] }
    ],
    2025: [
      { rank: 1, name: "Antonio", score: 2102, team: ["Cantante A", "Cantante B", "Cantante C", "Cantante D", "Cantante E"] },
      { rank: 2, name: "Giuseppe", score: 2100, team: ["Cantante F", "Cantante G", "Cantante H", "Cantante I", "Cantante J"] },
      { rank: 3, name: "Claudia", score: 1752, team: ["Cantante K", "Cantante L", "Cantante M", "Cantante N", "Cantante O"] }
    ],
    2026: [
      { rank: 1, name: "Antonio", score: 2446, team: ["Da Definire 1", "Da Definire 2", "Da Definire 3", "Da Definire 4", "Da Definire 5"] },
      { rank: 2, name: "Matteo", score: 2339, team: ["Da Definire", "Da Definire", "Da Definire", "Da Definire", "Da Definire"] },
      { rank: 3, name: "Giuseppe", score: 2335, team: ["Da Definire", "Da Definire", "Da Definire", "Da Definire", "Da Definire"] }
    ]
  },
  fantaeurovision: {
    2024: [
      { rank: 1, name: "???", score: 0 },
      { rank: 2, name: "???", score: 0 },
      { rank: 3, name: "???", score: 0 }
    ],
    2025: [
      { rank: 1, name: "Giuseppe", score: 583, team: ["Svizzera (Nemo)", "Croazia (Baby Lasagna)", "Ucraina", "Italia", "Francia"] },
      { rank: 2, name: "Antonio", score: 534, team: ["Irlanda", "Svezia", "Armenia", "Grecia", "Regno Unito"] },
      { rank: 3, name: "Matteo", score: 495, team: ["Spagna", "Norvegia", "Austria", "Portogallo", "Finlandia"] }
    ],
    2026: [
      { rank: 1, name: "In Arrivo", score: 0 },
      { rank: 2, name: "In Arrivo", score: 0 },
      { rank: 3, name: "In Arrivo", score: 0 }
    ]
  }
};

interface PodiumStepProps {
  rank: number;
  name: string;
  score: number;
  delay: number;
  onClick: () => void;
}

const PodiumStep = ({ rank, name, score, delay, onClick }: PodiumStepProps) => {
  const isFirst = rank === 1;
  const isSecond = rank === 2;

  const heightClass = isFirst ? 'h-48 md:h-56' : isSecond ? 'h-36 md:h-44' : 'h-28 md:h-32';
  const colorClass = isFirst 
    ? 'bg-gradient-to-t from-yellow-600 to-yellow-400 text-yellow-950 border-yellow-300' 
    : isSecond 
      ? 'bg-gradient-to-t from-gray-400 to-gray-200 text-gray-800 border-gray-100' 
      : 'bg-gradient-to-t from-orange-700 to-orange-400 text-orange-950 border-orange-300';
  
  const Icon = isFirst ? Crown : Medal;

  return (
    <div 
      className="flex flex-col items-center justify-end w-28 md:w-36 animate-slide-up-fade opacity-0 fill-mode-forwards cursor-pointer group/step"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {/* Informazioni Giocatore */}
      <div className="flex flex-col items-center mb-4 text-center z-10 transition-all duration-300 group-hover/step:-translate-y-3 group-hover/step:scale-105">
        <div className={`p-3 rounded-full mb-2 bg-gray-800/80 backdrop-blur-sm border-2 transition-colors ${isFirst ? 'border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)] group-hover/step:bg-yellow-900/50' : isSecond ? 'border-gray-300 group-hover/step:bg-gray-700' : 'border-orange-400 group-hover/step:bg-orange-900/50'}`}>
          <Icon className={`w-6 h-6 md:w-8 md:h-8 ${isFirst ? 'text-yellow-400' : isSecond ? 'text-gray-300' : 'text-orange-400'}`} />
        </div>
        <span className="font-bold text-white text-sm md:text-base truncate w-full px-1">{name}</span>
        <span className="text-xs md:text-sm text-gray-400 font-mono mt-1 bg-gray-900/50 px-2 py-1 rounded-full border border-gray-700">
          {score} pt
        </span>
        
        {/* Etichetta "Vedi Squadra" che appare al passaggio del mouse */}
        <div className="mt-2 flex items-center gap-1 text-[10px] md:text-xs font-bold text-indigo-400 opacity-0 group-hover/step:opacity-100 transition-opacity bg-indigo-900/40 px-2 py-1 rounded-full border border-indigo-500/30">
          <Users className="w-3 h-3" /> Squadra
        </div>
      </div>

      {/* Blocco Podio */}
      <div className={`w-full ${heightClass} ${colorClass} rounded-t-lg border-t-4 shadow-lg flex items-start justify-center pt-4 relative overflow-hidden group-hover/step:brightness-110 transition-all`}>
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"></div>
        <span className="text-3xl md:text-5xl font-black opacity-80 drop-shadow-md">
          {rank}
        </span>
      </div>
    </div>
  );
};

interface YearSectionProps {
  year: keyof CompetitionData;
  data: RankData[];
  onPlayerClick: (player: RankData) => void;
}

const YearSection = ({ year, data, onPlayerClick }: YearSectionProps) => {
  const podiumOrder = [data[1], data[0], data[2]];

  return (
    <div className="mb-16 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-indigo-500"></div>
        <h2 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 drop-shadow-sm">
          Edizione {year}
        </h2>
        <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-purple-500"></div>
      </div>
      
      <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-gray-700/50 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-900/0 to-transparent pointer-events-none"></div>

        <div className="flex items-end justify-center gap-2 md:gap-6 pt-12 md:pt-20">
          <PodiumStep rank={podiumOrder[0].rank} name={podiumOrder[0].name} score={podiumOrder[0].score} delay={400} onClick={() => onPlayerClick(podiumOrder[0])} />
          <PodiumStep rank={podiumOrder[1].rank} name={podiumOrder[1].name} score={podiumOrder[1].score} delay={100} onClick={() => onPlayerClick(podiumOrder[1])} />
          <PodiumStep rank={podiumOrder[2].rank} name={podiumOrder[2].name} score={podiumOrder[2].score} delay={700} onClick={() => onPlayerClick(podiumOrder[2])} />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'fantasanremo' | 'fantaeurovision'>('fantasanremo');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<RankData | null>(null);

  const handleTabChange = (tab: 'fantasanremo' | 'fantaeurovision') => {
    if (tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 300);
  };

  const currentData = activeTab === 'fantasanremo' ? mockData.fantasanremo : mockData.fantaeurovision;
  const years: (keyof CompetitionData)[] = [2026, 2025, 2024];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans selection:bg-indigo-500/30">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUpFade {
          0% { opacity: 0; transform: translateY(50px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes popIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-slide-up-fade { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pop-in { animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .fill-mode-forwards { animation-fill-mode: forwards; }
      `}} />

      {/* Modal Squadra */}
      {selectedPlayer && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedPlayer(null)}
        >
          <div 
            className="bg-gray-800 border border-gray-700 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-pop-in relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className={`p-6 text-center relative ${
              selectedPlayer.rank === 1 ? 'bg-gradient-to-br from-yellow-900/40 to-yellow-600/10' :
              selectedPlayer.rank === 2 ? 'bg-gradient-to-br from-gray-700/40 to-gray-500/10' :
              'bg-gradient-to-br from-orange-900/40 to-orange-600/10'
            }`}>
              <button 
                onClick={() => setSelectedPlayer(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-900/50 p-1.5 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="inline-flex justify-center items-center p-4 rounded-full bg-gray-900/50 shadow-inner mb-3">
                {selectedPlayer.rank === 1 ? <Crown className="w-10 h-10 text-yellow-400" /> : <Medal className={`w-10 h-10 ${selectedPlayer.rank === 2 ? 'text-gray-300' : 'text-orange-400'}`} />}
              </div>
              <h3 className="text-2xl font-black text-white">{selectedPlayer.name}</h3>
              <p className="text-indigo-300 font-mono mt-1 font-semibold">{selectedPlayer.score} Punti</p>
            </div>

            {/* Lista Cantanti/Squadra */}
            <div className="p-6 bg-gray-800">
              <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm uppercase tracking-wider font-bold">
                <Users className="w-4 h-4" /> Formazione
              </div>
              
              {selectedPlayer.team && selectedPlayer.team.length > 0 ? (
                <ul className="space-y-2">
                  {selectedPlayer.team.map((member, idx) => (
                    <li key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-700/30 border border-gray-700/50 text-gray-200">
                      <div className="w-6 h-6 rounded-full bg-gray-600 text-xs flex items-center justify-center font-bold text-gray-300">
                        {idx + 1}
                      </div>
                      <span className="font-medium">{member}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="text-center p-6 text-gray-500 italic bg-gray-900/30 rounded-xl border border-gray-700/30">
                  Nessuna squadra disponibile.
                </div>
              )}
            </div>
            
            {/* Pulsante Chiusura */}
            <div className="p-4 bg-gray-900/50 border-t border-gray-700">
              <button 
                onClick={() => setSelectedPlayer(null)}
                className="w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-bold transition-colors"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <header className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-gray-800/50 rounded-full mb-6 border border-gray-700 animate-float">
            <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-300 pr-2">Hall of Fame</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Classifiche <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Fantasanremo e Fantaeurovision
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Scopri i vincitori storici delle leghe di Fantasanremo e Fantaeurovision. Chi ha scalato le vette del punteggio?
          </p>

          {/* Tab Selector */}
          <div className="flex justify-center mb-4">
            <div className="bg-gray-800/80 backdrop-blur-md p-1.5 rounded-2xl inline-flex border border-gray-700/50">
              <button
                onClick={() => handleTabChange('fantasanremo')}
                className={`relative flex items-center px-6 md:px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
                  activeTab === 'fantasanremo' 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                }`}
              >
                {activeTab === 'fantasanremo' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl z-0"></div>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Music className="w-4 h-4" /> Fantasanremo
                </span>
              </button>
              
              <button
                onClick={() => handleTabChange('fantaeurovision')}
                className={`relative flex items-center px-6 md:px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
                  activeTab === 'fantaeurovision' 
                    ? 'text-white shadow-lg' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                }`}
              >
                {activeTab === 'fantaeurovision' && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl z-0"></div>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Fantaeurovision
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-24 relative z-10">
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {years.map(year => (
            <YearSection key={`${activeTab}-${year}`} year={year} data={currentData[year]} onPlayerClick={setSelectedPlayer} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 text-center py-8">
        <p className="text-gray-500 flex items-center justify-center gap-2">
          Prossima Competizione: Eurovision Song Contest 2026 (12-14-16 maggio 2026) <Star className="w-4 h-4 text-yellow-600" />
        </p>
      </footer>
    </div>
  );
}
