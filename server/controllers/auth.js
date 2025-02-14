// export const register = (req, res) => {
//     console.log('REGISTER ENDPOINT => ', req.body);
// };

exports.register = (req, res) => {
    // console.log('REGISTER ENDPOINT => ', req.body);
    const { name, email, password, secret } = req.body;

    // Validation
    if (!name) return res.status(400).send('Name is required');
};