const { getAge, getUUID } = require('./adapters');

const { buildMakePerson } = require('./examples/factory')
const getPokemonById = require('./examples/testHTTP');


getPokemonById(4)
  .then( ( pokemon ) => console.log({ pokemon }) )
  .catch( ( err ) => console.log( err ) )
  .finally( () => console.log('Finalmente') );


const makePerson = buildMakePerson({ getUUID, getAge });
const obj = { name: 'John', birthdate: '1985-10-21' };
const john = makePerson( obj );
console.log({ john });






