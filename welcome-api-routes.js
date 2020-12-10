var express = require('express');
const apiRouter = express.Router();

//exemple URL: http://localhost:8282/welcome-api/public/fred
apiRouter.route('/welcome-api/public/:name')
.get( function(req , res , next ) {
    var name = req.params.name;
    res.send('bonjour '+name);
});

module.exports.apiRouter = apiRouter;