$('#CloudSwitch1lol-checkbox').change(function() {
    if ($('#CloudSwitch1lol-checkbox').val() === 'on') {
        $('#CloudSwitch1lol-checkbox').val('off');
        $('#CloudSwitch1subscribe').css('display', 'none');
        $('#CloudSwitch1alright').css('display', 'block');
        onChancheToCountry(2);
    } else {
        onChancheToCountry(1);
        $('#CloudSwitch1lol-checkbox').val('on');
        $('#CloudSwitch1alright').css('display', 'none');
        $('#CloudSwitch1subscribe').css('display', 'block');
    }
});


$('.containerdes1 div').on('click', function() {
    $(this).addClass('selecteddes1').siblings().removeClass('selecteddes1');
    return false;
})

$('select[data-menu]').each(function() {

    let select = $(this),
        options = select.find('option'),
        menu = $('<div />').addClass('select-menu'),
        button = $('<div />').addClass('button'),
        list = $('<ul />'),
        arrow = $('<em />').prependTo(button);

    options.each(function(i) {
        let option = $(this);
        if (option.text() === 'Unknown' || option.text() === 'Bald' || option.text() === 'Multicolored' || option.text() === 'Dichromatic' || option.text() === 'Hazel' || option.text() === 'BRAUNGRÜNBLAU') {
            list.append($('<li />').text(option.text()));
        } else {
            let colorr = '';
            if (option.text() === 'BLK') {
                colorr = "#222931";
            }
            if (option.text() === 'Blond') {
                colorr = "rgb(237, 237, 45)";
            }
            if (option.text() === 'Brown') {
                colorr = "rgba(120, 0, 0, 0.617)";
            }
            if (option.text() === 'Gray') {
                colorr = "gray";
            }
            if (option.text() === 'Sandy') {
                colorr = "sandybrown";
            }
            if (option.text() === 'Red') {
                colorr = "rgb(235, 39, 39)";
            }
            if (option.text() === 'Blue') {
                colorr = "rgb(65, 65, 212);";
            }
            if (option.text() === 'Green') {
                colorr = "rgb(51, 178, 51)";
            }
            if (option.text() === 'Maroon') {
                colorr = "rgb(117, 0, 0)";
            }
            if (option.text() === 'Pink') {
                colorr = "rgb(227, 132, 159)";
            }
            if (option.text() === 'Red') {
                colorr = "rgb(235, 39, 39)";
            }

            if (option.text() === 'BLAU') {
                colorr = "rgb(65, 65, 212)";
            }
            if (option.text() === 'BRAUN') {
                colorr = "rgba(120, 0, 0, 0.617)";
            }
            if (option.text() === 'BLAU-GRAU') {
                colorr = "#6A5ACD";
            }
            if (option.text() === 'GRAU-BLAU') {
                colorr = "#5a819b";
            }
            if (option.text() === 'GRAUGRÜN') {
                colorr = "#71b378";
            }
            if (option.text() === 'GRÜNBRAUN') {
                colorr = "#6c7453";
            }
            if (option.text() === 'GRÜN-BRAUN') {
                colorr = "#426d6d";
            }
            if (option.text() === 'GRÜN') {
                colorr = "#44de87";
            }
            if (option.text() === 'BLAUGRAU') {
                colorr = "#6A5ACD";
            }
            if (option.text() === 'GRAU-GRÜN-BLAU') {
                colorr = "#008080";
            }
            if (option.text() === 'GRAU-GRÜN') {
                colorr = "#71b378";
            }


            if (option.text() === 'ALBASTRI-BLUE') {
                colorr = "rgb(65, 65, 212)";
            }
            if (option.text() === 'VERZI-GREEN') {
                colorr = "rgba(44, 165, 92, 0.617)";
            }
            if (option.text() === 'CĂPRUI-BROWN') {
                colorr = "rgba(120, 0, 0, 0.617)";
            }
            if (option.text() === 'GRI-GRAY') {
                colorr = "#6c7453";
            }
            if (option.text() === 'NEGRI-BLACK') {
                colorr = "#000";
            }
            if (option.text() === 'HAZEL') {
                colorr = "rgb(218, 175, 0)";
            }

            if (option.text() === 'Brązowy') {
                colorr = "#8B4513";
            }
            if (option.text() === 'Zielony') {
                colorr = "#228B22";
            }
            if (option.text() === 'Szary') {
                colorr = "#808080";
            }
            if (option.text() === 'Czarny') {
                colorr = "#000000";
            }
            if (option.text() === 'Piwne') {
                colorr = "#DAA520";
            }
            if (option.text() === 'Niebieskozielony') {
                colorr = "#20B2AA";
            }
            if (option.text() === 'Miodowy') {
                colorr = "#C19A6B";
            }
            if (option.text() === 'Lazurowy') {
                colorr = "#ADD8E6";
            }


            list.append('<li>' + option.text() + '<svg style="position:relative;top: 2.2px;left: 5px;fill:' + colorr + ';height:14px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0h1.8c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg></li>');
        }
    });

    menu.css('--t', select.find(':selected').index() * -41 + 'px');

    select.wrap(menu);

    button.append(list).insertAfter(select);

    list.clone().insertAfter(button);

});




$(document).on('click', '.select-menu', function(e) {

    let menu = $(this);

    if (!menu.hasClass('open')) {
        menu.addClass('open');
    }

});

$(document).on('click', '.select-menu > ul > li', function(e) {

    let li = $(this),
        menu = li.parent().parent(),
        select = menu.children('select'),
        selected = select.find('option:selected'),
        index = li.index();

    menu.css('--t', index * -41 + 'px');
    selected.attr('selected', false);
    select.find('option').eq(index).attr('selected', true);
    // console.log(index);
    // console.log($('#hairColorId').val()); 

    let colorrr = '';
    if (select.attr('id') === 'hairColorId') {
        if (index == 0 || index == 7) {
            colorrr = '#989A9F';
        }
        if (index == 1) {
            colorrr = '#222931';
        }
        if (index == 2) {
            colorrr = 'rgb(237, 237, 45)';
        }
        if (index == 3) {
            colorrr = 'rgba(120, 0, 0, 0.617)';
        }
        if (index == 4) {
            colorrr = 'gray';
        }
        if (index == 5) {
            colorrr = 'sandybrown';
        }
        if (index == 6) {
            colorrr = 'rgb(235, 39, 39)';
        }
        $('#svgselecticon > path').css('fill', colorrr);
    }

    if (select.attr('id') === 'eyeColorId') {
        if (index == 3) {
            colorrr = '#5a819b';
        }
        if (index == 0) {
            colorrr = 'rgb(65, 65, 212)';
        }
        if (index == 1) {
            colorrr = 'rgba(120, 0, 0, 0.617)';
        }
        if (index == 2 || index == 9) {
            colorrr = '#6A5ACD';
        }
        if (index == 4 || index == 11) {
            colorrr = '#71b378';
        }
        if (index == 5) {
            colorrr = '#6c7453';
        }
        if (index == 6) {
            colorrr = '#2E425B';
        }
        if (index == 7) {
            colorrr = '#426d6d';
        }
        if (index == 8) {
            colorrr = '#44de87';
        }
        if (index == 10) {
            colorrr = '#008080';
        }
        $('#svgselecticon1 > path').css('fill', colorrr);
    }

    if (select.attr('id') === 'eyeColorIdRom') {
        if (index == 0) {
            colorrr = 'rgb(65, 65, 212)';
        }
        if (index == 1) {
            colorrr = 'rgba(44, 165, 92, 0.617)';
        }
        if (index == 2) {
            colorrr = 'rgba(120, 0, 0, 0.617)';
        }
        if (index == 3) {
            colorrr = '#6c7453';
        }
        if (index == 4) {
            colorrr = '#000';
        }
        if (index == 5) {
            colorrr = 'rgb(218, 175, 0)';
        }
        $('#svgselecticon2 > path').css('fill', colorrr);
    }

    if (select.attr('id') === 'eyeColorIdFrance') {
        if (index == 0) {
            colorrr = '#0000FF';
        }
        if (index == 1) {
            colorrr = '#008000';
        }
        if (index == 2) {
            colorrr = '#0a803b';
        }
        if (index == 3) {
            colorrr = '#8B4513';
        }
        if (index == 4) {
            colorrr = '#6B8E23';
        }
        if (index == 5) {
            colorrr = '#D2691E';
        }
        if (index == 6) {
            colorrr = '#808080';
        }
        if (index == 7) {
            colorrr = '#000000';
        }
        if (index == 8) {
            colorrr = '#A52A2A';
        }
        $('#svgselecticon3 > path').css('fill', colorrr);
    }

    if (select.attr('id') === 'eyeColorRPoland') {
        if (index == 0) {
            colorrr = '#8B4513';
        }
        if (index == 1) {
            colorrr = '#228B22';
        }
        if (index == 2) {
            colorrr = '#808080';
        }
        if (index == 3) {
            colorrr = '#000000';
        }
        if (index == 4) {
            colorrr = '#DAA520';
        }
        if (index == 5) {
            colorrr = '#20B2AA';
        }
        if (index == 6) {
            colorrr = '#C19A6B';
        }
        if (index == 7) {
            colorrr = '#ADD8E6';
        }
        $('#svgselecticon4 > path').css('fill', colorrr);
    }

    if (select.attr('id') === 'eyeColorIdGermanyRP') {
        if (index == 3) {
            colorrr = '#5a819b';
        }
        if (index == 0) {
            colorrr = 'rgb(65, 65, 212)';
        }
        if (index == 1) {
            colorrr = 'rgba(120, 0, 0, 0.617)';
        }
        if (index == 2 || index == 9) {
            colorrr = '#6A5ACD';
        }
        if (index == 4 || index == 11) {
            colorrr = '#71b378';
        }
        if (index == 5) {
            colorrr = '#6c7453';
        }
        if (index == 6) {
            colorrr = '#2E425B';
        }
        if (index == 7) {
            colorrr = '#426d6d';
        }
        if (index == 8) {
            colorrr = '#44de87';
        }
        if (index == 10) {
            colorrr = '#008080';
        }
        $('#svgselecticon5 > path').css('fill', colorrr);
    }

    menu.addClass(index > selected.index() ? 'tilt-down' : 'tilt-up');


    setTimeout(() => {
        menu.removeClass('open tilt-up tilt-down');
    }, 500);

});

$(document).click(e => {
    e.stopPropagation();
    if ($('.select-menu').has(e.target).length === 0) {
        $('.select-menu').removeClass('open');
    }
})










$('#opmen1').hover(function() {
    $('#submenu1').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $('#submenu1').stop(true, true).delay(200).fadeOut(500);
});

$('#opmen2').hover(function() {
    $('#submenu2').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $('#submenu2').stop(true, true).delay(200).fadeOut(500);
});


$('#opmen3').hover(function() {
    $('#submenu3').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $('#submenu3').stop(true, true).delay(200).fadeOut(500);
});


$('#opmen4').hover(function() {
    $('#submenu4').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $('#submenu4').stop(true, true).delay(200).fadeOut(500);
});


$('#opmen5').hover(function() {
    $('#submenu5').stop(true, true).delay(200).fadeIn(500);
}, function() {
    $('#submenu5').stop(true, true).delay(200).fadeOut(500);
});


function opmenu(id) {
    if (id === 1) {
        $('.header1M1').css('display', 'block');
        $('#menucl').stop(true, true).delay(200).animate({
            opacity: 0
        });
        $('#menuop').stop(true, true).delay(200).animate({
            opacity: 1
        });
        $('.header1M1').stop(true, true).delay(200).animate({
            opacity: 1
        });
        $("#opmenubut").attr("onclick", "opmenu(2)");
    } else {

        $('#menuop').stop(true, true).delay(200).animate({
            opacity: 0
        });
        $('#menucl').stop(true, true).delay(200).animate({
            opacity: 1
        });
        $('.header1M1').stop(true, true).delay(200).animate({
            opacity: 0
        });
        $("#opmenubut").attr("onclick", "opmenu(1)");
        $('.header1M1').css('display', 'none');
    }
}



function openMoreInfo(id) {
    if ($('#histNumNone_' + id).css('display') == 'none') {
        $('#histNumNone_' + id).css('display', 'block');
        $('#histNumText_' + id).css('color', '#4ECCA3');
        $('#histNumImg_' + id).remove();
        $('#histmorebtn_' + id).append('<svg class="histmoresvg" id="histNumImg1_' + id + '" xmlns="http://www.w3.org/2000/svg" style="display:inline-block; float:right;position: relative;" width="11" height="6" fill="none" viewBox="0 0 11 6"><path fill="#4ECCA3" fill-rule="evenodd" d="M.925 5.28a.765.765 0 0 0 1.073 0l3.51-3.47L9.02 5.28a.765.765 0 0 0 1.073 0 .744.744 0 0 0 0-1.06l-4.047-4a.765.765 0 0 0-1.073 0l-4.047 4a.744.744 0 0 0 0 1.06Z" clip-rule="evenodd"/></svg>');
    } else {
        $('#histNumNone_' + id).css('display', 'none');
        $('#histNumText_' + id).css('color', '#FFFFFF');
        $('#histNumImg1_' + id).remove();
        $('#histmorebtn_' + id).append('<svg class="histmoresvg" id="histNumImg_' + id + '" style="display:inline-block; float:right;position: relative;" xmlns="http://www.w3.org/2000/svg" width="11" height="6" fill="none" viewBox="0 0 11 6"><path fill="#6B6B6B" fill-rule="evenodd" d="M.925.22a.765.765 0 0 1 1.073 0l3.51 3.47L9.02.22a.765.765 0 0 1 1.073 0 .744.744 0 0 1 0 1.06l-4.047 4a.765.765 0 0 1-1.073 0l-4.047-4a.744.744 0 0 1 0-1.06Z" clip-rule="evenodd"/></svg>');
    }
}

function changeHolo() {
    if ($('#holo-toggle').is(':checked')) {
        //off
        $('.holocheck').addClass("offholo");
        $('#Hologramm').val('off');
    } else {
        //on
        $('.holocheck').removeClass("offholo");
        $('#Hologramm').val('on');
    }
}