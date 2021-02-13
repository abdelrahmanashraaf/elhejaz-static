$(document).ready(() => {
    console.log("colorepicker.js");
    const picker_1 = $("#cp_3").first();
    picker_1.on('input', (e) => {
        document.documentElement.style.setProperty('--primary-color', e.target.value);

    })
})