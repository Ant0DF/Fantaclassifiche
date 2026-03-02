import { useState, useEffect } from 'react';

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
const Calendar = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);
const Share2 = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>);
const Check = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>);

// --- COMPONENTE PER L'ANIMAZIONE DEI NUMERI ---
const AnimatedNumber = ({ value }: { value: number }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const frames = 60;
    const increment = value / (duration / (1000 / frames));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, 1000 / frames);

    return () => clearInterval(timer);
  }, [value]);

  return <>{displayValue}</>;
};

// Configurazione Evento Attuale/Prossimo
const eventConfig = {
  title: "Eurovision Song Contest 2026",
  dates: "12 - 14 - 16 maggio 2026",
  isOngoing: false 
};

// Tipi per i dati
interface RankData {
  rank: number;
  name: string;
  score: number;
  team?: string[];
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

const mockData: MockData = {
  fantasanremo: {
    2024: [
      { rank: 1, name: "Matteo", score: 1783 },
      { rank: 2, name: "Giuseppe", score: 1763 },
      { rank: 3, name: "Antonio", score: 1741 }
    ],
    2025: [
      { rank: 1, name: "Antonio", score: 2102 },
      { rank: 2, name: "Giuseppe", score: 2100 },
      { rank: 3, name: "Claudia", score: 1752 }
    ],
    2026: [
      { rank: 1, name: "Antonio", score: 2446, team: ["Fedez & Masini", "Ditonellapiaga", "Sal Da Vinci", "Serena Brancale", "LDA & AKA 7even", "Eddie Brock", "Sayf"] },
      { rank: 2, name: "Matteo", score: 2339, team: ["Sayf", "Serena Brancale", "LDA & AKA 7even", "Bambole di Pezza", "Tommaso Paradiso", "Maria Antonietta & Colombre", "Francesco Renga"] },
      { rank: 3, name: "Giuseppe", score: 2335, team: ["Sal Da Vinci", "Ditonellapiaga", "Sayf", "LDA & AKA 7even", "Fedez & Masini", "Serena Brancale", "Eddie Brock"] }
    ]
  },
  fantaeurovision: {
    2024: [
      { rank: 1, name: "???", score: 0 },
      { rank: 2, name: "???", score: 0 },
      { rank: 3, name: "???", score: 0 }
    ],
    2025: [
      { rank: 1, name: "Giuseppe", score: 583 },
      { rank: 2, name: "Antonio", score: 534 },
      { rank: 3, name: "Matteo", score: 495 }
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
  isSanremo: boolean; // Nuovo prop per il tema
  onClick: () => void;
}

const PodiumStep = ({ rank, name, score, delay, isSanremo, onClick }: PodiumStepProps) => {
  const isFirst = rank === 1;
  const isSecond = rank === 2;
  const heightClass = isFirst ? 'h-48 md:h-56' : isSecond ? 'h-36 md:h-44' : 'h-28 md:h-32';
  const colorClass = isFirst 
    ? 'bg-gradient-to-t from-yellow-600 to-yellow-400 text-yellow-950 border-yellow-300' 
    : isSecond 
      ? 'bg-gradient-to-t from-gray-400 to-gray-200 text-gray-800 border-gray-100' 
      : 'bg-gradient-to-t from-orange-700 to-orange-400 text-orange-950 border-orange-300';
  const Icon = isFirst ? Crown : Medal;

  // Stile dinamico per l'etichetta "Squadra"
  const tagColor = isSanremo 
    ? 'text-blue-300 bg-blue-900/40 border-blue-500/30' 
    : 'text-purple-300 bg-purple-900/40 border-purple-500/30';

  return (
    <div 
      className="flex flex-col items-center justify-end w-28 md:w-36 animate-slide-up-fade opacity-0 fill-mode-forwards cursor-pointer group/step"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center mb-4 text-center z-10 transition-all duration-300 group-hover/step:-translate-y-3 group-hover/step:scale-105">
        <div className={`p-3 rounded-full mb-2 bg-gray-800/80 backdrop-blur-sm border-2 transition-colors ${isFirst ? 'border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)] group-hover/step:bg-yellow-900/50' : isSecond ? 'border-gray-300 group-hover/step:bg-gray-700' : 'border-orange-400 group-hover/step:bg-orange-900/50'}`}>
          <Icon className={`w-6 h-6 md:w-8 md:h-8 ${isFirst ? 'text-yellow-400' : isSecond ? 'text-gray-300' : 'text-orange-400'}`} />
        </div>
        <span className="font-bold text-white text-sm md:text-base truncate w-full px-1">{name}</span>
        <span className="text-xs md:text-sm text-gray-400 font-mono mt-1 bg-gray-900/50 px-2 py-1 rounded-full border border-gray-700">
          {score} pt
        </span>
        <div className={`mt-2 flex items-center gap-1 text-[10px] md:text-xs font-bold opacity-100 md:opacity-0 group-hover/step:opacity-100 transition-opacity px-2 py-1 rounded-full border ${tagColor}`}>
          <Users className="w-3 h-3" /> Squadra
        </div>
      </div>
      <div className={`w-full ${heightClass} ${colorClass} rounded-t-lg border-t-4 shadow-lg flex items-start justify-center pt-4 relative overflow-hidden group-hover/step:brightness-110 transition-all ${isFirst ? 'shadow-[0_-15px_40px_-10px_rgba(250,204,21,0.5)] z-10' : ''}`}>
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover/step:opacity-100 transition-opacity duration-300"></div>
        <span className="text-3xl md:text-5xl font-black opacity-80 drop-shadow-md">{rank}</span>
      </div>
    </div>
  );
};

interface YearSectionProps {
  year: keyof CompetitionData;
  data: RankData[];
  isSanremo: boolean; // Nuovo prop per il tema
  onPlayerClick: (player: RankData) => void;
}

const YearSection = ({ year, data, isSanremo, onPlayerClick }: YearSectionProps) => {
  const podiumOrder = [data[1], data[0], data[2]];

  // Colori dinamici per la sezione Anno
  const lineGrad1 = isSanremo ? 'to-blue-500' : 'to-purple-500';
  const lineGrad2 = isSanremo ? 'from-cyan-500' : 'from-fuchsia-500';
  const textGrad = isSanremo ? 'from-blue-400 to-cyan-400' : 'from-purple-400 to-fuchsia-400';
  const radialGlow = isSanremo ? 'from-blue-900/20' : 'from-purple-900/20';

  return (
    <div className="mb-16 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className={`h-px w-12 md:w-24 bg-gradient-to-r from-transparent ${lineGrad1}`}></div>
        <h2 className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${textGrad} drop-shadow-sm transition-colors duration-500`}>
          Edizione {year}
        </h2>
        <div className={`h-px w-12 md:w-24 bg-gradient-to-l from-transparent ${lineGrad2}`}></div>
      </div>
      <div className="bg-gray-800/60 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-gray-700/50 shadow-2xl relative overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${radialGlow} via-gray-900/0 to-transparent pointer-events-none transition-colors duration-500`}></div>
        <div className="flex items-end justify-center gap-2 md:gap-6 pt-12 md:pt-20">
          <PodiumStep rank={podiumOrder[0].rank} name={podiumOrder[0].name} score={podiumOrder[0].score} delay={400} isSanremo={isSanremo} onClick={() => onPlayerClick(podiumOrder[0])} />
          <PodiumStep rank={podiumOrder[1].rank} name={podiumOrder[1].name} score={podiumOrder[1].score} delay={100} isSanremo={isSanremo} onClick={() => onPlayerClick(podiumOrder[1])} />
          <PodiumStep rank={podiumOrder[2].rank} name={podiumOrder[2].name} score={podiumOrder[2].score} delay={700} isSanremo={isSanremo} onClick={() => onPlayerClick(podiumOrder[2])} />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'fantasanremo' | 'fantaeurovision'>('fantasanremo');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<RankData | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    document.title = "Archivio Storico Fanta";
  }, []);

  const handleTabChange = (tab: 'fantasanremo' | 'fantaeurovision') => {
    if (tab === activeTab) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setIsAnimating(false);
    }, 300);
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Archivio Storico Fanta',
      text: 'Guarda i vincitori storici delle leghe di Fantasanremo e Fantaeurovision!',
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch (err) { console.log('Condivisione annullata'); }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    }
  };

  const currentData = activeTab === 'fantasanremo' ? mockData.fantasanremo : mockData.fantaeurovision;
  const years: (keyof CompetitionData)[] = [2026, 2025, 2024];

  const isSanremo = activeTab === 'fantasanremo';

  // --- VARIABILI DI TEMA DINAMICO ---
  // Sanremo: dominanza Blu/Ciano. Eurovision: dominanza Viola/Fucsia
  const titleGradient = isSanremo 
    ? 'from-blue-400 via-cyan-400 to-blue-500' 
    : 'from-purple-400 via-fuchsia-400 to-pink-500';
  
  const blobTopLeft = isSanremo ? 'bg-blue-600/20' : 'bg-purple-600/20';
  const blobBottomRight = isSanremo ? 'bg-cyan-600/20' : 'bg-fuchsia-600/20';
  
  const tabGradientSanremo = 'from-blue-600 to-cyan-600';
  const tabGradientEurovision = 'from-purple-600 to-fuchsia-600';

  const shareButtonHover = isSanremo ? 'hover:bg-blue-600' : 'hover:bg-purple-600';

  const bannerGradient = isSanremo ? 'from-blue-500 to-cyan-500' : 'from-purple-500 to-fuchsia-500';
  const bannerIconBg = isSanremo ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-purple-500/20 text-purple-400 border-purple-500/30';
  const bannerTextColor = isSanremo ? 'text-blue-400' : 'text-purple-400';
  const selectionColor = isSanremo ? 'selection:bg-blue-500/30' : 'selection:bg-purple-500/30';

  return (
    <div className={`min-h-screen bg-[#0a0a0f] text-gray-100 font-sans ${selectionColor} relative pb-12`}>
      <style dangerouslySetInnerHTML={{__html: `
        html, body { background-color: #0a0a0f; margin: 0; padding: 0; overscroll-behavior-y: none; }
        .bg-grid-pattern { background-size: 40px 40px; background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px); }
        @keyframes slideUpFade { 0% { opacity: 0; transform: translateY(50px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        .animate-slide-up-fade { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pop-in { animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .fill-mode-forwards { animation-fill-mode: forwards; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(31, 41, 55, 0.5); border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(99, 102, 241, 0.5); border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(99, 102, 241, 0.8); }
      `}} />

      <div className="absolute inset-0 bg-grid-pattern pointer-events-none z-0"></div>

      {/* Modal Squadra */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedPlayer(null)}>
          <div className="bg-gray-800 border border-gray-700 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-pop-in relative" onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 text-center relative ${selectedPlayer.rank === 1 ? 'bg-gradient-to-br from-yellow-900/40 to-yellow-600/10' : selectedPlayer.rank === 2 ? 'bg-gradient-to-br from-gray-700/40 to-gray-500/10' : 'bg-gradient-to-br from-orange-900/40 to-orange-600/10'}`}>
              <button onClick={() => setSelectedPlayer(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-900/50 p-1.5 rounded-full transition-colors"><X className="w-5 h-5" /></button>
              <div className="inline-flex justify-center items-center p-4 rounded-full bg-gray-900/50 shadow-inner mb-3">
                {selectedPlayer.rank === 1 ? <Crown className="w-10 h-10 text-yellow-400" /> : <Medal className={`w-10 h-10 ${selectedPlayer.rank === 2 ? 'text-gray-300' : 'text-orange-400'}`} />}
              </div>
              <h3 className="text-2xl font-black text-white">{selectedPlayer.name}</h3>
              <p className={`font-mono mt-1 font-bold text-lg ${isSanremo ? 'text-blue-300' : 'text-purple-300'}`}><AnimatedNumber value={selectedPlayer.score} /> pt</p>
            </div>
            <div className="p-6 bg-gray-800 max-h-[50vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-4 text-gray-400 text-sm uppercase tracking-wider font-bold"><Users className="w-4 h-4" /> Formazione</div>
              {selectedPlayer.team && selectedPlayer.team.length > 0 ? (
                <ul className="space-y-2">
                  {selectedPlayer.team.map((member, idx) => {
                    const isReserve = idx >= 5;
                    return (
                      <li key={idx} className={`flex items-center gap-3 p-3 rounded-xl border ${isReserve ? 'bg-gray-800/50 border-gray-700/30 border-dashed text-gray-400' : 'bg-gray-700/30 border-gray-700/50 text-gray-200'}`}>
                        <div className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${isReserve ? 'bg-gray-700 text-gray-500' : 'bg-gray-600 text-gray-300'}`}>{isReserve ? 'R' : idx + 1}</div>
                        <span className="font-medium">{member}</span>
                        {isReserve && <span className="ml-auto text-[10px] uppercase tracking-wider font-bold text-yellow-600 border border-yellow-600/30 px-2 py-0.5 rounded-full bg-yellow-900/20">Riserva</span>}
                      </li>
                    );
                  })}
                </ul>
              ) : <div className="text-center p-6 text-gray-500 italic bg-gray-900/30 rounded-xl border border-gray-700/30">Nessuna squadra disponibile.</div>}
            </div>
            <div className="p-4 bg-gray-900/50 border-t border-gray-700"><button onClick={() => setSelectedPlayer(null)} className="w-full py-3 rounded-xl bg-gray-700 hover:bg-gray-600 text-white font-bold transition-colors">Chiudi</button></div>
          </div>
        </div>
      )}

      {/* Tasto Condividi Mobile-Solo in alto a destra */}
      <div className="absolute top-6 right-6 z-40 hidden sm:block">
        <button onClick={handleShare} className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-800/80 ${shareButtonHover} backdrop-blur-md border border-gray-700 text-sm font-bold transition-all shadow-lg text-white`}>
          {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />} {isCopied ? 'Copiato!' : 'Condividi'}
        </button>
      </div>

      <header className="relative pt-12 sm:pt-16 pb-6 overflow-hidden z-10">
        {/* Glow dinamici che cambiano colore in base al tab */}
        <div className={`absolute top-[-10%] left-[-10%] w-96 h-96 rounded-full blur-[100px] transition-colors duration-1000 ${blobTopLeft}`}></div>
        <div className={`absolute bottom-[-10%] right-[-10%] w-96 h-96 rounded-full blur-[100px] transition-colors duration-1000 ${blobBottomRight}`}></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-gray-800/50 rounded-full mb-6 border border-gray-700 animate-float">
            <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-300 pr-2">Hall of Fame</span>
          </div>
          
          <div className="relative inline-block mb-6 sm:mb-10">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight relative">
              Classifiche <br className="md:hidden" />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 ${titleGradient}`}>
                Fantasanremo e Fantaeurovision
              </span>
            </h1>
          </div>
          
          <button onClick={handleShare} className={`sm:hidden mx-auto mb-6 flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/80 ${shareButtonHover} border border-gray-700 text-sm font-bold transition-all text-white`}>
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Share2 className="w-4 h-4" />} {isCopied ? 'Link Copiato!' : 'Condividi'}
          </button>
        </div>
      </header>

      {/* Tabs Menu */}
      <div className="sticky top-4 z-50 mx-auto w-fit px-4 flex justify-center mb-8 pointer-events-none">
        <div className="bg-gray-900/80 backdrop-blur-xl p-1.5 rounded-2xl inline-flex border border-gray-700 shadow-[0_10px_30px_rgba(0,0,0,0.5)] pointer-events-auto">
          <button onClick={() => handleTabChange('fantasanremo')} className={`relative flex items-center px-4 md:px-8 py-2 md:py-3 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300 ${isSanremo ? 'text-white shadow-lg' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'}`}>
            {isSanremo && <div className={`absolute inset-0 bg-gradient-to-r ${tabGradientSanremo} rounded-xl z-0`}></div>}
            <span className="relative z-10 flex items-center gap-1 sm:gap-2"><Music className="w-4 h-4 hidden sm:block" /> Fantasanremo</span>
          </button>
          <button onClick={() => handleTabChange('fantaeurovision')} className={`relative flex items-center px-4 md:px-8 py-2 md:py-3 rounded-xl font-bold text-xs sm:text-sm md:text-base transition-all duration-300 ${!isSanremo ? 'text-white shadow-lg' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'}`}>
            {!isSanremo && <div className={`absolute inset-0 bg-gradient-to-r ${tabGradientEurovision} rounded-xl z-0`}></div>}
            <span className="relative z-10 flex items-center gap-1 sm:gap-2"><Sparkles className="w-4 h-4 hidden sm:block" /> Fantaeurovision</span>
          </button>
        </div>
      </div>

      <main className="container mx-auto px-4 relative z-10 pt-2">
        {/* Banner Evento con Colori Dinamici */}
        <div className="max-w-2xl mx-auto mb-10 md:mb-16 px-1 md:px-0 animate-fade-in relative group cursor-default">
          <div className={`absolute -inset-1 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 ${eventConfig.isOngoing ? 'bg-red-500 animate-pulse' : `bg-gradient-to-r ${bannerGradient}`}`}></div>
          <div className="relative p-1 rounded-2xl bg-gray-800/80 backdrop-blur-xl border border-gray-700/50">
            <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                {eventConfig.isOngoing ? (
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-500/20 border border-red-500/30 flex-shrink-0 transition-colors duration-500">
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500 animate-ping absolute"></div>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500 relative"></div>
                  </div>
                ) : <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full flex-shrink-0 transition-colors duration-500 ${bannerIconBg}`}><Calendar className="w-5 h-5 sm:w-6 sm:h-6" /></div>}
                <div className="flex-1 min-w-0 text-left">
                  <p className={`text-[10px] sm:text-xs font-black uppercase tracking-widest mb-0.5 sm:mb-1 transition-colors duration-500 ${eventConfig.isOngoing ? 'text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]' : bannerTextColor}`}>{eventConfig.isOngoing ? '🔴 Evento in corso' : 'Prossimo evento'}</p>
                  <p className="text-white font-bold text-sm sm:text-lg leading-tight truncate sm:whitespace-normal">{eventConfig.title}</p>
                </div>
              </div>
              <div className="w-full sm:w-auto bg-gray-900/80 px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-gray-700 text-center sm:text-left flex-shrink-0"><p className="text-gray-300 text-xs sm:text-sm font-medium">{eventConfig.dates}</p></div>
            </div>
          </div>
        </div>
        
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {years.map(year => <YearSection key={`${activeTab}-${year}`} year={year} data={currentData[year]} isSanremo={isSanremo} onPlayerClick={setSelectedPlayer} />)}
        </div>
      </main>
    </div>
  );
}
