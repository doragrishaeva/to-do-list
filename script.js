//To be done:
//adaptive design
//keyup events
//toggle checked symbol
//style placeholders and plus button
//text-decoration line-through on the whole input

jQuery(document).ready(function() {

    //add new empty string 
    $('#add-new').on('click', function() {
        let linesContainer = $('.inputs-container');
        //clone first input in container
        let clone = $('.input:first').clone();
        //clean new input value
        $(clone).children().val('');
        $(clone).children('span').hide();
        //append clone to inputs container
        linesContainer.append(clone);
    });

    //add empty checkbox
    $(document).on('change', '.line', function(e) {
        let checkBox = $(e.target).parent().children('span');
        //add checkbox if text had been added in a row
        if (e.target.value.length >0) {
            if(checkBox.length === 0) {
                $(`<span class="empty-box"><svg width="20px" height="20px" aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" class="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#a9a9a9" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path></svg></span>`)
                .appendTo($(e.target).parent()).show();
            }
            if(checkBox.length > 0 && checkBox.css({'display': 'none'})) {
                checkBox.show();
            }     
        //remove checkbox when text has been erased
        } else {
            checkBox.css({'display': 'none'});
            ($('.line').val().length === 0) ? $('.line').removeClass('line_checked') : $('.line').addClass('line_checked');
        };
    });

    //toggle checked symbol and 'line-through' text property
    $(document).on('click', '.empty-box', function(e) {
        let currentInput = $(e.target).parent().parent().children()[0];
        ($(currentInput).hasClass('line_checked')) ? $(currentInput).removeClass('line_checked') : $(currentInput).addClass('line_checked');
        

        //add function to toggle checked symbol
    })
})
