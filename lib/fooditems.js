/**
 *
 * @namespace faker.fooditems
 */
var fooditems = function (faker) {
    var self = this;
  
    /**
     * 
     *
     * @method faker.fooditems.veg
     */
    self.veg= function() {
        return faker.random.arrayElement(faker.definitions.fooditems.veg);
    };
  
    /**
     * nonveg
     *
     * @method faker.fooditems.nonveg
     */
    self.nonveg= function() {
        return faker.random.arrayElement(faker.definitions.fooditems.nonveg);
    };
  
     /**
     * fastfood
     *
     * @method faker.fooditems.fastfood
     */
    self.fastfood= function() {
        return faker.random.arrayElement(faker.definitions.fooditems.fastfood);
    };
  
    /**
     * fruits
     *
     * @method faker.fooditems.fruits
     */
    self.fruits= function() {
        return faker.random.arrayElement(faker.definitions.fooditems.fruits);
    };
  
  };
  
  module['exports'] = fooditems;
  