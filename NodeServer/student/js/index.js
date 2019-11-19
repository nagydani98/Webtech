$(document).ready(function () {
    $("#content").load("lorem.html");
    $.each($(".menuButton"), function (mbIndex, mbValue) {
            $(mbValue).click(function (event) {
                event.preventDefault();
                if(!($(this).find('a').attr("href") == "index.html")){
                    console.log($("#content").load($(this).find('a').attr("href")));
                    $("#content").load($(this).find('a').attr("href"));

                }
                else{
                    open("index.html", "_self");
                }

            });
    })
    });