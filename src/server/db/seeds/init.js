exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('coffee').del()
  .then(() => {
    return Promise.all([
      // Inserts seed entries
      knex('coffee').insert({
        name: 'french',
        roaster:'folgers',
        origin: 'france',
        roast: 'dark',
        caffeine: 100,
        decaf: false,
        price: 6,
        quantity: 1
      }),
      knex('coffee').insert({
        name: 'sumatra',
        roaster:'folgers',
        origin: 'peru',
        roast: 'dark',
        caffeine: 100,
        decaf: false,
        price: 19,
        quantity: 1
      }),
      knex('coffee').insert({
        name: 'bazingo',
        roaster:'folgers',
        origin: 'mexico',
        roast: 'dark',
        caffeine: 100,
        decaf: false,
        price: 8,
        quantity: 1
      }),
      knex('coffee').insert({
        name: 'toffee',
        roaster:'folgers',
        origin: 'colombia',
        roast: 'dark',
        caffeine: 100,
        decaf: false,
        price: 9,
        quantity: 1
      }),
      knex('coffee').insert({
        name: 'breakfast',
        roaster:'folgers',
        origin: 'pakistan',
        roast: 'dark',
        caffeine: 100,
        decaf: false,
        price: 9,
        quantity: 1
      })
    ]);
  });
};
