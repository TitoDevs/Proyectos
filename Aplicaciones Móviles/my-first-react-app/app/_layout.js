import { Stack } from "expo-router";
import React, { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            try {
                await Font.loadAsync({
                    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
                    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
                    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
                });
                setFontsLoaded(true);
            } catch (error) {
                console.error("Error loading fonts:", error);
            }
        };

        loadFonts();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (<Stack onLayout={ onLayoutRootView } />);
}

export default Layout;
