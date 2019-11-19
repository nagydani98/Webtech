$(document).ready(function () {
    populateManSelect();
    populateCarTable();
})

$(function () {
    $('form').on("submit", function (event) {
        event.preventDefault();

        $.ajax({
            type: 'post',
            url : 'addCar',
            data : $('form').serialize(),
            success : function (receivedData) {
                populateCarTable();
            },
            error : function () {
                alert("A car with that name already exists!");
            }
        })
    })
})

function populateManSelect() {
    $.getJSON('manufacturerNames', function (data) {
        var select = $('#manSelect');
        $.each(data, function (key, value) {
            $(select).append('<option value='+value+'>'+value+'</option>');
        })
    })
}

function populateCarTable() {
    $.getJSON('cars', function (data) {
        var table = $('#carTable');
        $.each(data, function (key, value) {
            var row = $('<tr></tr>');
            $.each(value, function (k, v) {
                var cell = $('<td>'+ v +'</td>');
                $(row).append(cell);
            })
            $(table).append(row);
        })
    })
}
