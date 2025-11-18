import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'
import { StatusBar } from 'expo-status-bar'
import NavegadorPrincipal from './src/navegacao/Navegador.js'

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <NavegadorPrincipal />
      </NavigationContainer>
    </PaperProvider>
  )
}
