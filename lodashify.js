(function () {
  if ( !window.lodash ) {
    var inUse = !!window._;
    var s = document.createElement('script');
    s.setAttribute('src', '//cdn.jsdelivr.net/npm/lodash/lodash.min.js');
    s.addEventListener('load', function(){
      console.log('Lodash loaded!');

      if(inUse) {
        window.lodash = _.noConflict();
        console.log('`_` already in use; use `lodash`');
      }
    });

    document.body.appendChild(s);
  }

})();