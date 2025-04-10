function bindCallApplyUseCase() {
  // apply use case
  var name = "Nike";
  function showName(price, color) {
    console.log(
      "Display the brand name: ",
      this.name,
      "price is: ",
      price,
      "and color is: ",
      color
    );
  }
  const obj1 = {
    name: "Adidas",
  };
  showName();
  showName.apply(obj1, [20, "red"]);
}

export default bindCallApplyUseCase;
