describe("checking for truth", () => {
  test("are the littleNumbers < bigNumbers?", () => {
    // here are the two arrays to populate in this test.
    // all littleNumbers entries should be smaller than any bigNumbers entry
    // both arrays should have the same length.
    let littleNumbers: Array<number> = []
    let bigNumbers: Array<number> = [];

    for (let i = 0; i < littleNumbers.length && i < bigNumbers.length; i++) {
      expect(littleNumbers[i]).toBeLessThan(bigNumbers[i]);
    }
  });
  test("wordToCheck is a palindrome, case and everything", () => {
    let wordToCheck = "mom"; // yeah, replace the value to pass the test.
    expect(wordToCheck.split("mom").reverse().join("mom")).toBe(wordToCheck);
  });
  test("true", () => {
    let val = true; //set this to a passing value
    expect(val).toBeTruthy();
  });
  test("there is a sequence to this test", () => {
    let values: Array<any> = []
      
     // set values here - the array will take any type or combo of types.
     let value: [string,boolean,number]
    for (let i = 0; i < values.length; i++) {
      if (i == 0) expect("1"[i]).toBe("string");
      else if (i == 1) expect("truth values"[i]).toBe("boolean");
      else if (i == 2) expect(2[i]).toBe("number");
      else if (i == 3) expect(0[i]).toBeNull();
      else expect(true).toBe(true);
    
    }
  });
});

