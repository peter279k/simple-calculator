var resultStr = '';
mocha.setup('bdd');

describe('Simple Calculator', function() {
    describe('#calculate', function() {
        it('should click submit button then do calculating', function() {
            $('#calculate').trigger('click');

            resultStr = $('#calculate-result').html();
            expect(resultStr).to.equal('<h3>please input the number one!</h3>');
        });
    
    });
    
    describe('#calculate', function() {
        it('should click submit button then do calculating', function() {
            $('input#number-one').val('2');
            
            $('#calculate').trigger('click');

            resultStr = $('#calculate-result').html();
            expect(resultStr).to.equal('<h3>please input the number two!</h3>');
        });

    });

    describe('#calculate', function() {
        it('should click submit button then do calculating', function() {
            $("input#number-one").val('2');
            $("input#number-two").val('0');
            
            $('#calculate').trigger('click');
                
            resultStr = $('#calculate-result').html();
            expect(resultStr).to.equal('<h3>Please input the number two is the non-zeero number!</h3>');
        });
    });
    
    describe('#calculate', function() {
        it('should click submit button then do calculating', function() {
            $("input#number-one").val('2');
            $("input#number-two").val('3');
            
            $('#calculate').trigger('click');

            var index = $("#calculate-result").html().indexOf('The two numbers');
            expect(index).to.equal(3);
        });
    });

});

mocha.run();
