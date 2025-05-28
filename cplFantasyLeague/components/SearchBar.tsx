import { icons } from '@/constants/icons'
import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'

const SearchBar = () => {
    return (
        <View className="flex-row items-center bg-accent rounded-full px-5 py-4">
            <Image source={icons.search} resizeMode="contain" tintColor="ab8bff" />
            <TextInput 
                onPress = {() => {}}
                placeholder = "Search for players"
                value= ""
                onChangeText = {() => {}}
                placeholderTextColor = "a8b5db"
                className="flex-1 ml-2 text-black"
            />
        </View>
    )
}

export default SearchBar
