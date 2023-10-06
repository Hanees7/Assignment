const express = require('express');
const V1apiRoutes = require('./v1/index');
const router = express.Router();

router.use('/v1' , V1apiRoutes);

module.exports = router;