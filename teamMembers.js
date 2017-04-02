'use strict';

const Immutable = require('immutable');

const teamMembers = Immutable.List([
    {
        name: 'John Doe',
        email: 'john.doe@domain.com'
    },
    {
        name: 'John Doersy',
        email: 'john.doersy@domain.com'
    }
]);

module.exports = teamMembers;