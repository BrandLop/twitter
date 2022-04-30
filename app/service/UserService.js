const User = require('./../models/User')

class UserService {
	static create(id, username, name) { 
		return new User(id, username, name, "Sin bio")
	}

	static getInfo(user) {
		return Object.values(user)
	}

	static updateUsername(user, newUsername) {
		user.setUsername = newUsername
	}

	static getAllUsernames(users) {
		const usernames = users.map((user) => user.getUsername)
		return usernames

	}
}
// Requerimiento 4: Agregar un nuevo método estático en `UserService` llamado `getAllUsernames`, que recibirá una lista de objetos de la clase `User`, y regresará la lista de todos los usernames de dichos objetos.
module.exports = UserService