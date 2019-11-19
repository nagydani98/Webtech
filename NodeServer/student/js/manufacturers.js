$(document).ready(function () {
    openManufacturers();
})
$(function () {
    $('form').on("submit", function (event) {
        event.preventDefault();

        $.ajax({
            type: 'post',
            url : 'addManufacturers',
            data : $('form').serialize(),
            success : function (receivedData) {
                openManufacturers();
                populateManSelect();
            },
            error : function () {
                alert("A manufacturer with that name already exists!");
            }
        })
    })
})

function openManufacturers() {
    $.getJSON('manufacturers', function (data) {
        $.each(data, function (key, value) {
            var manTable = $("#manTable");
            var row = $('<tr></tr>');
            var nameCell = $('<td>'+ value.name + '</td>');
            var countryCell = $('<td>' + value.country + '</td>');
            var yearCell = $('<td>' + value.founded + '</td>');
            $(row).append(nameCell);
            $(row).append(countryCell);
            $(row).append(yearCell);
            $(manTable).append(row);
        })
    })
}