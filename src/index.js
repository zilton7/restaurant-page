import { home } from "./home";
import { menu } from "./menu";

// let home_div = document.createElement("div");
// home_div.className = "tab";
// home_div.innerHTML += '<button class="tablinks">Home</button>';
// content_div.innerHTML += home_div.innerHTML;

// let contact_div = document.createElement("div");
// contact_div.className = "tab";
// contact_div.innerHTML += '<button class="tablinks">Contact</button>';
// content_div.innerHTML += contact_div.innerHTML;

// home();

let content_div = document.getElementById("content");
console.log(content_div);
content_div.innerHTML += menu();
