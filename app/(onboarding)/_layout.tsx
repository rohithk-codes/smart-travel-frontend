import { Stack } from "expo-router"

const Layout = ()=>{

    return(
    <Stack>
        <Stack.Screen name="index" options={{headerShown:false}} />
        <Stack.Screen name="NotificationScreen" options={{headerShown:false}} />
        <Stack.Screen name="SafetyScreen" options={{headerShown:false}} />
        <Stack.Screen name="TrackingScreen" options={{headerShown:false}} />
    </Stack>
    )
}

export default Layout