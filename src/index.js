const todo = {
    id: 'assfdsf',
    text: 'pay the bills',
    completed: false
}
                    // can destructure in function declarations parameters
const printTodo = ({text, completed}) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)


                                                                  //can use rest params to get rest of properties from object
const { text:todoText , completed, details = 'no deets provided', ...others } = todo // this is called destructuring. gives us single name references to parts of todo.

console.log(todoText)
console.log(completed)
console.log(details)

const age = [65, 0 ,13 ] // can destructure objects and arrays
                           // ,  , an empty space between commas means skipping an item
const [firstAge, secondAge, , lastAge = 123] = age

console.log(firstAge)
console.log(secondAge)
console.log(lastAge)