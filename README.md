# JavaScript

## Function

São um dos blocos de construção fundamentais em JavaScript. Uma função é um procedimento JavaScript – um conjunto de instruções que executa uma tarefa ou calcula um valor.

```javascript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('World');
```

## Array
São usadas para armazenar vários valores em uma única variável. Um array é uma variável especial que pode conter mais de um valor por vez.

```javascript
const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit) => {
  console.log(fruit);
});
```
## Object
Também são variáveis. Mas os objetos podem conter muitos valores. Este código atribui um objeto à variável pessoa:

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['reading', 'traveling'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA',
    zip: '12345'
  }
};

console.log(person.firstName); // Output: John
console.log(person.hobbies[0]); // Output: reading
console.log(person.address.city); // Output: Anytown
};
```

## DOM
The Document Object Model (DOM) é uma interface de programação para documentos da web. Ele representa a página para que os programas possam alterar a estrutura, o estilo e o conteúdo do documento.

```javascript
const heading = document.createElement('h1');
heading.textContent = 'Hello, World!';
document.body.appendChild(heading);
```