import { home } from "./home";
import { menu } from "./menu";
import { nav } from "./nav";

let body = document.getElementsByTagName("body")[0];
body.prepend(nav());

let content_div = document.getElementById("content");
content_div.append(home());
content_div.append(menu());
