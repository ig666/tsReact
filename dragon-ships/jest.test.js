// jest测试框架试水

test('own number',()=>{
    expect(1+1).toBe(2)
})

test('more than number',()=>{
    expect(1+3).toBeLessThan(7)
})

test('object', () => {
    expect({name: 'viking'}).toEqual({name: 'viking'})
  })