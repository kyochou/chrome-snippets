(function () {
    const css = `
*:not(path):not(g) {
  outline: solid 1px #10aeff !important;
}
    `
  const head = document.head || document.getElementsByTagName('head')[0]
  const style = document.createElement('style')
  style.type = 'text/css'
  if (style.styleSheet){
    // This is required for IE8 and below.
    style.styleSheet.cssText = css
  } else {
    style.appendChild(document.createTextNode(css))
  }
  head.appendChild(style)

})()
