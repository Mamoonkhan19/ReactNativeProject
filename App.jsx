import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screen/Login';
import Home from './screen/Home';
import MoreDeatails from './screen/MoreDeatails';



const Stack = createNativeStackNavigator();
export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name='Login' 
         component={Login} 
         options={{headerShown:false}}
         />
        <Stack.Screen 
        name='Home'
        component={Home}
        options={{headerShown:false}}
        />
        <Stack.Screen
         name='MoreDeatails' 
         component={MoreDeatails} 
         options={{headerShown:false}}
         />
      </Stack.Navigator>
    </NavigationContainer>

  
  )

}

