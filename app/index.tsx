import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import DetailsScreen from "./screens/details";
import HomeScreen from "./screens/home";
import UserProfileScreen from "./screens/profile";

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function Index() {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator 
          screenOptions={{ 
            headerShown: true,
          }}
        >
          <Stack.Screen name="HomePage" component={HomeTabs} />
          <Stack.Screen 
            name="profile" 
            component={UserProfileScreen}
            options={({ navigation }) => ({
              headerBackVisible: false,
              headerLeft: () => (
                <TouchableOpacity 
                  onPress={() => navigation.goBack()}
                  style={{ marginEnd: 5, marginVertical:0 }}
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
        </Stack.Navigator>
      </SafeAreaView>
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
        tabBarStyle: { display: "flex" },
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
