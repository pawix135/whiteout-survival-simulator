import { researchIconPath } from '@/lib/utils';
import type { ResearchTree } from '@/types/research';

export const battle_tier1: ResearchTree = {
  type: 'Research',
  technologyTab: 'Battle',
  items: [
    {
      icon: researchIconPath('weapon_prep.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Weapon Prep',
      },
      levels: [
        {
          level: 1,
          value: { upgradeValue: 0.5 },
          statistic: { type: 'troops', id: 'global;attack' },
        },
        {
          level: 2,
          value: { upgradeValue: 0.5 },
          statistic: { type: 'troops', id: 'global;attack' },
        },
        {
          level: 3,
          value: { upgradeValue: 0.5 },
          statistic: { type: 'troops', id: 'global;attack' },
        },
      ],
    },
    {
      icon: researchIconPath('reprisal_tactics.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Reprisal Tactics',
      },
      levels: [
        {
          level: 1,
          statistic: {
            type: 'troops',
            id: 'infantry;attack',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 2,
          statistic: {
            type: 'troops',
            id: 'infantry;attack',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 3,
          statistic: {
            type: 'troops',
            id: 'infantry;attack',
          },
          value: {
            upgradeValue: 1.5,
          },
        },
      ],
    },
    {
      icon: researchIconPath('precision_targeting.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Precision Targeting',
      },
      levels: [
        {
          level: 1,
          statistic: {
            type: 'troops',
            id: 'marksman;attack',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 2,
          statistic: {
            type: 'troops',
            id: 'marksman;attack',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 3,
          statistic: {
            type: 'troops',
            id: 'marksman;attack',
          },
          value: {
            upgradeValue: 1.5,
          },
        },
      ],
    },
    {
      icon: researchIconPath('skirmishing.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Skirmishing',
      },
      levels: [
        {
          level: 1,
          statistic: {
            id: 'lancer;attack',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 2,
          statistic: {
            id: 'lancer;attack',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 3,
          statistic: {
            id: 'lancer;attack',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.5,
          },
        },
      ],
    },
    {
      icon: researchIconPath('defensive_formations.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Defensive Formations',
      },
      levels: [
        {
          level: 1,
          statistic: {
            id: 'infantry;defence',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 2,
          statistic: {
            id: 'infantry;defence',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 1,
          statistic: {
            id: 'infantry;defence',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.5,
          },
        },
      ],
    },
    {
      icon: researchIconPath('picket_lines.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Picket Lines',
      },
      levels: [
        {
          level: 1,
          statistic: {
            type: 'troops',
            id: 'marksman;defense',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 2,
          statistic: {
            type: 'troops',
            id: 'marksman;defense',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 3,
          statistic: {
            type: 'troops',
            id: 'marksman;defense',
          },
          value: {
            upgradeValue: 1.5,
          },
        },
      ],
    },
    {
      icon: researchIconPath('bulwark_formations.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Bulwark Formations',
      },
      levels: [
        {
          level: 1,
          statistic: {
            id: 'lancer;defense',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 2,
          statistic: {
            id: 'lancer;defense',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.25,
          },
        },
        {
          level: 3,
          statistic: {
            id: 'lancer;defense',
            type: 'troops',
          },
          value: {
            upgradeValue: 1.5,
          },
        },
      ],
    },
    {
      icon: researchIconPath('special_defensive_training.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Special Defensive Training',
      },
      levels: [
        {
          level: 1,
          statistic: {
            id: 'global;defense',
            type: 'troops',
          },
          value: {
            upgradeValue: 0.5,
          },
        },
        {
          level: 2,
          statistic: {
            id: 'global;defense',
            type: 'troops',
          },
          value: {
            upgradeValue: 0.5,
          },
        },
        {
          level: 3,
          statistic: {
            id: 'global;defense',
            type: 'troops',
          },
          value: {
            upgradeValue: 0.5,
          },
        },
      ],
    },
    {
      icon: researchIconPath('survival_techniques.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Survival Techniques',
      },
      levels: [
        {
          level: 1,
          statistic: {
            id: 'global;health',
            type: 'troops',
          },
          value: {
            upgradeValue: 0.5,
          },
        },
        {
          level: 2,
          statistic: {
            id: 'global;health',
            type: 'troops',
          },
          value: {
            upgradeValue: 0.5,
          },
        },
        {
          level: 3,
          statistic: {
            id: 'global;health',
            type: 'troops',
          },
          value: {
            upgradeValue: 0.5,
          },
        },
      ],
    },
    {
      icon: researchIconPath('assault_techniques.png'),
      info: {
        technologyType: 'Battle',
        upgradeType: 'Assault Techniques',
      },
      levels: [
        {
          level: 1,
          statistic: {
            id: 'global;lethality',
            type: 'troops',
          },
          value: {
            upgradeValue: 0.5,
          },
        },
      ],
    },
  ],
  tier: 1,
};
