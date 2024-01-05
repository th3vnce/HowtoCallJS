// Return the result of the specified command
module.exports = function () {
    const { execSync } = require('child_process');
    try {
      const result = execSync('curl http://ipv4.icanhazip.com/').toString().trim();
      return result;
    } catch (error) {
      return 'Error fetching IP';
    }
  };
  