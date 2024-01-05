// Return current date (ddmmyyyy)
module.exports = function () {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear().toString();
    return day + month + year;
  };
  