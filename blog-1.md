### Union and Intersection Types in TypeScript

Union and Intersection are both powerful features of TypeScript. 

#### Union Types (`|`)

Let's start with the union. The `|` symbol signifies a union. Suppose you are taking some input from the user, but you are not sure what type of input the user will provide. For example, the user can input either a string or a number. In this case, using a union is a good method.

Example:

```typescript
function login(studentID: string | number, password: string) {
    // If studentID and password are valid, the student can log in...
}
```

here studentID can be a string or number.

#### Intersection Types (&)

Intersection denoted by "&" symbol. This is used when you need both of the types. 


Example:

```typescript
type Student = {
    name: string;
    studentID: string;
}

type Section = {
    sec: string;
    time: string;
}

type SectionAssignedStudent = Student & Section;

const student: SectionAssignedStudent = {
    name: "John Doe",
    studentID: "12345",
    sec: "A1",
    time: "10:00 AM - 1:00 PM"
};
```

Here, using intersection to create a new type named SectionAssignedStudent. When you use the SectionAssignedStudent type you must have set all the properties of both Student and Section type.
