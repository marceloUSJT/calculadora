$(document).ready(function () {

    function calculator() {
        var visor = "";
        var tamanho;

        var inputVal = document.getElementById("visor");
        $(".row .numeral").on('click', function () {
            var numero = $(this).attr('value');
            visor += numero;
            $("#visor").html(visor);
            tamanho = inputVal.innerHTML.split("");


        });
        $(".row .operador").on('click', function (e) {
            e.preventDefault();
            var operador = $(this).attr('value');
            visor += operador;
            $("#visor").html(visor);
            tamanho = inputVal.innerHTML;
            if (/(?=(\D{2}))/g.test(visor)) {
                visor = tamanho.substring(0, tamanho.length - 1);
                $("#visor").html(visor);
            }

        });


        $("#igual").on('click', function () {
            var total = eval(visor);
            $("#visor").html(total % 1 != 0 ? total.toFixed(2) : total);
        });

        $("#limpar").on('click', function () {
            visor = "";
            arr = [];
            $("#visor").html(0);
        });

    };
    calculator();
});
