import { IconSymbol } from "@/components/ui/IconSymbol";
import { router, Stack } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function Layout() {
    
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="settings" options={{ headerShown: false }} />
            <Stack.Screen name="profile" options={{ 
                headerShown: true, 
                title: 'Profile',
                headerStyle: {
                    backgroundColor: 'rgb(242, 242, 242)'
                },
                headerTintColor: 'black',
                headerShadowVisible: false,
                headerBackVisible: false,
                headerLeft: () => (
                    <TouchableOpacity onPress={() => router.back()}>
                        <IconSymbol size={25} name="chevron.left" color="black" />
                    </TouchableOpacity>
                )
                }} />
        </Stack>
    )
}