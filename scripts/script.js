let changemodel = document.getElementById("change-mod-l");
let changemoded = document.getElementById("change-mod-d");

changemodel.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "styles-d.css") {
    theme.href = "styles-l.css";
  } else {
    theme.href = "styles-l.css";
  }
};

changemoded.onclick = function () {
  let theme = document.getElementById("theme");

  if (theme.getAttribute("href") == "styles-l.css") {
    theme.href = "styles-d.css";
  } else {
    theme.href = "styles-d.css";
  }
};
