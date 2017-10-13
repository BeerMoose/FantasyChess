import classes from '../model/classes';

let units = [
  {
    name: 'Phoenix',
    class: classes.FIRE,
    pictUrl: '../../../styles/images/phoenix.svg',
    hp: 100,
    lvl: 1,
    def: 50,
    skills: [1, 2]
  },
  {
    name: 'Tiny',
    class: classes.EARTH,
    pictUrl: '../../../styles/images/tiny.svg',
    hp: 200,
    lvl: 1,
    def: 75,
    skills: [1, 2]
  },
  {
    name: 'Poseidon',
    class: classes.WATER,
    pictUrl: '../../../styles/images/poseidon.svg',
    hp: 150,
    lvl: 1,
    def: 40,
    skills: [1, 2]
  },
  {
    name: 'Wind',
    class: classes.AIR,
    pictUrl: '../../../styles/images/wind.svg',
    hp: 50,
    lvl: 1,
    def: 20,
    skills: [1, 2]
  }
];

export default units;
