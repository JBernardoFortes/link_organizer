import { colors } from "@/styles/colors";
import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: colors.green[900] },
      }}
    ></Stack>
  );
}
