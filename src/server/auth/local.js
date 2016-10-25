const jwt = require('jwt-simple');
const moment = require('moment');

const secret = process.env.SECRET_KEY;

function encodeToken(user) {
  const payload = {
    exp: moment().add(14, 'days'),
    iat: moment(),
    sub: user.id
  };
  return jwt.encode(payload, secret);
}

function decodeToken(token, callback) {
  const payload = jwt.decode(token, process.env.TOKEN_SECRET);
  const now = moment().unix();
  // check if the token has expired
  if (now > payload.exp) callback('Token has expired.');
  else callback(null, payload);
}

module.exports = {
  encodeToken,
  decodeToken
};
