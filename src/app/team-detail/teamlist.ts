
export interface TeamDetails {
    name: string;
    matches: number;
    won: number;
    lost: number;
    draw: number;
    totalgoals: number;
    points: number;
  }
  
export const TeamList: TeamDetails[] = [
    {
      name: 'Man City',
      matches: 5,
      won: 2,
      lost: 1,
      draw: 2,
      totalgoals:7,
      points: 21
    },
    {
      name: 'Arsenal',
      matches: 5,
      won: 2,
      lost: 1,
      draw: 2,
      totalgoals:7,
      points: 21
    },
  ];
  