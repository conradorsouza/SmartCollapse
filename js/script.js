$(document).ready(function () {


    $("#btnRemove").click(startRemotion);
    $("#btnAdd").click(startAdd);




    function startRemotion() {
        $("#textoVariavel").smartHide();
    }

    function startAdd() {
        $("#textoVariavel").smartShow();
    }



});