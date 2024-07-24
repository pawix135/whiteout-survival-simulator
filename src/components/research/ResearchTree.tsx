import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { battle_tier1 } from '@/research/battle';
import ResearchItem from './ResearchItem';

interface Props {
  isOk?: boolean;
}

const ResearchTreeDisplay: React.FC<Props> = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Research & Tech</CardTitle>
      </CardHeader>
      <CardContent>
        <Separator className="mb-3" />
        <div className="grid grid-flow-row grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full gap-5">
          <Tabs defaultValue="battle" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="growth" className="w-full">
                Growth
              </TabsTrigger>
              <TabsTrigger value="economy" className="w-full">
                Economy
              </TabsTrigger>
              <TabsTrigger value="battle" className="w-full">
                Battle
              </TabsTrigger>
            </TabsList>
            <TabsContent value="growth">
              <ScrollArea className="w-full h-[400px] md:h-[500px]">Growth</ScrollArea>
            </TabsContent>
            <TabsContent value="economy">
              <ScrollArea>Economy</ScrollArea>
            </TabsContent>
            <TabsContent value="battle">
              <ScrollArea className="w-full h-[400px] md:h-[500px]">
                <ResearchItem tier="I" tree={battle_tier1} />
              </ScrollArea>
            </TabsContent>
          </Tabs>
          <Tabs defaultValue="growth" className="w-full">
            <TabsList className="w-full">
              <TabsTrigger value="growth" className="w-full">
                Growth
              </TabsTrigger>
              <TabsTrigger value="territory" className="w-full">
                Territory
              </TabsTrigger>
              <TabsTrigger value="battle" className="w-full">
                Battle
              </TabsTrigger>
            </TabsList>
            <TabsContent value="growth">
              <ScrollArea>Growth</ScrollArea>
            </TabsContent>
            <TabsContent value="territory">
              <ScrollArea>Territory</ScrollArea>
            </TabsContent>
            <TabsContent value="battle">
              <ScrollArea>Battle</ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </CardContent>
    </Card>
  );
};

export default ResearchTreeDisplay;
