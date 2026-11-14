"use strict";
function multiplyValue(value, multiplier) {
    if (multiplier === undefined) {
        return value * 2;
    }
    if (multiplier === 0) {
        return 0;
    }
    else {
        return (value * multiplier);
    }
}
function processInput(value) {
    if (typeof value === "string") {
        return value.trim().toLowerCase();
    }
    if (typeof value === "number") {
        return value = value * 10;
    }
    else
        return value ? "Active" : "Inactive";
}
function formatCoordinate(coordinate) {
    return `location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}
function concatenateArrays(...arrays) {
    return arrays.flat();
}
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
}
function pluckValues(items, key) {
    return items.map((item) => item[key]);
}
class Employee {
    name;
    baseSalary;
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    getDetails() {
        return `Employee: ${this.name}, BaseSalary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    department;
    constructor(name, baseSalary, department) {
        super(name, baseSalary);
        this.department = department;
    }
    getRoleInfo() {
        return `Manager of ${this.department}: ${this.name}`;
    }
    ;
}
async function validateAgeAsync(age) {
    if (age >= 18) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Access Granted");
            }, 1000);
        });
    }
    throw new Error("Access Denied: Must be 18 or older");
}
async function main() {
    try {
        const result = await validateAgeAsync(20);
        console.log(result);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
        }
    }
}
main();
