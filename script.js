jQuery(document).ready(function() {

    //add new empty string 
    $('#add-new').on('click', function() {
        let linesContainer = $('.inputs-container');
        //clone first input in container
        let clone = $('.input:first').clone();
        //clean new input value
        $(clone).children('input').val('');
        $(clone).children('svg').hide();
        $(clone).children('input').removeClass('line_checked');
        //append clone to inputs container
        linesContainer.append(clone);
    });

    //toggle checkbox
    $(document).on('change', '.line', function(e) {
        //show transparent checkbox if text had been added in a row
        if (e.target.value.length >0) {
            $(e.target).next().css('background-color', 'transparent');
            $(e.target).next().show();

        //hide checkbox when text has been erased
        } else {
            $(e.target).next().hide();
            $(e.target).removeClass('line_checked');
        };
    });

    //toggle 'line-through' text property
    $(document).on('click', '.empty-box', function(e) {
        let currentInput = $(e.target).parent().children('input');
        ($(currentInput).hasClass('line_checked')) ? ($(currentInput).removeClass('line_checked'), $(e.target).css('background-color', 'transparent')) : ($(currentInput).addClass('line_checked'), $(e.target).css({'background-color':'green', 'background-size':'contain'}))
    });

    //focus on next input by pressing enter
    $('.line').keypress(function(e) {
        if (e.keyCode === 13) {
            $(e.target).parent().next().find('.line').focus();
        }
    })

});
