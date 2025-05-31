import {View, TouchableOpacity, Text} from 'react-native'

const Quadrants = () => {
    return(
        <View className="flex-row flex-wrap gap-x-3 gap-y-3"> 
              <TouchableOpacity className="w-[48%] h-60 bg-accent justify-center items-center rounded-lg">
                <Text className="text-black text-lg font-bold">Team Of The Week</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[48%] h-60 bg-accent justify-center items-center rounded-lg">
                <Text className="text-black text-lg font-bold">Top Goalscorers</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[48%] h-60 bg-accent justify-center items-center rounded-lg">
                <Text className="text-black text-lg font-bold">Highest Rated Players</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[48%] h-60 bg-accent justify-center items-center rounded-lg">
                <Text className="text-black text-lg font-bold">Crypto Wallet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Quadrants