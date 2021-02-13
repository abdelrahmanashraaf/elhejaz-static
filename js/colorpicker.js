$(document).ready(() => {
    let btn_1_color;
    let btn_2_color;

    setTimeout(() => {
        btn_1_color = getComputedStyle(document.documentElement).getPropertyValue('--color-1');
        btn_2_color = getComputedStyle(document.documentElement).getPropertyValue('--color-2');
    }, 500);

    // clear all class

    function removeBorder($element) {
        $(".no-border").removeClass("cp-btn-selected");
    }

    const picker_1 = $("#cp_3").first();
    picker_1.on('input', (e) => {
        removeBorder();
        document.documentElement.style.setProperty('--primary-color', e.target.value);
        $(picker_1).addClass("cp-btn-selected");
    });



    const picker_btn_1 = $("#cp_btn_1").first();

    picker_btn_1.on('click', (e) => {
        document.documentElement.style.setProperty('--primary-color', btn_1_color);
        removeBorder();
        $(e.target).addClass("cp-btn-selected");
    });

    const picker_btn_2 = $("#cp_btn_2").first();
    picker_btn_2.on('click', (e) => {
        document.documentElement.style.setProperty('--primary-color', btn_2_color);
        removeBorder();
        $(e.target).addClass("cp-btn-selected");

    });
})