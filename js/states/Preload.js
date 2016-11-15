var MrHop = MrHop || {};

//loading the game assets
MrHop.PreloadState = {
  preload: function() {
    //show loading screen
    
	
	this.logo = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
	this.logo.anchor.setTo(0.5);
	
	this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 150, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
	
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets    
    this.load.image('playerDead', 'assets/images/player_dead.png');
    this.load.image('floor', 'assets/images/floor.png');
    this.load.image('water', 'assets/images/water.png');
    //this.load.image('coiner', ['assets/images/coin.png', 'assets/images/coin2.png', 'assets/images/coin3.png']);

	this.load.image('coin1', 'assets/images/coin.png');
	this.load.image('coin2', 'assets/images/coin2.png');
	this.load.image('coin3', 'assets/images/coin3.png');
	this.load.image('coin4', 'assets/images/coin4.png');
	this.load.image('coin5', 'assets/images/coin5.png');
	this.load.image('coin6', 'assets/images/coin6.png');
	this.load.image('coin7', 'assets/images/coin7.png');
	this.load.image('coin8', 'assets/images/coin8.png');
	this.load.image('coin9', 'assets/images/coin9.png');
	this.load.image('coin10', 'assets/images/coin10.png');


    this.load.image('background', 'assets/images/background.png');
    this.load.spritesheet('player', 'assets/images/player_spritesheet.png', 102, 134, 5, 2, 3);
    this.load.audio('coin', ['assets/audio/coin.mp3', 'assets/audio/coin.ogg']);
  },
  create: function() {
    this.state.start('Game');
  }
};










//var coiner = ['coin1', 'coin2', 'coin3'];

//var coiner = coiner;

//console.log(coins);

//var coins = coins;

//var coins = coin[Math.floor(Math.random()*coin.length)];


//var coin = coiner[Math.floor(Math.random() * coiner.length)];