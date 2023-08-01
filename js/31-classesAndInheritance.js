// console.log("Classes and Inheritances");

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan() {
        return `I am ${this.name} and this company is best.`;
    }
    joiningYear() {
        return 2020 - this.experience;
        // return `Joining year was  ${2020} - ${this.experience}`;
    }

    static add(a, b) {
        return a * b;
    }
}

class Programmer extends Employee {
    constructor(givenName, givenExperience, givenDivision, language, github) {
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }
    favoriteLanguage() {
        if (this.language == 'Python') {
            return 'Python';
        } else {
            return 'JavaScript';
        }
    }
    static multiply(a, b) {
        return a * b;
    }
}

// moon = new Employee("Moon", 06, "Era");
// console.log(moon);
// console.log(moon.slogan());
// console.log(moon.joiningYear());
// console.log(Employee.add(20, 30));

ijahar = new Programmer('Ijahar', 06, 'CriterionTech', 'Python', 'ijahar7oct');
console.log(ijahar);
console.log(ijahar.favoriteLanguage());
console.log(Programmer.multiply(20, 50));