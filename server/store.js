var Store = function(db) {

	this.db = db;
	this.userCollection = db.collection("users");
	this.gameCollection = db.collection("games");
};

Store.prototype.setUser = function(userId, name, callback) {
	var user = {
		userId: userId,
		name: name
	};
	this.userCollection.insert(user, function (err, inserted) {
		if(err) throw err;
		callback();
	});
};

Store.prototype.getUser = function(userId, callback) {
	this.userCollection.find({userId: userId}).toArray(function(err, results) {
		if(err) throw err;
		callback(results.length ? results[0] : undefined);
	});
};

Store.prototype.deleteUser = function(userId, callback) {
	this.userCollection.remove({userId: userId}, function(err, results) {
		if(err) throw err;
		callback(results);
	});
};

Store.prototype.getGamesReadyToPlay = function(callback) {
    this.gameCollection.find({joinedBy: {$exists: false}}).toArray(function(err, results) {
		if(err) throw err;
		callback(results);
	});
};

Store.prototype.getGamesBeingPlayed = function(callback) {
    this.gameCollection.find({joinedBy: {$exists: true}}).toArray(function(err, results) {
		if(err) throw err;
		callback(results);
	});
};

Store.prototype.createGame = function(gameId, userId, callback) {
	var game = {
		gameId: gameId,
		createdBy: userId
	};
	this.gameCollection.insert(game, function(err, game) {
		if(err) {
			throw err;
		}
		callback(game);
	});
};

Store.prototype.joinGame = function(gameId, userId, callback) {
	this.gameCollection.update({gameId: gameId}, {$set: {joinedBy: userId }}, function(err, game) {
		if(err) {
			throw err;
		}
		callback(game);
	});
};


Store.prototype.info = function() {
	return this.redis.server_info;
};

module.exports = Store;