"use client"

import { Button } from "react-native";

export default function MagicButton({
    title,
    onPress
}: {
    title: string;
    onPress: () => void;
}) {
    return <Button title={title} onPress={() => onPress()} />
}