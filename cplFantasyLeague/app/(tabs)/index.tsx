import React, { useEffect, useState } from 'react';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { ScrollView, Text, View, Image } from 'react-native';
import { fetchTopPlayers, fetchGamesOfTheWeek, Game } from '@/services/api';
import Quadrants from "@/components/Quadrants"

type Player = {
  name: string;
  photo: string;
};

export default function Index() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [loadingPlayers, setLoadingPlayers] = useState(true);
  const [loadingGames, setLoadingGames] = useState(true);
  const [errorPlayers, setErrorPlayers] = useState<string | null>(null);
  const [errorGames, setErrorGames] = useState<string | null>(null);

  useEffect(() => {
    fetchTopPlayers()
      .then(setPlayers)
      .catch((err) => setErrorPlayers(err.message))
      .finally(() => setLoadingPlayers(false));

    fetchGamesOfTheWeek()
      .then(setGames)
      .catch((err) => setErrorGames(err.message))
      .finally(() => setLoadingGames(false));
  }, []);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />
      <ScrollView className="flex-1 px-3" contentContainerStyle={{ paddingBottom: 100 }}>
        <Image source={icons.logo} className="w-40 h-40 mt-20 mb-5 mx-auto" />

        <Text className="text-white text-2xl font-bold mb-4 text-left mt-5"> Players Of The Week:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2 mb-14">
          {loadingPlayers ? (
            <Text className="text-white">Loading players...</Text>
          ) : errorPlayers ? (
            <Text className="text-red-500">Error: {errorPlayers}</Text>
          ) : (
            players.map((player, index) => (
              <View key={player.name + index} className="items-center mr-6">
                <Image
                  source={{ uri: player.photo }}
                  className="w-24 h-24 rounded-full mb-2"
                />
                <Text className="text-white text-sm text-center w-24">
                  {player.name}
                </Text>
              </View>
            ))
          )}
        </ScrollView>

        <Quadrants />

        <Text className="text-white text-2xl font-bold mb-4 text-left mt-5"> Upcoming Fixtures:</Text>
        {loadingGames ? (
          <Text className="text-white">Loading games...</Text>
        ) : errorGames ? (
          <Text className="text-red-500">Error: {errorGames}</Text>
        ) : (
          games.map((game, index) => (
            <View key={index} className="flex-row items-center mb-3 justify-between px-5 py-4 bg-accent rounded-lg">
              <View className="flex-row items-center flex-1">
                <Image source={{ uri: game.homeLogo }} className="w-8 h-8 mr-2" />
                <Text className="text-black text-lg" numberOfLines={1} ellipsizeMode="tail">
                  {game.homeTeam}
                </Text>
              </View>

              <View className="w-12 items-center">
                <Text className="text-black text-lg text-center">vs</Text>
              </View>

              <View className="flex-row items-center flex-1 justify-end">
                <Text className="text-black text-lg mr-2" numberOfLines={1} ellipsizeMode="tail">
                  {game.awayTeam}
                </Text>
                <Image source={{ uri: game.awayLogo }} className="w-8 h-8" />
              </View>
            </View>
          ))
        )}

      </ScrollView>
    </View>
  );
}


