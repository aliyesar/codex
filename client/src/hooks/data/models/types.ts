import { Difficulty } from '@models/enums';

export type Challenge = {
  id: string;
  name: string;
  question: string;
  problem: Problem;
  status: number;
  teamSize: number;
  participated: boolean;
  date: string;
  //
  score: number;
  ranking: number;
};

export type Problem = {
  id: string;
  title: string;
  content: string;
  difficulty: Difficulty;
};

export type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
};

export type Participant = {
  id: string;
  name: string;
};

export type Lobby = {
  id: string;
  name: string;
  question: string;
  status: number;
  teamSize: number;
  participants: Participant[];
  date: string;
};

export type Room = {
  id: string;
  name: string;
  question: string;
  status: number;
  teamSize: number;
  team: {
    id: string;
    participants: Participant[];
  };
  date: string;
};
