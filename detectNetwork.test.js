/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  /*it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  }); */

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
   var should = chai.should();
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  })
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011345678901234').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011345678901234098').should.equal('Discover');
  });
  for (var prefix = 644; prefix <= 649; prefix++) {
  (function(prefix) {
    it('has a prefix of ' + prefix + ' and a length of 16', function() {
      detectNetwork(prefix.toString() +'4649356786901').should.equal('Discover');
    });
    it('has a prefix of ' + prefix + ' and a length of 19', function() {
      detectNetwork(prefix.toString() +'4649356786901123').should.equal('Discover');
    });

  })(prefix)
}
  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6511345678901234').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6511345678901234098').should.equal('Discover');
  });

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card

   for (var length = 12; length <= 19; length++) {
    (function(length) {
    var str5018 = '501846493567';
    var extend = length - 12;
    for (var extend = 0; extend < length-12; extend++) {
      str5018 = str5018 + '1'
    }
    it('has a prefix of 5018 and a length of ' + length, function() {
      detectNetwork(str5018).should.equal('Maestro');
    });
    var str5020 = '502046493567';
    var extend = length - 12;
    for (var extend = 0; extend < length-12; extend++) {
      str5020 = str5020 + '1'
    }
    it('has a prefix of 5020 and a length of ' + length, function() {
      detectNetwork(str5020).should.equal('Maestro');
     });
    var str5038 = '503846493567';
    var extend = length - 12;
    for (var extend = 0; extend < length-12; extend++) {
      str5038 = str5038 + '1'
    }
    it('has a prefix of 5038 and a length of ' + length, function() {
      detectNetwork(str5038).should.equal('Maestro');
    });

    var str6304 = '630446493567';
    var extend = length - 12;
    for (var extend = 0; extend < length-12; extend++) {
      str6304 = str6304 + '1'
    }
    it('has a prefix of 6304 and a length of ' + length, function() {
      detectNetwork(str6304).should.equal('Maestro');
     });
  })(length)

}
});

describe('should support China UnionPay', function() {
  for (var prefixChina = 622126; prefixChina <= 622925; prefixChina++) {
  (function(prefixChina) {
    for (var lengthChina = 16; lengthChina <= 19; lengthChina++) {
    (function(lengthChina) {
    var strChina = prefixChina.toString() + '5016493567';
    var extendChina = lengthChina - 16;
    for (var extendChina = 0; extendChina < lengthChina-16; extendChina++) {
      strChina = strChina + '1'
    }
    it('has a prefix of ' + prefixChina +' and a length of ' + lengthChina, function() {
      detectNetwork(strChina).should.equal('China UnionPay');
     });
    })(lengthChina)
  }
})(prefixChina)
}

  for (var prefixChina2 = 624; prefixChina2 <= 626; prefixChina2++) {
  (function(prefixChina2) {
    for (var lengthChina2 = 16; lengthChina2 <= 19; lengthChina2++) {
    (function(lengthChina2) {
    var strChina2 = prefixChina2.toString() + '5016493568887';
    var extendChina2 = lengthChina2 - 16;
    for (var extendChina2 = 0; extendChina2 < lengthChina2-16; extendChina2++) {
      strChina2 = strChina2 + '1'
    }
    it('has a prefix of ' + prefixChina2 +' and a length of ' + lengthChina2, function() {
      detectNetwork(strChina2).should.equal('China UnionPay');
     });
    })(lengthChina2)
  }
})(prefixChina2)
}

  for (var prefixChina3 = 6282; prefixChina3 <= 6288; prefixChina3++) {
  (function(prefixChina3) {
    for (var lengthChina3 = 16; lengthChina3 <= 19; lengthChina3++) {
    (function(lengthChina3) {
    var strChina3 = prefixChina3.toString() + '501693568887';
    var extendChina3 = lengthChina3 - 16;
    for (var extendChina3 = 0; extendChina3 < lengthChina3-16; extendChina3++) {
      strChina3 = strChina3 + '1'
    }
    it('has a prefix of ' + prefixChina3 +' and a length of ' + lengthChina3, function() {
      detectNetwork(strChina3).should.equal('China UnionPay');
     });
    })(lengthChina3)
  }
})(prefixChina3)
}


});
/* describe('should support Switch', function() {
  var prefixSwitch = 4903;
  var lengthSwitch = 16;
  var extendSwitch = lengthSwitch - 16
  var strSwitch = 
  it('has a prefix of ' + prefixSwitch +' and a length of ' + lengthSwitch, function() {
      detectNetwork(strSwitch).should.equal('Switch');
     });
})
*/
