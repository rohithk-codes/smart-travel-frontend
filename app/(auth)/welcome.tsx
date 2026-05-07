import { Text, TouchableOpacity, View,ImageBackground,Image } from 'react-native'
import {router} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Swiper from 'react-native-swiper'
import { useRef, useState } from 'react'
import { onBoardingSteps } from '../../constants'


const Onboarding = () => {

  const swiperRef = useRef<Swiper>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  return (
   <SafeAreaView className='flex h-full items-center  justify-between'>
  <TouchableOpacity
        onPress={() => router.replace('/(auth)/sign-up')}
      >
<Text>Skip</Text>

 </TouchableOpacity>

 <Swiper
 ref={swiperRef}
 loop={false}
 dot={<View className='w-2 h-2 rounded-full bg-gray-300 mx-1' />}   
 activeDot={<View className='w-2 h-2 rounded-full bg-gray-300 mx-1' />}  
  onIndexChanged={(index) => setActiveIndex(index)} 
>
  {/* {onBoardingSteps.map((step) => (
    <View key={step.id} className='flex items-center justify-center p-4'>
      <Text className='text-xl font-bold'>{step.title}</Text>
      <Text className='text-gray-500 text-center mt-2'>{step.description}</Text>
        <Image source={step.image} className='w-full h-64 mt-4' resizeMode='contain' /> 
    </View>
  ))} */}

  {onBoardingSteps.map((step) => (
  <ImageBackground
    key={step.id}
    source={step.image}
    resizeMode="cover"
    className="flex-1 justify-center items-center"
  >
    <View className="bg-black/40 p-6 rounded-2xl mx-4">
      <Text className="text-white text-3xl font-bold text-center">
        {step.title}
      </Text>

      <Text className="text-white text-center mt-3">
        {step.description}
      </Text>
    </View>
  </ImageBackground>
))}
  </Swiper>
   </SafeAreaView>
  )
}

export default Onboarding