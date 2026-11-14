In TypeScript, Access Modifiers are used in Object-Oriented Programming (OOP) to control how class properties and methods can be accessed.

There are four important modifiers: public, private, protected, and readonly.
1. Public
public means a property or method can be accessed from anywhere: inside the class, outside the class, and through its objects.In TypeScript, public is the default access modifier, so we don't need to write it explicitly.

2. Private
private means a property or method can only be accessed inside the class where it is declared.
We cannot directly access it from outside the class or from a child class.This helps protect sensitive data from being changed directly.

3. Protected
protected means a property or method can be accessed inside its own class and its child classes, but not directly from outside.

4. Readonly
readonly means a property can be assigned a value when it is declared or inside the constructor. After that, we cannot change its value. we can notice that readonly does not mean private. We can still read its value from outside the class.

5. Quick Comparison
Modifier	           Inside class	            Child class	               Outside class
public	                Yes	                    Yes	                        Yes
private	                Yes	                    No	                        No
protected	            Yes	                    Yes	                        No
readonly	            Readable	            Readable	                Readable