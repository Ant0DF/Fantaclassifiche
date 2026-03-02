import { useState, useEffect } from 'react';

// Tipi per le icone
interface IconProps {
  className?: string;
}

// Componenti Icone
const Trophy = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>);
const Crown = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>);
const Medal = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/></svg>);
const Star = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const Music = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>);
const Sparkles = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>);
const Flame = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>);
const Users = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>);
const X = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);
const Calendar = ({ className }: IconProps) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>);

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

// --- DATI ---
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

const eventConfig = {
  title: "Eurovision Song Contest 2026",
  dates: "12 - 14 - 16 maggio 2026",
  isOngoing: false 
};

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
      { rank: 1, name: "Giuseppe", score: 583, team: ["Nemo", "Baby Lasagna", "Alyona Alyona", "Angelina Mango", "Slimane"] },
      { rank: 2, name: "Antonio", score: 534, team: ["Bambie Thug", "Marcus & Martinus", "Ladaniva", "Marina Satti", "Olly Alexander"] },
      { rank: 3, name: "Matteo", score: 495, team: ["Nebulossa", "Gåte", "Kaleen", "Iolanda", "Windows95man"] }
    ],
    2026: [
      { rank: 1, name: "In Arrivo", score: 0 },
      { rank: 2, name: "In Arrivo", score: 0 },
      { rank: 3, name: "In Arrivo", score: 0 }
    ]
  }
};

// Dati speciali solo per le Fantaolimpiadi
const fantaolimpiadiData: RankData[] = [
  { rank: 1, name: "In Arrivo", score: 0, team: ["Nazione 1", "Nazione 2", "Nazione 3", "Nazione 4", "Nazione 5"] },
  { rank: 2, name: "In Arrivo", score: 0, team: ["Nazione 1", "Nazione 2", "Nazione 3", "Nazione 4", "Nazione 5"] },
  { rank: 3, name: "In Arrivo", score: 0, team: ["Nazione 1", "Nazione 2", "Nazione 3", "Nazione 4", "Nazione 5"] }
];

// --- FUNZIONE PER CALCOLARE IL MEDAGLIERE IN AUTOMATICO ---
const ALL_PLAYERS = ["Antonio", "Giuseppe", "Matteo", "Claudia", "Angelica", "Giovanni", "Marialucia", "Luca"];

const calculateMedagliere = () => {
  const medals: Record<string, { name: string; gold: number; silver: number; bronze: number }> = {};

  ALL_PLAYERS.forEach(name => {
    medals[name] = { name, gold: 0, silver: 0, bronze: 0 };
  });

  const processData = (data: RankData[]) => {
    data.forEach(player => {
      if (!player.name || player.name === "???" || player.name === "In Arrivo") return;
      if (!medals[player.name]) {
        medals[player.name] = { name: player.name, gold: 0, silver: 0, bronze: 0 };
      }
      
      if (player.rank === 1) medals[player.name].gold += 1;
      if (player.rank === 2) medals[player.name].silver += 1;
      if (player.rank === 3) medals[player.name].bronze += 1;
    });
  };

  Object.values(mockData.fantasanremo).forEach(processData);
  Object.values(mockData.fantaeurovision).forEach(processData);
  processData(fantaolimpiadiData);

  return Object.values(medals).sort((a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze);
};

// --- COMPONENTI UI ---
interface PodiumStepProps {
  rank: number;
  name: string;
  score: number;
  delay: number;
  themeColor: string;
  onClick: () => void;
}

const PodiumStep = ({ rank, name, score, delay, themeColor, onClick }: PodiumStepProps) => {
  const isFirst = rank === 1;
  const isSecond = rank === 2;
  
  const heightClass = isFirst ? 'h-48 md:h-56' : isSecond ? 'h-36 md:h-44' : 'h-28 md:h-32';
  const colorClass = isFirst 
    ? 'bg-gradient-to-t from-yellow-600 to-yellow-400 text-yellow-950 border-yellow-300' 
    : isSecond 
      ? 'bg-gradient-to-t from-gray-400 to-gray-200 text-gray-800 border-gray-100' 
      : 'bg-gradient-to-t from-orange-700 to-orange-400 text-orange-950 border-orange-300';
  
  const Icon = isFirst ? Crown : Medal;

  const tagColor = themeColor === 'blue' 
    ? 'text-blue-300 bg-blue-900/40 border-blue-500/30' 
    : themeColor === 'purple'
      ? 'text-purple-300 bg-purple-900/40 border-purple-500/30'
      : 'text-green-300 bg-green-900/40 border-green-500/30';

  return (
    <div 
      className={`flex flex-col items-center justify-end w-28 md:w-36 animate-slide-up-fade opacity-0 fill-mode-forwards cursor-pointer group`}
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center mb-4 text-center z-10 transition-transform hover:-translate-y-2 group-hover:scale-105 duration-300">
        <div className={`p-3 rounded-full mb-2 bg-gray-800/80 backdrop-blur-sm border-2 ${isFirst ? 'border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.5)] animate-winner-glow' : isSecond ? 'border-gray-300' : 'border-orange-400'}`}>
          <Icon className={`w-6 h-6 md:w-8 md:h-8 ${isFirst ? 'text-yellow-400' : isSecond ? 'text-gray-300' : 'text-orange-400'}`} />
        </div>
        <span className="font-bold text-white text-sm md:text-base truncate w-full px-1">{name}</span>
        <span className="text-xs md:text-sm text-gray-400 font-mono mt-1 bg-gray-900/50 px-2 py-1 rounded-full border border-gray-700">
          {score} pt
        </span>
        <div className={`mt-2 flex items-center gap-1 text-[10px] md:text-xs font-bold opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 rounded-full border ${tagColor}`}>
          <Users className="w-3 h-3" /> Squadra
        </div>
      </div>
      {/* Rimossa l'ombra fissa e animata dal piedistallo */}
      <div className={`w-full ${heightClass} ${colorClass} rounded-t-lg border-t-4 shadow-lg flex items-start justify-center pt-4 relative overflow-hidden transition-all ${isFirst ? 'z-10' : ''}`}>
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="text-3xl md:text-5xl font-black opacity-80 drop-shadow-md">{rank}</span>
      </div>
    </div>
  );
};

interface YearSectionProps {
  year: string;
  data: RankData[];
  themeColor?: string;
  onPlayerClick: (player: RankData) => void;
}

const YearSection = ({ year, data, themeColor = 'blue', onPlayerClick }: YearSectionProps) => {
  const podiumOrder = [data[1], data[0], data[2]];
  
  const fromColor = themeColor === 'green' ? 'from-green-500' : themeColor === 'purple' ? 'from-purple-500' : 'from-blue-500';
  const toColor = themeColor === 'green' ? 'to-emerald-500' : themeColor === 'purple' ? 'to-pink-500' : 'to-cyan-500';
  const radialGlow = themeColor === 'green' ? 'from-green-900/20' : themeColor === 'purple' ? 'from-purple-900/20' : 'from-blue-900/20';

  return (
    <div className="mb-16 animate-fade-in">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className={`h-px w-12 md:w-24 bg-gradient-to-r from-transparent ${fromColor}`}></div>
        <h2 className={`text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r ${fromColor} ${toColor} drop-shadow-sm`}>
          Edizione {year}
        </h2>
        <div className={`h-px w-12 md:w-24 bg-gradient-to-l from-transparent ${toColor}`}></div>
      </div>
      <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-6 md:p-10 border border-gray-700/50 shadow-2xl relative overflow-hidden">
        <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[200%] md:w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${radialGlow} via-gray-900/0 to-transparent pointer-events-none`}></div>
        <div className="flex items-end justify-center gap-2 md:gap-6 pt-12 md:pt-20">
          <PodiumStep rank={podiumOrder[0].rank} name={podiumOrder[0].name} score={podiumOrder[0].score} delay={400} themeColor={themeColor} onClick={() => onPlayerClick(podiumOrder[0])} />
          <PodiumStep rank={podiumOrder[1].rank} name={podiumOrder[1].name} score={podiumOrder[1].score} delay={100} themeColor={themeColor} onClick={() => onPlayerClick(podiumOrder[1])} />
          <PodiumStep rank={podiumOrder[2].rank} name={podiumOrder[2].name} score={podiumOrder[2].score} delay={700} themeColor={themeColor} onClick={() => onPlayerClick(podiumOrder[2])} />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'fantasanremo' | 'fantaeurovision'>('fantasanremo');
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<RankData | null>(null);

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

  const currentData = activeTab === 'fantasanremo' ? mockData.fantasanremo : mockData.fantaeurovision;
  const years: (keyof CompetitionData)[] = [2026, 2025, 2024];

  const isSanremo = activeTab === 'fantasanremo';
  const tabGradientSanremo = 'from-blue-600 to-cyan-600';
  const tabGradientEurovision = 'from-purple-600 to-pink-600';
  const themeColor = isSanremo ? 'blue' : 'purple';

  const medagliereAggiornato = calculateMedagliere();

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 font-sans selection:bg-indigo-500/30 overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideUpFade { 0% { opacity: 0; transform: translateY(50px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes popIn { 0% { opacity: 0; transform: scale(0.9); } 100% { opacity: 1; transform: scale(1); } }
        
        /* Animazione personalizzata per l'effetto dinamico del vincitore spostata sul cerchio */
        @keyframes winnerGlow { 
          0%, 100% { box-shadow: 0 0 15px rgba(250,204,21,0.4); } 
          50% { box-shadow: 0 0 25px rgba(250,204,21,0.8); } 
        }
        
        .animate-slide-up-fade { animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 0.6s ease-out forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-pop-in { animation: popIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-winner-glow { animation: winnerGlow 3s ease-in-out infinite; }
        .fill-mode-forwards { animation-fill-mode: forwards; }

        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(31, 41, 55, 0.5); border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(99, 102, 241, 0.5); border-radius: 8px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(99, 102, 241, 0.8); }
      `}} />

      {/* --- MODAL SQUADRA ESPANDIBILE --- */}
      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedPlayer(null)}>
          <div className="bg-gray-800 border border-gray-700 rounded-3xl w-full max-w-sm overflow-hidden shadow-2xl animate-pop-in relative" onClick={(e) => e.stopPropagation()}>
            <div className={`p-6 text-center relative ${selectedPlayer.rank === 1 ? 'bg-gradient-to-br from-yellow-900/40 to-yellow-600/10' : selectedPlayer.rank === 2 ? 'bg-gradient-to-br from-gray-700/40 to-gray-500/10' : 'bg-gradient-to-br from-orange-900/40 to-orange-600/10'}`}>
              <button onClick={() => setSelectedPlayer(null)} className="absolute top-4 right-4 text-gray-400 hover:text-white bg-gray-900/50 p-1.5 rounded-full transition-colors"><X className="w-5 h-5" /></button>
              <div className="inline-flex justify-center items-center p-4 rounded-full bg-gray-900/50 shadow-inner mb-3">
                {selectedPlayer.rank === 1 ? <Crown className="w-10 h-10 text-yellow-400" /> : <Medal className={`w-10 h-10 ${selectedPlayer.rank === 2 ? 'text-gray-300' : 'text-orange-400'}`} />}
              </div>
              <h3 className="text-2xl font-black text-white">{selectedPlayer.name}</h3>
              <p className="text-indigo-300 font-mono mt-1 font-bold text-lg"><AnimatedNumber value={selectedPlayer.score} /> pt</p>
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

      {/* Hero Section */}
      <header className="relative pt-20 pb-12 z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-gray-800/50 rounded-full mb-6 border border-gray-700 animate-float">
            <Trophy className="w-8 h-8 text-yellow-400 mr-3" />
            <span className="text-sm font-semibold tracking-widest uppercase text-gray-300 pr-2">Hall of Fame</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
            Classifiche <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Fantasanremo e Fantaeurovision
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Scopri i vincitori storici. Chi ha scalato le vette del punteggio?
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-24 relative z-10">
        
        {/* --- SEZIONE MEDAGLIERE GENERALE --- */}
        <section className="max-w-4xl mx-auto mb-20 animate-fade-in">
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-2 tracking-wide">Medagliere Generale</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 via-gray-300 to-orange-500 rounded-full"></div>
          </div>
          
          <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-700/50 shadow-2xl">
            <div className="grid grid-cols-12 gap-2 p-4 md:p-5 bg-gray-900/80 text-xs md:text-sm font-bold text-gray-400 uppercase tracking-wider text-center border-b border-gray-700/50">
              <div className="col-span-2 md:col-span-2 text-left pl-2 md:pl-6">Pos</div>
              <div className="col-span-4 md:col-span-4 text-left">Fanta Allenatore</div>
              <div className="col-span-2 flex justify-center"><div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#facc15] shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div></div>
              <div className="col-span-2 flex justify-center"><div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-300 shadow-[0_0_10px_rgba(209,213,219,0.4)]"></div></div>
              <div className="col-span-2 flex justify-center"><div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div></div>
            </div>
            
            <div className="flex flex-col">
              {medagliereAggiornato.map((player, index) => {
                const isTop3 = index < 3;
                const posColor = index === 0 ? 'text-yellow-400' : index === 1 ? 'text-gray-300' : index === 2 ? 'text-orange-400' : 'text-gray-500';
                
                return (
                  <div key={player.name} className="grid grid-cols-12 gap-2 p-4 md:p-5 text-sm md:text-lg items-center text-center border-b border-gray-700/30 last:border-0 hover:bg-gray-700/30 transition-colors group">
                    <div className={`col-span-2 md:col-span-2 text-left pl-2 md:pl-6 font-mono font-black ${posColor}`}>{index + 1}°</div>
                    <div className={`col-span-4 md:col-span-4 text-left font-bold ${isTop3 ? 'text-white' : 'text-gray-300'} group-hover:text-white transition-colors`}>{player.name}</div>
                    <div className="col-span-2 font-mono text-yellow-400 font-bold">{player.gold}</div>
                    <div className="col-span-2 font-mono text-gray-300 font-bold">{player.silver}</div>
                    <div className="col-span-2 font-mono text-orange-400 font-bold">{player.bronze}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tab Selector per le edizioni classiche */}
        <div className="flex justify-center mb-10">
          <div className="bg-gray-800/80 backdrop-blur-md p-1.5 rounded-2xl inline-flex border border-gray-700/50 shadow-xl">
            <button
              onClick={() => handleTabChange('fantasanremo')}
              className={`relative flex items-center px-6 md:px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
                isSanremo ? 'text-white shadow-lg' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
              }`}
            >
              {isSanremo && <div className={`absolute inset-0 bg-gradient-to-r ${tabGradientSanremo} rounded-xl z-0`}></div>}
              <span className="relative z-10 flex items-center gap-2"><Music className="w-4 h-4" /> Fantasanremo</span>
            </button>
            <button
              onClick={() => handleTabChange('fantaeurovision')}
              className={`relative flex items-center px-6 md:px-8 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${
                !isSanremo ? 'text-white shadow-lg' : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
              }`}
            >
              {!isSanremo && <div className={`absolute inset-0 bg-gradient-to-r ${tabGradientEurovision} rounded-xl z-0`}></div>}
              <span className="relative z-10 flex items-center gap-2"><Sparkles className="w-4 h-4" /> Fantaeurovision</span>
            </button>
          </div>
        </div>

        {/* Banner Prossimo Evento */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in relative group cursor-default">
          <div className={`absolute -inset-1 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 ${eventConfig.isOngoing ? 'bg-red-500 animate-pulse' : (isSanremo ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gradient-to-r from-purple-500 to-fuchsia-500')}`}></div>
          <div className="relative p-3 sm:p-4 rounded-2xl bg-gray-800 border border-gray-700/50 backdrop-blur-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex items-center gap-3 sm:gap-4 w-full">
                {eventConfig.isOngoing ? (
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-red-500/20 border border-red-500/30 flex-shrink-0 transition-colors duration-500">
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500 animate-ping absolute"></div>
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-red-500 relative"></div>
                  </div>
                ) : <div className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full flex-shrink-0 transition-colors duration-500 ${isSanremo ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-purple-500/20 text-purple-400 border-purple-500/30'}`}><Calendar className="w-5 h-5 sm:w-6 sm:h-6" /></div>}
                <div className="flex-1 min-w-0 text-left">
                  <p className={`text-[10px] sm:text-xs font-black uppercase tracking-widest mb-0.5 sm:mb-1 transition-colors duration-500 ${eventConfig.isOngoing ? 'text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]' : (isSanremo ? 'text-blue-400' : 'text-purple-400')}`}>{eventConfig.isOngoing ? '🔴 Evento in corso' : 'Prossimo evento'}</p>
                  <p className="text-white font-bold text-sm sm:text-lg leading-tight truncate sm:whitespace-normal">{eventConfig.title}</p>
                </div>
              </div>
              {!eventConfig.isOngoing && (
                <div className="w-full sm:w-auto bg-gray-900 px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-gray-700 text-center flex-shrink-0">
                  <p className="text-gray-300 text-xs sm:text-sm font-medium">{eventConfig.dates}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Classifiche Selezionate */}
        <div className={`transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {years.map(year => (
            <YearSection 
              key={`${activeTab}-${year}`} 
              year={year.toString()} 
              data={currentData[year]} 
              themeColor={themeColor}
              onPlayerClick={setSelectedPlayer}
            />
          ))}
        </div>

        {/* --- SEZIONE FANTAOLIMPIADI --- */}
        <section className="mt-24 pt-16 border-t border-gray-800 relative z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-green-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="text-center mb-12 relative z-20">
            <div className="inline-flex items-center justify-center p-4 bg-gray-800/80 backdrop-blur-md rounded-full mb-6 border border-gray-700 shadow-xl">
              <Flame className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 tracking-tight drop-shadow-sm mb-4">
              Fantaolimpiadi
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              L'edizione speciale unica per le Olimpiadi Invernali Milano Cortina 2026.
            </p>
          </div>

          <YearSection 
            year="2026" 
            data={fantaolimpiadiData} 
            themeColor="green" 
            onPlayerClick={setSelectedPlayer}
          />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 text-center py-8">
        <p className="text-gray-500 flex items-center justify-center gap-2">
          Prossima Competizione: Eurovision Song Contest 2026 <Star className="w-4 h-4 text-yellow-600" />
        </p>
      </footer>
    </div>
  );
}
