# React Native Navigation Complete Guide

A comprehensive React Native app that demonstrates all major navigation patterns using React Navigation v7. This guide explains everything you need to know about React Navigation in simple terms.

## 📚 What is React Navigation?

React Navigation is a library that helps you move between different screens in your React Native app. Think of it like a map that tells your app how to get from one screen to another.

### Why Use React Navigation?
- **Easy Navigation**: Move between screens with simple commands
- **Native Feel**: Looks and feels like a real mobile app
- **Customizable**: Change colors, animations, and behavior
- **Cross-Platform**: Works the same on iOS and Android

## 🧭 Types of Navigation

React Navigation has several types of navigators. Each one is like a different way to organize your app's screens:

### 1. **Stack Navigator** - Like a Stack of Cards
**What it does**: Shows one screen at a time, like flipping through a stack of cards.

**When to use**: 
- Moving from one screen to another
- When you want a back button
- For most app navigation

**Example**: Home → Profile → Settings (each screen goes on top of the previous one)

```typescript
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyApp() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
```

### 2. **Bottom Tab Navigator** - Like App Store Tabs
**What it does**: Shows tabs at the bottom of the screen, like the App Store.

**When to use**:
- Main sections of your app
- When you want quick access to different parts
- For apps with 2-5 main sections

**Example**: Home, Search, Profile, Settings tabs at the bottom

```typescript
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
```

### 3. **Drawer Navigator** - Like a Side Menu
**What it does**: Creates a menu that slides in from the side.

**When to use**:
- Apps with many sections
- When you want a hamburger menu
- For complex apps with lots of options

**Example**: Gmail's side menu with different folders

```typescript
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}
```

### 4. **Material Top Tabs** - Like Browser Tabs
**What it does**: Shows tabs at the top that you can swipe between.

**When to use**:
- When you have related content in sections
- For content that belongs together
- When you want swipeable tabs

**Example**: Instagram's profile tabs (Posts, Saved, Tagged)

```typescript
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function MyTopTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Posts" component={PostsScreen} />
      <Tab.Screen name="Saved" component={SavedScreen} />
      <Tab.Screen name="Tagged" component={TaggedScreen} />
    </Tab.Navigator>
  );
}
```

## 🚀 How to Get Started

### Step 1: Install React Navigation

```bash
# Install the core library
npm install @react-navigation/native

# Install the navigators you need
npm install @react-navigation/native-stack
npm install @react-navigation/bottom-tabs
npm install @react-navigation/drawer
npm install @react-navigation/material-top-tabs

# Install required dependencies
npm install react-native-screens react-native-safe-area-context
npm install react-native-gesture-handler
npm install react-native-pager-view
```

### Step 2: Set Up Your App

```typescript
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

### Step 3: Create Your Screens

```typescript
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
}
```

## 🎨 Customizing Your Navigation

### Changing Screen Titles

```typescript
<Stack.Screen 
  name="Home" 
  component={HomeScreen}
  options={{ title: 'My Home Screen' }}
/>
```

### Adding Icons to Tabs

```typescript
import { Ionicons } from '@expo/vector-icons';

<Tab.Screen
  name="Home"
  component={HomeScreen}
  options={{
    tabBarIcon: ({ color, size }) => (
      <Ionicons name="home" size={size} color={color} />
    ),
  }}
/>
```

### Adding Badges (Red Numbers)

```typescript
<Tab.Screen
  name="Messages"
  component={MessagesScreen}
  options={{
    tabBarBadge: 3, // Shows "3" in a red circle
  }}
/>
```

### Hiding the Header

```typescript
<Stack.Screen 
  name="Home" 
  component={HomeScreen}
  options={{ headerShown: false }}
/>
```

### Custom Back Button

```typescript
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={({ navigation }) => ({
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
    ),
  })}
/>
```

## 🔄 Moving Between Screens

### Basic Navigation

```typescript
// Go to a screen
navigation.navigate('Profile');

// Go back
navigation.goBack();

// Go to a screen and pass data
navigation.navigate('Profile', { userId: 123 });

// Replace current screen
navigation.replace('Home');
```

### Getting Data from Navigation

```typescript
function ProfileScreen({ route }) {
  const { userId } = route.params;
  return <Text>User ID: {userId}</Text>;
}
```

## 🎭 Different Ways to Show Screens

### Regular Screen
```typescript
<Stack.Screen name="Home" component={HomeScreen} />
```

### Modal (Slides up from bottom)
```typescript
<Stack.Screen 
  name="Modal" 
  component={ModalScreen}
  options={{ presentation: 'modal' }}
/>
```

### Transparent Modal (Overlay)
```typescript
<Stack.Screen 
  name="Overlay" 
  component={OverlayScreen}
  options={{ presentation: 'transparentModal' }}
/>
```

## 🎨 Making It Look Good

### Changing Colors

```typescript
<Stack.Navigator
  screenOptions={{
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
>
```

### Tab Bar Styling

```typescript
<Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: '#e91e63',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: {
      backgroundColor: 'white',
    },
  }}
>
```

## 🔧 Advanced Features

### Nested Navigators (Navigators inside Navigators)

```typescript
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
```

### Passing Data Between Screens

```typescript
// Sending data
navigation.navigate('Profile', { 
  name: 'John',
  age: 25 
});

// Receiving data
function ProfileScreen({ route }) {
  const { name, age } = route.params;
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
    </View>
  );
}
```

### Custom Animations

```typescript
<Stack.Screen
  name="Profile"
  component={ProfileScreen}
  options={{
    animation: 'slide_from_right',
  }}
/>
```

## 📱 What This App Shows

This demo app includes examples of:

1. **Stack Navigation**: Moving between screens with back buttons
2. **Bottom Tabs**: Main navigation with tabs at the bottom
3. **Drawer Navigation**: Side menu that slides in
4. **Material Top Tabs**: Swipeable tabs at the top
5. **Modal Screens**: Overlay screens that appear on top
6. **Bottom Sheets**: Forms that slide up from the bottom

## 🛠 How to Run This App

### Prerequisites
- Node.js installed
- Expo CLI installed
- iOS Simulator or Android Emulator

### Installation
```bash
# Install dependencies
npm install

# Start the app
npm start

# Run on specific platform
npm run ios      # iOS
npm run android  # Android
npm run web      # Web
```

## 📁 Project Structure

```
app/
├── index.tsx              # Main navigation setup
└── screens/
    ├── home.tsx           # Home screen
    ├── details.tsx        # Details screen
    ├── profile.tsx        # Profile with top tabs
    ├── ModalScreen.tsx    # Modal overlay
    ├── bottomsheet.tsx    # Bottom sheet
    └── drawer.tsx         # Drawer navigation
```

## 🎯 Key Things to Remember

### 1. Always Wrap Your App
```typescript
<NavigationContainer>
  {/* Your navigators go here */}
</NavigationContainer>
```

### 2. Screen Names Must Match
```typescript
// This name must match exactly
<Stack.Screen name="Home" component={HomeScreen} />
navigation.navigate('Home'); // Must match the name above
```

### 3. Navigation Object
Every screen gets a `navigation` object that you can use to move around:
```typescript
function MyScreen({ navigation }) {
  return (
    <Button 
      title="Go to Next Screen" 
      onPress={() => navigation.navigate('NextScreen')} 
    />
  );
}
```

### 4. Route Object
Every screen gets a `route` object with information about the screen:
```typescript
function MyScreen({ route }) {
  const { params } = route; // Data passed to this screen
  return <Text>{params?.message}</Text>;
}
```

## 🔗 Useful Links

- [React Navigation Official Docs](https://reactnavigation.org/)
- [Stack Navigator Guide](https://reactnavigation.org/docs/stack-navigator)
- [Bottom Tabs Guide](https://reactnavigation.org/docs/bottom-tab-navigator)
- [Drawer Navigator Guide](https://reactnavigation.org/docs/drawer-navigator)
- [Material Top Tabs Guide](https://reactnavigation.org/docs/material-top-tab-navigator)

## 💡 Tips and Best Practices

1. **Keep it Simple**: Start with Stack Navigator for most apps
2. **Use Meaningful Names**: Name your screens clearly
3. **Test on Both Platforms**: iOS and Android can behave differently
4. **Handle Back Button**: Think about what happens when users press back
5. **Use Icons**: Icons make navigation more intuitive
6. **Consider Performance**: Too many screens can slow down your app

---

This guide covers the basics of React Navigation. The app demonstrates all these concepts in action. Feel free to explore the code and modify it to learn more!


