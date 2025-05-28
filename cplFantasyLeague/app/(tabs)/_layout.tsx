import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text, ImageBackground, Image } from 'react-native'

const TabIcon = ({focused, icon, title}: any) => {
    if(focused){
        return(
            <ImageBackground 
                source={images.highlight}
                className="flex flex-row w-full flex-1 min-w-[100px] min-h-20 mt-5 justify-center items-center 
                rounded-full overflow-hidden"
            >
                <Image source={icon} tintColor="white" className="size-8"/>
                <Text className="text-white text-base font-semibold ml-1">{title}</Text>
            </ImageBackground>
        )
    }
    return(
        <View className="size-full justify-center items-center mt-4 rounded-full">
            <Image source={icon} tintColor="A8B5DB" className="size-8" />
        </View>
    )
}

const _layout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarItemStyle: {
                    width: '100%', 
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center'
                },
                tabBarStyle: {
                    backgroundColor: 'white',
                    borderRadius: 75,
                    marginHorizontal: 20,
                    marginBottom: 36,
                    height: 55,
                    position: 'absolute',
                    overflow: 'hidden',
                    borderWidth: 1,
                    borderColor: 'white'
                }
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused}
                            icon = {icons.home}
                            title = "Home"
                        />
                    )      
                }}
            />
            <Tabs.Screen
                name="leagues"
                options={{
                    title: "Leagues",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused}
                            icon = {icons.trophy}
                            title = "Leagues"
                        />
                    )  
                }} 
            />

            <Tabs.Screen
                name="squad"
                options={{
                    title: "Squad",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused}
                            icon = {icons.field}
                            title = "Squad"
                        />
                    )  
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon 
                            focused={focused}
                            icon = {icons.person}
                            title = "Profile"
                        />
                    )  
                }}
            />
        </Tabs>
    )
}

export default _layout
