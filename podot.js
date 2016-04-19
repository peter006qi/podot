(function() {
  var script = document.querySelector('script[podot-config]');
  var config;
  try {
    config = JSON.parse(script.getAttribute('podot-config'));
  } catch (ex) {
    config = {};
  }
  config.lifetime = config.lifetime || 1000;
  config.color = config.color || 1000;
  document.addEventListener('touchstart', function(e) {
    var dot = document.createElement('div');
    dot.className = 'podot';
    dot.style.left = e.touches[0].pageX + 'px';
    dot.style.top = e.touches[0].pageY + 'px';
    document.body.appendChild(dot);
    setTimeout(function () {
      dot.parentNode.removeChild(dot);
    }, config.lifetime || 1000);
  });
  var css = ".podot{height:2px;width:2px;border-radius:100%;position:absolute;z-index:10;-webkit-animation:podot-tapeffect 1s ease-out;animation:podot-tapeffect 1s ease-out;background:#93def7;pointer-events:none}@-webkit-keyframes podot-tapeffect{0%{box-shadow:0 0 0 0 #93def7}100%{box-shadow:0 0 0 50px #93def7;opacity:0}}@keyframes podot-tapeffect{0%{box-shadow:0 0 0 0 #93def7}100%{box-shadow:0 0 0 50px #93def7;opacity:0}}"
    .replace(/50px/, config.size).replace(/#93def7/g, config.color);
  var head = document.querySelector('head') || document.body;
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
  // $('body').on('touchstart', function(e) {
  //   var left = e.touches[0].pageX;
  //   var top = e.touches[0].pageY;
  //   $(this).append('<div class="dot" style="top:' + top + 'px;left:' + left + 'px;"></div>')
  //   setTimeout(function() {
  //     $('#container').find(".dot").eq(0).remove();
  //   }, 1100);
  // });
})();