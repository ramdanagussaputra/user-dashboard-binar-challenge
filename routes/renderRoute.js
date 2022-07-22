const router = require('express').Router();

const renderController = require('../controller/renderController');

// RENDER DASHBOARD
// prettier-ignore
router
    .route('/')
    .get(renderController.renderDashboard);

// RENDER NEW USER FORM
// prettier-ignore
router
    .route('/add-user')
    .get(renderController.renderNewUser)

// RENDER UPDATE USER FORM
// prettier-ignore
router
    .route('/update-user')
    .get(renderController.renderUpdateUser)

module.exports = router;
