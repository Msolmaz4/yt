import { Tabs } from "expo-router";
import React from "react";
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.bgColor,
          borderTopWidth: 0,
          padding: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="space-dashboard" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <View
              style={{
                backgroundColor: Colors.primaryColor,
                paddingHorizontal: 10,
                paddingVertical: 4,
                borderRadius: 8,
                height: 35,
                width: 35,
                justifyContent: "center", // Dikey ortalama
                alignItems: "center", // Yatay ortalama
              }}
            >
              <Ionicons name="search" size={18} color={Colors.white} />
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="bookmar"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
