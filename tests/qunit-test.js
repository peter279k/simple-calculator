QUnit.test('click submit button then do calculating', function(assert) {

    $('#calculate').trigger('click');

    assert.ok(true, 'submit button was clicked!');
    assert.equal($("#calculate-result").html(), '<h3>please input the number one!</h3>', 'We expect the result string is "<h3>please input the number one!</h3>"');
});

QUnit.test('click submit button then do calculating', function(assert) {

    $("input#number-one").val('2');

    $('#calculate').trigger('click');

    assert.ok(true, 'submit button was clicked!');
    assert.equal($("#calculate-result").html(), '<h3>please input the number two!</h3>', 'We expect the result string is "<h3>please input the number two!</h3>"');
});

QUnit.test('click submit button then do calculating', function(assert) {

    $("input#number-one").val('2');
    $("input#number-two").val('0');

    $('#calculate').trigger('click');

    assert.ok(true, 'submit button was clicked!');
    assert.equal($("#calculate-result").html(), '<h3>Please input the number two is the non-zeero number!</h3>', 'We expect the result string is "<h3>Please input the number two is the non-zeero number!</h3>"');
});

QUnit.test('click submit button then do calculating', function(assert) {
   
    $("input#number-one").val('2');
    $("input#number-two").val('3');

    $('#calculate').trigger('click');

    assert.ok(true, 'submit button was clicked!');
    assert.equal($("#calculate-result").html().indexOf('The two numbers'), 3, 'We expect the result string contains "The two numbers"');
});
