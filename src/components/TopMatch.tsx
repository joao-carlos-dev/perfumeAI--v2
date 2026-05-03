import { type Perfume } from '../data/perfumeMock';


const TopMatch = ({ data }: { data: Perfume }) => {
    // Definimos o raio (deve ser o mesmo do seu SVG r="35")
    const radius = 35;

    // Calculamos a circunferência total (o caminho completo)
    const circumference = 2 * Math.PI * radius;

    // Calculamos o tamanho do traço rosa (baseado na porcentagem)
    const dash = (data.matchPercent / 100) * circumference;

    // O que sobra é o espaço vazio
    const gap = circumference - dash;

  return (
    <section className="flex flex-col md:flex-row bg-brand-bg items-center bg-linear-to-tr from-black to-purple-900 rounded-2xl">
      <div className="justify-between flex flex-col md:flex-row items-center  text-white">
        <div className="flex items-center bg-pink-600 rounded-2xl w-30 h-30 m-4 shrink-0">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="flex flex-col px-4">
          <h4 className="uppercase text-brand-accent py-4">
            top match para você
          </h4>
          <h3 className="font-bold">{data.name}</h3>
          <h5 className="text-gray-400">{data.brand}</h5>
          <p className="text-gray-400 py-2">{data.description}</p>
          <ul className="flex gap-2 flex-wrap">
            {data.tags.map((tag,index) => (
                <li key={index} className="flex items-center gap-1.5 px-3 py-1 mb-4 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                    {/* <span>🍓</span> */}
                    <span>{tag}</span>
                </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-34 h-34">
        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90" >
            <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-white/10" />
            <circle cx="50" cy="50" r="35" stroke={data.themeColor} strokeWidth="10" fill="transparent" strokeDasharray={`${dash} ${gap}`} strokeLinecap="round"/>
        </svg>
        <div className="absolute flex flex-col items-center">
            <span className="text-sm font-bold text-white">{data.matchPercent}%</span>
            <span className="text-[10px] uppercase text-gray-400">Match</span>
        </div>
      </div>
    </section>
  );
};

export default TopMatch;
