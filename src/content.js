const whatever = () => {
  const div = document.getElementById("content");
  const elements = [
    '<img src="../assets/restaurant.jpg" alt="restaurant image" width="500">',
    "<h3>Best Restaurant Ever!</h3>",
    "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est porro facere, sed placeat quisquam ipsum delectus quod praesentium, amet illum fugiat saepe fuga. Reiciendis ad pariatur architecto consectetur cupiditate. Quasi.</p>",
  ];
  div += "";
  elements.forEach((el) => {
    div += el;
  });
};

export { whatever };
