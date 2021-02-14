$(document).ready(() => {

    const I = getComputedStyle(document.documentElement).getPropertyValue('--colors-count') + 1;
    const colorsPrimary = [];
    const colorsSecondary = [];
    const colorsBackground = [];
    for (let index = 0; index < I; index++) {
        colorsPrimary[index] = getComputedStyle(document.documentElement).getPropertyValue('--colorprimary-' + index)
        colorsSecondary[index] = getComputedStyle(document.documentElement).getPropertyValue('--colorsecondary-' + index)
        colorsBackground[index] = getComputedStyle(document.documentElement).getPropertyValue('--colorbackground-' + index)
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
            document.documentElement.style.setProperty('--primary-color', colorsPrimary[index]);
            removeBorder();
            $(e.target).addClass("cp-btn-selected");
        });
    }



    const picker_2 = $("#csecondary_3").first();
    picker_2.on('input', (e) => {
        removeBorder();
        document.documentElement.style.setProperty('--secondary-color', e.target.value);
        $(picker_1).addClass("cp-btn-selected");
    });

    for (let index = 0; index < I; index++) {

        $("#csecondary_btn_" + index).first().on('click', (e) => {
            document.documentElement.style.setProperty('--secondary-color', colorsSecondary[index]);
            $(".no-border").removeClass("csecondary-btn-selected");
            $(e.target).addClass("csecondary-btn-selected");
        });
    }


    const picker_3 = $("#cback_3").first();
    picker_3.on('input', (e) => {
        removeBorder();
        document.documentElement.style.setProperty('--background-color', e.target.value);
        $(picker_3).addClass("cback-btn-selected");
    });

    for (let index = 0; index < I; index++) {

        $("#cback_btn_" + index).first().on('click', (e) => {
            document.documentElement.style.setProperty('--background-color', colorsBackground[index]);
            $(".no-border").removeClass("cback-btn-selected");
            $(e.target).addClass("cback-btn-selected");
        });
    }

    const picker_4 = $("#ctext_1").first();
    picker_4.on('input', (e) => {
        removeBorder();
        document.documentElement.style.setProperty('--whitetexts-color', e.target.value);
        $(picker_4).addClass("cback-btn-selected");
    });

    const picker_5 = $("#ctext_2").first();
    picker_5.on('input', (e) => {
        removeBorder();
        document.documentElement.style.setProperty('--darktexts-color', e.target.value);
        $(picker_5).addClass("cback-btn-selected");
    });


})