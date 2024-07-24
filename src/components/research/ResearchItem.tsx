import type { ResearchItem, ResearchTree } from '@/types/research';
import { Separator } from '../ui/separator';

interface Props {
  tier: 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI' | 'VII';
  tree: ResearchTree;
}

const ResearchItem: React.FC<Props> = ({ tier, tree }) => {
  return (
    <div>
      <p className="text-xl font-bold">Tier {tier}</p>
      <Separator className="my-3" />
      <div className="flex flex-row gap-5 flex-wrap justify-evenly">
        {tree.items.map((item, i) => {
          return (
            <div key={`technology-${tier}-${i}`} className="flex items-center flex-col gap-2 ">
              <div className="research size-[90px] bg-gradient-to-b  from-[#0084CE] via-[#4AE7FF] to-[#0C7BC0]">
                <img src={item.icon} alt={item.info.technologyType} loading="lazy" />
              </div>
              <div className="border-2 border-white bg-secondary w-max text-xs py-2 px-5 rounded-full -mt-5 z-10">
                1/3
              </div>
              <p className="text-sm  w-min text-center">{item.info.upgradeType}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// <div className="flex items-center flex-col mb-10">

// </div>

export default ResearchItem;
