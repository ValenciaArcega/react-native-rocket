import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '@/app/context/UserContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreenHandler from "@/app/core/splashscreen/SplashScreen"
import Router from '@/app/routes/Router';
import { KeyboardAvoiderProvider } from "@/app/components/KeyboardScroll";
import { useColorScheme } from 'react-native';

export default function App() {
  const colorScheme = useColorScheme()

  return <NavigationContainer>
    <UserContext>
      <GestureHandlerRootView>
        {/* <KeyboardAvoiderProvider>
          <SplashScreenHandler> */}
        <StatusBar
          style={colorScheme == "dark" ? "light" : "dark"}
          translucent={true}
          backgroundColor="transparent" />
        <Router />
        {/* </SplashScreenHandler>
        </KeyboardAvoiderProvider> */}
      </GestureHandlerRootView>
    </UserContext>
  </NavigationContainer>
}
