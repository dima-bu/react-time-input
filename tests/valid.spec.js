import testIsValid from '../src/testValues/isValidValues.js'
import {isValid} from '../src/validate'

describe('Check function isValid', function () {
    testIsValid.forEach(function(test) {
        it(test.value + ' - Should be '+ test.text, function() {
            expect(isValid(test.value)).toBe(test.valid);
        })
    });

});