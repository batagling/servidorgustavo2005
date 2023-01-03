var room = HBInit({
  roomName: "⚽ 𝑬𝒍𝒆𝒗𝒆𝒏 𝑨𝒓𝒆𝒏𝒂 | 𝒙3", 
  maxPlayers: 15, 
  public: true, 
  playerName: "Juíz", 
  geo : {"lat":-23.63,"lon":-46.6322,"code":"br"}, 
  noPlayer: false 
})

const playerRadius = 15;
var ballRadius = 6.25;
const triggerDistance = playerRadius + ballRadius + 0.01;

var Mapa = '{ "name" : "⚽ 𝑬𝒍𝒆𝒗𝒆𝒏 𝑨𝒓𝒆𝒏𝒂", "width" : 648, "height" : 270, "spawnDistance" : 350, "bg" : { "type" : "", "width" : 550, "height" : 240, "kickOffRadius" : 80, "cornerRadius" : 0, "color" : "434F56" }, "vertexes" : [ /* 0 */ { "x" : 550, "y" : 240, "trait" : "ballArea" }, /* 1 */ { "x" : 550, "y" : -240, "trait" : "ballArea" }, /* 2 */ { "x" : 0, "y" : 270, "trait" : "kickOffBarrier" }, /* 3 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 }, /* 4 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 180 }, /* 5 */ { "x" : 0, "y" : -270, "trait" : "kickOffBarrier" }, /* 6 */ { "x" : -550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FF6666", "pos" : [-700,-80 ] }, /* 7 */ { "x" : -590, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : -28.940588200131774, "color" : "FF6666", "pos" : [-700,-80 ] }, /* 8 */ { "x" : -590, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : -28.940588200131774, "color" : "FF6666", "pos" : [-700,80 ] }, /* 9 */ { "x" : -550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "FF6666", "pos" : [-700,80 ] }, /* 10 */ { "x" : 550, "y" : -80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "479BD8", "pos" : [700,-80 ] }, /* 11 */ { "x" : 590, "y" : -80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "479BD8", "pos" : [700,-80 ] }, /* 12 */ { "x" : 590, "y" : 80, "cMask" : ["ball" ], "trait" : "goalNet", "curve" : 0, "color" : "479BD8", "pos" : [700,80 ] }, /* 13 */ { "x" : 550, "y" : 80, "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "curve" : 0, "color" : "479BD8", "pos" : [700,80 ] }, /* 14 */ { "x" : -550, "y" : 80, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,80 ] }, /* 15 */ { "x" : -550, "y" : 240, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" }, /* 16 */ { "x" : -550, "y" : -80, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [-700,-80 ] }, /* 17 */ { "x" : -550, "y" : -240, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" }, /* 18 */ { "x" : -550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 19 */ { "x" : 550, "y" : 240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 20 */ { "x" : 550, "y" : 80, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "pos" : [700,80 ] }, /* 21 */ { "x" : 550, "y" : 240, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 22 */ { "x" : 550, "y" : -240, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8" }, /* 23 */ { "x" : 550, "y" : -80, "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "color" : "F8F8F8", "pos" : [700,-80 ] }, /* 24 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 25 */ { "x" : 550, "y" : -240, "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea" }, /* 26 */ { "x" : -550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 }, /* 27 */ { "x" : 550, "y" : -240, "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0 }, /* 28 */ { "x" : 0, "y" : -240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, /* 29 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, /* 30 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, /* 31 */ { "x" : 0, "y" : 240, "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, /* 32 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" }, /* 33 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "cMask" : ["red","blue" ], "trait" : "kickOffBarrier", "vis" : true, "color" : "F8F8F8" }, /* 34 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 }, /* 35 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : -180 }, /* 36 */ { "x" : 0, "y" : 80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 }, /* 37 */ { "x" : 0, "y" : -80, "trait" : "kickOffBarrier", "color" : "F8F8F8", "vis" : true, "curve" : 0 }, /* 38 */ { "x" : -557.5, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [-700,80 ] }, /* 39 */ { "x" : -557.5, "y" : 240, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false }, /* 40 */ { "x" : -557.5, "y" : -240, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 }, /* 41 */ { "x" : -557.5, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [-700,-80 ] }, /* 42 */ { "x" : 557.5, "y" : -240, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0 }, /* 43 */ { "x" : 557.5, "y" : -80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "ballArea", "vis" : false, "curve" : 0, "pos" : [700,-80 ] }, /* 44 */ { "x" : 557.5, "y" : 80, "bCoef" : 0.1, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false, "pos" : [700,80 ] }, /* 45 */ { "x" : 557.5, "y" : 240, "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "curve" : 0, "vis" : false }, /* 46 */ { "x" : 0, "y" : -80, "bCoef" : 0.1, "trait" : "line" }, /* 47 */ { "x" : 0, "y" : 80, "bCoef" : 0.1, "trait" : "line" }, /* 48 */ { "x" : -550, "y" : -80, "bCoef" : 0.1, "trait" : "line" }, /* 49 */ { "x" : -550, "y" : 80, "bCoef" : 0.1, "trait" : "line" }, /* 50 */ { "x" : 550, "y" : -80, "bCoef" : 0.1, "trait" : "line" }, /* 51 */ { "x" : 550, "y" : 80, "bCoef" : 0.1, "trait" : "line" }, /* 52 */ { "x" : -381, "y" : 240, "bCoef" : 0.1, "trait" : "line" }, /* 53 */ { "x" : -381, "y" : 256, "bCoef" : 0.1, "trait" : "line" }, /* 54 */ { "x" : -550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 }, /* 55 */ { "x" : -390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }, /* 56 */ { "x" : -550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 }, /* 57 */ { "x" : -536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 }, /* 58 */ { "x" : -550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 }, /* 59 */ { "x" : -390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }, /* 60 */ { "x" : -550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 }, /* 61 */ { "x" : -536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 }, /* 62 */ { "x" : -556, "y" : 123, "bCoef" : 0.1, "trait" : "line" }, /* 63 */ { "x" : -575, "y" : 123, "bCoef" : 0.1, "trait" : "line" }, /* 64 */ { "x" : 556, "y" : 123, "bCoef" : 0.1, "trait" : "line" }, /* 65 */ { "x" : 575, "y" : 123, "bCoef" : 0.1, "trait" : "line" }, /* 66 */ { "x" : -556, "y" : -123, "bCoef" : 0.1, "trait" : "line" }, /* 67 */ { "x" : -575, "y" : -123, "bCoef" : 0.1, "trait" : "line" }, /* 68 */ { "x" : 556, "y" : -123, "bCoef" : 0.1, "trait" : "line" }, /* 69 */ { "x" : 575, "y" : -123, "bCoef" : 0.1, "trait" : "line" }, /* 70 */ { "x" : -381, "y" : -240, "bCoef" : 0.1, "trait" : "line" }, /* 71 */ { "x" : -381, "y" : -256, "bCoef" : 0.1, "trait" : "line" }, /* 72 */ { "x" : 381, "y" : 240, "bCoef" : 0.1, "trait" : "line" }, /* 73 */ { "x" : 381, "y" : -240, "bCoef" : 0.1, "trait" : "line" }, /* 74 */ { "x" : 381, "y" : -256, "bCoef" : 0.1, "trait" : "line" }, /* 75 */ { "x" : 550, "y" : -226, "bCoef" : 0.1, "trait" : "line", "curve" : -90 }, /* 76 */ { "x" : 536, "y" : -240, "bCoef" : 0.1, "trait" : "line", "curve" : -90 }, /* 77 */ { "x" : 550, "y" : 226, "bCoef" : 0.1, "trait" : "line", "curve" : 90 }, /* 78 */ { "x" : 536, "y" : 240, "bCoef" : 0.1, "trait" : "line", "curve" : 90 }, /* 79 */ { "x" : 550, "y" : 200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 }, /* 80 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 90 }, /* 81 */ { "x" : 550, "y" : -200, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 }, /* 82 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : -90 }, /* 83 */ { "x" : 390, "y" : 70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }, /* 84 */ { "x" : 390, "y" : -70, "bCoef" : 0.1, "trait" : "line", "color" : "F8F8F8", "curve" : 0 }, /* 85 */ { "x" : -375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 86 */ { "x" : -375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 87 */ { "x" : -375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 88 */ { "x" : -375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 89 */ { "x" : -375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 90 */ { "x" : -375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 91 */ { "x" : -375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 92 */ { "x" : -375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 93 */ { "x" : 375, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 94 */ { "x" : 375, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 95 */ { "x" : 375, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 96 */ { "x" : 375, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 97 */ { "x" : 375, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 98 */ { "x" : 375, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 99 */ { "x" : 375, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 100 */ { "x" : 375, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 101 */ { "x" : -277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 102 */ { "x" : -277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 103 */ { "x" : -277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 104 */ { "x" : -277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 105 */ { "x" : -277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 106 */ { "x" : -277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 107 */ { "x" : -277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 108 */ { "x" : -277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 109 */ { "x" : 277.5, "y" : 1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 110 */ { "x" : 277.5, "y" : -1, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 111 */ { "x" : 277.5, "y" : 3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 112 */ { "x" : 277.5, "y" : -3, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 113 */ { "x" : 277.5, "y" : -2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 114 */ { "x" : 277.5, "y" : 2, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 115 */ { "x" : 277.5, "y" : -3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 }, /* 116 */ { "x" : 277.5, "y" : 3.5, "bCoef" : 0.1, "trait" : "line", "curve" : 180 } ], "segments" : [ { "v0" : 6, "v1" : 7, "curve" : 0, "color" : "FF6666", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,-80 ], "y" : -80 }, { "v0" : 7, "v1" : 8, "curve" : -28.940588200131774, "color" : "FF6666", "cMask" : ["ball" ], "trait" : "goalNet", "x" : -590 }, { "v0" : 8, "v1" : 9, "curve" : 0, "color" : "FF6666", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [-700,80 ], "y" : 80 }, { "v0" : 10, "v1" : 11, "curve" : 0, "color" : "479BD8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,-80 ], "y" : -80 }, { "v0" : 11, "v1" : 12, "curve" : 28.940588200131774, "color" : "479BD8", "cMask" : ["ball" ], "trait" : "goalNet", "x" : 590 }, { "v0" : 12, "v1" : 13, "curve" : 0, "color" : "479BD8", "cMask" : ["red","blue","ball" ], "trait" : "goalNet", "pos" : [700,80 ], "y" : 80 }, { "v0" : 2, "v1" : 3, "trait" : "kickOffBarrier" }, { "v0" : 3, "v1" : 4, "curve" : 180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 3, "v1" : 4, "curve" : -180, "vis" : true, "color" : "F8F8F8", "cGroup" : ["redKO" ], "trait" : "kickOffBarrier" }, { "v0" : 4, "v1" : 5, "trait" : "kickOffBarrier" }, { "v0" : 14, "v1" : 15, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 }, { "v0" : 16, "v1" : 17, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -550 }, { "v0" : 18, "v1" : 19, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : 240 }, { "v0" : 20, "v1" : 21, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 }, { "v0" : 22, "v1" : 23, "vis" : true, "color" : "F8F8F8", "bCoef" : 1.25, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550 }, { "v0" : 24, "v1" : 25, "vis" : true, "color" : "F8F8F8", "bCoef" : 0, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 550, "y" : -240 }, { "v0" : 26, "v1" : 27, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 1, "cMask" : ["ball" ], "trait" : "ballArea", "y" : -240 }, { "v0" : 28, "v1" : 29, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 30, "v1" : 31, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "cMask" : ["red","blue" ], "cGroup" : ["redKO","blueKO" ], "trait" : "kickOffBarrier" }, { "v0" : 38, "v1" : 39, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 }, { "v0" : 40, "v1" : 41, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : -557.5 }, { "v0" : 42, "v1" : 43, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 }, { "v0" : 44, "v1" : 45, "curve" : 0, "vis" : false, "color" : "F8F8F8", "bCoef" : 2, "cMask" : ["ball" ], "trait" : "ballArea", "x" : 557.5 }, { "v0" : 46, "v1" : 47, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 0 }, { "v0" : 48, "v1" : 49, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -550 }, { "v0" : 50, "v1" : 51, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 550 }, { "v0" : 52, "v1" : 53, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 }, { "v0" : 54, "v1" : 55, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 57, "v1" : 56, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 58, "v1" : 59, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 55, "v1" : 59, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 61, "v1" : 60, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 62, "v1" : 63, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 }, { "v0" : 64, "v1" : 65, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : 123 }, { "v0" : 66, "v1" : 67, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 }, { "v0" : 68, "v1" : 69, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -240, "y" : -123 }, { "v0" : 70, "v1" : 71, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -381 }, { "v0" : 73, "v1" : 74, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 381 }, { "v0" : 76, "v1" : 75, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 78, "v1" : 77, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 79, "v1" : 80, "curve" : 90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 81, "v1" : 82, "curve" : -90, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line" }, { "v0" : 83, "v1" : 84, "curve" : 0, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 390 }, { "v0" : 86, "v1" : 85, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 85, "v1" : 86, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 88, "v1" : 87, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 87, "v1" : 88, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 90, "v1" : 89, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 89, "v1" : 90, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 92, "v1" : 91, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 91, "v1" : 92, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -375 }, { "v0" : 94, "v1" : 93, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 93, "v1" : 94, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 96, "v1" : 95, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 95, "v1" : 96, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 98, "v1" : 97, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 97, "v1" : 98, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 100, "v1" : 99, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 99, "v1" : 100, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 375 }, { "v0" : 102, "v1" : 101, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 101, "v1" : 102, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 104, "v1" : 103, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 103, "v1" : 104, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 106, "v1" : 105, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 105, "v1" : 106, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 108, "v1" : 107, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 107, "v1" : 108, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : -277.5 }, { "v0" : 110, "v1" : 109, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 109, "v1" : 110, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 112, "v1" : 111, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 111, "v1" : 112, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 114, "v1" : 113, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 113, "v1" : 114, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 116, "v1" : 115, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 }, { "v0" : 115, "v1" : 116, "curve" : 180, "vis" : true, "color" : "F8F8F8", "bCoef" : 0.1, "trait" : "line", "x" : 277.5 } ], "goals" : [ { "p0" : [-556.3,-80 ], "p1" : [-556.3,80 ], "team" : "red" }, { "p0" : [556.3,80 ], "p1" : [556.3,-80 ], "team" : "blue" } ], "discs" : [ { "radius" : 5, "pos" : [-550,80 ], "color" : "FF6666", "trait" : "goalPost", "y" : 80 }, { "radius" : 5, "pos" : [-550,-80 ], "color" : "FF6666", "trait" : "goalPost", "y" : -80, "x" : -560 }, { "radius" : 5, "pos" : [550,80 ], "color" : "479BD8", "trait" : "goalPost", "y" : 80 }, { "radius" : 5, "pos" : [550,-80 ], "color" : "479BD8", "trait" : "goalPost", "y" : -80 }, { "radius" : 3, "invMass" : 0, "pos" : [-550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [-550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [550,-240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" }, { "radius" : 3, "invMass" : 0, "pos" : [550,240 ], "color" : "FFCC00", "bCoef" : 0.1, "trait" : "line" } ], "planes" : [ { "normal" : [0,1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea", "vis" : false, "curve" : 0 }, { "normal" : [0,-1 ], "dist" : -240, "bCoef" : 1, "trait" : "ballArea" }, { "normal" : [0,1 ], "dist" : -270, "bCoef" : 0.1 }, { "normal" : [0,-1 ], "dist" : -270, "bCoef" : 0.1 }, { "normal" : [1,0 ], "dist" : -642, "bCoef" : 0.1 }, { "normal" : [-1,0 ], "dist" : -644, "bCoef" : 0.1 }, { "normal" : [1,0 ], "dist" : -642, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 }, { "normal" : [-1,0 ], "dist" : -643, "bCoef" : 0.1, "trait" : "ballArea", "vis" : false, "curve" : 0 } ], "traits" : { "ballArea" : { "vis" : false, "bCoef" : 1, "cMask" : ["ball" ] }, "goalPost" : { "radius" : 8, "invMass" : 0, "bCoef" : 0.5 }, "goalNet" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["ball" ] }, "line" : { "vis" : true, "bCoef" : 0.1, "cMask" : ["" ] }, "kickOffBarrier" : { "vis" : false, "bCoef" : 0.1, "cGroup" : ["redKO","blueKO" ], "cMask" : ["red","blue" ] } }, "playerPhysics" : { "bCoef" : 0, "acceleration" : 0.11, "kickingAcceleration" : 0.083, "kickStrength" : 4.5 }, "ballPhysics" : { "radius" : 6.2, "bCoef" : 0.4, "invMass" : 1.6, "damping" : 0.99, "color" : "FF9214" } }';

const scoreMapa = 3; 
const tempoMapa = 3; 

var afkLimit = 10; 
var drawTimeLimit = Infinity; 
var maxTeamSize = 3;
var slowMode = 0;

const Team = { SPECTATORS: 0, RED: 1, BLUE: 2 };
const team = { SPEC: 0, RED: 1, BLUE: 2 };
var extendedP = [];
const eP = { ID: 0, AUTH: 1, CONN: 2, AFK: 3, ACT: 4, GK: 5, MUTE: 6 };
const Ss = { GA: 0, WI: 1, DR: 2, LS: 3, WR: 4, GL: 5, AS: 6, GK: 7, CS: 8, CP: 9, RL: 10, NK: 11 }

var players;
var teamR;
var teamB;
var teamS;
var lastTeamTouched;
var lastPlayersTouched; 
var countAFK = false; 
var activePlay = false; 
var goldenGoal = false;
var SMSet = new Set()
var banList = []
var game;
var GKList = ["", ""];
var Rposs = 0;
var Bposs = 0;
var point = [{ "x": 0, "y": 0 }, { "x": 0, "y": 0 }]; 
var ballSpeed;
var lastWinner = Team.SPECTATORS;
var streak = 0;
var allBlues = []; 
var allReds = []; 
var inChooseMode = false; 
var redCaptainChoice = "";
var blueCaptainChoice = "";
var chooseTime = 20;
var timeOutCap;
var checkTimeVariable = false; 
var statNumber = 0;
var endGameVariable = false; 
var resettingTeams = false;
var capLeft = false;
var statInterval = 6;

const disc = '';

const frasesGOL = [" Lindo GOL ", " Golaço ", " Mas que bola rapaz! "]; // Frases de gol
const frasesASS = [" Lindo Passe ", " Deixou na boca do gol ", " Que bolão, lindo passe! "]; // Frases de assistencias
const golcontra = [" Sem querer ele marcou contra ", " Concerteza ele fez de proposito ", " GOOOOL Contra "]; // Frases de gol contra


room.setTeamsLock(true)

let Cor = {
    Vermelho: 0xFA5646,
    Laranja: 0xFFC12F,
    Verde: 0x7DFA89,
	Azul: 0x05C5FF,
	Amarelo: 0xFFFF17,
	Cinza: 0xCCCCCC,
	Branco: 0xFFFFFF,
	Azulclaro: 0x6ECAFF,
	Azulescuro: 0x426AD6
}

const Negrito = 'bold';

loadMap(Mapa, scoreMapa, tempoMapa);

setInterval(() => { // local aonde stats dos players são armazenadas
	if(Object.keys(localStorage).includes("_grecaptcha")){
	localStorage.removeItem("_grecaptcha")
    var tableau = []
    if (statNumber % 5 == 0) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("Jogos> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 1) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("Vitórias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 2) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("Gols> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 3) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("Passes> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
    if (statNumber % 5 == 4) {
        Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS])]); } });
        if (tableau.length < 5) {
            return false;
        }
        tableau.sort(function (a, b) { return b[1] - a[1]; });
        room.sendAnnouncement("Defesas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1]);
    }
	}
    statNumber++;
}, statInterval * 60 * 1000)

room.onPlayerJoin = function (player) { // evento quando o player entra na sala
	extendedP.push([player.id, player.auth, player.conn, false, 0, 0, false])
	updateRoleOnPlayerIn()

	room.sendAnnouncement( "[PV] 👋 Bem-Vindo(a) " + player.name + " ! Digita '!ajuda' Para Ver os Comandos." , null , 0x00FF00 , "bold", 2);
	
	if (localStorage.getItem(getAuth(player)) == null) { 
	stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", player.name] 
	localStorage.setItem(getAuth(player), JSON.stringify(stats)) 
	}
}

room.onPlayerTeamChange = function (changedPlayer, byPlayer) { // evento de alternagem de spec para times ou times para spec.
	if (changedPlayer.id == 0) {
	room.setPlayerTeam(0, Team.SPECTATORS);
	return;
	}
	if (getAFK(changedPlayer) && changedPlayer.team != Team.SPECTATORS) {
	room.setPlayerTeam(changedPlayer.id, Team.SPECTATORS);
	room.sendChat(changedPlayer.name + " está AFK !")
	return;
	}
	updateTeams();
	if (room.getScores() != null) {
	var scores = room.getScores();
	if (changedPlayer.team != Team.SPECTATORS && scores.time <= (3 / 4) * scores.timeLimit && Math.abs(scores.blue - scores.
	red) < 2) { (changedPlayer.team == Team.RED) ? allReds.push(changedPlayer) : allBlues.push(changedPlayer);
	}
	}
	if (changedPlayer.team == Team.SPECTATORS) {
	setActivity(changedPlayer, 0);
	}
	if (inChooseMode && resettingTeams == false && byPlayer.id == 0) {
	if (Math.abs(teamR.length - teamB.length) == teamS.length) {
	deactivateChooseMode();
	resumeGame();
	var b = teamS.length;
	if (teamR.length > teamB.length) {
	for (var i = 0; i < b; i++) {
	setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 200 * i);
	}
	}
	else {
	for (var i = 0; i < b; i++) {
	setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 200 * i);
	}
	}
	return;
	}
	else if ((teamR.length == maxTeamSize && teamB.length == maxTeamSize) || (teamR.length == teamB.length && teamS.length < 2)
	) { deactivateChooseMode();
	resumeGame();
	}
	else if (teamR.length <= teamB.length && redCaptainChoice != "") { 
	redCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.RED) : redCaptainChoice == "random" ? room.
	setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED) : room.setPlayerTeam(teamS[teamS.length - 1].id, Team.
	RED); return;
	}
	else if (teamB.length < teamR.length && blueCaptainChoice != "") {
	blueCaptainChoice == "top" ? room.setPlayerTeam(teamS[0].id, Team.BLUE) : blueCaptainChoice == "random" ? room.
	setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE) : room.setPlayerTeam(teamS[teamS.length - 1].id,
	Team.BLUE); return;
	}
	else {
	choosePlayer();
	}
	}
}

room.onPlayerLeave = function (player) { // evento quando o player sai da sala
	if (teamR.findIndex((red) => red.id == player.id) == 0 && inChooseMode && teamR.length <= teamB.length) {
	choosePlayer();
	capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	if (teamB.findIndex((blue) => blue.id == player.id) == 0 && inChooseMode && teamB.length < teamR.length) {
	choosePlayer();
	capLeft = true; setTimeout(() => { capLeft = false; }, 10);
	}
	setActivity(player, 0);
	updateRoleOnPlayerOut()
}

room.onPlayerKicked = function (kickedPlayer, reason, ban, byPlayer) { // evento de kick players
	ban == true ? banList.push([kickedPlayer.name, kickedPlayer.id]) : null;
}

	/* PLAYER ACTIVITY */

room.onPlayerChat = function (player, message) { // evento de interações de players com o chat

	if (message.substr(0, 13) == "!trancarsala ") {
	if (player.admin) {
	room.setPassword(message.substr(13))
	room.sendAnnouncement("A Sala foi trancada a senha da sala é " + message.substr(13) + " para destrancar use o comando !destrancar", player.id)
	}
	else room.sendAnnouncement('precisa ser administrador para trancar a sala ou ative o modo administrador se você é realmente um administrador.', player.id)
	}
	msg = message;
	originalMessage = message;
	message = message.split(/ +/);
	player.team != Team.SPECTATORS ? setActivity(player, 0) : null;
	
	if (["!claim"].includes(message[0].toLowerCase()) && message[1] == '02092005') { 
	room.setPlayerAdmin(player.id, true)
	console.log(player.name + ' logou como administrador na sala!')
	room.sendAnnouncement('Você ativou o modo administrador na sala! \ncomandos: !trancarsala <senha>, !destrancar, !rr, !mute (#ID) !unmute (#ID)', player.id, Cor.Verde, Negrito)
	}
	
	else if (["!uni"].includes(message[0].toLowerCase()) && message[1] == 'santos') {
	if(player.admin && player.team == 1){
	room.setTeamColors (team.RED, 90, 0xFFFFFF, [0xFFFFFF, 0xE6E6E6, 0x000000, 0xE6E6E6])
	room.sendAnnouncement(player.name+ " escolheu o uniforme do Santos FC", null)
	}
	
	else if(player.admin && player.team == 2) {
	room.setTeamColors (team.BLUE, 90, 0xFFFFFF, [0xFFFFFF, 0xE6E6E6, 0x000000, 0xE6E6E6])
	room.sendAnnouncement(player.name+ " escolheu o uniforme do Santos FC", null)
	}
	
	else if(player.admin && player.team == 0) {
	room.sendAnnouncement("Você é um spectador para qual time você quer alterar o uniforme? escreva !santosr para time o vermelho ou !santosb para o time azul.", null)	
	}
	else room.sendAnnouncement("Somente admins podem alterar o uniforme", null)
	}
	
	else if (["!discord"].includes(message[0].toLowerCase()) && message[1] == null) {
	room.sendAnnouncement( "https://discord.gg/EmRsPPh4", null , 0x00FF00 , "bold", 2);	
	}

	else if (["!san"].includes(message[0].toLowerCase())) {
	if(player.admin && player.team == 0){ room.setTeamColors (team.RED, 90, 0xFFFFFF, [0xFFFFFF, 0xE6E6E6, 0x000000, 0xE6E6E6])
	room.sendAnnouncement(player.name+ " escolheu o uniforme do Santos FC para o time vermelho.", null)
	}}
	
	else if (["!san2"].includes(message[0].toLowerCase())) {
	if(player.admin && player.team == 0){ room.setTeamColors (team.BLUE, 90, 0xFFFFFF, [0xFFFFFF, 0xE6E6E6, 0x000000, 0xE6E6E6])
	room.sendAnnouncement(player.name+ " escolheu o uniforme do Santos FC para o time azul.", null)
	}}
	
	else if (["!destrancar"].includes(message[0].toLowerCase())) {
	if (player.admin) {
	room.setPassword(null)	
	room.sendAnnouncement("A Sala foi destrancada com sucesso, todos podem entrar!", player.id)
	}}
	
	else if (["!rr"].includes(message[0].toLowerCase())) {
	if (player.admin) {
	room.stopGame()
	room.startGame()
	room.sendAnnouncement('A Partida foi reniciada', player.id, 0xFFFF00) + room.sendAnnouncement(player.name + ' reniciou a partida', null, 0x00FF00)
	}}	

	else if (["!ajuda"].includes(message[0].toLowerCase())) { // mostra os comandos
	room.sendAnnouncement("[📄] Comandos : !me, !mostrarstats, !afk, !idolo, !jogos, !vit, !gols, !assis, !defesas, !mutes, !bans.",
	player.id, Cor.Azulclaro, "bold") + player.admin ? room.sendAnnouncement("[📄] Admin : !mute #, !unmute all/#, !clearbans < number = all >", player.id, Cor.Azulescuro, "bold") : null;
	}
	
	else if (["!afk"].includes(message[0].toLowerCase())) { // Se torna AFK, não pode ser movido para um time, também não pode entrar em um time ate que use comando !afk novamente.
	if (players.length != 1 && player.team != Team.SPECTATORS) {
	if (player.team == Team.RED && streak > 0 && room.getScores() == null) {
	room.setPlayerTeam(player.id, Team.SPECTATORS);
	}
	else {
	room.sendChat("Você está em um time, seja um espectador para ficar AFK !", player.id, Cor.Vermelho, Negrito)
	return false;
	}
	}
	else if (players.length == 1 && !getAFK(player)) {
	room.setPlayerTeam(player.id, Team.SPECTATORS);
	}
	setAFK(player, !getAFK(player));
	room.sendAnnouncement(player.name + (getAFK(player) ? " Ficou AFK !" : " Saiu do AFK !"),null,(getAFK(player) ? 0xFF7B08 :
	0x8FFF8F)); getAFK(player) ? updateRoleOnPlayerOut() : updateRoleOnPlayerIn();
	localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player"];
	}
	
	else if (["!afks"].includes(message[0].toLowerCase())) { // Mostra a lista de afks da sala
	var cstm = "Lista de AFK : ";
	for (var i = 0; i < extendedP.length; i++) {
	if (room.getPlayer(extendedP[i][eP.ID]) != null && getAFK(room.getPlayer(extendedP[i][eP.ID]))) {
	if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + ", ").length) {
	room.sendChat(cstm, player.id);
	cstm = "... ";
	}
	cstm += room.getPlayer(extendedP[i][eP.ID]).name + ", ";
	}
	}
	if (cstm == "[PV] Lista de AFK : ") {
	room.sendChat("[PV] Não há ninguém na lista de AFK !", player.id);
	return false;
	}
	cstm = cstm.substring(0, cstm.length - 2);
	cstm += ".";
	room.sendChat(cstm, player.id);
	}
	
	else if (["!me"].includes(message[0].toLowerCase())) { // mostra suas atuais estatisticas, somente para você.
	var stats;
	localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
	room.sendAnnouncement("[📄] Seus stats: 🎮 Jogos: " + stats[Ss.GA] + ", ✅ Vitórias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", Taxa de vitórias: " + stats[Ss.WR] + "%, ⚽️ Gols: " + stats[Ss.GL] + ", 👟 Assistências: " +stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 CS: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", player.id,0x73EC59,"bold"); 
	}
	
	else if (["!mostrarstats"].includes(message[0].toLowerCase())) { // mostra suas atuais estatisticas, mostra para todos da sala.
	var stats;
	localStorage.getItem(getAuth(player)) ? stats = JSON.parse(localStorage.getItem(getAuth(player))) : stats = [0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00"]; 
	room.sendAnnouncement("[📄] Stats do " + player.name + ": 🎮 Partidos Jugados: " + stats[Ss.GA] + ", ✅ Victorias: " + stats[Ss.WI] + ", ❌ Derrotas: " + stats[Ss.LS] + ", WR: " + stats[Ss.WR] + "%, ⚽️ Goles: " + stats[Ss.GL] + ", 👟 Asistencias: " +stats[Ss.AS] + ", 🤚 GK: " + stats[Ss.GK] + ", 🤚 Vallas: " + stats[Ss.CS] + ", 🤚 CS%: " + stats[Ss.CP] + "%", null,0x73EC59,"bold"); 
	}
	
	else if (["!jogos"].includes(message[0].toLowerCase())) { // mostra o ranking de partidas jogadas
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
	includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GA])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
	room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0xFF0000);
	return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 🎮 Partidos Jugados> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
	tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
	tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
	return false;
	}
	
	else if (["!vit"].includes(message[0].toLowerCase())) { // mostra o ranking de vitórias jogadas
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
	includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI]
	)]); } }); }
	catch{

	}
	if (tableau.length < 5) {
	room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0x73EC59);
	return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ✅ Victorias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau
	[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);

	return false;
	}
	
	else if (["!idolo"].includes(message[0].toLowerCase())) { // mostra o ranking dos melhores jogadores da sala.
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
	includes(key) && JSON.parse(localStorage.getItem(key))[Ss.WI] > 400) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.WI])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
	room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0x73EC59);
	return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ✅ Idolo> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1]
	[1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4]
	[0] + ": " + tableau[4][1], player.id,0x73EC59);
	return false;
	}
	
	else if (["!gols"].includes(message[0].toLowerCase())) {
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
	includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.GL])]); } });
	}
	catch{

	}
	if (tableau.length < 5) {
	room.sendAnnouncement("[📄] Não foram jogadas partidas suficientes ainda.", player.id,0x73EC59);
	return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] ⚽️ Goles> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " + tableau[1]
	[1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " + tableau[4]
	[0] + ": " + tableau[4][1], player.id,0x73EC59);
	return false;
	}
	
	else if (["!assis"].includes(message[0].toLowerCase())) { // mostra o ranking de assistencias
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
	includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.AS]
	)]); } }); }
	catch{

	}
	if (tableau.length < 5) {
	room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id);
	return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 👟 Asistencias> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
	tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
	tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
	return false;
	}
	
	else if (["!defesas"].includes(message[0].toLowerCase())) { // mostra o ranking de defesas [GK]
	var tableau = [];
	try{
	Object.keys(localStorage).forEach(function (key) { if (!["player_name", "view_mode", "geo", "avatar", "player_auth_key"].
	includes(key)) { tableau.push([(JSON.parse(localStorage.getItem(key))[Ss.NK]), (JSON.parse(localStorage.getItem(key))[Ss.CS]
	)]); } }); }
	catch{

	}
	if (tableau.length < 5) {
	room.sendAnnouncement("[PV] Não foram jogadas partidas suficientes ainda.", player.id,0x73EC59);
	return false;
	}
	tableau.sort(function (a, b) { return b[1] - a[1]; });
	room.sendAnnouncement("[📄] 🤚 Vallas Invictas> #1 " + tableau[0][0] + ": " + tableau[0][1] + " #2 " + tableau[1][0] + ": " +
	tableau[1][1] + " #3 " + tableau[2][0] + ": " + tableau[2][1] + " #4 " + tableau[3][0] + ": " + tableau[3][1] + " #5 " +
	tableau[4][0] + ": " + tableau[4][1], player.id,0x73EC59);
	return false;
	}
	
	else if (["!mutes", "!mutelist"].includes(message[0].toLowerCase())) { // mostra a lista de mutados
	var cstm = "[PV] Lista de muteados : ";
	for (var i = 0; i < extendedP.length; i++) {
	if (room.getPlayer(extendedP[i][eP.ID]) != null && getMute(room.getPlayer(extendedP[i][eP.ID]))) {
	if (140 - cstm.length < (room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ").length) {
	room.sendChat(cstm, player.id);
	cstm = "... ";
	}
	cstm += room.getPlayer(extendedP[i][eP.ID]).name + "[" + (extendedP[i][eP.ID]) + "], ";
	}
	}
	if (cstm == "[PV] Lista de Muteados : ") {
	room.sendChat("[PV] No hay nadie en la lista de muteados !", player.id);
	return false;
	}
	cstm = cstm.substring(0, cstm.length - 2);
	cstm += ".";
	room.sendChat(cstm, player.id);
	}
	
	else if (["!mute"].includes(message[0].toLowerCase())) { // comando para mutar um jogador, deve ser admin, use !mute + ID do jogador
	if (player.admin) {
	updateTeams();

	var timeOut;
	if (!Number.isNaN(Number.parseInt(message[1])) && message.length > 1) {
	if (Number.parseInt(message[1]) > 0) {
	timeOut = Number.parseInt(message[1]) * 60 * 1000;
	}
	else {
	timeOut = 3 * 60 * 1000;
	}
	if (message[2].length > 1 && message[2][0] == "#") {
	message[2] = message[2].substring(1, message[2].length);
	if (!Number.isNaN(Number.parseInt(message[2])) && room.getPlayer(Number.parseInt(message[2])) != null) {
	if (room.getPlayer(Number.parseInt(message[2])).admin || getMute(room.getPlayer(Number.parseInt(message[2]))
	)) { return false;
	}
	setTimeout(function (player) { setMute(player, false); }, timeOut, room.getPlayer(Number.parseInt(message[2]
	))); setMute(room.getPlayer(Number.parseInt(message[2])), true);
	room.sendChat(room.getPlayer(Number.parseInt(message[2])).name + " foi mutado por " + (timeOut /
	60000) + " minutos !"); }
	}
	}
	else if (Number.isNaN(Number.parseInt(message[1]))) {
	if (message[1].length > 1 && message[1][0] == "#") {
	message[1] = message[1].substring(1, message[1].length);
	if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null) {
	if (room.getPlayer(Number.parseInt(message[1])).admin || getMute(room.getPlayer(Number.parseInt(message[1]))
	)) { return false;
	}
	setTimeout(function (player) { setMute(player, false); }, 3 * 60 * 1000, room.getPlayer(Number.parseInt
	(message[1])));
	setMute(room.getPlayer(Number.parseInt(message[1])), true);
	room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Foi mutado por 3 minutos!");
	}
	}
	}
	}
	}
	
	else if (["!unmute"].includes(message[0].toLowerCase())) { // comando para desmutar um jogador, deve ser admin, use !mute + ID do jogador
	if (player.admin && message.length >= 2) {
	if (message[1] == "all") {
	extendedP.forEach((ePlayer) => { ePlayer[eP.MUTE] = false; });
	room.sendChat("Todos foram desmutados.");
	} else if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
	setMute(room.getPlayer(Number.parseInt(message[1])), false);
	room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Foi desmutado !");
	}
	else if (Number.isNaN(Number.parseInt(message[1]))) {
	if (message[1].length > 1 && message[1][0] == "#") {
	message[1] = message[1].substring(1, message[1].length);
	if (!Number.isNaN(Number.parseInt(message[1])) && room.getPlayer(Number.parseInt(message[1])) != null && getMute(room.getPlayer(Number.parseInt(message[1])))) {
	setMute(room.getPlayer(Number.parseInt(message[1])), false);
	room.sendChat(room.getPlayer(Number.parseInt(message[1])).name + " Foi desmutado !");
	}
	}
	}
	}
	}
	
	else if (["!bans"].includes(message[0].toLowerCase())) { // comando para ver a lista de banidos
	if (banList.length == 0) {
	room.sendChat("[PV] Não há nada na lista de banidos!", player.id);
	return false;
	}
	var cstm = "[PV] Lista de banidos : ";
	for (var i = 0; i < banList.length; i++) {
	if (140 - cstm.length < (banList[i][0] + "[" + (banList[i][1]) + "], ").length) {
	room.sendChat(cstm, player.id);
	cstm = "... ";
	}
	cstm += banList[i][0] + "[" + (banList[i][1]) + "], ";
	}
	cstm = cstm.substring(0, cstm.length - 2);
	cstm += ".";
	room.sendChat(cstm, player.id);
	}
	
	else if (["!clearbans"].includes(message[0].toLowerCase())) { // comando para limpar os bans da sala, para desbanir um jogador especifico escreva !clearbans + ID do jogador
	if (player.admin) {
	if (message.length == 1) {
	room.clearBans();
	room.sendChat("Bans removidos!");
	banList = [];
	}
	if (message.length == 2) {
	if (!Number.isNaN(Number.parseInt(message[1]))) {
	if (Number.parseInt(message[1]) > 0) {
	ID = Number.parseInt(message[1]);
	room.clearBan(ID);
	if (banList.length != banList.filter((array) => array[1] != ID)) {
	room.sendChat(banList.filter((array) => array[1] == ID)[0][0] + " ha sido baneado del host !");
	}
	setTimeout(() => { banList = banList.filter((array) => array[1] != ID); }, 20);
	}
	}
	}
	}
	}

	if (message[0][0] == "!") { // mensagens com o prefixo [!] não irão aparecer no chat.
	return false;
	}
	
	if (teamR.length != 0 && teamB.length != 0 && inChooseMode) { //choosing management
	if (player.id == teamR[0].id || player.id == teamB[0].id) { // we care if it's one of the captains choosing
	if (teamR.length <= teamB.length && player.id == teamR[0].id) { // we care if it's red turn && red cap talking
	if (["top", "auto"].includes(message[0].toLowerCase())) {
	room.setPlayerTeam(teamS[0].id, Team.RED);
	redCaptainChoice = "top";
	clearTimeout(timeOutCap);
	room.sendChat(player.name + " Escolheu o topo da fila !");
	return false;
	}
	else if (["random", "rand"].includes(message[0].toLowerCase())) {
	var r = getRandomInt(teamS.length);
	room.setPlayerTeam(teamS[r].id, Team.RED);
	redCaptainChoice = "random";
	clearTimeout(timeOutCap);
	room.sendChat(player.name + " Escolheu jogadores aleatórios da fila !");
	return false;
	}
	else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
	room.setPlayerTeam(teamS[teamS.length - 1].id, Team.RED);
	redCaptainChoice = "bottom";
	clearTimeout(timeOutCap);
	room.sendChat(player.name + " Escolheu os ultimos da fila !");
	return false;
	}
	else if (!Number.isNaN(Number.parseInt(message[0]))) {
	if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
	room.sendChat("[PV] número invalido !", player.id);
	return false;
	}
	else {
	room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.RED);
	room.sendChat(player.name + " escolheu o " + teamS[Number.parseInt(message[0]) - 1].name + " !");
	return false;
	}
	}
	}
	if (teamR.length > teamB.length && player.id == teamB[0].id) { // we care if it's red turn && red cap talking
	if (["top", "auto"].includes(message[0].toLowerCase())) {
	room.setPlayerTeam(teamS[0].id, Team.BLUE);
	blueCaptainChoice = "top";
	clearTimeout(timeOutCap);
	room.sendChat(player.name + " Escolheu o topo da fila !");
	return false;
	}
	else if (["random", "rand"].includes(message[0].toLowerCase())) {
	room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
	blueCaptainChoice = "random";
	clearTimeout(timeOutCap);
	room.sendChat(player.name + " Escolheu jogadores aleatórios da fila !");
	return false;
	}
	else if (["bottom", "bot"].includes(message[0].toLowerCase())) {
	room.setPlayerTeam(teamS[teamS.length - 1].id, Team.BLUE);
	blueCaptainChoice = "bottom";
	clearTimeout(timeOutCap);
	room.sendChat(player.name + " Escolheu os ultimos da fila !");
	return false;
	}
	else if (!Number.isNaN(Number.parseInt(message[0]))) {
	if (Number.parseInt(message[0]) > teamS.length || Number.parseInt(message[0]) < 1) {
	room.sendChat("[PV] número invalido !", player.id);
	return false;
	}
	else {
	room.setPlayerTeam(teamS[Number.parseInt(message[0]) - 1].id, Team.BLUE);
	room.sendChat(player.name + " escolheu o " + teamS[Number.parseInt(message[0]) - 1].name + " !");
	return false;
	}
	}
	}
	}
	}

	if (getMute(player)) {
	room.sendChat("Você está mutado.", player.id);
	return false;
	}
	if (localStorage.getItem(getAuth(player))){ // elo definido por vitórias
		stats = JSON.parse(localStorage.getItem(getAuth(player)));
		if (stats[Ss.WI] > 499){
		room.sendAnnouncement("👑 「𝐋𝐞𝐧𝐝𝐚」" + player.name + ": " + msg + "", null, 0x7E65FF)
		} else if (stats[Ss.WI] > 199){
		room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻𝗮 𝐈𝐈𝐈」:" + player.name + ": " + msg + "", null, 0x62AEE3)
		} else if (stats[Ss.WI] > 179){
		room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻𝗮 𝐈𝐈」" + player.name + ": " + msg + "", null, 0x62AEE3)
		} else if (stats[Ss.WI] > 159){
		room.sendAnnouncement("🏅 「𝗣𝗹𝗮𝘁𝗶𝗻𝗮 𝐈」" + player.name + ": " + msg + "", null, 0x62AEE3)
		} else if (stats[Ss.WI] > 129){
		room.sendAnnouncement("🥇 「𝗢𝘂𝗿𝗼 𝐈𝐈𝐈」" + player.name + ": " + msg + "", null, 0xEAC274)
		} else if (stats[Ss.WI] > 89){
		room.sendAnnouncement("🥇 「𝗢𝘂𝗿𝗼 𝐈𝐈」" + player.name + ": " + msg + "", null, 0xEAC274)
		} else if (stats[Ss.WI] > 69){
		room.sendAnnouncement("🥇 「𝗢𝘂𝗿𝗼 𝐈」" + player.name + ": " + msg + "", null, 0xEAC274)
		} else if (stats[Ss.WI] > 59){
		room.sendAnnouncement("🥈 「𝗣𝗿𝗮𝘁𝗮 𝐈𝐈𝐈」" + player.name + ": " + msg + "", null, 0xA2A2A2)
		} else if (stats[Ss.WI] > 44){
		room.sendAnnouncement("🥈 「𝗣𝗿𝗮𝘁𝗮 𝐈𝐈」" + player.name + ": " + msg + "", null, 0xA2A2A2)
		} else if (stats[Ss.WI] > 34){
		room.sendAnnouncement("🥈 「𝗣𝗿𝗮𝘁𝗮 𝐈」" + player.name + ": " + msg + "", null, 0xA2A2A2)
		} else if (stats[Ss.WI] > 24){
		room.sendAnnouncement("🥉 「𝗕𝗿𝗼𝗻𝘇𝗲 𝐈𝐈𝐈」" + player.name + ": " + msg + "", null, 0x72532A)
		} else if (stats[Ss.WI] > 14){
		room.sendAnnouncement("🥉 「𝗕𝗿𝗼𝗻𝘇𝗲 𝐈𝐈」" + player.name + ": " + msg + "", null, 0x72532A)
		} else if (stats[Ss.WI] > 4){
		room.sendAnnouncement("🥉 「𝗕𝗿𝗼𝗻𝘇𝗲 𝐈」" + player.name + ": " + msg + "", null, 0x72532A)
		} else {
		room.sendAnnouncement("㋡ 「𝗜𝗻𝗶𝗰𝗶𝗮𝗻𝘁𝗲」"  + player.name + ": " + msg + "", null, 0x7aa476)
		}
		return false;
	}
}

room.onPlayerActivity = function (player) {
	setActivity(player, 0);
}

room.onPlayerBallKick = function (player) {
	if (lastPlayersTouched[0] == null || player.id != lastPlayersTouched[0].id) {
	!activePlay ? activePlay = true : null;
	lastTeamTouched = player.team;
	lastPlayersTouched[1] = lastPlayersTouched[0];
	lastPlayersTouched[0] = player;
	}
}

	/* GAME MANAGEMENT */

room.onGameStart = function (byPlayer) {
	game = new Game(Date.now(), room.getScores(), []);
	countAFK = true;
	activePlay = false;
	goldenGoal = false;
	endGameVariable = false;
	lastPlayersTouched = [null, null];
	Rposs = 0;
	Bposs = 0;
	GKList = [];
	allReds = [];
	allBlues = [];
	if (teamR.length == maxTeamSize && teamB.length == maxTeamSize) {
	for (var i = 0; i < maxTeamSize; i++) {
	allReds.push(teamR[i]);
	allBlues.push(teamB[i]);
	}
	}
	for (var i = 0; i < extendedP.length; i++) {
	extendedP[i][eP.GK] = 0;
	extendedP[i][eP.ACT] = 0;
	room.getPlayer(extendedP[i][eP.ID]) == null ? extendedP.splice(i, 1) : null;
	}
	deactivateChooseMode();
}

room.onGameStop = function (byPlayer) {
	if (byPlayer.id == 0 && endGameVariable) {
	updateTeams();
	if (inChooseMode) {
	if (players.length == 2 * maxTeamSize) {
	inChooseMode = false;
	resetBtn();
	for (var i = 0; i < maxTeamSize; i++) {
	setTimeout(() => { randomBtn(); }, 400 * i);
	}
	setTimeout(() => { room.startGame(); }, 2000);
	}
	else {
	if (lastWinner == Team.RED) {
	blueToSpecBtn();
	}
	else if (lastWinner == Team.BLUE) {
	redToSpecBtn();
	blueToRedBtn();
	}
	else {
	resetBtn();
	}
	setTimeout(() => { topBtn(); }, 500);
	}
	}
	else {
	if (players.length == 2) {
	if (lastWinner == Team.BLUE) {
	room.setPlayerTeam(teamB[0].id, Team.RED);
	room.setPlayerTeam(teamR[0].id, Team.BLUE);
	}
	setTimeout(() => { room.startGame(); }, 2000);
	}
	else if (players.length == 3 || players.length >= 2 * maxTeamSize + 1) {
	if (lastWinner == Team.RED) {
	blueToSpecBtn();
	}
	else {
	redToSpecBtn();
	blueToRedBtn();
	}
	setTimeout(() => { topBtn(); }, 200);
	setTimeout(() => { room.startGame(); }, 2000);
	}
	else if (players.length == 4) {
	resetBtn();
	setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500);
	setTimeout(() => { room.startGame(); }, 2000);
	}
	else if (players.length == 5 || players.length >= 2 * maxTeamSize + 1) {
	if (lastWinner == Team.RED) {
	blueToSpecBtn();
	}
	else {
	redToSpecBtn();
	blueToRedBtn();
	}
	setTimeout(() => { topBtn(); }, 200);
	activateChooseMode();
	}
	else if (players.length == 6) {
	resetBtn();
	setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); setTimeout(() => { randomBtn(); }, 500); }, 500); }, 500);
	setTimeout(() => { room.startGame(); }, 2000);
	}
	}
	}
}

room.onGamePause = function (byPlayer) {
}
	
room.onGameUnpause = function (byPlayer) {
	if (teamR.length == 4 && teamB.length == 4 && inChooseMode || (teamR.length == teamB.length && teamS.length < 2 && inChooseMode)) {
	deactivateChooseMode();
	}
}

room.onTeamGoal = function (team) {
	activePlay = false;
	countAFK = false;
	const scores = room.getScores();
	game.scores = scores;
	if (lastPlayersTouched[0] != null && lastPlayersTouched[0].team == team) {
	if (lastPlayersTouched[1] != null && lastPlayersTouched[1].team == team) {
	var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
	var fraseasis = frasesASS[(Math.random() * frasesASS.length) | 0]
	room.sendAnnouncement( "⚽ " + getTime(scores) + " GoLaÇoOoOoOoOoOoOo Nunca Critiquei " + lastPlayersTouched[0].name + " ! Assistencia de " + lastPlayersTouched[1].name,  null , 0xFF0000 , "bold", 2);
	game.goals.push(new Goal(scores.time, team, lastPlayersTouched[0], lastPlayersTouched[1]));
	}
	else {
	var frasegol = frasesGOL[(Math.random() * frasesGOL.length) | 0]
	room.sendAnnouncement( "⚽ " + getTime(scores) + " Mas que bola rapaz! " + lastPlayersTouched[0].name, null , 0xFF0000 , "bold", 2);
	}
	}
	else {
	var fraseautogol = golcontra[(Math.random() * golcontra.length) | 0]
	room.sendAnnouncement( "😂 " + getTime(scores) + " AIFOODE Né " + lastPlayersTouched[0].name, null , 0xFF0000 , "bold", 2);
	game.goals.push(new Goal(scores.time, team, null, null));
	}
	if (scores.scoreLimit != 0 && (scores.red == scores.scoreLimit || scores.blue == scores.scoreLimit && scores.blue > 0 || goldenGoal == true)) {
	endGame(team);
	goldenGoal = false;
	setTimeout(() => { room.stopGame(); }, 1000);
	}
}

room.onPositionsReset = function () {
	countAFK = true;
	lastPlayersTouched = [null, null];
}

	/* MISCELLANEOUS */

room.onRoomLink = function (url) {
}

room.onPlayerAdminChange = function (changedPlayer, byPlayer) {
	if (getMute(changedPlayer) && changedPlayer.admin) {
	room.sendChat(changedPlayer.name + " foi desmutado.");
	setMute(changedPlayer, false);
	}
}

room.onStadiumChange = function (newStadiumName, byPlayer) {
}

room.onGameTick = function () {
	checkTime();
	getLastTouchOfTheBall();
	getStats();
	handleInactivity();
}

function Goal(time, team, striker, assist) {
	this.time = time;
	this.team = team;
	this.striker = striker;
	this.assist = assist;
}

function Game(date, scores, goals) {
	this.date = date;
	this.scores = scores;
	this.goals = goals;
}

function getRandomInt(max) { // returns a random number from 0 to max-1
	return Math.floor(Math.random() * Math.floor(max));
}

function getTime(scores) { // returns the current time of the game
	return "[" + Math.floor(Math.floor(scores.time / 60) / 10).toString() + Math.floor(Math.floor(scores.time / 60) % 10).toString() + ":" + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) / 10).toString() + Math.floor(Math.floor(scores.time - (Math.floor(scores.time / 60) * 60)) % 10).toString() + "]"
}

function pointDistance(p1, p2) {
	var d1 = p1.x - p2.x;
	var d2 = p1.y - p2.y;
	return Math.sqrt(d1 * d1 + d2 * d2);
}

	/* BUTTONS */
function topBtn() {
	if (teamS.length == 0) {
	return;
	}
	else {
	if (teamR.length == teamB.length) {
	if (teamS.length > 1) {
	room.setPlayerTeam(teamS[0].id, Team.RED);
	room.setPlayerTeam(teamS[1].id, Team.BLUE);
	}
	return;
	}
	else if (teamR.length < teamB.length) {
	room.setPlayerTeam(teamS[0].id, Team.RED);
	}
	else {
	room.setPlayerTeam(teamS[0].id, Team.BLUE);
	}
	}
}

function randomBtn() {
	if (teamS.length == 0) {
	return;
	}
	else {
	if (teamR.length == teamB.length) {
	if (teamS.length > 1) {
	var r = getRandomInt(teamS.length);
	room.setPlayerTeam(teamS[r].id, Team.RED);
	teamS = teamS.filter((spec) => spec.id != teamS[r].id);
	room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
	}
	return;
	}
	else if (teamR.length < teamB.length) {
	room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.RED);
	}
	else {
	room.setPlayerTeam(teamS[getRandomInt(teamS.length)].id, Team.BLUE);
	}
	}
}

function blueToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
	room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	}
}

function redToSpecBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamR.length; i++) {
	room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
}

function resetBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	if (teamR.length <= teamB.length) {
	for (var i = 0; i < teamR.length; i++) {
	room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
	for (var i = teamR.length; i < teamB.length; i++) {
	room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	}
	}
	else {
	for (var i = 0; i < teamB.length; i++) {
	room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
	room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
	for (var i = teamB.length; i < teamR.length; i++) {
	room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
	}
	}
}

function blueToRedBtn() {
	resettingTeams = true;
	setTimeout(() => { resettingTeams = false; }, 100);
	for (var i = 0; i < teamB.length; i++) {
	room.setPlayerTeam(teamB[i].id, Team.RED);
	}
}

	/* GAME FUNCTIONS */

function checkTime() {
	const scores = room.getScores();
	game.scores = scores;
	if (Math.abs(scores.time - scores.timeLimit) <= 0.01 && scores.timeLimit != 0) {
	if (scores.red != scores.blue) {
	if (checkTimeVariable == false) {
	checkTimeVariable = true;
	setTimeout(() => { checkTimeVariable = false; }, 3000);
	scores.red > scores.blue ? endGame(Team.RED) : endGame(Team.BLUE);
	setTimeout(() => { room.stopGame(); }, 2000);
	}
	return;
	}
	goldenGoal = true;
	room.sendChat("⚽ Gol de ouro !");
	}
	if (Math.abs(drawTimeLimit * 60 - scores.time - 60) <= 0.01 && players.length > 2) {
	if (checkTimeVariable == false) {
	checkTimeVariable = true;
	setTimeout(() => { checkTimeVariable = false; }, 10);
	room.sendChat("⌛ Só restam 60 segundos para a partida acabar !");
	}
	}
	if (Math.abs(scores.time - drawTimeLimit * 60) <= 0.01 && players.length > 2) {
	if (checkTimeVariable == false) {
	checkTimeVariable = true;
	setTimeout(() => { checkTimeVariable = false; }, 10);
	endGame(Team.SPECTATORS);
	room.stopGame();
	goldenGoal = false;
	}
	}
}

function endGame(winner) { // handles the end of a game : no stopGame function inside
	players.length >= 2 * maxTeamSize - 1 ? activateChooseMode() : null;
	const scores = room.getScores();
	game.scores = scores;
	Rposs = Rposs / (Rposs + Bposs);
	Bposs = 1 - Rposs;
	lastWinner = winner;
	endGameVariable = true;
	if (winner == Team.RED) {
	streak++;
	room.sendChat("🔴 O Time vermelho venceu " + scores.red + "-" + scores.blue + " ! Vitórias em sequencia : " + streak + " 🏆");
	}
	else if (winner == Team.BLUE) {
	streak = 1;
	room.sendChat("🔵O Time azul venceu " + scores.blue + "-" + scores.red + " ! Vitórias em sequencia : " + streak + " 🏆");
	}
	else {
	streak = 0;
	} room.sendChat("⭐ Posse de bola : 🔴 " + (Rposs * 100).toPrecision(3).toString() + "% : " + (Bposs * 100).toPrecision(3).toString() + "% 🔵");
	scores.red == 0 ? (scores.blue == 0 ? room.sendChat("🏆 " + GKList[0].name + " y " + GKList[1].name + " Não deixou passar nenhum gol ! ") : 
	room.sendChat("🏆 " + GKList[1].name + " Não deixou passar nenhum gol ! ")) : scores.blue == 0 ? 
	room.sendChat("🏆 " + GKList[0].name + " Não deixou passar nenhum gol ! ") : null;
	updateStats();
}

function quickRestart() {
	room.stopGame();
	setTimeout(() => { room.startGame(); }, 2000);
}

function resumeGame() {
	setTimeout(() => { room.startGame(); }, 2000);
	setTimeout(() => { room.pauseGame(false); }, 1000);
}

function activateChooseMode() { // Modo escolhas ativado
	inChooseMode = true;
	slowMode = 2;
	room.sendChat("Escolhas ligadas.");
}

function deactivateChooseMode() { // Modo escolhas desativado
	inChooseMode = false;
	clearTimeout(timeOutCap);
	if (slowMode != 0) {
	slowMode = 0;
	room.sendChat("Escolhas desligadas.");
	}
	redCaptainChoice = "";
	blueCaptainChoice = "";
}

function loadMap(map, scoreLim, timeLim) { // customização de mapas
	if (map != '') {
	room.setCustomStadium(map);
	} else {
	console.log("error cargando mapa")
	room.setDefaultStadium("Classic");
	}
	room.setScoreLimit(scoreLim);
	room.setTimeLimit(timeLim);
}

	/* PLAYER FUNCTIONS */

function updateTeams() { // update the players' list and all the teams' list
	players = room.getPlayerList().filter((player) => player.id != 0 && !getAFK(player));
	teamR = players.filter(p => p.team === Team.RED);
	teamB = players.filter(p => p.team === Team.BLUE);
	teamS = players.filter(p => p.team === Team.SPECTATORS);
}

function handleInactivity() { // handles inactivity : players will be kicked after afkLimit
	if (countAFK && (teamR.length + teamB.length) > 1) {
	for (var i = 0; i < teamR.length; i++) {
	setActivity(teamR[i], getActivity(teamR[i]) + 1);
	}
	for (var i = 0; i < teamB.length; i++) {
	setActivity(teamB[i], getActivity(teamB[i]) + 1);
	}
	}
	for (var i = 0; i < extendedP.length; i++) {
	if (extendedP[i][eP.ACT] == 60 * (2 / 3 * afkLimit)) {
	room.sendChat("[PV] ⛔ @" + room.getPlayer(extendedP[i][eP.ID]).name + ", mova-se em " + Math.floor(afkLimit / 3) + " segundos, para não ser kickado pela verificação de 'AFKS'!", extendedP[i][eP.ID]);
	}
	if (extendedP[i][eP.ACT] >= 60 * afkLimit) {
	extendedP[i][eP.ACT] = 0;
	if (room.getScores().time <= afkLimit - 0.5) {
	setTimeout(() => { !inChooseMode ? quickRestart() : room.stopGame(); }, 10);
	}
	room.kickPlayer(extendedP[i][eP.ID], "AFK", false);
	}
	}
}

function getAuth(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AUTH] : null;
}

function getAFK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.AFK] : null;
}

function setAFK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.AFK] = value);
}

function getActivity(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.ACT] : null;
}

function setActivity(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.ACT] = value);
}

function getGK(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.GK] : null;
}

function setGK(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.GK] = value);
}

function getMute(player) {
	return extendedP.filter((a) => a[0] == player.id) != null ? extendedP.filter((a) => a[0] == player.id)[0][eP.MUTE] : null;
}

function setMute(player, value) {
	extendedP.filter((a) => a[0] == player.id).forEach((player) => player[eP.MUTE] = value);
}

function updateRoleOnPlayerIn() { // Se a lista de specs for = 0, inicia o jogo.
	updateTeams()
	if (inChooseMode) {
	if (players.length == 6) {
	loadMap(x3Map, scoreLimitx3, timeLimitx3);
	}
	getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();	
}

function updateRoleOnPlayerOut() { // Detectar ragequit e atualizar times.
	updateTeams();
	if (room.getScores() != null) {
	var scores = room.getScores();
	if (players.length >= 2 * maxTeamSize && scores.time >= (5 / 6) * game.scores.timeLimit && teamR.length != teamB.length) {
	if (teamR.length < teamB.length) {
	if (scores.blue - scores.red == 2) {
	endGame(Team.BLUE);
	room.sendChat("🤖 Ragequit, jogo finalizado 🤖");
	setTimeout(() => { room.stopGame(); }, 100);
	return;
	}
	}
	else {
	if (scores.red - scores.blue == 2) {
	endGame(Team.RED);
	room.sendChat("🤖 Ragequit, jogo finalizado 🤖");
	setTimeout(() => { room.stopGame(); }, 100);
	return;
	}
	}
	}
	}
	if (inChooseMode) {
	if (players.length < 6) {
	loadMap(Mapa, scoreMapa, tempoMapa);
	}
	if (teamR.length == 0 || teamB.length == 0) {
	teamR.length == 0 ? room.setPlayerTeam(teamS[0].id, Team.RED) : room.setPlayerTeam(teamS[0].id, Team.BLUE);
	return;
	}
	if (Math.abs(teamR.length - teamB.length) == teamS.length) {
	room.sendChat("Nenhum player restou, completando equipes e iniciando ...");
	deactivateChooseMode();
	resumeGame();
	var b = teamS.length;
	if (teamR.length > teamB.length) {
	for (var i = 0; i < b; i++) {
	setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.BLUE); }, 5 * i);
	}
	}
	else {
	for (var i = 0; i < b; i++) {
	setTimeout(() => { room.setPlayerTeam(teamS[0].id, Team.RED); }, 5 * i);
	}
	}
	return;
	}
	if (streak == 0 && room.getScores() == null) {
	if (Math.abs(teamR.length - teamB.length) == 2) { // se alguém saiu de um time tem 2 jogadores a mais que o outro.
	room.sendChat("🤖 Equilibrando equipes... 🤖");
	teamR.length > teamB.length ? room.setPlayerTeam(teamR[teamR.length - 1].id, Team.SPECTATORS) : room.setPlayerTeam(teamB[teamB.length - 1].id, Team.SPECTATORS); }
	}
	if (teamR.length == teamB.length && teamS.length < 2) {
	deactivateChooseMode();
	resumeGame();
	return;
	}
	capLeft ? choosePlayer() : getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
	}
	balanceTeams();
}

function balanceTeams() { // Função que balançea os times, corrigi times que estão com player a menos.
    if (!inChooseMode) {
        if (players.length == 1 && teamR.length == 0) { // 1 player
            quickRestart();
            loadMap(Mapa, scoreMapa, tempoMapa);
            room.setPlayerTeam(players[0].id, Team.RED);
        }
        else if (Math.abs(teamR.length - teamB.length) == teamS.length && teamS.length > 0) { // spec players supply required players
            const n = Math.abs(teamR.length - teamB.length);
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.BLUE);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamS[i].id, Team.RED);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) > teamS.length) { //no sufficient players
            const n = Math.abs(teamR.length - teamB.length);
            if (players.length == 1) {
                quickRestart();
                loadMap(Mapa, scoreMapa, tempoMapa);
                room.setPlayerTeam(players[0].id, Team.RED);
                return;
            }
            else if (players.length == 6) {
                quickRestart();
                
            }
            if (players.length == maxTeamSize * 2 - 1) {
                allReds = [];
                allBlues = [];
            }
            if (teamR.length > teamB.length) {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamR[teamR.length - 1 - i].id, Team.SPECTATORS);
                }
            }
            else {
                for (var i = 0; i < n; i++) {
                    room.setPlayerTeam(teamB[teamB.length - 1 - i].id, Team.SPECTATORS);
                }
            }
        }
        else if (Math.abs(teamR.length - teamB.length) < teamS.length && teamR.length != teamB.length) { //choose mode
            room.pauseGame(true)
            activateChooseMode();
            choosePlayer();
        }
        else if (teamS.length >= 2 && teamR.length == teamB.length && teamR.length < maxTeamSize) { //2 in red 2 in blue and 2 or more spec
            if (teamR.length == 2) {
                quickRestart();
                if (!teamS.length == 2){
                    
                }
            }
            topBtn();
        }
    }
}

function choosePlayer() { // Função para que os capitães possam escolher.
	clearTimeout(timeOutCap);
	if (teamR.length <= teamB.length && teamR.length != 0) {
	room.sendChat("[PV] Para escolher um jogador, escreva um número ou escreva 'top' para escolher os primeiros, 'random' para aleatorio oou 'bottom' para os ultimos.", teamR[0].id);
	timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Seja rápido @" + player.name + ", restam " + Number.
	parseInt(chooseTime / 2) + " segundos para escolher !", player.id); timeOutCap = setTimeout(function (player) { room.
	kickPlayer(player.id, "Não escolheu a tempo, ou esteve AFK!", false); }, chooseTime * 500, teamR[0]); }, chooseTime * 1000, teamR[0]);
	}
	else if (teamB.length < teamR.length && teamB.length != 0) {
	room.sendChat("[PV] Para escolher um jogador, escreva um número ou escreva 'top' para escolher os primeiros, 'random' para aleatorio oou 'bottom' para os ultimos.", teamB[0].
	id); timeOutCap = setTimeout(function (player) { room.sendChat("[PV] Seja rápido @" + player.name + ", restam " + Number.
	parseInt(chooseTime / 2) + " segundos para escolher !", player.id); timeOutCap = setTimeout(function (player) { room.
	kickPlayer(player.id, "Não escolheu a tempo, ou esteve AFK!", false); }, chooseTime * 500, teamB[0]); }, chooseTime * 1000, teamB[0]);
	}
	if (teamR.length != 0 && teamB.length != 0) getSpecList(teamR.length <= teamB.length ? teamR[0] : teamB[0]);
}

function getSpecList(player) { // Mostra a lista de jogadores para escolhas.
	var cstm = "[PV] Lista de Players : ";
	for (var i = 0; i < teamS.length; i++) {
	if (140 - cstm.length < (teamS[i].name + "[" + (i + 1) + "], ").length) {
	room.sendChat(cstm, player.id);
	cstm = "... ";
	}
	cstm += teamS[i].name + "[" + (i + 1) + "], ";
	}
	cstm = cstm.substring(0, cstm.length - 2);
	cstm += ".";
	room.sendChat(cstm, player.id);
}

	/* STATS FUNCTIONS */

function getLastTouchOfTheBall() { // Função de ultimo toque do jogador
	const ballPosition = room.getBallPosition();
	updateTeams();
	for (var i = 0; i < players.length; i++) {
	if (players[i].position != null) {
	var distanceToBall = pointDistance(players[i].position, ballPosition);
	if (distanceToBall < triggerDistance) {
	!activePlay ? activePlay = true : null;
	if (lastTeamTouched == players[i].team && lastPlayersTouched[0] != null && lastPlayersTouched[0].id != players[i].
	id) { lastPlayersTouched[1] = lastPlayersTouched[0];
	lastPlayersTouched[0] = players[i];
	}
	lastTeamTouched = players[i].team;
	}
	}
	}
}

function getStats() { // Função que busca a posse de bola, velocidade da bola e o player que é GK
	if (activePlay) {
	updateTeams();
	lastTeamTouched == Team.RED ? Rposs++ : Bposs++;
	var ballPosition = room.getBallPosition();
	point[1] = point[0];
	point[0] = ballPosition;
	ballSpeed = (pointDistance(point[0], point[1]) * 60 * 60 * 60) / 15000;
	var k = [-1, Infinity];
	for (var i = 0; i < teamR.length; i++) {
	if (teamR[i].position.x < k[1]) {
	k[0] = teamR[i];
	k[1] = teamR[i].position.x;
	}
	}
	k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
	k = [-1, -Infinity];
	for (var i = 0; i < teamB.length; i++) {
	if (teamB[i].position.x > k[1]) {
	k[0] = teamB[i];
	k[1] = teamB[i].position.x;
	}
	}
	k[0] != -1 ? setGK(k[0], getGK(k[0]) + 1) : null;
	findGK();
	}
}

function updateStats() { // Função atualizar STATUS a cada fim de jogo.
	if (players.length >= 2 * maxTeamSize && (game.scores.time >= (5 / 6) * game.scores.timeLimit || game.scores.red == game.scores.
	scoreLimit || game.scores.blue == game.scores.scoreLimit) && allReds.length >= maxTeamSize && allBlues.length >= maxTeamSize) {
	var stats;
	for (var i = 0; i < allReds.length; i++) {
	localStorage.getItem(getAuth(allReds[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allReds[i]))) : stats = [0,
	0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allReds[i].name]; stats[Ss.GA]++;
	lastWinner == Team.RED ? stats[Ss.WI]++ : lastWinner == Team.BLUE ? stats[Ss.LS]++ : stats[Ss.DR]++;
	stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
	localStorage.setItem(getAuth(allReds[i]), JSON.stringify(stats));
	}
	for (var i = 0; i < allBlues.length; i++) {
	localStorage.getItem(getAuth(allBlues[i])) ? stats = JSON.parse(localStorage.getItem(getAuth(allBlues[i]))) : stats =
	[0, 0, 0, 0, "0.00", 0, 0, 0, 0, "0.00", "player", allBlues[i].name]; stats[Ss.GA]++;
	lastWinner == Team.BLUE ? stats[Ss.WI]++ : lastWinner == Team.RED ? stats[Ss.LS]++ : stats[Ss.DR]++;
	stats[Ss.WR] = (100 * stats[Ss.WI] / stats[Ss.GA]).toPrecision(3);
	localStorage.setItem(getAuth(allBlues[i]), JSON.stringify(stats));
	}
	for (var i = 0; i < game.goals.length; i++) {
	if (game.goals[i].striker != null) {
	if ((allBlues.concat(allReds)).findIndex((player) => player.id == game.goals[i].striker.id) != -1) {
	stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].striker)));
	stats[Ss.GL]++;
	localStorage.setItem(getAuth(game.goals[i].striker), JSON.stringify(stats));
	}
	}
	if (game.goals[i].assist != null) {
	if ((allBlues.concat(allReds)).findIndex((player) => player.name == game.goals[i].assist.name) != -1) {
	stats = JSON.parse(localStorage.getItem(getAuth(game.goals[i].assist)));
	stats[Ss.AS]++;
	localStorage.setItem(getAuth(game.goals[i].assist), JSON.stringify(stats));
	}
	}
	}
	if (allReds.findIndex((player) => player.id == GKList[0].id) != -1) {
	stats = JSON.parse(localStorage.getItem(getAuth(GKList[0])));
	stats[Ss.GK]++;
	game.scores.blue == 0 ? stats[Ss.CS]++ : null;
	stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
	localStorage.setItem(getAuth(GKList[0]), JSON.stringify(stats));
	}
	if (allBlues.findIndex((player) => player.id == GKList[1].id) != -1) {
	stats = JSON.parse(localStorage.getItem(getAuth(GKList[1])));
	stats[Ss.GK]++;
	game.scores.red == 0 ? stats[Ss.CS]++ : null;
	stats[Ss.CP] = (100 * stats[Ss.CS] / stats[Ss.GK]).toPrecision(3);
	localStorage.setItem(getAuth(GKList[1]), JSON.stringify(stats));
	}
	}
}

function findGK() { // Função que procura o GK da partida.
	var tab = [[-1, ""], [-1, ""]];
	for (var i = 0; i < extendedP.length; i++) { if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.RED) {
	if (tab[0][0] < extendedP[i][eP.GK]) {
	tab[0][0] = extendedP[i][eP.GK];
	tab[0][1] = room.getPlayer(extendedP[i][eP.ID]);
	}
	}
	else if (room.getPlayer(extendedP[i][eP.ID]) != null && room.getPlayer(extendedP[i][eP.ID]).team == Team.BLUE) {
	if (tab[1][0] < extendedP[i][eP.GK]) {
	tab[1][0] = extendedP[i][eP.GK];
	tab[1][1] = room.getPlayer(extendedP[i][eP.ID]);
	}
	}
	}
	GKList = [tab[0][1], tab[1][1]];
}
