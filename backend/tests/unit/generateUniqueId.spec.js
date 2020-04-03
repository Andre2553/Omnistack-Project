const generateUniqueId = require('../../src/utils/generateUniqueid')
describe('Generate Unique ID',()=>{
    it('should generate in unique ID',()=>{
        const id = generateUniqueId()
        expect(id).toHaveLength(8)
    })
})