const ConvertTime = require('../clock');

describe('Convert Time', () => {
    it('returns converted time from 5 hours and 47 minutes', () => {
        expect(ConvertTime(5,47)).toEqual('thirteen minutes to six')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 3 hours and 0 minutes', () => {
        expect(ConvertTime(3,0)).toEqual("three o' clock")
    })
})

describe('Convert Time', () => {
    it('returns converted time from 7 hours and 29 minutes', () => {
        expect(ConvertTime(7,29)).toEqual('twenty nine minutes past seven')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 5 hours and 30 minutes', () => {
        expect(ConvertTime(5,30)).toEqual('half past five')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 5 hours and 45 minutes', () => {
        expect(ConvertTime(5,45)).toEqual('quarter to six')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 4 hours and 15 minutes', () => {
        expect(ConvertTime(4,15)).toEqual('quarter past four')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 6 hours and 35 minutes', () => {
        expect(ConvertTime(6,35)).toEqual('twenty five minutes to seven')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 3 hours and 30 minutes', () => {
        expect(ConvertTime(3,30)).toEqual('half past three')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 10 hours and 57 minutes', () => {
        expect(ConvertTime(10,57)).toEqual('three minutes to eleven')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 1 hours and 1 minutes', () => {
        expect(ConvertTime(1,1)).toEqual('one minute past one')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 7 hours and 15 minutes', () => {
        expect(ConvertTime(7,15)).toEqual('quarter past seven')
    })
})

describe('Convert Time', () => {
    it('returns converted time from 12 hours and 45 minutes', () => {
        expect(ConvertTime(12,45)).toEqual('quarter to one')
    })
})