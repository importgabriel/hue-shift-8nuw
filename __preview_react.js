
var R = typeof React !== "undefined" ? React : { createElement: function(){return null}, Fragment: "div", useState: function(v){return [v,function(){}]}, useEffect: function(){}, useCallback: function(f){return f}, useMemo: function(f){return f()}, useRef: function(v){return {current:v}}, useContext: function(){return {}}, createContext: function(){return {Provider:function(p){return p.children}}} };
module.exports = R;
module.exports.default = R;
