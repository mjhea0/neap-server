(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const coffeeRoutes = require('../routes/coffee');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/coffee', coffeeRoutes);

  };

})(module.exports);
