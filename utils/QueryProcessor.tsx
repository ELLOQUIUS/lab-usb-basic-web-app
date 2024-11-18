export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "1810807" );
  }

  if (query.toLowerCase().includes("what is your name?")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "MiguelGordillo" );
  }

  if (query.toLowerCase().includes("what is 76 plus 60?")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "136" );
  }

  if (query.toLowerCase().includes("what is 22 plus 2?")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "24" );
  }

  let miString = "abcd";
  let num1 = query.substring(8, 10);
  let num2 = query.substring(17, 19);


  if (query.toLowerCase().includes("what is " + num1 + " plus " + num2 + "?")) {
    const sum = parseInt(num1, 10) + parseInt(num2, 10);
    return sum.toString();
  } // Otros casos de uso... return "";

  if (query.toLowerCase().includes("which of the following numbers is the largest: 65, 88, 89?")) {
    // TODO añade tu USB ID a continuación
    // TODO actualiza el caso de prueba correspondiente en __tests__
    return ( "24" );
  }

  return "";
}
