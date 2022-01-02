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

console.log(laureano);

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
console.log(ivan);

function StudentTwo(name, age, skills) {
  this.name = name;
  this.age = age;
  this.skills = skills;
}
Student.prototype.learnSkills = (skill) => this.skills.push(skill);
const gerardo = new StudentTwo("Gerardo", 21, ["Python", "Data Science"]);
console.log(gerardo);
