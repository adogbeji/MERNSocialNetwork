// export const register = (req, res) => {
//     console.log('REGISTER ENDPOINT => ', req.body);
// };

exports.register = (req, res) => {
    // console.log('REGISTER ENDPOINT => ', req.body);
    const { name, email, password, secret } = req.body;

    // Validation
    if (!name) return res.status(400).send('Name is required');
    if (!password || password.length < 6) 
        return res
            .status(400)
            .send('Password is required and should be at least 6 characters long');
    
    if (!secret) return res.status(400).send('Answer is required');
};