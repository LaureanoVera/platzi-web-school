class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: ["Single Page Aplication", "Poo JavScript", "ReactJS"],
});

const englishAcademy = new LearningPath({
  name: "Escuela de Ingles",
  courses: ["A1", "A2", "B1", "B2"],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: ["cursoPython", "Datacademy", "CursoExcel"],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    tiktok = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
      tiktok,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const laureano = new Student({
  name: "Laureano",
  username: "LaureanoVera",
  email: "laureanovera@fake.com",
  tiktok: "lauri_vera",
  learningPaths: [escuelaData, escuelaWeb, englishAcademy],
});
