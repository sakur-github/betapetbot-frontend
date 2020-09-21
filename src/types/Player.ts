type Player = {
  id: number;
  handle: string;
  name_first: string;
  name_last: string;
  age: number;
  location?: number;
  gender: number;
  location_text: string;
  rating: number;
  won: number;
  droped: number;
  drawn: number;
  games: number;
  bingos: number;
};

export default Player;
