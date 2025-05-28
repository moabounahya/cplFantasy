export const API_FOOTBALL = {
    BASE_URL: 'https://v3.football.api-sports.io',
    API_KEY: process.env.EXPO_PUBLIC_FOOTBALL_API_KEY,
    headers: {
        accept: 'application.json',
        "x-apisports-key": process.env.EXPO_PUBLIC_FOOTBALL_API_KEY,
    }
}