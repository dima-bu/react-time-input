const testIsValid = [
    {
        value: '1:',
        valid: true,
        text: 'is valid'
    },
    {
        value: '12:12',
        valid: true,
        text: 'is valid'
    },
    {
        value: '23:14',
        valid: true,
        text: 'is valid'
    },
    {
        value: '23:14',
        valid: true,
        text: 'is valid'
    },
    {
        value: '19:99',
        valid: false,
        text: 'is invalid'
    },
    {
        value: '44:12',
        valid: false,
        text: 'is invalid'
    },
    {
        value: '00:00',
        valid: true,
        text: 'is valid'
    },
    {
        value: '44:1',
        valid: false,
        text: 'is invalid'
    },
    {
        value: '4',
        valid: true,
        text: 'is invalid'
    },
    {
        value: '00:',
        valid: true,
        text: 'is valid'
    },
    {
        value: '00:78',
        valid: false,
        text: 'is invalid'
    },
    {
        value: '23:6',
        valid: false,
        text: 'is invalid'
    },
    {
        value: '0',
        valid: true,
        text: 'is valid'
    },
        {
        value: '23:3',
        valid: true,
        text: 'is valid'
    },
    {
        value: '23:59',
        valid: true,
        text: 'is valid'
    },
    {
        value: '2:59',
        valid: true,
        text: 'is valid'
    },
    {
        value: ':21',
        valid: true,
        text: 'is valid'
    },
    {
        value: '6:21',
        valid: true,
        text: 'is valid'
    }

]

export default testIsValid