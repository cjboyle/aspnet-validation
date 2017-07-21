var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Contains default implementations for ASP.NET Core MVC validaion attributes.
     */
    var MvcValidationProviders = (function () {
        function MvcValidationProviders() {
            /**
             * Validates whether the input has a value.
             */
            this.required = function (value, element, params) {
                return Boolean(value);
            };
            /**
             * Validates whether the input value satisfies the length contstraint.
             */
            this.stringLength = function (value, element, params) {
                if (!value) {
                    return true;
                }
                if (params.min) {
                    var min = parseInt(params.min);
                    if (value.length < min) {
                        return false;
                    }
                }
                if (params.max) {
                    var max = parseInt(params.max);
                    if (value.length > max) {
                        return false;
                    }
                }
                return true;
            };
            /**
             * Validates whether the input value is equal to another input value.
             */
            this.compare = function (value, element, params) {
                if (!params.other) {
                    return true;
                }
                // Sample other parameter: "*.Name"
                // Wat?
                var otherElement = document.getElementById(params.other.substr(2));
                if (!otherElement) {
                    return true;
                }
                return (otherElement.value === value);
            };
            /**
             * Validates whether the input value is a number within a given range.
             */
            this.range = function (value, element, params) {
                if (!value) {
                    return true;
                }
                var val = parseFloat(value);
                if (isNaN(val)) {
                    return false;
                }
                if (params.min) {
                    var min = parseFloat(params.min);
                    if (val < min) {
                        return false;
                    }
                }
                if (params.max) {
                    var max = parseFloat(params.max);
                    if (val > max) {
                        return false;
                    }
                }
                return true;
            };
            /**
             * Validates whether the input value satisfies a regular expression pattern.
             */
            this.regex = function (value, element, params) {
                if (!value || !params.pattern) {
                    return true;
                }
                var r = new RegExp(params.pattern);
                return r.test(value);
            };
            /**
             * Validates whether the input value is an email in accordance to RFC822 specification, with a top level domain.
             */
            this.email = function (value, element, params) {
                if (!value) {
                    return true;
                }
                // RFC822 email address with .TLD validation
                // (c) Richard Willis, Chris Ferdinandi, MIT Licensed
                // https://gist.github.com/badsyntax/719800
                // https://gist.github.com/cferdinandi/d04aad4ce064b8da3edf21e26f8944c4
                var r = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
                return r.test(value);
            };
            /**
             * Validates whether the input value is a credit card number, with Luhn's Algorithm.
             */
            this.creditcard = function (value, element, params) {
                if (!value) {
                    return true;
                }
                // (c) jquery-validation, MIT Licensed
                // https://github.com/jquery-validation/jquery-validation/blob/master/src/additional/creditcard.js
                // based on https://en.wikipedia.org/wiki/Luhn_algorithm
                // Accept only spaces, digits and dashes
                if (/[^0-9 \-]+/.test(value)) {
                    return false;
                }
                var nCheck = 0, nDigit = 0, bEven = false, n, cDigit;
                value = value.replace(/\D/g, "");
                // Basing min and max length on https://developer.ean.com/general_info/Valid_Credit_Card_Types
                if (value.length < 13 || value.length > 19) {
                    return false;
                }
                for (n = value.length - 1; n >= 0; n--) {
                    cDigit = value.charAt(n);
                    nDigit = parseInt(cDigit, 10);
                    if (bEven) {
                        if ((nDigit *= 2) > 9) {
                            nDigit -= 9;
                        }
                    }
                    nCheck += nDigit;
                    bEven = !bEven;
                }
                return (nCheck % 10) === 0;
            };
            /**
             * Validates whether the input value is a URL.
             */
            this.url = function (value, element, params) {
                if (!value) {
                    return true;
                }
                // (c) Diego Perini, MIT Licensed
                // https://gist.github.com/dperini/729294
                var r = new RegExp("^" +
                    // protocol identifier
                    "(?:(?:https?|ftp)://)" +
                    // user:pass authentication
                    "(?:\\S+(?::\\S*)?@)?" +
                    "(?:" +
                    // IP address exclusion
                    // private & local networks
                    "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +
                    "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +
                    "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +
                    // IP address dotted notation octets
                    // excludes loopback network 0.0.0.0
                    // excludes reserved space >= 224.0.0.0
                    // excludes network & broacast addresses
                    // (first & last IP address of each class)
                    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
                    "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
                    "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
                    "|" +
                    // host name
                    "(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)" +
                    // domain name
                    "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*" +
                    // TLD identifier
                    "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" +
                    // TLD may end with dot
                    "\\.?" +
                    ")" +
                    // port number
                    "(?::\\d{2,5})?" +
                    // resource path
                    "(?:[/?#]\\S*)?" +
                    "$", "i");
                return r.test(value);
            };
            /**
             * Validates whether the input value is a phone number.
             */
            this.phone = function (value, element, params) {
                if (!value) {
                    return true;
                }
                // Allows whitespace or dash as number separator because some people like to do that...
                var consecutiveSeparator = /[\+\-\s][\-\s]/g;
                if (consecutiveSeparator.test(value)) {
                    return false;
                }
                var r = /^\+?[0-9\-\s]+$/;
                return r.test(value);
            };
            /**
             * Asynchronously validates the input value to a JSON GET API endpoint.
             */
            this.remote = function (value, element, params) {
                if (!value) {
                    return true;
                }
                return new Promise(function (ok, reject) {
                    var url = params['url'] + '?' + element.name + '=' + encodeURIComponent(value);
                    // params.additionalfields: *.Email,*.Username
                    var xtras = params.additionalfields.split(',');
                    for (var i = 0; i < xtras.length; i++) {
                        var xtra = xtras[i].substr(2);
                        if (xtra === element.name) {
                            continue;
                        }
                        var e = document.getElementById(xtra);
                        if (!e || !e.value) {
                            continue;
                        }
                        url = url + '&' + e.name + '=' + encodeURIComponent(e.value);
                    }
                    var request = new XMLHttpRequest();
                    request.open('get', url);
                    request.onload = function (e) {
                        if (request.status >= 200 && request.status < 300) {
                            var data = JSON.parse(request.responseText);
                            ok(data);
                        }
                        else {
                            reject({
                                status: request.status,
                                statusText: request.statusText,
                                data: request.responseText
                            });
                        }
                    };
                    request.onerror = function (e) {
                        reject({
                            status: request.status,
                            statusText: request.statusText,
                            data: request.responseText
                        });
                    };
                    request.send();
                });
            };
        }
        return MvcValidationProviders;
    }());
    exports.MvcValidationProviders = MvcValidationProviders;
    /**
     * Responsibles for managing the DOM elements and running the validation providers.
     */
    var ValidationService = (function () {
        function ValidationService() {
            /**
             * A key-value collection of loaded validation plugins.
             */
            this.providers = {};
            /**
             * A key-value collection of <span> elements for displaying validation messages for an input (by DOM ID).
             */
            this.messageFor = {};
            /**
             * A list of managed elements, each having a randomly assigned unique identifier (UID).
             */
            this.elementUIDs = [];
            /**
             * A key-value collection of input UIDs for a <form> UID.
             */
            this.formInputs = {};
            /**
             * A key-value map for input UID to its validator factory.
             */
            this.validators = {};
            /**
             * A key-value map for element UID to its trigger element (submit event for <form>, input event for <textarea> and <input>).
             */
            this.elementEvents = {};
            /**
             * A key-value map of input UID to its validation error message.
             */
            this.summary = {};
            /**
             * In milliseconds, the rate of fire of the input validation.
             */
            this.debounce = 300;
        }
        /**
         * Registers a new validation plugin of the given name, if not registered yet.
         * Registered plugin validates inputs with data-val-[name] attribute, used as error message.
         * @param name
         * @param callback
         */
        ValidationService.prototype.addProvider = function (name, callback) {
            if (this.providers[name]) {
                // First-Come-First-Serve validation plugin design.
                // Allows developers to override the default MVC Providers by adding custom providers BEFORE bootstrap() is called!
                return;
            }
            this.providers[name] = callback;
        };
        /**
         * Registers the default providers for enabling ASP.NET Core MVC client-side validation.
         */
        ValidationService.prototype.addMvcProviders = function () {
            var mvc = new MvcValidationProviders();
            // [Required]
            this.addProvider('required', mvc.required);
            // [StringLength], [MinLength], [MaxLength]
            this.addProvider('length', mvc.stringLength);
            // [Compare]
            this.addProvider('equalto', mvc.compare);
            // [Range]
            this.addProvider('range', mvc.range);
            // [RegularExpression]
            this.addProvider('regex', mvc.regex);
            // [CreditCard]
            this.addProvider('creditcard', mvc.creditcard);
            // [EmailAddress]
            this.addProvider('email', mvc.email);
            // [Url]
            this.addProvider('url', mvc.url);
            // [Phone]
            this.addProvider('phone', mvc.phone);
            // [Remote]
            this.addProvider('remote', mvc.remote);
        };
        /**
         * Scans document for all validation message <span> generated by ASP.NET Core MVC, then tracks them.
         */
        ValidationService.prototype.scanMessages = function () {
            var validationMessageElements = document.querySelectorAll('[data-valmsg-for]');
            for (var i = 0; i < validationMessageElements.length; i++) {
                var e = validationMessageElements[i];
                var id = e.getAttribute('data-valmsg-for');
                if (!this.messageFor[id]) {
                    this.messageFor[id] = [];
                }
                this.messageFor[id].push(e);
            }
        };
        /**
         * Given attribute map for an HTML input, returns the validation directives to be executed.
         * @param attributes
         */
        ValidationService.prototype.parseDirectives = function (attributes) {
            var directives = {};
            var validationAtributes = {};
            var cut = 'data-val-'.length;
            for (var i = 0; i < attributes.length; i++) {
                var a = attributes[i];
                if (a.name.indexOf('data-val-') === 0) {
                    var key = a.name.substr(cut);
                    validationAtributes[key] = a.value;
                }
            }
            var _loop_1 = function (key) {
                if (key.indexOf('-') === -1) {
                    var parameters = Object.keys(validationAtributes).filter(function (Q) {
                        return (Q !== key) && (Q.indexOf(key) === 0);
                    });
                    var directive = {
                        error: validationAtributes[key],
                        params: {}
                    };
                    var pcut = (key + '-').length;
                    for (var i = 0; i < parameters.length; i++) {
                        var pvalue = validationAtributes[parameters[i]];
                        var pkey = parameters[i].substr(pcut);
                        directive.params[pkey] = pvalue;
                    }
                    directives[key] = directive;
                }
            };
            for (var key in validationAtributes) {
                _loop_1(key);
            }
            // console.log(directives);
            return directives;
        };
        /**
         *  Returns an RFC4122 version 4 compliant GUID.
         */
        ValidationService.prototype.guid4 = function () {
            // (c) broofa, MIT Licensed
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript/2117523#2117523
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        /**
         * Gets a UID for an DOM element.
         * @param node
         */
        ValidationService.prototype.getElementUID = function (node) {
            var x = this.elementUIDs.filter(function (e) {
                return e.node === node;
            })[0];
            if (x) {
                return x.uid;
            }
            var uid = this.guid4();
            this.elementUIDs.push({
                node: node,
                uid: uid
            });
            return uid;
        };
        /**
         * Returns a Promise that returns validation result for each and every inputs within the form.
         * @param formUID
         */
        ValidationService.prototype.getFormValidationTask = function (formUID) {
            var formInputUIDs = this.formInputs[formUID];
            if (!formInputUIDs || formInputUIDs.length === 0) {
                return null;
            }
            var formValidators = [];
            for (var i = 0; i < formInputUIDs.length; i++) {
                var inputUID = formInputUIDs[i];
                formValidators.push(this.validators[inputUID]);
            }
            var tasks = formValidators.map(function (factory) { return factory(); });
            return Promise.all(tasks).then(function (result) { return result.every(function (e) { return e; }); });
        };
        /**
         * Tracks a <form> element as parent of an input UID. When the form is submitted, attempts to validate the said input asynchronously.
         * @param form
         * @param inputUID
         */
        ValidationService.prototype.trackFormInput = function (form, inputUID) {
            var _this = this;
            var formUID = this.getElementUID(form);
            if (!this.formInputs[formUID]) {
                this.formInputs[formUID] = [];
            }
            var add = (this.formInputs[formUID].indexOf(inputUID) === -1);
            if (add) {
                this.formInputs[formUID].push(inputUID);
            }
            if (this.elementEvents[formUID]) {
                return;
            }
            var cb = function (e) {
                var validate = _this.getFormValidationTask(formUID);
                if (!validate) {
                    return;
                }
                e.preventDefault();
                validate.then(function (success) {
                    if (success) {
                        form.submit();
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            };
            form.addEventListener('submit', cb);
            this.elementEvents[formUID] = cb;
        };
        /**
         * Adds an input element to be managed and validated by the service.
         * Triggers a debounced live validation when input value changes.
         * @param input
         */
        ValidationService.prototype.addInput = function (input) {
            var _this = this;
            var uid = this.getElementUID(input);
            var directives = this.parseDirectives(input.attributes);
            var validate = this.createValidator(input, directives);
            this.validators[uid] = validate;
            this.trackFormInput(input.form, uid);
            if (this.elementEvents[uid]) {
                return;
            }
            var delay;
            var cb = function (e) {
                var validate = _this.validators[uid];
                clearTimeout(delay);
                delay = setTimeout(validate, _this.debounce);
            };
            var isDropdown = input.tagName.toLowerCase() === 'select';
            if (isDropdown) {
                input.addEventListener('change', cb);
            }
            else {
                input.addEventListener('input', cb);
            }
            this.elementEvents[uid] = cb;
        };
        /**
         * Scans the entire document for input elements to be validated.
         */
        ValidationService.prototype.scanInputs = function () {
            var inputs = document.querySelectorAll('[data-val="true"]');
            for (var i = 0; i < inputs.length; i++) {
                var input = inputs[i];
                this.addInput(input);
            }
        };
        /**
         * Returns a <ul> element as a validation errors summary.
         */
        ValidationService.prototype.createSummaryDOM = function () {
            if (!Object.keys(this.summary).length) {
                return null;
            }
            var ul = document.createElement('ul');
            for (var key in this.summary) {
                var li = document.createElement('li');
                li.innerHTML = this.summary[key];
                ul.appendChild(li);
            }
            return ul;
        };
        /**
         * Displays validation summary to ASP.NET Core MVC designated elements, when it actually gets updated.
         */
        ValidationService.prototype.renderSummary = function () {
            var summaryElements = document.querySelectorAll('[data-valmsg-summary="true"]');
            if (!summaryElements.length) {
                return;
            }
            // Using JSON.stringify for quick and painless deep compare of simple KVP. You need to sort the keys first, tho...
            var shadow = JSON.stringify(this.summary, Object.keys(this.summary).sort());
            if (shadow === this.renderedSummaryJSON) {
                return;
            }
            // Prevents wasteful re-rendering of summary list element with identical items!
            // console.log('RENDERING VALIDATION SUMMARY');
            this.renderedSummaryJSON = shadow;
            var ul = this.createSummaryDOM();
            for (var i = 0; i < summaryElements.length; i++) {
                var e = summaryElements[i];
                e.innerHTML = '';
                if (ul) {
                    e.className = 'validation-summary-error';
                    e.appendChild(ul.cloneNode(true));
                }
                else {
                    e.className = 'validation-summary-valid';
                }
            }
        };
        /**
         * Adds an error message to an input element, which also updates the validation message elements and validation summary elements.
         * @param input
         * @param message
         */
        ValidationService.prototype.addError = function (input, message) {
            var spans = this.messageFor[input.id];
            if (spans) {
                for (var i = 0; i < spans.length; i++) {
                    spans[i].innerHTML = message;
                    spans[i].className = 'field-validation-error';
                }
            }
            input.classList.add('input-validation-error');
            var uid = this.getElementUID(input);
            this.summary[uid] = message;
            this.renderSummary();
        };
        /**
         * Removes an error message from an input element, which also updates the validation message elements and validation summary elements.
         * @param input
         */
        ValidationService.prototype.removeError = function (input) {
            var spans = this.messageFor[input.id];
            if (spans) {
                for (var i = 0; i < spans.length; i++) {
                    spans[i].innerHTML = '';
                    spans[i].className = 'field-validation-valid';
                }
            }
            input.classList.remove('input-validation-error');
            var uid = this.getElementUID(input);
            delete this.summary[uid];
            this.renderSummary();
        };
        /**
         * Returns a validation Promise factory for an input element, using given validation directives.
         * @param input
         * @param directives
         */
        ValidationService.prototype.createValidator = function (input, directives) {
            var _this = this;
            return function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, _i, key, directive, provider, result, valid, error, resolution;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _a = [];
                            for (_b in directives)
                                _a.push(_b);
                            _i = 0;
                            _c.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 7];
                            key = _a[_i];
                            directive = directives[key];
                            provider = this.providers[key];
                            if (!provider) {
                                console.log('aspnet-validation provider not implemented: ' + key);
                                return [3 /*break*/, 6];
                            }
                            result = provider(input.value, input, directive.params);
                            valid = false;
                            error = directive.error;
                            if (!(typeof result === 'boolean')) return [3 /*break*/, 2];
                            valid = result;
                            return [3 /*break*/, 5];
                        case 2:
                            if (!(typeof result === 'string')) return [3 /*break*/, 3];
                            valid = false;
                            error = result;
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, result];
                        case 4:
                            resolution = _c.sent();
                            if (typeof resolution === 'boolean') {
                                valid = resolution;
                            }
                            else {
                                valid = false;
                                error = resolution;
                            }
                            _c.label = 5;
                        case 5:
                            if (!valid) {
                                this.addError(input, error);
                                return [2 /*return*/, false];
                            }
                            _c.label = 6;
                        case 6:
                            _i++;
                            return [3 /*break*/, 1];
                        case 7:
                            this.removeError(input);
                            return [2 /*return*/, true];
                    }
                });
            }); };
        };
        /**
         * Load default validation providers and scans the entire document
         */
        ValidationService.prototype.bootstrap = function () {
            var _this = this;
            this.addMvcProviders();
            document.addEventListener('DOMContentLoaded', function (event) {
                _this.scanMessages();
                _this.scanInputs();
            });
        };
        return ValidationService;
    }());
    exports.ValidationService = ValidationService;
});
