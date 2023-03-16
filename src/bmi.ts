import readline from 'readline';

interface PersonData {
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  height: number;
  weight: number;
}


function calculateBMI(person: PersonData): number {
  // Convert height from centimeters to meters
  const heightInMeters = person.height / 100;
  
  // Calculate BMI using the formula: weight / height^2
  const bmi = person.weight / (heightInMeters ** 2);
  
  // Round BMI to two decimal places
  return Math.round(bmi * 100) / 100;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your first name: ', (firstName) => {
  rl.question('Enter your last name: ', (lastName) => {
    rl.question('Enter your age: ', (ageStr) => {
      rl.question('Enter your city: ', (city) => {
        rl.question('Enter your height in centimeters: ', (heightStr) => {
          rl.question('Enter your weight in kilograms: ', (weightStr) => {
            // Parse the entered data and create a person object
            const age = parseInt(ageStr);
            const height = parseInt(heightStr);
            const weight = parseInt(weightStr);
            const person: PersonData = {
              firstName: firstName,
              lastName: lastName,
              age: age,
              city: city,
              height: height,
              weight: weight
            };
            
            // Calculate the person's BMI
            const bmi = calculateBMI(person);
            
            // Display the person's name, city, and calculated BMI
            console.log(`${person.firstName} ${person.lastName} from ${person.city}'s BMI is ${bmi}`);
            
            // Close the readline interface
            rl.close();
          });
        });
      });
    });
  });
});
