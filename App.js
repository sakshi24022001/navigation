/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

{/*import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

const MyComponent = () => (
  <Card>
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
  </Card>
);

export default MyComponent;*/}

import * as React from 'react';
import pic1 from './img.png';
import { Text, View,Image} from 'react-native';
import { Card ,Button } from 'react-native-paper';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  
  return (
    // react-native-paper
    <Button mode="contained-tonal"
      onPress={() =>
        navigation.navigate('Profile', { name: 'Jane' })
      }
    >Go to sakshi profile</Button>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return( 
           <Card>
            <View>
               <Text>This is {route.params.name}'s profile {'\n'}</Text>
               <Text>Hello</Text>
               <Image
                source={pic1}/>
               </View>
            </Card>
         
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
