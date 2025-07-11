// //  Object Literal
// const person = {
//   name: 'Alice',
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// };

// person.greet(); // Hello, my name is Alice


// // Constructor Function
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.greet = function() {
//   console.log(`Hi, I'm ${this.name}`);
// };

// const alice = new Person('Alice', 25);
// alice.greet(); // Hi, I'm Alice


// // ES6 Class Syntax
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
  
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   }
// }

// const bob = new Person('Bob', 30);
// bob.greet(); // Hello, my name is Bob


// // Inheritance with Classes
// class Employee extends Person {
//   constructor(name, age, position) {
//     super(name, age); // call parent constructor
//     this.position = position;
//   }
  
//   work() {
//     console.log(`${this.name} is working as a ${this.position}`);
//   }
// }

// const jane = new Employee('Jane', 28, 'Developer');
// jane.greet(); // Hello, my name is Jane
// jane.work();  // Jane is working as a Developer

// Define Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

// Employee inherits from Person
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
  work() {
    return `${this.name} is working as a ${this.position}.`;
  }
  // Override greet method
  greet() {
    return `Hi, I'm ${this.name}, a ${this.position}, and I'm ${this.age} years old.`;
  }
}

// Storage for created objects
const objects = [];

// UI elements
const objectsList = document.getElementById('objectsList');
const personForm = document.getElementById('personForm');
const employeeForm = document.getElementById('employeeForm');

// Render all objects
function renderObjects() {
  if (objects.length === 0) {
    objectsList.innerHTML = '<p>No objects created yet.</p>';
    return;
  }
  objectsList.innerHTML = '';
  objects.forEach((obj, index) => {
    const div = document.createElement('div');
    div.classList.add('output');
    div.classList.add(obj instanceof Employee ? 'employee' : 'person');
    
    let html = `<strong>${obj instanceof Employee ? 'Employee' : 'Person'}:</strong> ${obj.name}, Age: ${obj.age}`;
    if (obj instanceof Employee) {
      html += `<br><em>Position:</em> ${obj.position}`;
    }
    
    // Buttons to call methods
    html += `
      <div style="margin-top: 10px;">
        <button onclick="alert('${obj.greet()}')">Greet</button>
        ${obj instanceof Employee ? `<button onclick="alert('${obj.work()}')">Work</button>` : ''}
      </div>
    `;
    div.innerHTML = html;
    objectsList.appendChild(div);
  });
}

// Handle person form submit
personForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('personName').value.trim();
  const age = parseInt(document.getElementById('personAge').value);
  if (name && age >= 0) {
    const person = new Person(name, age);
    objects.push(person);
    personForm.reset();
    renderObjects();
  }
});

// Handle employee form submit
employeeForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('employeeName').value.trim();
  const age = parseInt(document.getElementById('employeeAge').value);
  const position = document.getElementById('employeePosition').value.trim();
  if (name && age >= 0 && position) {
    const employee = new Employee(name, age, position);
    objects.push(employee);
    employeeForm.reset();
    renderObjects();
  }
});

// Initial render
renderObjects();
