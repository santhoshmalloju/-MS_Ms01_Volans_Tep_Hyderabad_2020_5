// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
console.log(faker.fooditems.nonveg());
console.log(faker.fooditems.veg());
console.log(faker.fooditems.fruits());
console.log(faker.fooditems.fastfood());