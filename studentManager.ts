import { Student } from "./student";

export class StudentManager {
  studentList: Student[] = [];

  add(student: Student) {
    this.studentList.push(student);
  }

  showAll() {
    this.studentList.forEach((student) => {
      console.log(
        `Name: ${student.name}, Group: ${student.group}, Score1: ${student.score1}, Score2: ${student.score2}, Average score: ${student.averageScore}`
      );
    });
  }

  sortByScore() {
    for (let i = 0; i < this.studentList.length; i++) {
      for (let j = i + 1; j < this.studentList.length; j++) {
        if (
          this.studentList[i].averageScore > this.studentList[j].averageScore
        ) {
          let temp = this.studentList[i];
          this.studentList[i] = this.studentList[j];
          this.studentList[j] = temp;
        }
      }
    }
    this.showAll();
  }

  findByName(name: string) {
    return this.studentList.filter((student) => student.name === name);
  }

  findByGroup(group: string) {
    return this.studentList.filter((student) => student.group === group);
  }
}
