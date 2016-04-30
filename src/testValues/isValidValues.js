var testIsValid = [
    {
        value: '12:12',
        valid: true,
        text: 'валидно'
    },
    {
        value: '23:14',
        valid: true,
        text: 'валидно'
    },
    {
        value: '23:14',
        valid: true,
        text: 'валидно'
    },
    {
        value: '19:99',
        valid: false,
        text: 'не валидно'
    },
    {
        value: '44:12',
        valid: false,
        text: 'не валидно'
    },
    {
        value: '00:00',
        valid: true,
        text: 'валидно'
    },
    {
        value: '44:1',
        valid: false,
        text: 'не валидно'
    },
    {
        value: '4',
        valid: false,
        text: 'не валидно'
    },
    {
        value: '00:',
        valid: true,
        text: 'валидно'
    },
    {
        value: '00:78',
        valid: false,
        text: 'не валидно'
    },
    {
        value: '23:6',
        valid: false,
        text: 'не валидно'
    },
    {
        value: '0',
        valid: true,
        text: 'валидно'
    }

]


export default testIsValid;