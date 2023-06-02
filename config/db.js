'use strict;'
//Include crypto to generate the car id
// var crypto = require('crypto');
const { getNextCarId } = require("../api/helpers/idgen");


module.exports = function() {
	return {
		carList : [],
		/*
		 * Save the car inside the "db".
		 */
		save(reqBody) {
			const car = {}
			car.id = getNextCarId();
			const { make, model, owner } = reqBody;
			car.make = make;
			car.model = model;
			car.owner = owner;
			this.carList.push(car);
			return 1;			
		},
		/*
		 * Retrieve a car with a given id or return all the cars if the id is undefined.
		 */
		find(id) {
			if(id) {
				return this.carList.find(element => {
						return element.id === id;
					});	
			}else {
				return this.carList;
			}
		},
		/*
		 * Delete a car with the given id.
		 */
		remove(id) {
			var found = 0;
			this.carList = this.carList.filter(element => {
					if(element.id === id) {
						found = 1;
					}else {
						return element.id !== id;
					}
				});
			return found;			
		},
		/*
		 * Update a car with the given id
		 */
		update(id, car) {
			const carToUpdate = this.carList.find(car => car.id === id);
			if(carToUpdate) {
				carToUpdate.owner = car.owner;
				carToUpdate.make = car.make;
				carToUpdate.model = car.model;
				return 1;
			}else {
				return 0;
			}
		}		
	}
};  
