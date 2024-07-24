import { facilities } from '@/types/facility';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

interface Props {
  isOk?: boolean;
}

const FacilitiesSelector: React.FC<Props> = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Facilities</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Separator />
        <div className="grid grid-flow-row grid-cols-1 grid-rows-8 lg:grid-cols-4 lg:grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5 divide-y md:divide-y-0">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="flex flex-col items-center justify-between p-2 gap-5"
            >
              <div>{facility.name}</div>
              <div className="flex flex-row gap-10 text-center ">
                {facility.booster.map((booster) => {
                  return (
                    <div key={`${facility.name}-${booster.level}`}>
                      <Label>
                        Level {booster.level}
                        <br />+{booster.bonus}%<br />
                        <Checkbox />
                      </Label>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FacilitiesSelector;
