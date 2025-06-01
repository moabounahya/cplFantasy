import { icons } from '@/constants/icons';
import React, { useState } from 'react';
import { View, TextInput, Image } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View className="flex-row items-center bg-accent rounded-full px-5 py-4">
      <Image source={icons.search} resizeMode="contain" style={{ tintColor: '#ab8bff', width: 20, height: 20 }} />
      <TextInput
        placeholder="Search for players"
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-black"
      />
    </View>
  );
};

export default SearchBar;
