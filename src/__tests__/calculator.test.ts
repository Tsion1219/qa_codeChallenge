import calculator from "../calculator";

// each of the objects in the dataset array has the pieces of a math problem.
// "add": x + y
// "subtract": x - y
// "multiply": x * y
// "divide": x / y x=[1,2,3] x={a:10} x.a x[0]
let dataset = [
  { x: 5, y: 10, method: "add" },
  { x: 5, y: 10, method: "subtract" },
  { x: 5, y: 10, method: "multiply" },
  { x: 5, y: 10, method: "divide" },
  { x: -12, y: 10000, method: "add" },
  { x: -12, y: 10000, method: "subtract" },
  { x: -12, y: 10000, method: "multiply" },
  { x: -12, y: 10000, method: "divide" },
  { x: 42, y: 0, method: "add" },
  { x: 42, y: 0, method: "subtract" },
  { x: 42, y: 0, method: "multiply" },
  { x: 42, y: 0, method: "divide" },
  { x: 81, y: 227, method: "add" },
  { x: 81, y: 227, method: "subtract" },
  { x: 81, y: 227, method: "multiply" },
  { x: 81, y: 227, method: "divide" },
];
describe("calculator", () => {
dataset.forEach(element=>{


  switch(element.method){
    case "add":{
        
        it(`add ${element.x } + ${element.y}`,  ()=> {
          let result =calculator.add(element.x,element.y)
            expect(result).toBe(element.x + element.y);
        });
      

      break;
    }
    case "subtract":{
      it(`subtract${element.x }- ${element.y}`,()=>{
        let result=calculator.subtract(element.x,element.y)
        expect(result).toBe(element.x - element.y);
      });
      break
    }

case "multiply":{
      it(`multiply${element.x }* ${element.y}`,()=>{
        let result=calculator.multiply(element.x,element.y)
        expect(result).toBe(element.x * element.y);
      });
      break
  }
  case "divide":{
    it(`divide${element.x }/ ${element.y}`,()=>{
      let result=calculator.divide(element.x,element.y)
      expect(result).toBe(element.x /element.y);
    });
    break
   };
}
});

});