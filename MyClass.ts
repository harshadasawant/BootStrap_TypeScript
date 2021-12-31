// class <class_name>{    
//     field;  
// cconstructor()  
//     method;    
// } 
export
class Student {  
    studCode: number;  
    studName: string;  
  
        constructor(code: number, name: string) { 

            this.studName = name;  
            this.studCode = code;  
    }  

    // constructor(){
        
    // }
  
    getGrade() : string {  
        return "A+" ;  
    }  
    display():void {   
        console.log("Student code is: "+this.studCode)   
        console.log("Student Name is: "+this.studName)   
        console.log(this.getGrade());
       
    }   
}  

// let object_name = new class_name(parameter)  
let obj1=new Student(1,"Daksh");
obj1.display();

let obj2 = new Student(2,"Harshada");  //calling constructor
obj2.display();