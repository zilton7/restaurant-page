const home = () => {
  let homeSection = document.createElement("div");
  homeSection.className = "section";
  homeSection.classList = "mx-4 mb-5";
  homeSection.id = "Home";

  let sectionTitle = document.createElement("h3");
  sectionTitle.className = "px-5";
  sectionTitle.innerHTML = "Home";

  homeSection.appendChild(sectionTitle);

  let new_div = document.createElement("div");
  let title = document.createElement("h4");
  title.innerHTML = "'Il Ristorante del Vegetaro'";
  new_div.appendChild(title);
  let paragraph = document.createElement("p");
  paragraph.innerHTML =
    "A restaurant, or an eatery, is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments. In Western countries, most mid-to high-range restaurants serve alcoholic beverages such as beer and wine. Some restaurants serve all the major meals, such as breakfast, lunch, and dinner. Other restaurants may serve only a single meal or they may server.";
  new_div.appendChild(paragraph);
  homeSection.appendChild(new_div);

  return homeSection;
};

export { home };
