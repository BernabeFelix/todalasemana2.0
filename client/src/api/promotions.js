const fakePromotions = [
  {
    description:
      'Im the description, Im the description, Im the description, Im the description, Im the description, ' +
      'Im the description, Im the description, Im the description, Im the description, Im the description, ' +
      'Im the description, Im the description',
    id: 1,
    isActive: true,
    imgUrl: 'https://placebear.com/200/100',
    title: 'Im the title 1',
    company: {
      id: '0',
      name: 'Pizza Hut',
      slugName: 'pizza-hut'
    }
  },
  {
    id: 2,
    isActive: true,
    title: 'Im the title 2',
    description: 'Im the description',
    imgUrl: 'https://placebear.com/200/100',
    company: {
      id: '0',
      name: "Domino's",
      slugName: 'dominos'
    }
  },
  {
    id: 3,
    isActive: false,
    title: 'Im the title 3',
    description: 'Im the description',
    imgUrl: 'https://placebear.com/200/100',
    company: {
      id: '1',
      name: "Little Caesar's",
      slugName: 'little-caesars'
    }
  },
  {
    id: 4,
    isActive: false,
    title: 'Im the title 4',
    description: 'Im the description',
    imgUrl: 'https://placebear.com/200/100',
    company: {
      id: '2',
      name: "Torino's Pizza",
      slugName: 'torinos'
    }
  }
];

export default fakePromotions;
