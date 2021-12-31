"use strict";
exports.__esModule = true;
exports.Student = void 0;
// class <class_name>{    
//     field;  
// cconstructor()  
//     method;    
// } 
var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studName = name;
        this.studCode = code;
    }
    // constructor(){
    // }
    Student.prototype.getGrade = function () {
        return "A+";
    };
    Student.prototype.display = function () {
        console.log("Student code is: " + this.studCode);
        console.log("Student Name is: " + this.studName);
        console.log(this.getGrade());
    };
    return Student;
}());
exports.Student = Student;
// let object_name = new class_name(parameter)  
new Student(1, "Daksh").display();
var obj = new Student(2, "Harshada"); //calling constructor
obj.display();
