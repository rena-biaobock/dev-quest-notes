type Customer = {
  firstName: string;
  lastName?: string;
  age: number;
};

const newCustomer: Customer = {
  firstName: "José",
  age: 32,
};

console.log(newCustomer);

function printName(firstName: string, lastName?: string) {
  console.log(firstName);
  if (lastName) console.log(lastName);
}

printName("José");
