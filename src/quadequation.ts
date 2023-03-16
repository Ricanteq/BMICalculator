import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function solveQuadraticEquation(a: number, b: number, c: number): string {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return "There are no real roots.";
  } else if (discriminant === 0) {
    const root = -b / (2 * a);
    return `The only root is ${root}.`;
  } else {
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return `The roots are ${root1} and ${root2}.`;
  }
}

rl.question("Enter the value of a: ", (a) => {
  rl.question("Enter the value of b: ", (b) => {
    rl.question("Enter the value of c: ", (c) => {
      const solution = solveQuadraticEquation(parseFloat(a), parseFloat(b), parseFloat(c));
      console.log(solution);
      rl.close();
    });
  });
});
