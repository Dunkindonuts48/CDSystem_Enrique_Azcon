QUnit.test("convertIntegerToRoman Test Cases", function(assert) {
  assert.propEqual(convertIntegerToRoman(7), { value: "VII", message: "", result: true }, "TC-1: 7");
  assert.propEqual(convertIntegerToRoman("L"), { value: 0, message: "Please enter a valid integer", result: false }, "TC-2: 'L'");
  assert.propEqual(convertIntegerToRoman(3999), { value: "MMMCMXCIX", message: "", result: true }, "TC-3: 3999");
  assert.propEqual(convertIntegerToRoman(-3), { value: 0, message: "Please enter a valid integer", result: false }, "TC-4: -3");
  assert.propEqual(convertIntegerToRoman(-100), { value: 0, message: "Please enter a valid integer", result: false }, "TC-5: -100");
});

QUnit.test("convertRomanToInteger Test Cases", function(assert) {
  assert.propEqual(convertRomanToInteger("M"), { value: 1000, message: "", result: true }, "TC-6: 'M'");
  assert.propEqual(convertRomanToInteger("222"), { value: 0, message: "Please enter a valid roman", result: false }, "TC-7: 222");
  assert.propEqual(convertRomanToInteger("MMMCMXCIX"), { value: 3999, message: "", result: true }, "TC-8: 'MMMCMXCIX'");
  assert.propEqual(convertRomanToInteger(""), { value: 0, message: "Please enter a valid roman", result: false }, "TC-9: ''");
  assert.propEqual(convertRomanToInteger("IV"), { value: 4, message: "", result: true }, "TC-10: 'IV'");
});
