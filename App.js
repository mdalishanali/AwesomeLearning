import { View, Text } from "react-native";
import React from "react";
import DownloadImageScreen from "./src/screens/DownloadImageScreen";
import ShareImageScree from "./src/screens/ShareImageScree";

export default function App() {
  return (
    <>
      <DownloadImageScreen />
      <ShareImageScree/>
    </>
  );
}
