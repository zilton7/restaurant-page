const home = () => {
  const homeSection = document.createElement('div');
  homeSection.className = 'section';
  homeSection.classList = 'mx-4 mb-5';
  homeSection.id = 'home';

  const sectionTitle = document.createElement('h3');
  sectionTitle.className = 'px-5';
  sectionTitle.innerHTML = 'Home';

  homeSection.appendChild(sectionTitle);

  const newDiv = document.createElement('div');
  const title = document.createElement('h4');
  title.innerHTML = "'Il Ristorante del Vegetaro'";
  newDiv.appendChild(title);

  const img = document.createElement('img');
  img.src = '../assets/restaurant.jpg';
  img.className = 'restaurant-image';

  const imgWrapper = document.createElement('div');
  imgWrapper.className = 'text-center';
  imgWrapper.appendChild(img);

  homeSection.appendChild(imgWrapper);

  const paragraph = document.createElement('p');
  paragraph.innerHTML = 'A restaurant, or an eatery, is a business that prepares and serves food and drinks to customers. Meals are generally served and eaten on the premises, but many restaurants also offer take-out and food delivery services. Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and service models ranging from inexpensive fast food restaurants and cafeterias, to mid-priced family restaurants, to high-priced luxury establishments. In Western countries, most mid-to high-range restaurants serve alcoholic beverages such as beer and wine. Some restaurants serve all the major meals, such as breakfast, lunch, and dinner. Other restaurants may serve only a single meal or they may server.';
  newDiv.appendChild(paragraph);
  homeSection.appendChild(newDiv);

  return homeSection;
};

export default home;
