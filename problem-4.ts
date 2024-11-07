{
    // Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

    type Circle = {
        shape: "circle";
        radius: number;
    }

    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle

    function calculateShapeArea(something: Shape): number{
        if(something.shape==="circle"){
            return (Math.PI * Math.pow(something.radius,2));
        }
        else{
            return something.width * something.height;
        }
    }

    const circleArea = calculateShapeArea({shape:"circle", radius: 5});
    console.log(circleArea.toFixed(2))
}