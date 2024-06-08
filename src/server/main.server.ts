import BannerNotify from "@rbxts/banner-notify";
import { Players, Workspace } from "@rbxts/services";

BannerNotify.InitServer();

let debounce = false;
Workspace.TouchMe.Touched.Connect(function (otherPart) {
	if (!debounce) {
		debounce = true;
		const player = Players.GetPlayerFromCharacter(otherPart.Parent);

		if (player) {
			BannerNotify.Notify({
				duration: 3,
				header: "Example In Server",
				icon: "rbxassetid://11326670020",
				message: "Example Banner Notify In Server",
				player,
			});

			BannerNotify.Notify({
				duration: 3,
				header: "Example In Server With Configs",
				icon: "rbxassetid://11326670020",
				message: "Example Banner Notify In Server With Configs",
				configs: [0.8, Color3.fromRGB(255, 0, 0), 0, Color3.fromRGB(15, 0, 222)],
				player,
			});
		}

		task.wait(3);
		debounce = false;
	}
});
