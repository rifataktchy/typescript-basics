function multiplyValue (value:number, multiplier?:number){
        if(multiplier === undefined){
           return value * 2;
        }
        if(multiplier === 0){
           return 0 ;
        }
        else{
        return (value * multiplier);
        }
}



function processInput (value: string |number | boolean){
         if(typeof value === "string")
         {
            return value.trim().toLowerCase();
         }
         if(typeof value === "number")
         {
            return value= value * 10;
         }
         else
         return value ? "Active" : "Inactive";
}



type Coordinate = readonly[latitude: number,
    longitude: number,
    locationName: string]
function formatCoordinate(coordinate: Coordinate){
        return `location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`
    }



function concatenateArrays<T>(...arrays: T[][]){
 return arrays.flat();
}



interface Course {
    title: string,
    students : number,
    isPublished : boolean}
function getPopularCourses(courses: Course[], minStudents: number): Course[] {
    return courses.filter(
        (course)=>{
            return course.isPublished===true && course.students>=minStudents;
        }
    )
}



function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][]{
return items.map((item)=>item[key]) ;
}



class Employee {
    protected name : string;
    private baseSalary : number;
        constructor (name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
        }
        getDetails(){
            return `Employee: ${this.name}, BaseSalary: ${this.baseSalary}`
        }      
}
class Manager extends Employee{
    private department : string;
    constructor (name: string, baseSalary: number, department:string) {
        super(name, baseSalary);
        this.department=department
        }
    getRoleInfo(){
        return `Manager of ${this.department}: ${this.name}`
    };
}




    
async function validateAgeAsync(age: number): Promise<string> {
  if (age >= 18) {
    return new Promise<string>((resolve) => {
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
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
}
main();
