////////////////////////////////////////////////////
///////////////////EMPLOYEES.JS/////////////////////
////////////////////////////////////////////////////
/*
    In this file, you'll be writing classes to 
    store information about restaurant employees.
*/

//////////////////PROBLEM 1////////////////////
/*  
    Create a new class called `Employee`.
    Make sure to call your constructor, and 
    require these 2 parameters: name (a string), and shifts (a string).

    Create a method on the class called 
    `getSchedule` that prints a string:
    [NAME] works on [SHIFTS]
    Where NAME and SHIFTS reference the values
    stored on that instance.
*/

class Employee {
    constructor(name, shifts) {
      this.name = name;
      this.shifts = shifts;
    }
  
    getSchedule() {
      console.log(`${this.name} works on ${this.shifts}`);
    }
  }
  
  // Example usage:
  const employee1 = new Employee("Danush Mekuria", "Monday and Wednesday");
  employee1.getSchedule();

  /*
      Create a new instance of your class.
      Save it to a variable called `empOne`.
  
      You can use this sample data or make
      up your own:
      name: "Jess"
      shifts: "weekday mornings"
  */
  

  // Create a new instance and save it to empOne
  const empOne = new Employee("Danush Mekuria", "weekday mornings");
  
  // Call the getSchedule method on empOne
  empOne.getSchedule();

  
  /*
      Call the `getSchedule` method on the
      `empOne` instance.
  */
  
  // Define the Employee class
    getSchedule();
      console.log(`${this.name} works on ${this.shifts}`);
  

  
  //////////////////PROBLEM 2////////////////////
  /*  
      Write a class called Manager that *extends* 
      the Employee class. In the constructor, 
      make sure you require all of the parameters 
      from the Employee class as well as 1 
      new one: employees, which will be an array of 
      employee names that report to this manager. 
      (Hint: don't forget to call the super function)
  
      Create a method called `getEmployees` that
      console.logs a string:
      [NAME] manages [EMPLOYEES]
      Where NAME and EMPLOYEES reference the values
      stored on that instance.
  
      Create a second method called `addEmployee`
      that takes in one argument, `emp`, which
      should be a string of an employee name.
      The function should push the name into 
      the employees array. 
  */

    getSchedule;
      console.log(`${this.name} works on ${this.shifts}`);
  
  
  class Manager extends Employee {
    constructor(name, shifts, employees) {
      super(name, shifts);
      this.employees = employees || [];
    }
  
    getEmployees() {
      console.log(`${this.name} manages ${this.employees.join(', ')}`);
    }
  
    addEmployee(emp) {
      this.employees.push(emp);
    }
  }
  
  // Example usage:
  const manager1 = new Manager("Alice", "Monday to Friday", ["Bob", "Charlie"]);
  manager1.getSchedule(); // Inherited method from Employee
  manager1.getEmployees(); // New method from Manager
  manager1.addEmployee("David");
  manager1.getEmployees();
  
  /*
      Create a new instance of your class.
      Save it to a variable called `manager`.
  
      You can use this sample data or make
      up your own:
      name: Winston
      shifts: "weekday afternoons"
      employees: "Cece" and "Schmidt"
  */
    getSchedule();
      console.log(`${this.name} works on ${this.shifts}`);

 
    getEmployees();
      console.log(`${this.name} manages ${this.employees.join(', ')}`);
    
    addEmployee(emp);
      this.employees.push(emp);
  
  // Example usage:
  const manager = new Manager("Winston", "weekday afternoons", ["Cece", "Schmidt"]);
  manager.getSchedule(); // Inherited method from Employee
  manager.getEmployees(); // New method from Manager
  
  /*
      Call the `getEmployees` method on the
      `manager` variable.  
  */
  
    getSchedule();
      console.log(`${this.name} works on ${this.shifts}`);
    
    getEmployees();
      console.log(`${this.name} manages ${this.employees.join(', ')}`);

    addEmployee(emp);
      this.employees.push(emp);

  
  // Example usage:
  manager.getSchedule(); // Inherited method from Employee
  manager.getEmployees(); // New method from Manager
  
  
  /*
      Call the `addEmployee` method on the 
      `manager` variable passing in the string 
      'Coach' or whatever name you'd like.
  */
    getSchedule();
      console.log(`${this.name} works on ${this.shifts}`);
  
  
    getEmployees();
      console.log(`${this.name} manages ${this.employees.join(', ')}`);

  
    addEmployee(emp);
      this.employees.push(emp);

  
  // Example usage:
  manager.getSchedule(); // Inherited method from Employee
  manager.getEmployees(); // New method from Manager
  manager.addEmployee("Coach"); // Calling addEmployee method
  manager.getEmployees(); // Updated list of managed employees
  
  
  /*
      Call the `getEmployees` method on the
      `manager` varible again to confirm 
      that an employee was added.
  */
    getSchedule();
      console.log(`${this.name} works on ${this.shifts}`);

  
    getEmployees();
      console.log(`${this.name} manages ${this.employees.join(', ')}`);
  
    addEmployee(emp);
      this.employees.push(emp);

  // Example usage:
  manager.getSchedule(); // Inherited method from Employee
  manager.getEmployees(); // New method from Manager
  manager.addEmployee("Coach"); // Calling addEmployee method
  manager.getEmployees(); // Updated list of managed employees
