import { Customer } from "./custumer";

interface SpecialCustomer extends Customer {
  cuponQuantity: number;
}

const specialCustomer: SpecialCustomer = {
  cuponQuantity: 10,
  name: "Maria",
  age: 32,
};
