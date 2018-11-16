(function () {
var func = new Function();

func.decodeHtmlEntity = function(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};

func.encodeHtmlEntity = function(str) {
  var buf = [];
  for (var i=str.length-1;i>=0;i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};
 
if(!!window.k) {
  window.$kyo = func;
  console.log('`k` already in use; use `$kyo`');
} else {
  window.k = func
}
})();
