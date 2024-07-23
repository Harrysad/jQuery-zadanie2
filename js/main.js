$(document).ready(function() {
    $('#moveToFirst').click(function() {
        const lastParagraph = $('#par p').last();
        lastParagraph.prependTo('#par');
    });

    $('#moveToLast').click(function() {
        const firstParagraph = $('#par p').first();
        firstParagraph.appendTo('#par');
    })
});