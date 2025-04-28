class StudentController {
    constructor(service) {
      this.service = service;
    }
  
    async getStudent(studentUsername, password) {
        const student = await this.service.getStudent(studentUsername);
        if (!student || student.contrasena !== password) {
            throw new Error('El usuario o la contraseña no son válidos');
        }
        return {
            nombre: student.nombre,
            libroFavorito: student.libroFavorito
        };

    }
}
  
module.exports = StudentController;