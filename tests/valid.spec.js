import timeInput from '../src/timeInput.jsx';
import testIsValid from '../src/testValues/isValidValues.js';

describe('Проверка функции isValid компонета timeInput', function () {

    testIsValid.forEach(function(test) {
        it(test.value + ' - Должно быть '+ test.text, function() {
            expect(timeInput.prototype.isValid(test.value)).to.equal(test.valid);
        })
    });

});