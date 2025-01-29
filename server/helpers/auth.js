const bcrypt = require('bcryptjs');

export const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.getSalt(12, );
    });
};