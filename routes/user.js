const express = require('express');
const router = express.Router();

//GET route to implement user logout
router.get('/logout', function(req, res, next) {
	//check for a session
	if(req.session) {
		//if found, destroy it
		req.session.destroy(function(err) {
			if(err) {
				return next(err);
			} 
			else {
				//return to index
				return res.redirect('/');
			}
		});
	}
});

module.exports = router;

