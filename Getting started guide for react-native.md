# Getting started guide for React Native
This is a starter guide for React Native. This starter guide is for people who have coded before but not with React Native. 
## Creating your first app
Before creating your app you have to set up your development environment, do so by following [this](https://reactnative.dev/docs/environment-setup) tutorial. 

Now that you have your environment set up you can create your app. To do so write the following in your cmd. 

```
npx react-native init AwesomeProject
```
then cd in to your project using
```
cd AwesomeProject
```
Now there are 2 steps left.

**Step 1: Start Metro**

To start metro your write the following in your cmd. Let metro run in its own terminal and open a new cmd for step 2.

```
npx react-native start
```

**Step 2: Start your application**

Run the following to start your application.

```
npx react-native run-android
```

If everything is set up correctly, you should see your new app running in your Android emulator shortly.

## Layout with Flexbox

Now that you have created your app you can go open your one of the favorite JavaScript supportable IDE and open App.js file inside your application. To create a simple hello world application we can replace the code in App.js with the simple code below.

```
import React from 'react';
import {View,Text} from 'react-native';

const App = () => (
  <View>
    <Text>Hello World</Text>
  </View>
);
```
As we can see we have a view container containing a Text container which holds the Hello World string. In your Android emulator we can also see that it is rendered in the top left corner of our app. To center this string we can use [flexbox](https://reactnative.dev/docs/flexbox). With the simple addition to our code below the string is centered.

```
<View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text>Hello World</Text>
</View>
```
JustifyContent allows us to align children contained in our view on its main axis and alignItems allows us to do it alogn its cross axis. There are several other ways to align items, feel free to browse the React Native docs on Layout [here](https://reactnative.dev/docs/flexbox) and try new things.

## Navigation between different screens

Because you probably want to have several screens in your app navigation is important. It can easily be done with React Navigation which is a community solution and a standalone library that allows developers to set up the screens of an app with just a few lines of code.

First step in this is to install it in your project. 

```
npm install --save react-navigation
```

Then you can create two screens in your App.js with the following code

```
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function OtherScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Other Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Other" component={OtherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
```
We have now created a native stack navigator which contains 2 properties, *Screen* and *Navigator*. Navigator contains *Screen* elements as its children which defines the configuration for routes. *NavigationContainer* is a component which manages our navigation tree and contains the navigation state.

Our stack has 2 routes, *Home* and *Other*. These are our 2 screens which is small for now but as the application grows so does the number of screens and routes. If we want to navigate from our home screen to our other screen we can use the simple code below.

```
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Other"
        onPress={() => navigation.navigate('Other')}
      />
    </View>
  );
}
```
We now have simple navigation in our app. To see more ways to navigate feel free to browse the React Navigator docs which you can find [here](https://reactnavigation.org/).

## Basic interaction with listener/callbacks functions 

React allows us to track a state in a component of our app using hooks. One of the most common hooks is the React useState Hook. With this we can create a simple function that gives us a clickable button that keeps track of how many times it has been clicked, see code below.

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
When the button is clicked the function is triggered and re-renders which displays the new count value. 

One of the other most common hooks is the useEffect hook. This hook allows us to add a listener for when our *count* is updated. The code below shows how it is used.

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

Now, everytime the button is clicked and our component is re-rendered our document title will be updated. 

To learn more about hooks and how they can be used, browse the docs [here](https://reactjs.org/docs/hooks-intro.html).


**You have now read this entire starting guide. Hopefully you now have som "kött på benen" as we would say in sweden and feel ready to start creating your own awesome projects!**
