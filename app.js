const preEl = document.getElementById("par");

let font = 16;

// Font Size

function fontSize(num) {
  font += num;

  if (font < 10) {
    font = 10;
  }

  if (font > 50) {
    font = 50;
  }

  preEl.style.fontSize = font + "px";
}

// Bold

function fontWeight() {
  preEl.classList.toggle("bold");
}

// Italic

function fontItalic() {
  preEl.classList.toggle("italic");
}

// Underline

function fontUnderline() {
  preEl.classList.toggle("underline");
}

// Text Color

function changeColor(col) {
  preEl.style.color = col;
}

// Background Color

function changeBackground(col) {
  preEl.style.backgroundColor = col;
}

// Text Align

function changeAlign(direction) {
  preEl.style.textAlign = direction;
}

// Hide / Show

function hideText() {
  if (preEl.style.display === "none") {
    preEl.style.display = "block";
  } else {
    preEl.style.display = "none";
  }
}

// Reset

function resetText() {
  font = 16;

  preEl.style.fontSize = "16px";
  preEl.classList.remove("bold", "italic", "underline");

  preEl.style.color = "black";
  preEl.style.backgroundColor = "seashell";
  preEl.style.textAlign = "left";
  preEl.style.display = "block";
}
