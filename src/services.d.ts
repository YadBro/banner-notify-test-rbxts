interface Workspace extends Model {
	TouchMe: Part;
	Camera: Camera;
	SpawnLocation: SpawnLocation & {
		Decal: Decal;
	};
	Baseplate: Part & {
		Texture: Texture;
	};
}
