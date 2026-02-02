"use strict";

const el = document.getElementById("dateTime");
if (el) {
  const date = new Date();
  el.textContent = date.toLocaleString("sv-SE");
  console.log("Dagens datum:", date);
}
