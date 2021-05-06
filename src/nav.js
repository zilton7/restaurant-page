const nav = () => {
  const nav_links = ["Home", "Menu", "Contact"];

  let nav = document.createElement("ul");
  nav.className = "nav";

  nav_links.forEach((link) => {
    let li = document.createElement("li");
    li.className = "nav-item";
    let a = document.createElement("a");
    a.href = "#";
    a.innerHTML = link;
    a.className = "nav-link";
    li.append(a);
    nav.append(li);
  });

  return nav;
};
export { nav };
