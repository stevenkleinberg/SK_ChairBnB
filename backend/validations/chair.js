const { check } = require('express-validator');
const { handleValidationErrors } = require('../utils/validation');

const name = check('name')
    .notEmpty()
    .withMessage('MUST HAVE NAME');
const description = check('description')
    .notEmpty()
    .withMessage('cannot be empty');
const address = check('address')
    .notEmpty()
    .withMessage('cannot be empty');
const city = check('city')
    .notEmpty()
    .withMessage('cannot be empty');
const state = check('state')
    .notEmpty()
    .withMessage('cannot be empty');
const country = check('country')
    .notEmpty()
    .withMessage('cannot be empty');
const price = check('price')
    .notEmpty()
    .withMessage('cannot be empty')
    .isInt({ min: 1 })
    .withMessage('Price must be greater than 0');
const url = check('url')
    .notEmpty()
    .withMessage('cannot be empty')
    .isURL({ require_protocol: false, require_host: false })
    .withMessage('Must be valid Url')

    exports.validateChairCreate = [
        name,
        description,
        address,
        city,
        state,
        country,
        price,
        url,
        handleValidationErrors
      ];

      exports.validateChairUpdate = [
        name,
        description,
        address,
        city,
        state,
        country,
        price,
        handleValidationErrors
      ];
