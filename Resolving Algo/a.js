const b = require('./b');

//
// console.log(b);
// { a: {}, userState: 'User deleted' }

exports.userState = 'Signed In';
module.exports = {
	userState: 'Logged Out',
	b,
};

// console.log(b);
// { a: { userState: 'Signed In' }, userState: 'User deleted' }
