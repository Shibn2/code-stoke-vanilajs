// Varibles study

function VariablesStudy() {
  function arrayObjFunction() {
    const arr = [1, 2, 3, [4, 5, 6], 7, 8, 9];
    const obj = {
      name: "Shibin",
      details: {
        age: 34,
        job: "SDE",
      },
    };

    const arr1 = arr.slice();
    console.log("arr1", arr1);
    const obj1 = { ...obj };
    obj1.details.age = 35;
    const obj2 = structuredClone(obj);
    obj2.details.job = "SDM";
    console.log(
      "obj1 copy",
      obj1,
      "original obj",
      obj,
      "structuredClone",
      obj2
    );
  }
  arrayObjFunction();
}

export { VariablesStudy };
