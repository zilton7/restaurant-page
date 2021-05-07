const menu = () => {
  const menuItems = [
    {
      dish: ' Vegetarian Spaghetti',
      price: '$7.99',
      ingredients:
        'Salty and savory, the roasting method kills the natural bitterness of asparagus. ',
      image: 'https://i.ibb.co/Zzmc6F3/image.png',
    },
    {
      dish: ' Veggie Cola',
      price: '$1.99',
      ingredients:
        'Depending on how spicy you and your family like your dishes, use as little or ',
      image: 'https://i.ibb.co/8zYL4Vt/image.png',
    },
    {
      dish: ' Veggie Cola',
      price: '$1.99',
      ingredients:
        'Depending on how spicy you and your family like your dishes, use as little or ',
      image: 'https://i.ibb.co/9ytT8RV/image.png',
    },
    {
      dish: ' Veggie Cola',
      price: '$1.99',
      ingredients:
        'Depending on how spicy you and your family like your dishes, use as little or ',
      image: 'https://i.ibb.co/t3b0XHK/image.png',
    },
    {
      dish: ' Veggie Cola',
      price: '$1.99',
      ingredients:
        'Depending on how spicy you and your family like your dishes, use as little or ',
      image: 'https://i.ibb.co/t3b0XHK/image.png',
    },
    {
      dish: ' Veggie Cola',
      price: '$1.99',
      ingredients:
        'Depending on how spicy you and your family like your dishes, use as little or ',
      image: 'https://i.ibb.co/t3b0XHK/image.png',
    },
  ];

  const menuSection = document.createElement('div');
  menuSection.className = 'section  mb-5';
  menuSection.id = 'menu';

  const sectionTitle = document.createElement('h3');
  sectionTitle.className = 'px-5';
  sectionTitle.innerHTML = 'Menu';

  menuSection.appendChild(sectionTitle);

  const rowDiv = document.createElement('div');
  rowDiv.className = 'row';

  menuItems.forEach((item) => {
    const colDiv = document.createElement('div');
    colDiv.className = 'col-4';

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card mb-3';

    const cardImg = document.createElement('img');
    cardImg.className = 'card-img-bottom';
    cardImg.src = `${item.image}`;

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardItem = document.createElement('h4');
    cardItem.className = 'card-title';
    cardItem.append(item.dish);

    const cardPrice = document.createElement('h4');
    cardPrice.className = 'card-title';
    cardPrice.append(item.price);

    const cardIngredients = document.createElement('p');
    cardIngredients.className = 'card-text';
    cardIngredients.append(item.ingredients);

    rowDiv.appendChild(colDiv);
    colDiv.appendChild(cardBody);
    cardBody.appendChild(cardItem);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(cardIngredients);
    cardBody.appendChild(cardImg);
  });

  menuSection.appendChild(rowDiv);

  return menuSection;
};

export default menu;
