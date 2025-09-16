const userRepository = require("../repositories/userRepository");

class UserService {
    createUser(userData) {
        // Aqui poderia haver validações de negócio, como verificar se o email já existe
        if (!userData.name || !userData.email) {
            throw new Error("Nome e email são obrigatórios.");
        }
        return userRepository.create(userData);
    }
    
    getAllUsers() {
        return userRepository.findAll();
    }
    
    getUserById(id) {
        const user = userRepository.findById(parseInt(id));
        if (!user) {
            throw new Error("Usuário não encontrado.");
        }
        return user;
    }
    
    updateUser(id, userData) {
        // Validações de negócio antes de atualizar
        if (!userData.name && !userData.email) {
            throw new Error("Pelo menos um campo (nome ou email) deve ser fornecido para atualização.");
        }
        const updatedUser = userRepository.update(parseInt(id), userData);
        if (!updatedUser) {
            throw new Error("Usuário não encontrado para atualização.");
        }
        return updatedUser;
    }
    
    deleteUser(id) {
        const deleted = userRepository.delete(parseInt(id));
        if (!deleted) {
            throw new Error("Usuário não encontrado para exclusão.");
        }
        return { message: "Usuário deletado com sucesso." };
    }
}

module.exports = new UserService();