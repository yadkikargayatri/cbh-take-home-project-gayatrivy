const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});


//const mathOperations = require('./calculator');
describe("deterministicPartitionKey tests", () => {
 test('if event is null, then candidate should be 0', () => {
   // get the results
   var result = deterministicPartitionKey(Null)
 
   // assert
   expect(result).toBe("0");
 });
 
 test("when partitionKey is present in the event with length < 256, then is should be returned as candidate", () => {
   // partitionKey is of type string
   var event = {partitionKey:"1234"}
   var result = deterministicPartitionKey(event)
 
   // assert
   expect(result).toBe("1234");
   
   // partitionKey is not of type string
   var event = {partitionKey:1234}
   var result = deterministicPartitionKey(event)
 
   // assert
   expect(result).toBe("1234");  
 });
 
 test("when partitionKey is present in the event with length > 256, then new candidate should be created and returned", () => {
   // partitionKey is of type string
   
   let pk = "";
   for (let i = 0; i < 300; i++) {
    pk += "0";
   }
   var event = {partitionKey:pk}
   var result = deterministicPartitionKey(event)
 
   // assert
   expect(result).not(pk);
 });
 
 test("when partitionKey is absent, then new candidate should be created and returned", () => {
   
   var event = {abc:"abc"}
   var result = deterministicPartitionKey(event)
 
   // assert
   expect(result).not(Null);
   expect(result).not("0");
 });
 
 
})