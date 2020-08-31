import users from './users.js';

const getSortedUniqueSkills = users => 
   users.reduce((acc, {skills}) => acc.concat(skills), [])
   .filter((skill, index, skills) => index == skills.indexOf(skill))
  .sort();
  
  console.log(getSortedUniqueSkills(users));
  // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]


