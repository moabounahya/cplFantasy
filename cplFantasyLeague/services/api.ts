import { API_KEY } from '@env';

const BASE_URL = 'https://v3.football.api-sports.io';

type Player = {
  name: string;
  photo: string;
};

export const fetchTopPlayers = async (limit = 5): Promise<Player[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/players?league=479&season=2023`,
      {
        method: 'GET',
        headers: {
          'x-apisports-key': API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const json = await response.json();

    const topPlayers: Player[] = json.response
      .slice(0, limit)
      .map((playerObj: any) => ({
        name: playerObj.player.name,
        photo: playerObj.player.photo,
      }));

    return topPlayers;
  } catch (error: any) {
    throw new Error(error.message || 'Unknown error occurred.');
  }
};




