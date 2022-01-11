const laureano = {
  name: "Laureano",
  age: 19,
  skills: ["Frontend", "Reactjs", "JavaScript"],
  learnSkills(skill) {
    this.skills.push(skill);
  },
};

// Laureano learns new skill
laureano.skills.push("TypeScript"); // add skill manually
laureano.learnSkills("Figma"); // add skill with a method

function Student(name, age, skills) {
  return {
    name,
    age,
    skills,
    learnSkills(skill) {
      this.skills.push(skill);
    },
  };
}
const ivan = Student("Ivan", 20, ["NodeJS", "Express"]);

function StudentTwo(name, age, skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
Student.prototype.learnSkills = (skill) => this.skills.push(skill);
const gerardo = new StudentTwo("Gerardo", 21, ["Python", "Data Science"]);

// Prototipos con la sintaxis de clases
class StudentThree {
  // constructor(name, age, skills) {
  constructor({
    // con destructuracion
    name,
    age,
    skills,
    element,
  }) {
    this.name = name;
    this.age = age;
    this.skills = skills;
  }

  learnSkills(skill) {
    this.skills.push(skill);
  }
}

const otherObj = { name: "Other", age: 19, skills: ["Swift", "Kotlin"] };
const other = new StudentThree(otherObj);
other.learnSkills("Git");
