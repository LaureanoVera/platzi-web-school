// Clase RUTA
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

// Clase CURSO
class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

// Clase CLASES
class Classes {
  constructor(name, date = new Date()) {
    this.name = name;
    this.date = date;
  }
}

// Cursos
const genericClasses = [
  new Classes("Modulo 1"),
  new Classes("Modulo 2"),
  new Classes("Modulo 3"),
];

const spaJs = new Course({
  name: "Single Page Application",
  classes: genericClasses,
});

const pooJs = new Course({
  name: "POO JavaScript",
  classes: genericClasses,
});

const reactJs = new Course({
  name: "ReactJS",
  classes: genericClasses,
});

// ESCUELAS == instancia LearningPath
const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [spaJs, pooJs, reactJs],
});

const englishAcademy = new LearningPath({
  name: "Escuela de Ingles",
  courses: ["A1", "A2", "B1", "B2"],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: ["Python Basico", "Datacademy", "Fundamentos Matematicas"],
});

// Clase ESTUDIANTE
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

// Estudiantes
const laureano = new Student({
  name: "Laureano",
  username: "LaureanoVera",
  email: "laureanovera@fake.com",
  tiktok: "lauri_vera",
  learningPaths: [escuelaData, escuelaWeb, englishAcademy],
});
