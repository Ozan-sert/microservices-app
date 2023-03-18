"use strict";
exports.__esModule = true;
exports.validateRequest = void 0;
var express_validator_1 = require("express-validator");
var request_validation_error_1 = require("../errors/request-validation-error");
var validateRequest = function (req, res, next) {
    var errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        throw new request_validation_error_1.RequestValidationError(errors.array());
    }
    next();
};
exports.validateRequest = validateRequest;
