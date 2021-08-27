/*
var data = [
    {id: 0, text: '사과'},
    {id: 1, text: '바나나'},
    {id: 2, text: '포도'}
]




$('.single-select').select2({
    // theme: 'classic'
    language: {
        noResults: function() {
            return "검색 내역이 없습니다.";
        }
    },
    minimumResultsForSearch: -1,
    width: '400px',
    data: data,

    templateResult: function(state) {

        var $state = $(`
            <img src='https://via.placeholder.com/10'>
            <span>${state.text}</span>`
            );

        return $state;
    }
});


$('.multiple-select').select2()


$('.single-placeholder').select2({
    placeholder: "과일을 선택하세요",
    allowClear: true,
    width: '400px'
})
*/



var $select = $('.single-select').select2();

$('.set').click(function() {
    $select.val('포도').trigger('change');
});

$('.on').click(function() {
    $('.single-select').select2('open');
});

$('.off').click(function() {
    $('.single-select').select2('close');
});

$('.destory').click(function() {
    $select.select2('destroy');
});

$('.re').click(function() {
    $select.select2();
});



var $multiple = $('.multiple-select').select2();

$(".set-two").click(function() {
    $multiple.val(["토마토", "당근"]).trigger("change");
})

$(".clear").click(function() {
    $multiple.val(null).trigger("change");
})



/*
$('.on').click(function() {
    $('.single-select').prop('disabled', true);
});

$('.off').click(function() {
    $('.single-select').prop('disabled', false);
});
*/










