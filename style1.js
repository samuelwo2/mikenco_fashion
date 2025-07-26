const jwt = require('jsonwebtoken');

function generateToken(user) {
    return jwt.sign({ id: user.id, username: user.username }, 'secret_key', { expiresIn: '1h' });
}

if (isMatch) {
    const token = generateToken(user);
    console.log('Token đăng nhập:', token);
}
