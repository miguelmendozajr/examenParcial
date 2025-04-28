class DBService {
    constructor() {
      this.initialized = false;
    }
  
    async getStudent(_studentUsername) {
      if (!this.initialized) {
        throw new Error('Service not initialized');
      }
      throw new Error('Method not implemented');
    }
  
  }
  
  module.exports = DBService;
  