const handler = require('../handlers/configHandler');
const emailVal = require('email-validator');
exports.writeConfiguration = async (req, res) => {
  try {
    const body = req.body;
    if (emailVal.validate(body.email) === false) {
      return res.json({ success: 0, msg: 'Vnesite pravilen e-mail' });
    }
    const data = { email: body.email, konf: JSON.stringify(body.data) };

    const result = await handler.writeConf(data);

    res.json({
      success: 1,
      msg: 'Konfiguracija oddana!'
    });
  } catch (err) {
    console.log(err);
    res.json({ success: 0, msg: 'Prislo je do napake' });
  }
};

exports.getAll = async (req, res) => {
  try {
    const results = await handler.getConfs();
    res.json({ success: 1, results });
  } catch (error) {
    console.log(error);
    res.json({ success: 0, msg: 'Prislo je do napake' });
  }
};

exports.getOne = async (req, res) => {
  try {
    const results = await handler.getConf(req.params.id);
    if (results.length === 0) {
      return res.json({ success: 1, msg: 'No configurations found!' });
    }
    res.json({ success: 1, results });
  } catch (error) {
    console.log(error);
    res.json({ success: 0, msg: 'Prislo je do napake' });
  }
};
