const bugNum = () => {
 try {
    const number = "123";
    if(number === 123){
        return "Seu numero é 123";
    }
    throw new Error("Deu Ruim");
 } catch (error) {
   throw error;    
 }
};

console.log(bugNum());
console.log("Continua executando!");
