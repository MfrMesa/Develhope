// Create a function named calculateSalary which takes an input parameter, and calculates and returns the corresponding salary. 
// You must use the switch statement. For each role the corresponding salary is as follows://

// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000

const ceoSalary = calculateSalary("ceo");
const managerSalary = calculateSalary("manager");
const ctoSalary = calculateSalary("cto");
const developerSalary = calculateSalary("developer");
const otherSalary = calculateSalary("other");

function calculateSalary(role) {
    let salary; 

    switch (role) {
        case "ceo":
            salary = 2200;
        break;
        case "manager":
            salary = 1800;
        break;
        case "cto":
            salary = 1800;
        break;
        case "developer":
            salary = 1500;
        break;
        default:
            salary = 1000;
        break;
    }
    return salary;

}

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);