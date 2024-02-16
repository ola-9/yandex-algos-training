const myFunction = (inputs) => {
  const [a, b, c] = inputs.map(Number);  
  return (a + b > c && a + c > b && b + c > a) ? 'YES' : 'NO';
};

export default myFunction;
