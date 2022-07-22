const User = require('../model/userModel');

// CREATE DATA
exports.addNewUser = async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.redirect('/add-user');
    }
};

// GET ALL DATA
exports.getAllUser = async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: 'success',
            data: {
                users,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(404).json({
            status: 'fail',
            message: 'Invalid Data Input',
        });
    }
};

// GET ONE DATA
exports.getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.findById(id);

        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(404).json({
            status: 'fail',
            message: 'Invalid Data Input',
        });
    }
};

// UPDATE DATA
exports.updateUser = async (req, res) => {
    try {
        const id = req.params.id;

        const user = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status: 'success',
            data: {
                user,
            },
        });
    } catch (err) {
        console.error(err);
        res.status(404).json({
            status: 'fail',
            message: 'Invalid Data Input',
        });
    }
};

// DELETE DATA
exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        await User.findByIdAndDelete(id);

        res.status(204).json({
            status: 'success',
            data: null,
        });
    } catch (err) {
        console.error(err);
        res.status(404).json({
            status: 'fail',
            message: 'Invalid Data Input',
        });
    }
};
