import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { Tabs } from 'expo-router'
import { ScrollView, Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView className="flex-1 px-5">
        <Image source={icons.logo} className="w-40 h-40 mt-20 mb-5 mx-auto" />
      </ScrollView>
    </View>
  );
}
