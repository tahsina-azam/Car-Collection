'use strict'

var initialId = 0;

function getNextCarId() {
    initialId = initialId + 1;
    return initialId;
}

module.exports = { getNextCarId }
