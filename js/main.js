var MrHop = MrHop || {};

MrHop.game = new Phaser.Game(800, 533, Phaser.CANVAS, 'phaser-example');

//MrHop.game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'phaser-example');

MrHop.game.state.add('Boot', MrHop.BootState);
MrHop.game.state.add('Preload', MrHop.PreloadState);
MrHop.game.state.add('Game', MrHop.GameState);

MrHop.game.state.start('Boot');


