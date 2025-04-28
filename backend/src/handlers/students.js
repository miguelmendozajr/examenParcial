class StudentHttpHandler {
    constructor(studentController) {
      this.studentController = studentController;
    }
  
    async logStudent(req, res) {
      const { username, password } = req.body;  
      try {
        const data = await this.studentController.getStudent(username, password);
        res.json(data);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    }
  
  }
  
  // Export the class directly
  module.exports = StudentHttpHandler;
  