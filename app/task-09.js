import users from './users.js';

const getNamesSortedByFriendsCount = users => {
    users.sort((a, b) => b.friends.length - a.friends.length);
    return users.map(user => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users));
  // [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]