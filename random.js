const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const length = chars.length;

function random(len) {
  len = len || 10;
  var salt = '';
  for (var i = 0; i < len; i++) {
    salt += chars[Math.floor(length * Math.random())];
  }
  return salt;
}

exports.random = random;
