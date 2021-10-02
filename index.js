$('a').addClass('list-group-item');


$('.iform').on('keydown', (event) => {
    if (event.key === 'Enter') {
        var t = $('.iform').val();
        $('.task').prepend('<a class="list-group-item">' + t + '</a>')
        $('.iform').val('');
    }
});

