"use strict";
exports.__esModule = true;
exports.StudentManager = void 0;
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.studentList = [];
    }
    StudentManager.prototype.add = function (student) {
        this.studentList.push(student);
    };
    StudentManager.prototype.showAll = function () {
        this.studentList.forEach(function (student) {
            console.log("Name: ".concat(student.name, ", Group: ").concat(student.group, ", Score1: ").concat(student.score1, ", Score2: ").concat(student.score2, ", Average score: ").concat(student.averageScore));
        });
    };
    StudentManager.prototype.sortByScore = function () {
        for (var i = 0; i < this.studentList.length; i++) {
            for (var j = i + 1; j < this.studentList.length; j++) {
                if (this.studentList[i].averageScore > this.studentList[j].averageScore) {
                    var temp = this.studentList[i];
                    this.studentList[i] = this.studentList[j];
                    this.studentList[j] = temp;
                }
            }
        }
        this.showAll();
    };
    StudentManager.prototype.findByName = function (name) {
        return this.studentList.filter(function (student) { return student.name === name; });
    };
    StudentManager.prototype.findByGroup = function (group) {
        return this.studentList.filter(function (student) { return student.group === group; });
    };
    return StudentManager;
}());
exports.StudentManager = StudentManager;
