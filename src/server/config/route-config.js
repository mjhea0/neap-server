(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const coffeeRoutes = require('../routes/coffee');
    const userRoutes = require('../routes/user');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/coffee', coffeeRoutes);
    app.use('/user', userRoutes);

  };

})(module.exports);
