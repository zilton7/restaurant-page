const whatever = () => {
  let div = document.getElementById("content");
  div.innerHTML = "";
  const elements = [
    '<img src="../assets/restaurant.jpg" alt="restaurant image" width="500">',
    "<h3>Best Restaurant Ever!</h3>",
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro facere, sed placeat quisquam ipsum delectus quod praesentium, amet illum fugiat saepe fuga. Reiciendis ad pariatur architecto consectetur cupiditate. Quasi.</p>",
  ];
  elements.forEach((el) => {
    div.innerHTML += el;
  });
};

export { whatever };
