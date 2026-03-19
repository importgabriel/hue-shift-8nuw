
var R = typeof React !== "undefined" ? React : { createElement: function(){return null}, Fragment: "div" };
module.exports.jsx = R.createElement;
module.exports.jsxs = R.createElement;
module.exports.Fragment = R.Fragment;
