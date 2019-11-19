$(function () {
    $('form').on("submit", function (event) {
        event.preventDefault();

        $.ajax({
            type: 'post',
            url : 'addAuthor',
            data : $('form').serialize(),
            success : function (receivedData) {
                openAuthors();
            },
            error : function () {
                alert("error");
            }
        })

        $.getJSON('authorNames', function (data) {
            var select = $('<select></select>');
            $.each(data, function (key, value) {
                $(select).append('<option value='+value+'>'+value+'</option>');
                $('#authorNames').append(select);
            })
        })
    })
})