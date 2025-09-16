// Simula um banco de dados em memória
let users = [];
let currentId = 1;

class UserRepository {
    create(user) {
        const newUser = { id: currentId++, ...user };
        users.push(newUser);
        return newUser;
    }
    
    findAll() {
        return users;
    }
    
    findById(id) {
        return users.find(user => user.id === id);
    }
    
    update(id, updatedUser) {
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = {
                ...users[index],
                ...updatedUser,
                id: id
            };
            return users[index];
        }
        return null;
    }
    
    delete(id) {
        const initialLength = users.length;
        users = users.filter(user => user.id !== id);
        // Retorna true se um usuário foi deletado
        return users.length < initialLength;
    }
}

module.exports = new UserRepository();