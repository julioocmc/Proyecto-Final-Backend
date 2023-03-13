import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Julio Mijares',
      email: 'julio@example.com',
      password: bcrypt.hashSync('asd123'),
      isAdmin: true,
    },
    {
      name: 'Simon Mijares',
      email: 'simon@example.com',
      password: bcrypt.hashSync('123asd'),
      isAdmin: false,
    },
  ],

  products: [
    {
      //_id: '1', el id lo crea mongodb
      name: 'Franela Blanca',
      slug: 'franela-blanca',
      category: 'Franelas',
      image: '../frontend/public/images/Franela Blanca.jpg',
      countInStock: 100,
      price: 14.99,
      description: 'Franela 100% algodón, de color blanca.',
    },
    {
      //_id: '2',
      name: 'Franela Negra',
      slug: 'franela-negra',
      category: 'Franelas',
      image: '../frontend/public/images/Franela Negra.jpg',
      countInStock: 100,
      price: 14.99,
      description: 'Franela 100% algodón, de color negra.',
    },
    {
      //_id: '3',
      name: 'Franela Marrón',
      slug: 'franela-marron',
      category: 'Franelas',
      image: '../frontend/public/images/Franela Marron.jpg',
      countInStock: 100,
      price: 14.99,
      description: 'Franela 100% algodón, de color marrón.',
    },
    {
      //_id: '4',
      name: 'Short Beige',
      slug: 'short-beige',
      category: 'Shorts',
      image: '../frontend/public/images/Short Beige.jpg',
      countInStock: 0,
      price: 9.99,
      description: 'Short de corte bajo color beige para hombres.',
    },
    {
      //_id: '5',
      name: 'Suéter Rojo',
      slug: 'sueter-rojo',
      category: 'Suéteres',
      image: '../frontend/public/images/Sueter Rojo.jpg',
      countInStock: 100,
      price: 24.99,
      description: 'Suéter color rojo oversize para hombres..',
    },
  ],
};

export default data;
