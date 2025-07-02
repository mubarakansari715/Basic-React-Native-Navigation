import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { enableFreeze } from "react-native-screens";
import BottomSheetScreen from "./screens/bottomsheet";
import DetailsScreen from "./screens/details";
import DrawerScreen from "./screens/drawer";
import HomeScreen from "./screens/home";
import { ModalScreen } from "./screens/ModalScreen";
import UserProfileScreen from "./screens/profile";

// Enable freeze at the top of your app
enableFreeze();

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function Index() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      {/* <SafeAreaView style={{ flex: 1 }}> */}
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerBackVisible: true,
            headerBlurEffect: "dark",
            freezeOnBlur: true,
          }}
        >
          <Stack.Screen name="HomePage" component={HomeTabs} />
          <Stack.Screen
            name="profile"
            component={UserProfileScreen}
            options={({ navigation }) => ({
              title: "User Profile",
              headerBackVisible: false,
              animation: "slide_from_right",
              headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.goBack()}
                  style={{ marginEnd: 5 }}
                >
                  <Ionicons
                    name="chevron-back-sharp"
                    size={24}
                    color="#007AFF"
                  />
                </TouchableOpacity>
              ),
              freezeOnBlur: true,
              headerShadowVisible: false,
            })}
          />

          <Stack.Screen
            name="Modal"
            component={ModalScreen}
            options={{ presentation: "transparentModal", headerShown: false }}
          />

          <Stack.Screen
            name="bottomsheet"
            component={BottomSheetScreen}
            options={{
              presentation: "transparentModal",
              headerShown: false,
              animation: "fade_from_bottom", // Smooth slide up animation
            }}
          />

          <Stack.Screen
            name="drawer"
            component={DrawerScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      {/* </SafeAreaView> */}
    </SafeAreaProvider>
  );
}

function HomeTabs() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8E8E93",
        tabBarShowLabel: true,
        tabBarLabelPosition: "below-icon",
        // tabBarStyle: { display: "flex" },
        tabBarVisibilityAnimationConfig: {
          // Animation config for visibility
          show: {
            animation: "timing",
            config: { duration: 200 },
          },
          hide: {
            animation: "timing",
            config: { duration: 200 },
          },
        },
        // tabBarStyle: {
        //   // Custom tab bar styling
        //   backgroundColor: "#ffffff",
        //   borderTopWidth: 1,
        //   borderTopColor: "#e0e0e0",
        //   height: 60,
        //   paddingBottom: 60,
        //   paddingTop: 5,
        // },
        // tabBarBackground: () => (
        //   // Custom background component
        //   <View style={{ flex: 1, backgroundColor: "#fff" }} />
        // ),
        tabBarStyle: { position: "absolute" },
        // tabBarBackground: () => (
        //   <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
        // ),

        // tabBarPosition: isLargeScreen ? 'left' ? 'bottom',
      }}
    >
      <Tabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="details"
        component={DetailsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles" size={size} color={color} />
          ),
          tabBarBadge: 9,
          // === BADGE STYLING ===
          tabBarBadgeStyle: {
            // Badge styling
            backgroundColor: "red",
            color: "#ffffff",
          },

          // // === ANDROID SPECIFIC ===
          // tabBarElevation: 0, // Android elevation (shadow)
          // tabBarPressColor: "#e0e0e0", // Android press color
          // tabBarPressOpacity: 0.8,
        }}
      />
    </Tabs.Navigator>
  );
}
