const houses = ['Serpentard', 'Griffondor', 'Serdaigle', 'Pouffsoufle'];

const reducers = (state = {houses : houses}, action) => ({
...state,
selectedHouses: houses[Math.floor(Math.random() * 4)]
});

export default reducers;

