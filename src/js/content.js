const style = document.createElement("style");
style.innerHTML = `@import url(${chrome.runtime.getURL(
  "css/" + randomFile()
)});`;
document.body.appendChild(style);

function randomFile() {
  const randMargin = hasLogo() ? 7 : 6;
  const rand = Math.floor(Math.random() * randMargin);
  switch (rand) {
    case 0:
      return "adjust-hue.css";
    case 1:
      return "font-change.css";
    case 2:
      return "greyscale.css";
    case 3:
      return "hotpinklinks.css";
    case 4:
      return "rotate.css";
    case 5:
      return "transition-all.css";
    case 6:
      return "logo-spin.css";
  }
}

function hasLogo() {
  return (
    document.body.querySelectorAll(".logo, #logo, .logo img, #logo-image")
      .length > 0
  );
}
