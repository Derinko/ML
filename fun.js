function disable() {
  var el = document.getElementById("nav");
  el.className = el.className.replace(/\bmid\b/g, " ");
}
disable();
