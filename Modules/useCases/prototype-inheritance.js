function prototypeInheritance() {
  console.log("prototypeInheritance started");
  function Person(name) {
    this.name = name;
  }

  Person.prototype.getName = function () {
    return this.name;
  };

  console.log("Person log", Person);
  console.dir("Person dir", Person);

  function Employee(name, title) {
    Person.call(this, name);
    this.title = title;
  }

  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;

  Employee.prototype.getTitle = function () {
    return this.title;
  };

  const employee = new Employee("John Doe", "Software Engineer");
  console.log("employee", employee);
  console.log(employee.getName());
  console.log(employee.getTitle());
}

export default prototypeInheritance;
