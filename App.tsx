import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '@/app/context/UserContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SplashScreenHandler from "@/app/core/splashscreen/SplashScreen"
import Router from '@/app/routes/Router';

export default function App() {
  return <NavigationContainer>
    <UserContext>
      <GestureHandlerRootView>
        <SplashScreenHandler>
          <StatusBar
            style="auto"
            translucent={true}
            backgroundColor="transparent" />
          <Router />
        </SplashScreenHandler>
      </GestureHandlerRootView>
    </UserContext>
  </NavigationContainer>

}
