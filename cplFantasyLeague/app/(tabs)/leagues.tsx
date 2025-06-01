import React, { useState } from "react";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ScrollView, Text, View, Image, TextInput, TouchableOpacity, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";


const LEAGUES = [
  { id: 1, name: "John & Friends Fantasy League" },
  { id: 2, name: "Winners Only FL" },
  { id: 3, name: "Only Atlantic Canadian Players League" },
];

const PLAYERS_BY_LEAGUE: Record<number, { username: string; score: number }[]> = {
  1: [
    { username: "MoSalah11", score: 22 },
    { username: "Haaland9", score: 19 },
    { username: "Saka7", score: 19 },
  ],
  2: [
    { username: "Lewy9", score: 18 },
    { username: "ViniciusJR", score: 20 },
  ],
  3: [{ username: "Musiala42", score: 16 }],
};

export default function Leagues() {
  const [selectedLeague, setSelectedLeague] = useState<{ id: number; name: string } | null>(null);
  const [joinLeagueId, setJoinLeagueId] = useState("");
  const [createModalVisible, setCreateModalVisible] = useState(false);
  const [newLeagueName, setNewLeagueName] = useState("");
  const [newLeagueMaxPlayers, setNewLeagueMaxPlayers] = useState("");

  const onSelectLeague = (league: { id: number; name: string }) => setSelectedLeague(league);
  const onBackToLeagues = () => setSelectedLeague(null);
  const onJoinLeague = () => {
    if (joinLeagueId) {
      alert(`Joining league with ID: ${joinLeagueId}`);
      setJoinLeagueId("");
    }
  };

  const onCreateLeague = () => {
    if (newLeagueName) {
      alert(`Created league: ${newLeagueName}`);
      setCreateModalVisible(false);
      setNewLeagueName("");
      setNewLeagueMaxPlayers("");
    } else {
      alert("Please fill in league name and invite code.");
    }
  };

  return (
    <View className="flex-1 bg-[#05b9ed]">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView className="flex-1 px-5 pt-12" keyboardShouldPersistTaps="handled">
        <Image source={icons.logo} className="w-40 h-40 mx-auto mb-6" resizeMode="contain" />

        {!selectedLeague && (
          <View className="mb-5">
            <Text className="text-white text-lg mb-3 text-center font-semibold">Join a League</Text>
            <View className="flex-row items-center mb-4">
              <TextInput
                value={joinLeagueId}
                onChangeText={setJoinLeagueId}
                placeholder="Enter league ID"
                placeholderTextColor="#d1d5db"
                keyboardType="numeric"
                className="flex-1 p-3 rounded-l-lg bg-white text-black"
              />
              <TouchableOpacity onPress={onJoinLeague} className="bg-blue-700 px-5 py-3 rounded-r-lg">
                <Text className="text-white font-semibold">Join</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {!selectedLeague ? (
          <>
            <Text className="text-white text-3xl font-bold mb-6 text-center">Leagues</Text>
            {LEAGUES.map((league) => (
              <TouchableOpacity
                key={league.id}
                onPress={() => onSelectLeague(league)}
                className="mb-4 p-4 rounded-lg bg-white/90"
              >
                <Text className="text-black text-xl text-center">{league.name}</Text>
              </TouchableOpacity>
            ))}
          </>
        ) : (
          <>
            <TouchableOpacity onPress={onBackToLeagues} className="mb-6">
              <Text className="text-white text-base underline">&larr; Back to Leagues</Text>
            </TouchableOpacity>

            <Text className="text-white text-3xl font-bold mb-6 text-center">{selectedLeague.name} Players</Text>

            {PLAYERS_BY_LEAGUE[selectedLeague.id]?.length ? (
              PLAYERS_BY_LEAGUE[selectedLeague.id].map((player, idx) => (
                <View key={idx} className="flex-row justify-between p-4 mb-3 rounded-lg bg-white/90">
                  <Text className="text-black text-lg">{player.username}</Text>
                  <Text className="text-black text-lg font-semibold">{player.score}</Text>
                </View>
              ))
            ) : (
              <Text className="text-white text-center">No players found in this league.</Text>
            )}
          </>
        )}
      </ScrollView>

      {!selectedLeague && (
        <TouchableOpacity
          onPress={() => setCreateModalVisible(true)}
          className="absolute bottom-32 right-6 bg-green-600 w-16 h-16 rounded-full justify-center items-center shadow-lg"
        >
          <Ionicons name="add" size={32} color="white" />
        </TouchableOpacity>
      )}

      <Modal
        visible={createModalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setCreateModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black/70">
          <View className="w-11/12 bg-white rounded-lg p-6">
            <Text className="text-black text-2xl font-bold mb-4 text-center">Create a League</Text>

            <Text className="text-black font-bold mb-2">League Name:</Text>
            <TextInput
              value={newLeagueName}
              onChangeText={setNewLeagueName}
              placeholderTextColor="#6b7280"
              className="p-3 mb-4 rounded-lg bg-gray-100 text-black"
            />
            <Text className="text-black font-bold mb-2">Invite Code:</Text>
            <TextInput
              value='563256886'
              placeholderTextColor="#6b7280"
              className="p-3 mb-4 rounded-lg bg-gray-100 text-black"
            />
            <Text className="text-black font-bold mb-2">Max Players (Optional):</Text>
            <TextInput
              value={newLeagueMaxPlayers}
              onChangeText={setNewLeagueMaxPlayers}
              placeholderTextColor="#6b7280"
              keyboardType="numeric"
              className="p-3 mb-6 rounded-lg bg-gray-100 text-black"
            />

            <View className="flex-row justify-between">
              <TouchableOpacity onPress={() => setCreateModalVisible(false)} className="bg-gray-300 px-5 py-3 rounded-lg mb-10">
                <Text className="text-black font-semibold">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onCreateLeague} className="bg-green-600 px-5 py-3 rounded-lg mb-10">
                <Text className="text-white font-semibold">Create</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
