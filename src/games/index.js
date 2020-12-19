const gamesDB = [ 
    { 
        game: "Mancala",  
        category: ["Egyptian"], 
        gameId: "1",
        sub: [""],
        genre: ["strategy"],
        difficulty: "3",
        playSite: "https://mancala.playdrift.com",
        wiki: "en.wikipedia.org/wiki/Mancala"
    }, 
    { 
        game: "Seega",  
        category: ["Egyptian"], 
        gameId: "2",
        sub: [""],
        genre: ["strategy"],
        difficulty: "3",
        playSite: "",
        wiki: "https://boardgamegeek.com/boardgame/11347/seega"
    }, 
    { 
        game: "Hounds & Jackals",  
        category: ["Egyptian"], 
        gameId: "3",
        sub: ["racing"],
        genre: ["strategy"],
        difficulty: "2",
        playSite: "http://www.playonlinedicegames.com/hounds-and-jackals",
        wiki: "https://en.wikipedia.org/wiki/Hounds_and_Jackals"
    }, 
    { 
        game: "Senet",  
        category: ["Egyptian"], 
        gameId: "4",
        sub: ["racing"],
        genre: ["strategy"],
        difficulty: "3",
        playSite: "http://www.playonlinedicegames.com/senet",
        wiki: "https://en.wikipedia.org/wiki/Senet"
    }, 
    { 
        game: "Royal game of Ur",  
        category: ["Mesopotamia"], 
        gameId: "5",
        sub: [""],
        genre: ["strategy"],
        difficulty: "4",
        playSite: "https://royalur.net/",
        wiki: "https://en.wikipedia.org/wiki/Royal_Game_of_Ur"
    }, 
    { 
        game: "Nard",  
        category: ["Persian"], 
        gameId: "6",
        sub: [""],
        genre: ["strategy"],
        difficulty: "3",
        playSite: "https://nardgammon.com/en/",
        wiki: "https://en.wikipedia.org/wiki/Nard_(game)"
    }, 
    { 
        game: "Rota",  
        category: ["Roman"], 
        gameId: "7",
        sub: [""],
        genre: ["strategy"],
        difficulty: "3",
        playSite: "https://www.tinkercad.com/things/eglM7dBqmvj-rota-board-game",
        wiki: ""
    }, 
    { 
        game: "Anti-Monopoly",  
        category: ["Modern"], 
        gameId: "8",
        sub: ["trading"],
        genre: ["strategy"],
        difficulty: "2",
        playSite: "https://www.iplay.com/games/anti-opoly-the-anti-monopoly-game",
        wiki: "https://en.wikipedia.org/wiki/Anti-Monopoly"
    }, 
    { 
        game: "Game of Life",  
        category: ["Modern"], 
        gameId: "9",
        sub: ["economic"],
        genre: ["luck"],
        difficulty: "2",
        playSite: "https://playgameoflife.com/",
        wiki: "https://en.wikipedia.org/wiki/The_Game_of_Life"
    }, 
    { 
        game: "Cluedo",  
        category: ["Modern"], 
        gameId: "10",
        sub: ["mystery"],
        genre: ["strategy"],
        difficulty: "3",
        playSite: "https://www.flashgames.jp/Cluedo-online",
        wiki: "https://en.wikipedia.org/wiki/Cluedo"
    }, 
    
    { 
        game: "Yahtzee",  
        category: ["Modern"], 
        gameId: "11",
        sub: ["family"],
        genre: ["luck"],
        difficulty: "1",
        playSite: "https://cardgames.io/yahtzee/",
        wiki: "https://en.wikipedia.org/wiki/Yahtzee"
    }, 
    { 
        game: "Carcassonne",  
        category: ["Modern"], 
        gameId: "12",
        sub: ["city building"],
        genre: ["strategy"],
        difficulty: "1",
        playSite: "https://www.kongregate.com/games/badim/carcassonne",
        wiki: "https://en.wikipedia.org/wiki/Carcassonne_(board_game)"
    }, 
    { 
        game: "Dead of Winter",  
        category: ["Modern"], 
        gameId: "13",
        sub: ["cooperative"],
        genre: ["strategy"],
        difficulty: "2",
        playSite: "https://www.fantasyflightgames.com/en/products/dead-of-winter/",
        wiki: ""
    }, 
    { 
        game: "Twilight Struggle",  
        category: ["Modern"], 
        gameId: "14",
        sub: ["political","wargame"],
        genre: ["strategy"],
        difficulty: "4",
        playSite: "https://store.steampowered.com/app/406290/Twilight_Struggle/",
        wiki: "https://en.wikipedia.org/wiki/Twilight_Struggle"
    }, 
    { 
        game: "Euphoria: Build a Better Dystopia",  
        category: ["Modern"], 
        gameId: "15",
        sub: ["science fiction"],
        genre: ["strategy"],
        difficulty: "3",
        playSite: "https://store.steampowered.com/app/417300/Tabletop_Simulator__Euphoria_Build_a_Better_Dystopia/",
        wiki: ""
    }, 
    { 
        game: "Antiquity",  
        category: ["Modern"], 
        gameId: "16",
        sub: ["civilization","city building"],
        genre: ["strategy"],
        difficulty: "2",
        playSite: "http://play.boardgamecore.net/",
        wiki: ""
    }, 
];

export default (n = 16) =>
Promise.resolve(gamesDB.sort(() => 0.5 - Math.Random()).slice(0,n)) 
