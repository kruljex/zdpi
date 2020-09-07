const pool = require('../config/db');

exports.writeConf = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { email, konf } = data;

      await pool.query(
        'INSERT INTO konfiguracije ( email, konfiguracija) VALUES (?, ?)',
        [email, konf],
        (error, results, fields) => {
          if (error) {
            console.log(error);
            return reject(error);
          }
          //console.log(results);
          resolve(results);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

exports.getConfs = () => {
  return new Promise(async (resolve, reject) => {
    try {
      pool.query(
        'SELECT * FROM konfiguracije',
        [],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};

exports.getConf = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      pool.query(
        'SELECT * FROM konfiguracije WHERE ID=?',
        [id],
        (error, results, fields) => {
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    } catch (error) {
      reject(error);
    }
  });
};
