$(document).ready(() => {

    const I = 8;
    const colors = [];
    for (let index = 0; index < I; index++) {
        colors[index] = getComputedStyle(document.documentElement).getPropertyValue('--color-' + index)
    }

    // clear all class

    function removeBorder($element) {
        $(".no-border").removeClass("cp-btn-selected");
    }

    // color picker
    const picker_1 = $("#cp_3").first();
    picker_1.on('input', (e) => {
        removeBorder();
        document.documentElement.style.setProperty('--primary-color', e.target.value);
        $(picker_1).addClass("cp-btn-selected");
    });


    // button select pickers
    for (let index = 0; index < I; index++) {

        $("#cp_btn_" + index).first().on('click', (e) => {
            document.documentElement.style.setProperty('--primary-color', colors[index]);
            removeBorder();
            $(e.target).addClass("cp-btn-selected");
        });
    }

})