import BannerNotify from "@rbxts/banner-notify";
import { Players } from "@rbxts/services";

BannerNotify.InitClient();

const PlayerGui = Players.LocalPlayer.FindFirstChild("PlayerGui") as PlayerGui;
const ScreenGui = PlayerGui.WaitForChild("ScreenGui") as ScreenGui;
const TextButton: TextButton = ScreenGui.FindFirstChild("TextButton") as TextButton;

if (TextButton) {
	TextButton.MouseButton1Click.Connect(function () {
		BannerNotify.Notify({
			duration: 1,
			header: "Example",
			icon: "rbxassetid://11326670020",
			message: "Example Banner Notify",
		});

		BannerNotify.Notify({
			duration: 3,
			header: "Example Configs",
			icon: "rbxassetid://11326670020",
			message: "Example Banner Notify With Configs",
			configs: [0.8, Color3.fromRGB(0, 237, 79), 0, Color3.fromRGB(0, 0, 0)],
		});
	});
}
