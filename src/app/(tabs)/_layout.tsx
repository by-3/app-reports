import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";

const screens = [
  { name: "index", icon: "home" },
  { name: "archive", icon: "archive" },
  { name: "input", icon: "input" },
  { name: "print", icon: "print" },
  { name: "settings", icon: "settings" },
];

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
      {screens.map((screen) => (
        <Tabs.Screen
          key={screen.name}
          name={screen.name}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name={screen.icon as any}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
