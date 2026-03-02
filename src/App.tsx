import { useState, useEffect } from 'react';

// --- ICONE (SVG Inline) ---
interface IconProps { className?: string; }
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

// --- COMPONENTE ANIMAZIONE NUMERI ---
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

// --- DATI ---
const eventConfig = {
  title: "Eurovision Song Contest 2026",
  dates: "12 - 14 - 16 maggio 2026",
  isOngoing: false 
};

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

// --- COMPONENTI UI ---
interface PodiumStepProps {
  rank: number;
  name: string;
  score: number;
  delay: number;
  isSanremo: boolean;
  onClick: () => void;
}

const PodiumStep = ({ rank, name, score, delay, isSanremo, onClick }: PodiumStepProps) => {
  const isFirst = rank === 1;
  const isSecond = rank === 2;
  
  // Stili ispirati allo screenshot: Vetro scuro, bordi sottili luminosi, testi bianchi.
  const cardHeight = isFirst ? 'h-[280px] md:h-[320px] w-36 md:w-48' : 'h-[220px] md:h-[260px] w-28 md:w-40';
  const cardBg = isSanremo ? 'bg-[#15203c]/80' : 'bg-[#2a1b42]/80';
  
  // Colori delle medaglie/bordi
  const rankColor = isFirst ? 'text-[#facc15] border-[#facc15]/50' : isSecond ? 'text-[#e2e8f0] border-[#e2e8f0]/30' : 'text-[#f97316] border-[#f97316]/30';
  const glowShadow = isFirst ? (isSanremo ? 'shadow-[0_0_30px_rgba(250,204,21,0.15)]' : 'shadow-[0_0_30px_rgba(250,204,21,0.15)]') : '';
  
  const Icon = isFirst ? Crown : Medal;

  return (
    <div 
      className={`flex flex-col items-center justify-end animate-slide-up-fade opacity-0 fill-mode-forwards cursor-pointer group/step z-10 ${isFirst ? 'mx-2 md:mx-4' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className={`relative flex flex-col items-center justify-center p-4 rounded-[2rem] border transition-all duration-300 backdrop-blur-xl hover:-translate-y-2 hover:brightness-110 ${cardHeight} ${cardBg} ${rankColor} ${glowShadow}`}>
        
        {/* Numero Posizione in background trasparente */}
        <div className="absolute top-4 left-4 text-4xl font-black opacity-10 pointer-events-none">{rank}°</div>

        {/* Icona (Corona/Medaglia) centrale */}
        <div className={`p-4 rounded-full mb-4 bg-gradient-to-b from-white/10 to-transparent border ${isFirst ? 'border-yellow-400/50' : 'border-white/10'}`}>
          <Icon className={`w-8 h-8 md:w-12 md:h-12 ${isFirst ? 'text-[#facc15] drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]' : isSecond ? 'text-slate-300' : 'text-orange-400'}`} />
        </div>

        {/* Nome Giocatore */}
        <span className="font-bold text-white text-base md:text-xl truncate w-full text-center px-2 mb-2">{name}</span>
        
        {/* Punteggio stile Fantasanremo (es. +2446 pt.) */}
        <span className={`text-xs md:text-sm font-bold tracking-wide ${isSanremo ? 'text-[#10b981]' : 'text-[#f472b6]'}`}>
          +{score} pt.
        </span>

        {/* Etichetta hover "Squadra" */}
        <div className={`absolute bottom-4 flex items-center gap-1 text-[10px] md:text-xs font-bold opacity-100 md:opacity-0 group-hover/step:opacity-100 transition-opacity px-3 py-1.5 rounded-full bg-white/10 text-white backdrop-blur-md`}>
          <Users className="w-3 h-3" /> Squadra
        </div>
      </div>
    </div>
  );
};

interface YearSectionProps {
  year: keyof CompetitionData;
  data: RankData[];
  isSanremo: boolean;
  onPlayerClick: (player: RankData) => void;
}

const YearSection = ({ year, data, isSanremo, onPlayerClick }: YearSectionProps) => {
  const podiumOrder = [data[1], data[0], data[2]];

  return (
    <div className="mb-20 animate-fade-in relative">
      {/* Intestazione Edizione */}
      <div className="flex items-center justify-center gap-4 mb-10">
        <div className={`h-[2px] w-12 md:w-24 rounded-full bg-gradient-to-r from-transparent ${isSanremo ? 'to-blue-500/50' : 'to-purple-500/50'}`}></div>
        <h2 className="text-2xl md:text-3xl font-black text-white tracking-wider">
          Edizione {year}
        </h2>
        <div className={`h-[2px] w-12 md:w-24 rounded-full bg-gradient-to-l from-transparent ${isSanremo ? 'to-blue-500/50' : 'to-purple-500/50'}`}></div>
      </div>
      
      {/* Contenitore Podio */}
      <div className="relative flex items-end justify-center pt-8 pb-4">
        {/* Glow circolare dietro il vincitore */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-full blur-[80px] pointer-events-none opacity-50 ${isSanremo ? 'bg-blue-600/30' : 'bg-purple-600/30'}`}></div>
        
        <PodiumStep rank={podiumOrder[0].rank} name={podiumOrder[0].name} score={podiumOrder[0].score} delay={400} isSanremo={isSanremo} onClick={() => onPlayerClick(podiumOrder[0])} />
        <PodiumStep rank={podiumOrder[1].rank} name={podiumOrder[1].name} score={podiumOrder[1].score} delay={100} isSanremo={isSanremo} onClick={() => onPlayerClick(podiumOrder[1])} />
        <PodiumStep rank={podiumOrder[2].rank} name={podiumOrder[2].name} score={podiumOrder[2].score} delay={700} isSanremo={isSanremo} onClick={() => onPlayerClick(podiumOrder[2])} />
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
    document.title = "Classifiche Fanta";
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
      title: 'Classifiche Fanta',
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

  // --- COLORI TEMA "FANTA" (Stile Screenshot) ---
  // Sfondo: Blu notte profondo per Sanremo, Viola scurissimo per Eurovision
  const bgMain = isSanremo ? 'bg-[#091125]' : 'bg-[#120a1c]';
  const glowTop = isSanremo ? 'bg-blue-600/10' : 'bg-purple-600/10';
  const glowBottom = isSanremo ? 'bg-cyan-600/10' : 'bg-pink-600/10';
  
  // Colori Banner "Campionato Mondiale" style
  const bannerBg = isSanremo ? 'bg-[#131e3d]' : 'bg-[#25153b]';
  const bannerIconColor = isSanremo ? 'text-[#facc15]' : 'text-[#f472b6]';

  return (
    <div className={`min-h-screen ${bgMain} text-gray-100 selection:bg-white/20 relative pb-12 transition-colors duration-1000 overflow-x-hidden`}>
      
      {/* Import del Font 'Outfit' (simile al font geometrico/arrotondato di Fantasanremo) */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;900&display=swap');
        html, body { background-color: ${isSanremo ? '#091125' : '#120a1c'}; margin: 0; padding: 0; overscroll-behavior-y: none; font-family: 'Outfit', sans-serif; transition: background-color 1s ease; }
        
        @keyframes slideUpFade { 0% { opacity: 0; transform: translateY(30px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.95); } 100% { opacity: 1; transform: scale(1); } }
        
        .animate-slide-up-fade { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-pop-in { animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .fill-mode-forwards { animation-fill-mode: forwards; }
        
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.2); border-radius: 4px; }
      `}} />

      {/* Sfondi Glow Diffusi */}
      <div className={`absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ${glowTop}`}></div>
      <div className={`absolute bottom-0 right-1/4 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none transition-colors duration-1000 ${glowBottom}`}></div>

      {/* --- MODAL SQUADRA --- */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in" onClick={() => setSelectedPlayer(null)}>
          <div className="bg-[#111827] border border-white/10 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-pop-in relative" onClick={(e) => e.stopPropagation()}>
            <div className="p-8 text-center relative bg-gradient-to-b from-white/5 to-transparent">
              <button onClick={() => setSelectedPlayer(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"><X className="w-6 h-6" /></button>
              <div className="inline-flex justify-center items-center p-4 rounded-full bg-white/5 mb-4 border border-white/10">
                {selectedPlayer.rank === 1 ? <Crown className="w-12 h-12 text-[#facc15]" /> : <Medal className={`w-12 h-12 ${selectedPlayer.rank === 2 ? 'text-slate-300' : 'text-orange-400'}`} />}
              </div>
              <h3 className="text-3xl font-black text-white">{selectedPlayer.name}</h3>
              <p className={`font-bold mt-2 text-xl tracking-wide ${isSanremo ? 'text-[#10b981]' : 'text-[#f472b6]'}`}>+<AnimatedNumber value={selectedPlayer.score} /> pt.</p>
            </div>
            <div className="p-6 bg-[#0f1423] max-h-[50vh] overflow-y-auto custom-scrollbar">
              <div className="flex items-center gap-2 mb-4 text-white/50 text-xs uppercase tracking-widest font-bold"><Users className="w-4 h-4" /> Formazione</div>
              {selectedPlayer.team && selectedPlayer.team.length > 0 ? (
                <ul className="space-y-2">
                  {selectedPlayer.team.map((member, idx) => {
                    const isReserve = idx >= 5;
                    return (
                      <li key={idx} className={`flex items-center gap-3 p-3 rounded-2xl border ${isReserve ? 'bg-white/5 border-white/5 border-dashed text-white/50' : 'bg-white/10 border-white/5 text-white'}`}>
                        <div className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${isReserve ? 'bg-white/10 text-white/50' : 'bg-white/20 text-white/80'}`}>{isReserve ? 'R' : idx + 1}</div>
                        <span className="font-medium">{member}</span>
                        {isReserve && <span className="ml-auto text-[10px] uppercase tracking-wider font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full">Riserva</span>}
                      </li>
                    );
                  })}
                </ul>
              ) : <div className="text-center p-6 text-white/30 italic bg-white/5 rounded-2xl border border-white/5">Nessuna squadra disponibile.</div>}
            </div>
          </div>
        </div>
      )}

      {/* --- MENU SUPERIORE (Stile Fantasanremo Desktop Navbar) --- */}
      <header className="relative pt-6 md:pt-10 z-20">
        <div className="container mx-auto px-4 flex flex-col items-center">
          
          {/* Pulsante Condividi */}
          <button onClick={handleShare} className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-xs font-bold transition-all text-white/80 hover:text-white">
            {isCopied ? <Check className="w-4 h-4 text-[#10b981]" /> : <Share2 className="w-4 h-4" />} <span className="hidden sm:inline">{isCopied ? 'Copiato!' : 'Condividi'}</span>
          </button>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-8 text-center drop-shadow-md px-2">
            Classifiche <br className="md:hidden" />Fantasanremo e Fantaeurovision
          </h1>

          {/* Tab Selector (Stile "Squadre / Leghe / Area" del sito originale) */}
          <div className="flex justify-center gap-6 md:gap-12 mb-10">
            <button onClick={() => handleTabChange('fantasanremo')} className="group flex flex-col items-center gap-2 relative">
              <div className={`p-3 rounded-xl transition-all duration-300 ${isSanremo ? 'bg-[#facc15]/20 text-[#facc15]' : 'bg-transparent text-white/40 group-hover:text-white/80'}`}>
                <Music className="w-6 h-6" />
              </div>
              <span className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-colors ${isSanremo ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>Fantasanremo</span>
              {/* Indicatore Giallo Attivo */}
              {isSanremo && <div className="absolute -bottom-3 w-8 h-1 rounded-full bg-[#facc15] shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>}
            </button>

            <button onClick={() => handleTabChange('fantaeurovision')} className="group flex flex-col items-center gap-2 relative">
              <div className={`p-3 rounded-xl transition-all duration-300 ${!isSanremo ? 'bg-[#f472b6]/20 text-[#f472b6]' : 'bg-transparent text-white/40 group-hover:text-white/80'}`}>
                <Sparkles className="w-6 h-6" />
              </div>
              <span className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-colors ${!isSanremo ? 'text-white' : 'text-white/40 group-hover:text-white/80'}`}>Fantaeurovision</span>
              {/* Indicatore Rosa Attivo */}
              {!isSanremo && <div className="absolute -bottom-3 w-8 h-1 rounded-full bg-[#f472b6] shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>}
            </button>
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="container mx-auto px-4 relative z-10 pt-4">
        
        {/* Banner Evento (Stile "Campionato Mondiale") */}
        <div className="max-w-xl mx-auto mb-16 animate-fade-in relative transition-all duration-500">
          <div className={`flex items-center justify-between p-4 md:p-5 rounded-[1.5rem] shadow-xl border border-white/5 backdrop-blur-md ${bannerBg}`}>
            <div className="flex items-center gap-4">
              <div className={`flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 ${bannerIconColor}`}>
                {eventConfig.isOngoing ? (
                   <div className="relative flex h-3 w-3">
                     <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                     <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                   </div>
                ) : <Trophy className="w-5 h-5 md:w-6 md:h-6" />}
              </div>
              <div>
                <p className={`text-[10px] md:text-xs font-black uppercase tracking-widest mb-0.5 ${eventConfig.isOngoing ? 'text-red-400' : 'text-white/50'}`}>
                  {eventConfig.isOngoing ? '🔴 Evento in corso' : 'Prossimo evento'}
                </p>
                <p className="text-white font-bold text-sm md:text-lg tracking-wide">{eventConfig.title}</p>
              </div>
            </div>
            
            {/* Tag Data/Stato */}
            {!eventConfig.isOngoing && (
              <div className="hidden sm:flex bg-white/5 px-4 py-2 rounded-full border border-white/5">
                <p className="text-white/60 text-xs font-bold tracking-widest uppercase">{eventConfig.dates}</p>
              </div>
            )}
          </div>
          {/* Data su mobile mostrata sotto il banner per evitare affollamenti */}
          {!eventConfig.isOngoing && (
            <p className="sm:hidden text-center text-white/40 text-xs font-bold tracking-widest uppercase mt-4">{eventConfig.dates}</p>
          )}
        </div>
        
        {/* Renderizziamo le classifiche */}
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {years.map(year => <YearSection key={`${activeTab}-${year}`} year={year} data={currentData[year]} isSanremo={isSanremo} onPlayerClick={setSelectedPlayer} />)}
        </div>
      </main>
    </div>
  );
}
