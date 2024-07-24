import type { Hero } from '@/types/hero';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import SkillsDisplay from './SkillDisplay';

interface Props {
  hero: Hero;
}

const HeroCard: React.FC<Props> = ({ hero }) => {
  return (
    <Card className="h-auto">
      <CardHeader className="text-center">
        <CardTitle>{hero.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-row gap-5 justify-center">
          <SkillsDisplay title="Exploration" skills={hero.skills.exploration} />
          <img
            src={hero.heroModel}
            alt={hero.name}
            className="h-auto max-w-[150px]"
            loading="lazy"
          />
          <SkillsDisplay title="Expedition" skills={hero.skills.expedition} itemsRight />
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
