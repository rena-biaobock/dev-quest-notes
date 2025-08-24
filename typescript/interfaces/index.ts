type TCustumer = {
  name: string;
  age: number;
};

interface ICustumer {
  name: string;
  age: number;
}

interface IAdress {
  street: string;
}

interface ICustumerProfile extends ICustumer, IAdress {}

const newProfile: ICustumerProfile = {
  name: "Ricardo",
  age: 35,
  street: "Rua XYZ",
};
