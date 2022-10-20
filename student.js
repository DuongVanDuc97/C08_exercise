"use strict";
exports.__esModule = true;
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(name, group, score1, score2) {
        this._name = name;
        this._group = group;
        this._score1 = score1;
        this._score2 = score2;
        this._averageScore = (this._score1 + this._score2) / 2;
    }
    Object.defineProperty(Student.prototype, "averageScore", {
        get: function () {
            return this._averageScore;
        },
        set: function (value) {
            this._averageScore = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "score1", {
        get: function () {
            return this._score1;
        },
        set: function (value) {
            this._score1 = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "score2", {
        get: function () {
            return this._score2;
        },
        set: function (value) {
            this._score2 = value;
        },
        enumerable: false,
        configurable: true
    });
    return Student;
}());
exports.Student = Student;
