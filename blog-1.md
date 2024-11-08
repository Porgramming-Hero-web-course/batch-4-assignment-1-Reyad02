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
