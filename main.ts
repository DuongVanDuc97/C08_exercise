import { Student } from "./student";
import { StudentManager } from "./studentManager";

let student1: Student = new Student("Duke", "1", 6, 8);
let student2: Student = new Student("Nam", "2", 7, 10);
let student3: Student = new Student("Hai", "3", 4, 6);

let studentManager: StudentManager = new StudentManager();

studentManager.add(student1);
studentManager.add(student2);
studentManager.add(student3);

// studentManager.showAll();
// studentManager.sortByScore();
// console.log(studentManager.findByName("Duke"));
