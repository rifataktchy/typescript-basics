In TypeScript, both type and interface are used to define the structure of data, such as objects. They are quite similar, but they have some important differences.

1. Interface
An interface is mainly used to define the structure of an object. It describes what properties and methods an object should have.
interface User {
  name: string;
  age: number;
  email: string;
}

const user: User = {
  name: "Rifat",
  age: 38,
  email: "rifat@gmail.com"
};


2. Type Alias
A type alias can also define the structure of an object, but it is more flexible. It can define primitive types, unions, tuples, objects, and more.
type User = {
  name: string;
  age: number;
  email: string;
};

const user: User = {
  name: "Rifat",
  age: 38,
  email: "rifat@gmail.com"
};


3. Core Differences

Feature	                     Interface	            Type
Object structure	         Yes	                Yes
Primitive types	             No	                    Yes
Union types	                 No	                    Yes
Intersection types	         No	                    Yes
Extending	                 Uses extends	        Uses &

My understanding is both type and interface can be used to define object structures, and in many cases, they work in the same way. However, interface is mainly focused on describing object structures, while type offers more flexibility.