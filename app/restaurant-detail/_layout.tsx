import { HEADER_BG_DARK, HEADER_BG_LIGHT } from "@/constants/theme";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";


const StoreDetailLayout = () => {
    const theme = useColorScheme();
    const BG_COLOR = theme === 'dark' ? HEADER_BG_DARK : HEADER_BG_LIGHT
    return (
        <Stack
            screenOptions={{
                headerShadowVisible: false,
                headerTintColor: theme==='dark' ? 'white': 'black',
                headerStyle: {
                    backgroundColor: BG_COLOR,
                },
            }}
        >
            <Stack.Screen
                name="[restaurantId]"
                options={{
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: "transparent",

                    },
                }}
            />
            <Stack.Screen
                name="addMenu"

                options={{
                    title: 'Add Menu',
                    animation: 'slide_from_bottom'

                }}
            />



        </Stack>
    );
};

export default StoreDetailLayout;

const styles = StyleSheet.create({});
