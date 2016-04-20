"use strict";
var User = require('../../models/index').User;
var passport = require('passport');
var usersStr = '/users';

module.exports = function(app) {
	app.get(usersStr+'/testwithnoauthentication', function(req, res) {
	  	res.status(200).json('You did it! Nice job ;D (get testWithNoAuthentication)');
	});

	app.get(usersStr+'/sayhellototheclub', function(req, res) {
		if (req.isAuthenticated()) {
			res.status(200).json({
				message:'You have said hello to The Club!',
				status:200
			});
		} else {
			res.status(401).json({
				message:'You must be logged in to say hello to The Club!',
				status:401
			});
		}
	});

	app.post(usersStr+'/signin', passport.authenticate('local', {}), function(req, res, next) {
		console.log("19 signin req.user.dataValues: ", req.user.dataValues);
		console.log("20 signin req.login: ", req.login);
		req.login(req.user, function(err) {
			if (err) { return next(err); }
			return res.status(200).json({
				message:'You have successfully signed in! Nice job ;D',
				status:200
			});
		});
	});

	app.post(usersStr+'/user', function(req, res) {
		console.log("postUser");
		if (req.body == null || req.body.email == null || req.body.username == null || req.body.password == null) {
			var message = "Felaktig query";
			return res.status(400).json(message);
		}

		var user = User.build();

		for (var prop in req.body) {
			console.log(prop + ": " + req.body[prop]);
			user[prop] = req.body[prop];
		}

		user.save().then(function (result) {
			console.log("23 /timetrackV2/routes/users.js", result);
			if (result) {
				return res.status(201).json(result);
			} else {
				return res.status(500).json("Could not save user.");
			}
		});
	});

	app.put(usersStr+'/user/signout', function(req, res) {
		if (req.isAuthenticated()) {
			req.logout();
			res.status(200).json({
				message:'You have signed out. See you later!',
				status:200
			});
		} else {
			res.status(401).json({
				message:'Hey amigo! You can´t logg out if you havent logged in dude!! hahahaha',
				status:401
			});
		}
	});

	app.put(usersStr+'/user/:userid', function(req, res) {
		var userid = req.params.userid;
		User.findOne({
			where: {
				id: userid
			}
		}).then(function (user) {
			if (user) {
				for (var prop in req.body) {
					console.log(prop + ": " + req.body[prop]);
					user[prop] = req.body[prop];
				}
				user.save().then(function (result) {
					console.log("User updated: \n", result);
					return res.status(200).json(result);
				});
			} else {
				return res.status(404).json();
			}
		});
	});
};
