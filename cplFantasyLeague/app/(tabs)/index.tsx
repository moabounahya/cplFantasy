import React, { useEffect, useState } from 'react';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { ScrollView, Text, View, Image } from 'react-native';
import { fetchTopPlayers } from '@/services/api';

type Player = {
  name: string;
  photo: string;
};

export default function Index() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTopPlayers()
      .then(setPlayers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-3">
        <Image source={icons.logo} className="w-40 h-40 mt-20 mb-5 mx-auto" />
        
        <Text className="text-white text-2xl font-bold mb-4 text-left mt-5"> Players Of The Week:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-2">
          {loading ? (<Text className="text-white">Loading players...</Text>) : error ? (<Text className="text-red-500">Error: 
            {error}</Text>) : (players.map((player, index) => (
              <View key={index} className="items-center mr-6">
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
      </ScrollView>
    </View>
  );
}

