
for (let i = 0; i < 16; i++) {
    $('#grid').append('<div class="tile"></div>')
}

$('#grid').on('click', '.tile', function () {
    $(this).toggleClass('toggled')
})