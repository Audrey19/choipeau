const houses = ['Serpentard', 'Griffondor', 'Serdaigle', 'Pouffsoufle'];

/*Option 1 - change toute les secondes de maison

const reducers = (state = {houses : houses}, action) => ({
...state,
selectedHouses: houses[Math.floor(Math.random() * 4)]
});*/

/*option 2 - change de maison à chaque update*/
const reducers = (state = {houses : houses}, action) => {
    switch (action.type) {
      case 'UPDATE_CHOICE_WITH_MY_INDEX':
        return {
          houses,
          selectedHouses: houses[action.indexSelected]
        }
      default:
        return {
          houses,
          selectedHouses: houses[Math.floor(Math.random() * 4)]
        }
    }
  }

export default reducers;

