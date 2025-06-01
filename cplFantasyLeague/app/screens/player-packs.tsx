import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { View, Text, ScrollView, Image, TouchableOpacity, Modal, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { fetchPackPlayers} from '@/services/api';

type Player = {
    name: string;
    photo: string;
  };

const PlayerPacks = () => {
  const router = useRouter();
  const [selectedPack, setSelectedPack] = useState<string | null>(null);
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);

  const handlePackPress = (position: string) => {
    setSelectedPack(position);
  };

  const confirmPurchase = async () => {
    if (!selectedPack) return;

    try {
      setLoading(true);
      const result = await fetchPackPlayers(selectedPack);
      setPlayers(result);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setSelectedPack(null);
    setPlayers([]);
    setLoading(false);
  };

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full h-full z-0" />

      <ScrollView className="flex-1 px-5 pt-10" contentContainerStyle={{ paddingBottom: 100 }}>
        <Image source={icons.logo} className="w-32 h-32 mb-5 mx-auto" />
        <Text className="text-white text-3xl font-bold text-center mb-6">Player Packs</Text>

        {['Goalkeeper', 'Defender', 'Midfielder', 'Attacker'].map((pack) => (
          <TouchableOpacity
            key={pack}
            className="bg-accent rounded-xl p-5 mb-5"
            onPress={() => handlePackPress(pack)}
          >
            <Text className="text-black text-xl font-bold text-center">{pack}s Pack</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity onPress={() => router.back()} className="mt-5">
          <Text className="text-white text-center underline">Go Back</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Confirm Purchase Modal */}
      <Modal
        visible={selectedPack !== null && players.length === 0}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-center items-center bg-black/70">
          <View className="bg-white p-6 rounded-xl w-4/5 items-center">
            <Text className="text-xl font-bold mb-3">Confirm Purchase</Text>
            <Text className="text-base mb-5">Buy {selectedPack}s Pack for 0.0005 ETH?</Text>

            <View className="flex-row space-x-4">
              <TouchableOpacity
                className="bg-green-500 px-4 py-2 rounded-lg"
                onPress={confirmPurchase}
              >
                <Text className="text-white font-bold">Accept</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className="bg-red-500 px-4 py-2 rounded-lg"
                onPress={closeModal}
              >
                <Text className="text-white font-bold">Decline</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      
      <Modal
        visible={players.length > 0}
        transparent
        animationType="slide"
        onRequestClose={closeModal}
      >
        <View className="flex-1 justify-center items-center bg-black/70">
          <View className="bg-white p-6 rounded-xl w-4/5 items-center">
            <Text className="text-xl font-bold mb-4">{selectedPack}s Pack</Text>

            {loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : (
              <ScrollView className="w-full max-h-80">
                {players.map((player, index) => (
                  <View key={index} className="flex-row items-center mb-3">
                    <Image source={{ uri: player.photo }} className="w-10 h-10 rounded-full mr-3" />
                    <Text className="text-base">{player.name}</Text>
                  </View>
                ))}
              </ScrollView>
            )}

            <TouchableOpacity
              className="bg-blue-500 px-4 py-2 rounded-lg mt-5"
              onPress={closeModal}
            >
              <Text className="text-white font-bold">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlayerPacks;


