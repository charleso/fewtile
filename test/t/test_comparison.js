define(['guts/comparison'], function(comparison) {
  return function(assert) {
    var strict = comparison.strict;
    var lt = comparison.lt;
    var gt = comparison.gt;
    var eq = comparison.eq;
    var isLt = comparison.isLt;
    var isGt = comparison.isGt;
    var isLte = comparison.isLte;
    var isGte = comparison.isGte;
    var isEq = comparison.isEq;
    var min = comparison.min;
    var max = comparison.max;
    var ltgt = comparison.ltgt;

    var barf = function() { 
      throw 'barf'; 
    };

    var konst = function(x) {
      return function() { 
        return x; 
      };
    };

    assert.equal(1, strict(lt)(1, 2, 3));
    assert.equal(2, strict(eq)(1, 2, 3));
    assert.equal(3, strict(gt)(1, 2, 3));

    assert.equal(1, lt(konst(1), barf, barf));
    assert.equal(2, eq(barf, konst(2), barf));
    assert.equal(3, gt(barf, barf, konst(3)));

    var checkIz = function(k, a, b, c, d, e) {
      assert.equal(a, isLt(k));
      assert.equal(b, isLte(k));
      assert.equal(c, isEq(k));
      assert.equal(d, isGte(k));
      assert.equal(e, isGt(k));
    };

    var checkIzLt = function(x) {
      checkIz(lt, true,  true,  false, false, false);
    };

    var checkIzEq = function(x) {
      checkIz(eq, false, true,  true,  true,  false);
    };

    var checkIzGt = function(x) {
      checkIz(gt, false, false, false, true,  true );
    };

    checkIzLt(lt);
    checkIzEq(eq);
    checkIzGt(gt);

    checkIzLt(ltgt(3, 4));
    checkIzEq(ltgt(3, 3));
    checkIzGt(ltgt(7, 3));

    var noze = function(a, b) {
      return ltgt(a.nose, b.nose);
    };

    var bigNose = {nose: 8989, hairs: 7};
    var smallNose = {nose: 4, hairs: 1};

    assert.deepEqual(min(noze)(smallNose, bigNose), smallNose);
    assert.deepEqual(min(noze)(bigNose, smallNose), smallNose);

    assert.deepEqual(max(noze)(smallNose, bigNose), bigNose);
    assert.deepEqual(max(noze)(bigNose, smallNose), bigNose);
    

  };
});