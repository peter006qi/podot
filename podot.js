(function() {
  var script = document.querySelector('script[podot-config]');
  var config;
  var head = document.querySelector('head') || document.body;
  var style = document.createElement('style');
  try {
    config = JSON.parse(script.getAttribute('podot-config'));
  } catch (ex) {
    config = {};
  }
  config.lifetime = config.lifetime || 1000;
  config.color = config.color || "#93def7";
  config.size = config.size || "30px";
  config.event = config.event || "mousedown";
  document.addEventListener(config.event, function(e) {
    var dot = document.createElement('div');
    dot.className = 'podot';
    var podot_left;
    var podot_top;
    if (config.event.indexOf("mouse")==-1) {
      podot_left = e.touches[0].pageX;
      podot_top = e.touches[0].pageY;
    }else{
      podot_left = e.clientX;
      podot_top = e.clientY;
    }
    dot.style.left = podot_left + 'px';
    dot.style.top = podot_top + 'px';
    document.body.appendChild(dot);
    setTimeout(function () {
      dot.parentNode.removeChild(dot);
    }, config.lifetime);
  });
  var anim_time = config.lifetime/1000+"s";
  var css = ".podot{height:2px;width:2px;border-radius:100%;position:absolute;z-index:10;-webkit-animation:podot-tapeffect 1s ease-out;animation:podot-tapeffect 1s ease-out;background:#93def7;opacity:.6;pointer-events:none}@-webkit-keyframes podot-tapeffect{0%{box-shadow:0 0 0 0 #93def7}100%{box-shadow:0 0 0 50px #93def7;opacity:0}}@keyframes podot-tapeffect{0%{box-shadow:0 0 0 0 #93def7}100%{box-shadow:0 0 0 50px #93def7;opacity:0}}"
    .replace(/50px/g, config.size).replace(/#93def7/g, config.color).replace(/1s/g,anim_time);
  style.appendChild(document.createTextNode(css));
  head.appendChild(style);
})();