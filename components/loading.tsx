import { View, ActivityIndicator, StyleSheet, Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";

export function Loading() {
    const pulseAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 1.2,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.inOut(Easing.ease),
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.loadingBox}>
                <ActivityIndicator size="large" color="#2463eb" />
                <Animated.Text 
                    style={[
                        styles.loadingText,
                        {
                            transform: [{ scale: pulseAnim }],
                        },
                    ]}
                >
                    Loading...
                </Animated.Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000,
    },
    loadingBox: {
        padding: 32,
        borderRadius: 16,
        backgroundColor: '#F3F4F6',
        alignItems: 'center',
        gap: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    loadingText: {
        color: '#4B5563',
        fontSize: 16,
        fontWeight: '500',
    },
});