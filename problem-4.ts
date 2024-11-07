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

    function calculateShapeArea(s: Shape): number{
        if(s.shape==="circle"){
            return (Math.PI * Math.pow(s.radius,2));
        }
        else{
            return s.width * s.height;
        }
    }

    const circleArea = calculateShapeArea({shape:"circle", radius: 5});
    console.log(circleArea.toFixed(2))
}