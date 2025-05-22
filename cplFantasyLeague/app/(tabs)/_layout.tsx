import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text } from 'react-native'

const _layout = () => {
    return (
        <Tabs>
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    headerShown: false
                }}
            />
            <Tabs.Screen
                name="leagues"
                options={{
                    title: "Leagues",
                    headerShown: false
                }} 
            />

            <Tabs.Screen
                name="squad"
                options={{
                    title: "Squad",
                    headerShown: false
                }}
            />

            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false
                }}
            />
        </Tabs>
    )
}

export default _layout
