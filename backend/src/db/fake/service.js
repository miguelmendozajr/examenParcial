const DBService = require('../dbService');

class FakeService extends DBService {
  constructor() {
    super();
    this.students = new Map();
    const dummyStudents = [
      { usuario: 'ana.t', contrasena: 'libro123', nombre: 'Ana Torres', libroFavorito: 'Cien Años de Soledad' },
      { usuario: 'marco.r', contrasena: 'lectura456', nombre: 'Marco Ramírez', libroFavorito: 'El Principito' },
      { usuario: 'sofia.m', contrasena: 'novela789', nombre: 'Sofía Morales', libroFavorito: 'Orgullo y Prejuicio' }
    ];

    dummyStudents.forEach((student) => {
      this.students.set(student.usuario, student);
    });
  }

  async getStudent(studentUsername) {
    return this.students.get(studentUsername);
  }

}

module.exports = FakeService;