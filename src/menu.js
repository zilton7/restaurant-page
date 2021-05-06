const menu = () => {
  const menu_items = [
    {
      dish: " Vegetarian Spaghetti",
      price: "$7.99",
      ingredients:
        "Salty and savory, the roasting method kills the natural bitterness of asparagus. ",
      image: "https://i.ibb.co/Zzmc6F3/image.png",
    },
    {
      dish: " Veggie Cola",
      price: "$1.99",
      ingredients:
        "Depending on how spicy you and your family like your dishes, use as little or ",
      image: "https://i.ibb.co/8zYL4Vt/image.png",
    },
    {
      dish: " Veggie Cola",
      price: "$1.99",
      ingredients:
        "Depending on how spicy you and your family like your dishes, use as little or ",
      image: "https://i.ibb.co/9ytT8RV/image.png",
    },
    {
      dish: " Veggie Cola",
      price: "$1.99",
      ingredients:
        "Depending on how spicy you and your family like your dishes, use as little or ",
      image: "https://i.ibb.co/t3b0XHK/image.png",
    },
    {
      dish: " Veggie Cola",
      price: "$1.99",
      ingredients:
        "Depending on how spicy you and your family like your dishes, use as little or ",
      image: "https://i.ibb.co/t3b0XHK/image.png",
    },
    {
      dish: " Veggie Cola",
      price: "$1.99",
      ingredients:
        "Depending on how spicy you and your family like your dishes, use as little or ",
      image: "https://i.ibb.co/t3b0XHK/image.png",
    },
  ];

  let menuSection = document.createElement("div");
  menuSection.className = "section";
  menuSection.id = "menu";

  let sectionTitle = document.createElement("h3");
  sectionTitle.className = "px-5";
  sectionTitle.innerHTML = "Menu";

  menuSection.appendChild(sectionTitle);

  let row_div = document.createElement("div");
  row_div.className = "row";

  menu_items.forEach((item) => {
    let col_div = document.createElement("div");
    col_div.className = "col-4";

    let card_div = document.createElement("div");
    card_div.className = "card mb-3";

    let card_img = document.createElement("img");
    card_img.className = "card-img-bottom";
    card_img.src = `${item.image}`;

    let card_body = document.createElement("div");
    card_body.className = "card-body";

    let card_item = document.createElement("h4");
    card_item.className = "card-title";
    card_item.append(item.dish);

    let card_price = document.createElement("h4");
    card_price.className = "card-title";
    card_price.append(item.price);

    let card_ingredients = document.createElement("p");
    card_ingredients.className = "card-text";
    card_ingredients.append(item.ingredients);

    row_div.appendChild(col_div);
    col_div.appendChild(card_body);
    card_body.appendChild(card_item);
    card_body.appendChild(card_price);
    card_body.appendChild(card_ingredients);
    card_body.appendChild(card_img);
  });

  menuSection.appendChild(row_div);

  return menuSection;
};
export { menu };
