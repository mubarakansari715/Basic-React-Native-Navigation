# My Bottom Navigation App with Stack Navigator

A simple React Native mobile app that demonstrates how to create a bottom navigation bar with multiple screens and navigation between them.

## Navigation Types Used

This app demonstrates three main types of React Navigation:

### 1. **Stack Navigator** (`@react-navigation/native-stack`)
- **Purpose**: Handles navigation between main app sections
- **Usage**: Main app flow (HomePage → Profile screen)
- **Features**: 
  - Custom back buttons with icons
  - Header customization
  - Push/pop navigation

### 2. **Bottom Tab Navigator** (`@react-navigation/bottom-tabs`)
- **Purpose**: Creates bottom navigation bar with tabs
- **Usage**: Switching between Home and Details screens
- **Features**:
  - Custom icons (Ionicons)
  - Badge notifications
  - Active/inactive color states
  - Smooth animations

### 3. **Material Top Tab Navigator** (`@react-navigation/material-top-tabs`)
- **Purpose**: Creates horizontal tabs within a screen
- **Usage**: Profile screen with sub-tabs (home, details, other)
- **Features**:
  - Swipeable tabs
  - Material Design styling
  - Sub-navigation within screens

## What This App Does

This app shows you how to build a mobile app with:
- **Bottom Navigation Bar**: A bar at the bottom of the screen with tabs you can tap to switch between different screens
- **Multiple Screens**: Three main screens (Home, Details, and Profile)
- **Navigation**: The ability to move between screens using buttons or the bottom tabs
- **Badge Notifications**: A red number badge on one of the tabs to show notifications

## How It Works

### Main Structure (`app/index.tsx`)
The app uses two types of navigation:
1. **Stack Navigation**: For moving between main sections of the app
2. **Bottom Tab Navigation**: For switching between the main screens

### Screens

#### 1. Home Screen (`app/screens/home.tsx`)
- Simple screen that just shows "HomeScreen" text
- This is the first tab in the bottom navigation

#### 2. Details Screen (`app/screens/details.tsx`)
- Shows "DetailsScreen" text
- Has a button that lets you navigate to the Profile screen
- Has a red badge with the number "9" on its tab

#### 3. Profile Screen (`app/screens/profile.tsx`)
- Uses a different type of navigation (top tabs instead of bottom tabs)
- Contains three sub-tabs: "home", "details", and "other"
- Each sub-tab shows the same content as the main screens

## Features

### Bottom Navigation Bar
- **Icons**: Uses Ionicons for the tab icons (home and chat bubbles)
- **Colors**: Active tabs are blue (#007AFF), inactive tabs are gray (#8E8E93)
- **Animations**: Smooth transitions when showing/hiding the tab bar
- **Badge**: The Details tab shows a red notification badge with the number 9

### Custom Back Button
- **Custom Icon**: Uses `chevron-back-sharp` from Ionicons instead of the default back arrow
- **Styling**: Blue color (#007AFF) matching the app theme, 24px size
- **No Flickering**: Completely replaces the default back button to prevent brief appearance of old icon
- **Touch Handling**: Properly wrapped in TouchableOpacity for smooth interaction

### Navigation
- **Stack Navigation**: Allows moving between the main HomePage and Profile screen
- **Tab Navigation**: Allows switching between Home and Details screens
- **Material Top Tabs**: Used in the Profile screen for sub-navigation

## Technologies Used

- **React Native**: The main framework for building mobile apps
- **Expo**: A platform that makes React Native development easier
- **React Navigation**: Library for handling navigation between screens
- **TypeScript**: Adds type safety to the JavaScript code
- **Ionicons**: Beautiful icons for the navigation tabs

## How to Run This App

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm start
   ```

3. **Run on Your Device**:
   - **Android**: `npm run android`
   - **iOS**: `npm run ios`
   - **Web**: `npm run web`

## Project Structure

```
MyBottomNavigationApp/
├── app/
│   ├── index.tsx          # Main app entry point with navigation setup
│   └── screens/
│       ├── home.tsx       # Home screen component
│       ├── details.tsx    # Details screen component
│       └── profile.tsx    # Profile screen with top tabs
├── assets/                # Images, fonts, and other static files
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## Key Code Concepts

### Navigation Setup
The app uses a combination of Stack and Tab navigators:
- **Stack Navigator**: Handles the main app flow
- **Bottom Tab Navigator**: Creates the bottom navigation bar
- **Material Top Tab Navigator**: Creates horizontal tabs in the Profile screen

### Screen Options
Each screen can be customized with:
- **Icons**: Using Ionicons from Expo
- **Labels**: Text shown under the icons
- **Badges**: Notification numbers
- **Colors**: Different colors for active/inactive states
- **Custom Back Buttons**: Replace default back buttons with custom icons and styling

### Safe Area
The app uses `SafeAreaProvider` and `SafeAreaView` to ensure content doesn't overlap with device notches or status bars.

### Customizing Back Buttons
To customize the back button in your screens, you can use the `headerLeft` option in your Stack Navigator:

```typescript
<Stack.Screen 
  name="profile" 
  component={UserProfileScreen}
  options={({ navigation }) => ({
    headerBackVisible: false, // Hide default back button
    headerLeft: () => (
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={{ marginEnd: 5, marginVertical: 0 }}
      >
        <Ionicons 
          name="chevron-back-sharp" 
          size={24} 
          color="#007AFF" 
        />
      </TouchableOpacity>
    ),
  })}
/>
```

**Key Points:**
- Use `headerBackVisible: false` to completely hide the default back button
- Wrap your icon in `TouchableOpacity` for proper touch handling
- Use `navigation.goBack()` to handle the back navigation
- Choose any icon from the Ionicons library

## Learning Points

This app demonstrates:
- How to set up React Navigation in a React Native app
- How to create bottom tab navigation
- How to combine different types of navigation
- How to customize navigation appearance
- How to handle navigation between screens
- How to use icons and badges in navigation
- How to customize back buttons with custom icons and prevent flickering


