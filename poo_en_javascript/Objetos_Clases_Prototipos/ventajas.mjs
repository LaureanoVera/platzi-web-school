class Comment {
  constructor({ content, studentName, studentRole = "Estudiante" }) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }

  post() {
    console.log(`${this.studentName}
    ${this.studentRole}
    ${this.content}
    ${this.likes} Likes
    `);
  }
}

function videoPlay(id) {
  const secretUrl = `https://platziultrasecretomasquelanasa.com/${id}`;
  console.log(`Play ${secretUrl}`);
}

function videoPause(id) {
  const secretUrl = `https://platziultrasecretomasquelanasa.com/${id}`;
  console.log(`Pause ${secretUrl}`);
}

class PlatziClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  play() {
    videoPlay(this.videoID);
  }

  pause() {
    videoPause(this.videoID);
  }
}

// Clase RUTA
class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

// Clase CURSO
class Course {
  constructor({ name, classes = [], isFree = false, onlyExpert = false }) {
    this.name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.onlyExpert = onlyExpert;
  }
}

// Clase CLASES
class Classes {
  constructor(name, date = new Date()) {
    this._name = name;
    this.date = date;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
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
  onlyExpert: true,
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

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourses(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Sorry ${this.name}, you can only take open courses.`);
    }
  }

  postComment(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
    });
    comment.post();
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourses(newCourse) {
    if (!newCourse.onlyExpert) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Sorry ${this.name}, this course is only for experts.`);
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourses(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

// Estudiantes
const laureano = new BasicStudent({
  name: "Laureano",
  username: "LaureanoVera",
  email: "laureanovera@fake.com",
  tiktok: "lauri_vera",
  learningPaths: [escuelaData, escuelaWeb, englishAcademy],
});
