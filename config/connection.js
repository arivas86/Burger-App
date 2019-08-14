var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'r4919aobtbi97j46.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
    port: 3306,
    user:'io6i9p2rctkvdan0',
    password:'nnisbo7angr8lvhr',
    database:'hsfn2o3dq3jmtmcm'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('connected as id:'+ connection.threadId);

});

module.exports = connection;