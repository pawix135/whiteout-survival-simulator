import { z } from 'zod';

export const ResearchTechnologyTypeSchema = z.enum(['Battle', 'Growth', 'Economy', 'Territory']);
export const ResearchCenterTypeSchema = z.enum(['Research', 'Tech']);

export type ResearchTechnologyType = z.infer<typeof ResearchTechnologyTypeSchema>;
export type ResearchCenterType = z.infer<typeof ResearchCenterTypeSchema>;

export const BattleUpgradesTypeEnum = z.enum([
  'Lancer Armor',
  'Marksmen Armor',
  'Lancer Upgrade',
  'Targeted Sniping',
  'Regimental Expansion',
  'Assault Techniques',
  'Survival Techniques',
  'Bulwark Formations',
  'Picket Lines',
  'Shield Upgrade',
  'Defensive Formations',
  'Skirmishing',
  'Precision Targeting',
  'Close Combat',
  'Reprisal Tactics',
  'Special Defensive Training',
  'Weapon Prep',
]);

export const GrowthUpgradesTypeEnum = z.enum([
  'Command Tactics',
  'Trainer Tools',
  'Bandaging',
  'Tool Enhancement',
  'Camp Expansion',
  'Ward Expansion',
  'Tooling Up',
]);

export const ResearchItemTierSchema = z.array(
  z.object({
    level: z.number().int().min(1).max(6),
    value: z.object({
      upgradeValue: z.number(),
      isFlat: z.boolean().optional(),
    }),
    statistic: z.object({
      type: z.enum([
        'troops',
        'chief',
        'building',
        'research',
        'training',
        'healing',
        'territory',
        'economy',
      ]),
      id: z.string(),
    }),
  })
);

export const ResearchItemSchema = z.object({
  info: z.discriminatedUnion('technologyType', [
    z.object({ technologyType: z.literal('Battle'), upgradeType: BattleUpgradesTypeEnum }),
    z.object({ technologyType: z.literal('Growth'), upgradeType: GrowthUpgradesTypeEnum }),
  ]),
  icon: z.string().url(),
  levels: ResearchItemTierSchema,
});

export type ResearchItem = z.infer<typeof ResearchItemSchema>;

export const ResearchTreeSchema = z.object({
  type: ResearchCenterTypeSchema,
  technologyTab: ResearchTechnologyTypeSchema,
  items: z.array(ResearchItemSchema),
  tier: z.number().int().min(1).max(7),
});

export type ResearchTree = z.infer<typeof ResearchTreeSchema>;
