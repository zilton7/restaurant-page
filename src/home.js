const home = () => {
  let content_div = document.getElementById("content");
  let new_div = document.createElement("div");
  new_div.className = "tabcontent";
  new_div.id = "Home";
  new_div.innerHTML += "<h3>Home</h3>";
  new_div.innerHTML += "<p>This is restaurant's home page.</p>";
  content_div.innerHTML += new_div.innerHTML;
};

export { home };
