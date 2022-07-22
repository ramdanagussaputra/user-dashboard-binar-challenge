const router = require('express').Router();

const apiController = require('../controller/apiController');

// prettier-ignore
router
    .route('/')
    .post(apiController.addNewUser)
    .get(apiController.getAllUser);

// prettier-ignore
router
    .route('/:id')
    .get(apiController.getUser)
    .patch(apiController.updateUser)
    .delete(apiController.deleteUser);

module.exports = router;
