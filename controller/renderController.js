const axios = require('axios');

exports.renderDashboard = async (req, res) => {
    try {
        const responseApi = await axios.get('http://localhost:7777/api/user');

        res.render('dashboard', { users: responseApi.data.data.users });
    } catch (err) {
        console.error(err);
    }
};

exports.renderNewUser = (req, res) => {
    res.render('addUser');
};

exports.renderUpdateUser = async (req, res) => {
    try {
        const id = req.query.id;
        const responseApi = await axios.get(`http://localhost:7777/api/user/${id}`);

        res.render('updatesUser', { user: responseApi.data.data.user });
    } catch (err) {
        console.error(err);
    }
};
