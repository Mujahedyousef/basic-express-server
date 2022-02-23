const validator = require("../src/middleware/validator")
describe('test validator middleware', () => {
    
    let req = {}
    let res = {}
    let next = jest.fn();


    it('tests next with input query ', () => {
        req.query={
            name:test
        }
        validator(req,res,next)
        expect(next).toHaveBeenCalled();
    })
    it('tests next without input query', () => {
        validator(req,res,next)
        expect(next).toHaveBeenCalled();
    })
})

