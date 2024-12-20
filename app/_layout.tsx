import { View, Text } from "react-native";
import React from "react";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const RootLayout = () => {
  const queryClient = new QueryClient();

  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <Stack
          screenOptions={{
            headerShown: false,
            headerTitle: "Movies App",
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "bold",
            },
          }}
        />
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
