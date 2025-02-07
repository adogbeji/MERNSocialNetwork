const bcrypt = require('bcryptjs');

export const hashPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.getSalt(12, (err, salt) => {
            if (err) {
                reject(err);
            }
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) {
                    resolve(err);
                }
                resolve(hash);
            });
        });
    });
};

export const comparePassword = (password, hashed) => {
    return bcrypt.compare(password, hashed);
};