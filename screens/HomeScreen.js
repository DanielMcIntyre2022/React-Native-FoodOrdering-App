import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {

    const navigation = useNavigation();

    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: false
      });
    }, [])

    return (

        <SafeAreaView>
            <Text className="text-red-500">
                {/* header */}
                <View className="flex-row pb-3 items-center mx-4 space-x-2">
                    <Image
                        source={{
                            uri: 'https://links.papareact.com/wru'
                        }}
                        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
                    />
                
                <View>
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-xl">Current Location</Text>
                </View>
                </View>
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen;