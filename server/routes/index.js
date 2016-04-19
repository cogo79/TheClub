"use strict";
module.exports = function(app) {
	require('./frontend')(app);
	require('./user')(app);
};
