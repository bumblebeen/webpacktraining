var _ = require("lodash");
var $ = require("jquery");

var randomNo = _.sample([1,2,3,4,5,6,7,8,9]);
$("h3").html("Lodash Random Number: " + randomNo);
