(function () {
	//
	//Graphics Section Starts Here
		GDT.addResearchItem({
			id: "Multi-Screen Support", //Must be unique
			name: "Multi-Screen Support".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 3 
			},
			category: "Graphic",
			categoryDisplayName: "Graphic".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "UI Scaling", //Must be unique
			name: "UI Scaling".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 2 
			},
			category: "Graphic",
			categoryDisplayName: "Graphic".localize()
		});
		GDT.addResearchItem({
			id: "Software Cursor", //Must be unique
			name: "Software Cursor".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 1 
			},
			category: "Graphic",
			categoryDisplayName: "Graphic".localize()
		});
		GDT.addResearchItem({
			id: "200p Resolution", //Must be unique
			name: "200p Resolution".localize(), //Display name
			v: 1, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 0 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "480p Resolution", //Must be unique
			name: "480p Resolution".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 1 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "600p Resolution", //Must be unique
			name: "600p Resolution".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 2 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "HD", //Must be unique
			name: "HD".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 4 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "HD+", //Must be unique
			name: "HD+".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 4 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Full HD", //Must be unique
			name: "Full HD".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 5 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "2K", //Must be unique
			name: "2K".localize(), //Display name
			v: 8, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 5 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "4K", //Must be unique
			name: "600p Resolution".localize(), //Display name
			v: 10, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 7 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "8K", //Must be unique
			name: "8K".localize(), //Display name
			v: 12, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 9 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "16K", //Must be unique
			name: "16K".localize(), //Display name
			v: 14, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Graphic') > 10 
			},
			category: "Graphic",
			group: "Resolution",
			categoryDisplayName: "Resolution".localize()
			consolePart: True
		});
	//
	//Sound Section Starts Here
		GDT.addResearchItem({
			id: "Environmental Audio", //Must be unique
			name: "Environmental Audio".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 3 
			},
			category: "Sound",
			categoryDisplayName: "Sound".localize()
		});
		GDT.addResearchItem({
			id: "Volume Controls", //Must be unique
			name: "Volume Controls".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 2 
			},
			category: "Sound",
			categoryDisplayName: "Sound".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Custom Playlists", //Must be unique
			name: "Custom Playlists".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 3 
			},
			category: "Sound",
			categoryDisplayName: "Sound".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Auto-Generated Audio", //Must be unique
			name: "Auto-Generated Audio".localize(), //Display name
			v: 12, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 9 
			},
			category: "Sound",
			categoryDisplayName: "Sound".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "In-Game Radio", //Must be unique
			name: "In-Game Radio".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 4 
			},
			category: "Sound",
			categoryDisplayName: "Sound".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Internet Audio Sources", //Must be unique
			name: "Internet Audio Sources".localize(), //Display name
			v: 8, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Sound') > 7 
			},
			category: "Sound",
			categoryDisplayName: "Sound".localize()
			consolePart: True
		});
	//
	//Story/Quests Section Starts Here
		GDT.addResearchItem({
			id: "Intuitive Narration", //Must be unique
			name: "Intuitive Narration".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Story/Quests') > 3 
			},
			category: "Story/Quests",
			categoryDisplayName: "Story/Quests".localize()
		});
		GDT.addResearchItem({
			id: "Automated Storytelling", //Must be unique
			name: "Automated Storytelling".localize(), //Display name
			v: 10, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Story/Quests') > 8 
			},
			category: "Story/Quests",
			group: "Story",
			categoryDisplayName: "Story/Quests".localize()
		});
		GDT.addResearchItem({
			id: "Adaptive Cutscenes", //Must be unique
			name: "Adaptive Cutscenes".localize(), //Display name
			v: 10, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Story/Quests') > 9
			},
			category: "Story/Quests",
			group: "Cut Scenes",
			categoryDisplayName: "Story/Quests".localize()
		});
	//
	//Engine Section Starts Here
		GDT.addResearchItem({
			id: "Integrated Modding Tools", //Must be unique
			name: "Integrated Modding Tools".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 6 
			},
			category: "Engine",
			categoryDisplayName: "Engine".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Streaming Support", //Must be unique
			name: "Streaming Support".localize(), //Display name
			v: 8, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 7 
			},
			category: "Engine",
			categoryDisplayName: "Engine".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Use Map Settings", //Must be unique
			name: "'Use Map Settings'".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 3 
			},
			category: "Engine",
			group: "Mods",
			categoryDisplayName: "Engine".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "External Data Sources", //Must be unique
			name: "External Data Sources".localize(), //Display name
			v: 8, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 6 
			},
			category: "Engine",
			group: "Mods",
			categoryDisplayName: "Mod Support".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Multiplayer Mods", //Must be unique
			name: "Multiplayer Mods".localize(), //Display name
			v: 10, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 7 
			},
			category: "Engine",
			group: "Mods",
			categoryDisplayName: "Mod Support".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "On The Fly Scripting Support", //Must be unique
			name: "On The Fly Scripting Support".localize(), //Display name
			v: 8, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 7 
			},
			category: "Engine",
			categoryDisplayName: "Mod Support".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "LAN Support", //Must be unique
			name: "LAN Support".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 2 
			},
			category: "Engine",
			group: "Multiplayer",
			categoryDisplayName: "Multiplayer".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Dial-up Support", //Must be unique
			name: "Dial-up Support".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 3 
			},
			category: "Engine",
			group: "Multiplayer",
			categoryDisplayName: "Multiplayer".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "Internet Multiplayer", //Must be unique
			name: "Internet Multiplayer".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 4 
			},
			category: "Engine",
			group: "Multiplayer",
			categoryDisplayName: "Multiplayer".localize()
			consolePart: True
		});
		GDT.addResearchItem({
			id: "CD Keys", //Must be unique
			name: "CD Keys".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 2 
			},
			category: "Engine",
			group: "DRM",
			categoryDisplayName: "DRM".localize()
		});
		GDT.addResearchItem({
			id: "Online Activation", //Must be unique
			name: "Online Activation".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 5 
			},
			category: "Engine",
			group: "DRM",
			categoryDisplayName: "DRM".localize()
		});
		GDT.addResearchItem({
			id: "Persistent Online Authentication", //Must be unique
			name: "Persistent Online Authentication".localize(), //Display name
			v: 8, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 6 
			},
			category: "Engine",
			group: "DRM",
			categoryDisplayName: "DRM".localize()
		});
		GDT.addResearchItem({
			id: "Checkpoints", //Must be unique
			name: "Checkpoints".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 1 
			},
			category: "Engine",
			categoryDisplayName: "Engine".localize()
		});
		GDT.addResearchItem({
			id: "Realistic Physics", //Must be unique
			name: "Realistic Physics".localize(), //Display name
			v: 14, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Engine') > 10 
			},
			category: "Engine",
			categoryDisplayName: "Engine".localize()
		});
	//
	//Gameplay Section Starts Here
		GDT.addResearchItem({
			id: "Adaptive Tutorials", //Must be unique
			name: "Adaptive Tutorials".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 4 
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay".localize()
		});
		GDT.addResearchItem({
			id: "Character Selection", //Must be unique
			name: "Character Selection".localize(), //Display name
			v: 1, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 0 
			},
			category: "Gameplay",
			group: "Characters",
			categoryDisplayName: "Gameplay".localize()
		});
		GDT.addResearchItem({
			id: "Character Creation", //Must be unique
			name: "Character Creation".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 1
			},
			category: "Gameplay",
			group: "Characters",
			categoryDisplayName: "Gameplay".localize()
		});
		GDT.addResearchItem({
			id: "Hidden Skills", //Must be unique
			name: "Hidden Skills".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 4 
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay".localize()
		});
		GDT.addResearchItem({
			id: "Local Coop", //Must be unique
			name: "Local Coop".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 1 
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay".localize()
		});
		GDT.addResearchItem({
			id: "Skill Levels", //Must be unique
			name: "Skill Levels".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 3 
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay".localize()
		});
		GDT.addResearchItem({
			id: "Power-ups", //Must be unique
			name: "Power-ups".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 1 
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay".localize()
		});
		GDT.addResearchItem({
			id: "Vehicles", //Must be unique
			name: "Vehicles".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Gameplay') > 2 
			},
			category: "Gameplay",
			categoryDisplayName: "Gameplay".localize()
		});
	//
	//Level Design Section Starts Here
		GDT.addResearchItem({
			id: "Intuitive Layout", //Must be unique
			name: "Intuitive Layout".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 3 
			},
			category: "Level Design",
			group: "levdev",
			categoryDisplayName: "Level Design".localize()
		});
		GDT.addResearchItem({
			id: "Procedural Levels", //Must be unique
			name: "Procedural Levels".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 3 
			},
			category: "Level Design",
			group: "levdev",
			categoryDisplayName: "Level Design".localize()
		});
		GDT.addResearchItem({
			id: "Limited Pre-Loading", //Must be unique
			name: "Limited Pre-Loading".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 4 
			},
			category: "Level Design",
			categoryDisplayName: "Level Design".localize()
		});
		GDT.addResearchItem({
			id: "Multiple Paths", //Must be unique
			name: "Multiple Paths".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 4 
			},
			category: "Level Design",
			categoryDisplayName: "Level Design".localize()
		});
		GDT.addResearchItem({
			id: "Hidden Areas", //Must be unique
			name: "Hidden Areas".localize(), //Display name
			v: 2, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Level Design') > 1 
			},
			category: "Level Design",
			categoryDisplayName: "Level Design".localize()
		});
	//
	//World Design Section Starts Here
		GDT.addResearchItem({
			id: "Procedural World", //Must be unique
			name: "Procedural World".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('World Design') > 6 
			},
			category: "World Design",
			categoryDisplayName: "World Design".localize()
		});
		GDT.addResearchItem({
			id: "Fast Travel", //Must be unique
			name: "Fast Travel".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('World Design') > 2 
			},
			category: "World Design",
			categoryDisplayName: "World Design".localize()
		});
		GDT.addResearchItem({
			id: "No Artificial Boundaries", //Must be unique
			name: "No Artificial Boundaries".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('World Design') > 3 
			},
			category: "World Design",
			categoryDisplayName: "World Design".localize()
		});
	//
	//Dialogs Section Starts Here
		GDT.addResearchItem({
			id: "Text-to-Voice", //Must be unique
			name: "Text-to-Voice".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Dialogs') > 6 
			},
			category: "Dialogs",
			group: "ttv",
			categoryDisplayName: "Dialogues".localize()
		});
		GDT.addResearchItem({
			id: "Realistic Text-to-Voice", //Must be unique
			name: "Realisitc Text-to-Voice".localize(), //Display name
			v: 14, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Dialogs') > 10 
			},
			category: "Dialogs",
			group: "ttv",
			categoryDisplayName: "Dialogues".localize()
		});
		GDT.addResearchItem({
			id: "Reaactive Dialogue", //Must be unique
			name: "Reactive Dialogue".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Dialogs') > 5 
			},
			category: "Dialogs",
			categoryDisplayName: "Dialogue".localize()
		});
		GDT.addResearchItem({
			id: "Procedural Dialogue", //Must be unique
			name: "Procedural Dialogue".localize(), //Display name
			v: 10, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Dialogs') > 9 
			},
			category: "Dialogs",
			categoryDisplayName: "Dialogues".localize()
		});
		GDT.addResearchItem({
			id: "Multi-Language Support", //Must be unique
			name: "Multi-Language Support".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('Dialogs') > 2 
			},
			category: "Dialogs",
			categoryDisplayName: "Dialogues".localize()
			consolePart: True
		});
	//
	//AI Section Starts Here
		GDT.addResearchItem({
			id: "Complex Triggers", //Must be unique
			name: "Complex Triggers".localize(), //Display name
			v: 4, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('AI') > 3 
			},
			category: "AI",
			categoryDisplayName: "AI".localize()
		});
		GDT.addResearchItem({
			id: "Dynamic Pathfinding", //Must be unique
			name: "Dynamic Pathfinding".localize(), //Display name
			v: 6, //Tech level
			canResearch: function (company) {
				return LevelCalculator.getMissionLevel('AI') > 4 
			},
			category: "AI",
			categoryDisplayName: "AI".localize()
		});
	})();