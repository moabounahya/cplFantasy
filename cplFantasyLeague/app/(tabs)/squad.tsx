import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { ScrollView, Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState } from 'react';
import { fetchPlayersByPosition } from '@/services/api';
import SearchBar from "@/components/SearchBar";

type Player = {
  name: string;
  photo: string;
};

const Squad = () => {
  const [goalkeepers, setGoalkeepers] = useState<Player[]>([]);
  const [defenders, setDefenders] = useState<Player[]>([]);
  const [midfielders, setMidfielders] = useState<Player[]>([]);
  const [attackers, setAttackers] = useState<Player[]>([]);

  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);

  const positionLimits = {
    GK: 1,
    DEF: 4,
    MID: 3,
    ATT: 3,
  };

  const getPositionCount = (positionPrefix: string) =>
    selectedPlayers.filter(p => p.name.startsWith(positionPrefix)).length;

  useEffect(() => {
    fetchPlayersByPosition("Goalkeeper").then(setGoalkeepers).catch(console.error);
    fetchPlayersByPosition("Defender").then(setDefenders).catch(console.error);
    fetchPlayersByPosition("Midfielder").then(setMidfielders).catch(console.error);
    fetchPlayersByPosition("Attacker").then(setAttackers).catch(console.error);
  }, []);

  const togglePlayer = (player: Player, positionPrefix: string, limit: number) => {
    const isSelected = selectedPlayers.some(p => p.name === player.name);

    if (isSelected) {
      setSelectedPlayers(prev => prev.filter(p => p.name !== player.name));
    } else {
      const count = getPositionCount(positionPrefix);
      if (count >= limit) {
        Alert.alert(`Limit reached`, `You can only pick ${limit} ${positionPrefix === "GK" ? "Goalkeeper" : positionPrefix === "DEF" ? "Defenders" : positionPrefix === "MID" ? "Midfielders" : "Attackers"}.`);
        return;
      }
      setSelectedPlayers(prev => [...prev, { ...player, name: `${positionPrefix} ${player.name}` }]);
    }
  };

  const renderPlayerList = (players: Player[], positionPrefix: string, limit: number) => (
    <View className="mb-6">
      <Text className="text-white text-xl font-bold mt-8 mb-2">
        {positionPrefix === "GK"
          ? "Goalkeepers"
          : positionPrefix === "DEF"
          ? "Defenders"
          : positionPrefix === "MID"
          ? "Midfielders"
          : "Attackers"}
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {players.map((player, index) => {
          const isSelected = selectedPlayers.some(p => p.name === `${positionPrefix} ${player.name}`);
          return (
            <TouchableOpacity
              key={index}
              className={`items-center mr-4 p-2 rounded-lg ${
                isSelected ? 'bg-green-500' : 'bg-white/10'
              }`}
              onPress={() => togglePlayer(player, positionPrefix, limit)}
            >
              <Image source={{ uri: player.photo }} className="w-16 h-16 rounded-full mb-2" />
              <Text className="text-white text-xs text-center w-16">{player.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />
      <ScrollView className="flex-1 px-5 pt-10" contentContainerStyle={{ paddingBottom: 100 }}>

        <Image source={icons.logo} className="w-32 h-32 mb-5 mx-auto" />
        <SearchBar />

        <Text className="text-white text-lg font-bold text-center mt-4 mb-2">
          Selected Players: {selectedPlayers.length}/11
        </Text>

        {renderPlayerList(goalkeepers, "GK", positionLimits.GK)}
        {renderPlayerList(defenders, "DEF", positionLimits.DEF)}
        {renderPlayerList(midfielders, "MID", positionLimits.MID)}
        {renderPlayerList(attackers, "ATT", positionLimits.ATT)}

      </ScrollView>
    </View>
  );
};

export default Squad;
