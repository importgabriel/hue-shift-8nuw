
var RD = typeof ReactDOM !== "undefined" ? ReactDOM : { createRoot: function(){return {render:function(){}}}, render: function(){} };
module.exports = RD;
module.exports.default = RD;
