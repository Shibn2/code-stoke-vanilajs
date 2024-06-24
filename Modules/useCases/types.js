function typesExample() {
  var a = [];
  //   a["3"] = 42;
  a["shibin"] = 13;
  a.push(12);
  //   a.length = 14;
  console.dir(a);

  const set = new Set();

  // Array like variables
  function testArrLike() {
    const arr1 = Array.from(arguments);
    const arr2 = Array.prototype.slice.call(arguments);
    console.log("arr1", arr1);
    console.log("arr2", arr2);
    let a = "shibin";
    const out = Array.prototype.map.call(a, (ch) => {
      return `${ch}01`;
    });
    console.log("out", out);
  }

  testArrLike(1, 2, 3, 4, 5);
}

export { typesExample };
