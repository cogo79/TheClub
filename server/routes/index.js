"use strict";
module.exports = function(app) {
	require('./user')(app);
	require('./frontend')(app);
};
