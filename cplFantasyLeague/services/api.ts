const BASE_URL = 'https://v3.football.api-sports.io';

type Player = {
  name: string;
  photo: string;
};

export type Game = {
  homeTeam: string;
  awayTeam: string;
  homeLogo: string;
  awayLogo: string;
  date: string;
  status: string;
};

export const fetchTopPlayers = async (limit = 5): Promise<Player[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/players?league=479&season=2023`,
      {
        method: 'GET',
        //@ts-ignore
        headers: {
          'x-apisports-key': process.env.EXPO_PUBLIC_API_KEY,
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

export const fetchGamesOfTheWeek = async (limit = 7): Promise<Game[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/fixtures?league=479&season=2023`,
      {
        method: 'GET',
        //@ts-ignore
        headers: {
          'x-apisports-key': process.env.EXPO_PUBLIC_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const json = await response.json();

    const games: Game[] = json.response.slice(0, limit).map((gameObj: any) => ({
      homeTeam: gameObj.teams.home.name,
      awayTeam: gameObj.teams.away.name,
      homeLogo: gameObj.teams.home.logo,
      awayLogo: gameObj.teams.away.logo,
      status: gameObj.fixture.status.short,
    }));

    return games;
  } catch (error: any) {
    throw new Error(error.message || 'Unknown error occurred.');
  }
};

export const fetchPlayersByPosition = async (position: string, limit = 10): Promise<Player[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/players?league=479&season=2023`,
      {
        method: 'GET',
        //@ts-ignore
        headers: {
          'x-apisports-key': process.env.EXPO_PUBLIC_API_KEY,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const json = await response.json();

    // Filter players by position from their first statistics record
    const players: Player[] = json.response
      .filter(
        (playerObj: any) =>
          playerObj.statistics.length > 0 &&
          playerObj.statistics[0].games.position === position
      )
      .slice(0, limit)
      .map((playerObj: any) => ({
        name: playerObj.player.name,
        photo: playerObj.player.photo,
      }));

    return players;
  } catch (error: any) {
    throw new Error(error.message || 'Unknown error occurred.');
  }
};







