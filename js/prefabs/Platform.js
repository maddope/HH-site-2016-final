var MrHop = MrHop || {};

MrHop.Platform = function(game, floorPool, numTiles, x, y, speed, coinsPool) {
  Phaser.Group.call(this, game);
  
  this.tileSize = 80;
  this.game = game;
  this.enableBody = true;
  this.floorPool = floorPool;
  this.coinsPool = coinsPool;
  

  
  this.prepare(numTiles, x, y, speed);  
};



MrHop.Platform.prototype = Object.create(Phaser.Group.prototype);
MrHop.Platform.prototype.constructor = MrHop.Platform;

MrHop.Platform.prototype.prepare = function(numTiles, x, y, speed) {
  
  //make alive
  this.alive = true;  
  
  var i = 0;
  while(i < numTiles){
    
    var floorTile = this.floorPool.getFirstExists(false);
    
    if(!floorTile) {
      floorTile = new Phaser.Sprite(this.game, x + i * this.tileSize, y, 'floor');
    }
    else {
      floorTile.reset(x + i * this.tileSize, y);
    }
      
    this.add(floorTile);    
    i++;
  }
  
  //set physics properties
  this.setAll('body.immovable', true);
  this.setAll('body.allowGravity', false);
  this.setAll('body.velocity.x', speed);
  
  this.addCoins(speed);
  
};

MrHop.Platform.prototype.kill = function(){
  this.alive = false;  
  this.callAll('kill');
  
  var sprites = [];
  this.forEach(function(tile){
    sprites.push(tile);
  }, this);
  
  sprites.forEach(function(tile){
    this.floorPool.add(tile);
  }, this);
};

MrHop.Platform.prototype.addCoins = function(speed){
  var coinsY = 190 + Math.random() * 110;
  
  var hasCoin;
  
  
  this.coinsPool.createMultiple(1, 'coin1');
  this.coinsPool.createMultiple(1, 'coin2');
  this.coinsPool.createMultiple(1, 'coin3');
  this.coinsPool.createMultiple(1, 'coin4');
  this.coinsPool.createMultiple(1, 'coin5');
  this.coinsPool.createMultiple(1, 'coin6');
  this.coinsPool.createMultiple(1, 'coin7');
  this.coinsPool.createMultiple(1, 'coin8');
  this.coinsPool.createMultiple(1, 'coin9');
  this.coinsPool.createMultiple(1, 'coin10');
  
  
  this.forEach(function(tile){
    //40% chance
    hasCoin = Math.random() <= 0.5;
    
    if(hasCoin) {
      var coin = this.coinsPool.getFirstExists(false);
      
      if(!coin) {
        coin = new Phaser.Sprite(this.game, tile.x, tile.y - coinsY, 'coin');
        this.coinsPool.add(coin);
      }
      else {
        coin.reset(tile.x, tile.y - coinsY);
      }
      
      coin.body.velocity.x = speed;
      coin.body.allowGravity = false;
    }
  }, this);
};
