$(document).ready(function() {

    $('#hairColorId').val('BLK');
    $(document).on("click", function(event) {
        var modal111 = $("#modalEditSign2");
        var modalContent111 = $("#modalEditSignc2");
        if (!modalContent111.is(event.target) && modalContent111.has(event.target).length === 0) {
            modal111.hide();
        }
    });

    $(document).on("click", function(event) {
        var modal333 = $("#modalEdit");
        var modalContent333 = $("#modalEditsssss");
        if (!modalContent333.is(event.target) && modalContent333.has(event.target).length === 0) {
            modal333.hide();
        }
    });


    $(document).on("click", function(event) {
        var modal222 = $("#modalEditSign");
        var modalContent222 = $("#modalEditSignc");
        if (!modalContent222.is(event.target) && modalContent222.has(event.target).length === 0) {
            modal222.hide();
        }
    });



    $("#openModalEdit").on("click", function(event) {
        event.stopPropagation();
    });


    $("#openModalEdit2").on("click", function(event) {
        event.stopPropagation();
    });



    $("#openModalEdit1").on("click", function(event) {
        event.stopPropagation();
    });


    $('#CloudSwitch1lol-checkbox').prop('checked', false);
    $('#language-togglessn').prop('checked', true);
    $("#date-toggle").change(function() {
        if (this.checked) {
            onChangeFormat(2);
        } else {
            onChangeFormat(1);
        }
    });

    $('#Hologramm').val('on');

    $("#dateBirthdayId").val('02031980');
    $("#dateIssueId").val('01022000');
    $("#dateExpiryId").val('02031999');




    $("#photo_random").val("/PhAPI/JohnWick.png");
    getSignature();
    $("#famger").val('0');
    $('#togglefamger').prop('checked', true);
    $("#mockup").val("WithPrint");
    $("#turn_check").val("0");
    $("#my_turn_id").val("0");

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });


});








document.getElementById('photo').addEventListener('change', function() {
    if (this.value) {
        var filename = $('#photo').val().replace(/.*(\/|\\)/, '');
        $("#uploadPhotoId").val('');
        $("#uploadPhotoId").val(filename);
    } else {}
});

document.getElementById('signature').addEventListener('change', function() {
    if (this.value) {
        var filename = $('#signature').val().replace(/.*(\/|\\)/, '');
        $("#uploadSignId").val('');
        $("#uploadSignId").val(filename);
    } else {}
});


$('#icCheckdes1').change(function() {
    checkBox = document.getElementById('icCheckdes1');
    if (checkBox.checked) {
        $('#icCheckdesImg').removeClass('icCheckdesImg');
        $('#icCheckdesImg').addClass('icCheckdesImgActive');
    } else {
        $('#icCheckdesImg').addClass('icCheckdesImg');
        $('#icCheckdesImg').removeClass('icCheckdesImgActive');
    }
});


$('#icCheckdes11').change(function() {
    checkBox = document.getElementById('icCheckdes11');
    if (checkBox.checked) {
        $('#icCheckdesImg1').css('display', 'none');
        $('#icCheckdesImg2').css('display', 'initial');
    } else {
        $('#icCheckdesImg1').css('display', 'initial');
        $('#icCheckdesImg2').css('display', 'none');
    }
});





$('.containerdes2 div').on('click', function() {
    if ($(this).hasClass("two")) {
        $(this).addClass('selecteddes3').siblings().removeClass('selecteddes2').removeClass('selecteddes3');
        $('#act2238').attr('src', '../../dlgen/imgs/realidA.svg');
        return false;
    } else {
        $(this).addClass('selecteddes2').siblings().removeClass('selecteddes2').removeClass('selecteddes3');
        $('#act2238').attr('src', '../../dlgen/imgs/eb2653c2ee3a5107ec672c4032e1fdf8.png');
        return false;
    }
})


$('#doctypeP1').on('click', function() {
    getRevisions();
});
$('#doctypeP2').on('click', function() {
    getRevisions();
});
$('#doctypeP3').on('click', function() {
    getRevisions();
});

var DeltaExpiryDate = 0;
var RevisionDateStr = '';

function getStateName() {
    const CurrState = document.querySelector('#statesId').value;
    for (var i = 0; i < ArrStates.length; i++) {
        if (ArrStates[i][0] == CurrState)
            return ArrStates[i][2];
    }
}

function getCodePdf417ParamsString() {
    const rows = document.querySelector('#rowsId').value;
    const columns = document.querySelector('#columnsId').value;
    const ecc = document.querySelector('#eccId').value;
    return `rows=${rows}&columns=${columns}&ecc=${ecc}`;
}

function randomDate(date1, date2) {
    function randomValueBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    var outDate;
    if (date1.getTime() > date2.getTime()) {
        outDate = new Date(randomValueBetween(date2.getTime(), date1.getTime()));
    } else {
        outDate = new Date(randomValueBetween(date1.getTime(), date2.getTime()));
    }
    return outDate;
}


function setBirthdayDate() {
    const dateBirthdayIn = document.querySelector('#dateBirthdayId');
    var dateMin = new Date(1950, 1, 1);
    var tDate = new Date();
    tDate.setFullYear(tDate.getFullYear() - 21);
    tDate = randomDate(dateMin, tDate);
    let mounth = String(tDate.getMonth() + 1).padStart(2, '0');
    var day = String(tDate.getDate()).padStart(2, '0');
    var year = tDate.getFullYear();
    let newD = '';
    if ($('#date-toggle').is(':checked')) {
        // newD = mounth+""+day+""+year;
        newD = day + "" + mounth + "" + year;
    } else {
        // newD = day+""+mounth+""+year;
        newD = mounth + "" + day + "" + year;
    }
    $('#dateBirthdayId').val(newD);
}

function CalcIssDate(dateIssue) {

    let birth = '';
    if ($('#date-toggle').is(':checked')) {
        birth = $("#dateBirthdayId").val().substr(0, 2) + '-' + $("#dateBirthdayId").val().substr(2, 2) + '-' + $("#dateBirthdayId").val().substr(4, 4);
    } else {
        birth = $("#dateBirthdayId").val().substr(2, 2) + '-' + $("#dateBirthdayId").val().substr(0, 2) + '-' + $("#dateBirthdayId").val().substr(4, 4);
    }
    // console.log(birth);
    const dateIssueControl = document.querySelector('#dateIssueId');
    const dateExpiryControl = document.querySelector('#dateExpiryId');
    const stateName = ParseSymbols(document.querySelector('#statesId').value);

    const xhr = new XMLHttpRequest();
    const requestURL = '/CalcIssDate?' + `dateBirthday=${birth}&dateRevision=${RevisionDateStr}&stateName=${stateName}`;
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (this.status !== 200) {
            return;
        }

        //yyyy-mm-dd
        let newissue = '';
        if ($('#date-toggle').is(':checked')) {
            //dd-mm-yyyy
            newissue = this.response.substr(6, 2) + '' + this.response.substr(4, 2) + '' + this.response.substr(0, 4);
        } else {
            newissue = this.response.substr(4, 2) + '' + this.response.substr(6, 2) + '' + this.response.substr(0, 4);
        }
        $('#dateIssueId').val(newissue);
        CalcExpDate(dateExpiryControl);

    }
    xhr.send();
}

function CalcExpDate(dateExpiry) {
    const stateName = ParseSymbols(document.querySelector('#statesId').value);
    var str91 = $("#dateBirthdayId").val();
    var obr911 = str91.substr(0, 2);
    var obr912 = str91.substr(2, 2);
    var obr913 = str91.substr(4, 4);
    let new911 = '';
    if ($('#date-toggle').is(':checked')) {
        new911 = obr913 + "-" + obr912 + "-" + obr911;
    } else {
        new911 = obr913 + "-" + obr911 + "-" + obr912;
    }
    const dateBirthday = new911;
    var str92 = $("#dateIssueId").val();
    var obr921 = str92.substr(0, 2);
    var obr922 = str92.substr(2, 2);
    var obr923 = str92.substr(4, 4);
    let new921 = '';
    if ($('#date-toggle').is(':checked')) {
        new921 = obr923 + "-" + obr922 + "-" + obr921;
    } else {
        new921 = obr923 + "-" + obr921 + "-" + obr922;
    }
    const dateIssue = new921;

    //
    const revision = $('#revisionsId').val();
    var realID = '';
    if ($('#asjdhajk1').hasClass('selecteddes2')) {
        realID = 'None';
    } else if ($('#asjdhajk2').hasClass('selecteddes3')) {
        realID = 'RealID';
    } else {
        realID = 'NotFor';
    }
    //

    const xhr = new XMLHttpRequest();
    const requestURL = '/CalcExpDate?' + `dateBirthday=${dateBirthday}&dateIssue=${dateIssue}&stateName=${stateName}&realID=${realID}&revision=${revision}`;
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (this.status !== 200) {
            return;
        }
        var tDate = new Date(this.response);
        let mounth = String(tDate.getMonth() + 1).padStart(2, '0');
        var day = String(tDate.getDate()).padStart(2, '0');
        var year = tDate.getFullYear();
        let newD = '';
        if ($('#date-toggle').is(':checked')) {
            newD = day + "" + mounth + "" + year;
        } else {
            newD = mounth + "" + day + "" + year;
        }
        $('#dateExpiryId').val(newD);
    }
    xhr.send();
}


function onChangeFormat(id) {
    if ($("#dateBirthdayId").val().length == 8) {
        var str1 = $("#dateBirthdayId").val();
        var obr11 = str1.substr(0, 2);
        var obr12 = str1.substr(2, 2);
        var obr13 = str1.substr(4, 4);
        var new11 = obr12 + "" + obr11 + "" + obr13;
        $("#dateBirthdayId").val(new11);
        var str2 = $("#dateIssueId").val();
        var obr21 = str2.substr(0, 2);
        var obr22 = str2.substr(2, 2);
        var obr23 = str2.substr(4, 4);
        var new21 = obr22 + "" + obr21 + "" + obr23;
        $("#dateIssueId").val(new21);
        var str3 = $("#dateExpiryId").val();
        var obr31 = str3.substr(0, 2);
        var obr32 = str3.substr(2, 2);
        var obr33 = str3.substr(4, 4);
        var new31 = obr32 + "" + obr31 + "" + obr33;
        $("#dateExpiryId").val(new31);
    }
}

$('#dateBirthdayId').on("change paste keyup", function() {
    $(this).val($(this).val().replace(/[/]/g, ''));
    $(this).val($(this).val().replace(/\./g, ""));
    $(this).val($(this).val().replace('\\', ''));
    $(this).val($(this).val().replace(/\s+/g, ''));
});
$('#dateIssueId').on("change paste keyup", function() {
    $(this).val($(this).val().replace(/[/]/g, ''));
    $(this).val($(this).val().replace(/\./g, ""));
    $(this).val($(this).val().replace('\\', ''));
    $(this).val($(this).val().replace(/\s+/g, ''));
});
$('#dateExpiryId').on("change paste keyup", function() {
    $(this).val($(this).val().replace(/[/]/g, ''));
    $(this).val($(this).val().replace(/\./g, ""));
    $(this).val($(this).val().replace('\\', ''));
    $(this).val($(this).val().replace(/\s+/g, ''));
});

$('#zipCodeId').on("change paste keyup", function() {
    $(this).val($(this).val().replace(/-/g, ''));
});




function ParseSymbols(InStr) {
    var OutStr = "";
    const len = InStr.length;
    for (var i = 0; i < len; i++) {
        if (InStr[i] == "!") {
            OutStr = OutStr + "%21";
        } else if (InStr[i] == "#") {
            OutStr = OutStr + "%23";
        } else if (InStr[i] == "$") {
            OutStr = OutStr + "%24";
        } else if (InStr[i] == "%") {
            OutStr = OutStr + "%25";
        } else if (InStr[i] == "&") {
            OutStr = OutStr + "%26";
        } else if (InStr[i] == "'") {
            OutStr = OutStr + "%27";
        } else if (InStr[i] == "(") {
            OutStr = OutStr + "%28";
        } else if (InStr[i] == ")") {
            OutStr = OutStr + "%29";
        } else if (InStr[i] == "*") {
            OutStr = OutStr + "%2A";
        } else if (InStr[i] == "+") {
            OutStr = OutStr + "%2B";
        } else if (InStr[i] == ",") {
            OutStr = OutStr + "%2C";
        } else if (InStr[i] == "/") {
            OutStr = OutStr + "%2F";
        } else if (InStr[i] == ":") {
            OutStr = OutStr + "%3A";
        } else if (InStr[i] == ";") {
            OutStr = OutStr + "%3B";
        } else if (InStr[i] == "=") {
            OutStr = OutStr + "%3D";
        } else if (InStr[i] == "?") {
            OutStr = OutStr + "%3F";
        } else if (InStr[i] == "@") {
            OutStr = OutStr + "%40";
        } else if (InStr[i] == "[") {
            OutStr = OutStr + "%5B";
        } else if (InStr[i] == "]") {
            OutStr = OutStr + "%5D";
        } else {
            OutStr = OutStr + InStr[i];
        }
    }
    return OutStr;
}

function nameChangeEv() {
    getLicDscInvAud(true, true, true, true);
}

function getLicDscInvAudParamsString(Lic, Dsc, Inv, Aud) {
    var Res = '';
    const licNumber = document.querySelector('#licNumberId').value;
    if ((Lic == false) && (licNumber != '')) {
        Res = Res + `licNumber=${licNumber}`;
    }
    const docDiscr = document.querySelector('#docDiscrId').value;
    if ((Dsc == false) && (docDiscr != '')) {
        if (Res != '') Res = Res + '&';
        Res = Res + `docDiscr=${docDiscr}`;
    }
    const invNum = document.querySelector('#invNumId').value;
    if ((Inv == false) && (invNum != '')) {
        if (Res != '') Res = Res + '&';
        Res = Res + `invNum=${invNum}`;
    }
    const auditInfo = document.querySelector('#auditInfoId').value;
    if ((Aud == false) && (auditInfo != '')) {
        if (Res != '') Res = Res + '&';
        Res = Res + `auditInfo=${auditInfo}`;
    }

    return Res;
}

function getLDIAParamsString() {
    const licNumber = ParseSymbols(document.querySelector('#licNumberId').value);
    const docDiscr = ParseSymbols(document.querySelector('#docDiscrId').value);
    const invNum = ParseSymbols(document.querySelector('#invNumId').value);
    const auditInfo = ParseSymbols(document.querySelector('#auditInfoId').value);
    return `licNumber=${licNumber}&docDiscr=${docDiscr}&invNum=${invNum}&auditInfo=${auditInfo}`;
}

function getParamsString() {
    const district = ParseSymbols(document.querySelector('#District').value);
    const firstName = ParseSymbols(document.querySelector('#firstNameId').value);
    const middleName = ParseSymbols(document.querySelector('#middleNameId').value);
    const lastName = ParseSymbols(document.querySelector('#lastNameId').value);
    const className = encodeURIComponent(ParseSymbols(document.querySelector('#classId').value));
    // let className = '';
    // if($('#classId').val() == '') {
    //     className = '';
    // } else {
    //     if(document.querySelector('#classId').value == '') {
    //         className = '';
    //     } else {
    //         if(document.querySelector('#classId').value == 'C - Cars/Vans/Pickups; may tow a veh < 10,000 lbs' || document.querySelector('#classId').value == 'C - Veh w/GVWR ≤26000, No M/C' || document.querySelector('#classId').value == 'C - Noncommercial vehicles weighing 26,000 or less pounds ...' || document.querySelector('#classId').value == 'C - Noncommercial vehicles weighing 26,000 or less pounds GVW, EXCEPT motorcycles.' || document.querySelector('#classId').value == 'C-Single/Comb < 26,001' || document.querySelector('#classId').value == 'C - Single/Comb <26.001' || document.querySelector('#classId').value == 'C-Single or comb veh w/ GVWR ≤ 26,000 lbs which transports placarded HAZMAT or ≥ 16 pass, including driver' || document.querySelector('#classId').value == 'C-Single & Comb Veh other than Class A or B') {
    //             className = 'C';
    //         } else if(document.querySelector('#classId').value == 'Class C & M1-Veh w/GVWR ≤26000; No A; 2whl M/C, Mtr-drvn Cycle, Scooter') {
    //             className = 'CM';
    //         } else if(document.querySelector('#classId').value == 'A-Any vehicle or combination of vehicles except motorcycles' || document.querySelector('#classId').value == 'A-Comb veh w/ GVWR ≥ 26,001 lbs provided towed veh ≥ 10.001 lbs' || document.querySelector('#classId').value == 'A-Comb veh ≥ 26,001 GCWR, towed veh ≥ 10,001 GVWR & all class B & C') {
    //             className = 'A';
    //         } else if(document.querySelector('#classId').value == 'D Vehicles <26,000 (Operator)' || document.querySelector('#classId').value == 'Vehicles not exceeding 26,000 GVW. Includes Class G and trike. Does not include MTC or MTC w/ sidecar.' || document.querySelector('#classId').value == 'D - Non Commercial <PASGR, including driver' || document.querySelector('#classId').value == 'D: Small vehicle less than 26,001 lbs, except school bus.' || document.querySelector('#classId').value == 'D-All vehicles or combination of vehicles except A, B and C.') {
    //             className = 'D';
    //         } else if(document.querySelector('#classId').value == 'M - Motorcycles.' || document.querySelector('#classId').value == 'M-Motorcycle / Motor Driven Cycle' || document.querySelector('#classId').value == 'M-Motorcycle') {
    //             className = 'M';
    //         } else if(document.querySelector('#classId').value == '1 - CAR/LIGHT TRUCK/MOPED') {
    //             className = '1';
    //         } else {
    //             // className = document.querySelector('#classId').value;
    //             className = encodeURIComponent(ParseSymbols(document.querySelector('#classId').value));

    //         }
    //     }
    // }



    const stateName = ParseSymbols(document.querySelector('#statesId').value);
    const city = ParseSymbols(document.querySelector('#cityId').value);
    const street = ParseSymbols(document.querySelector('#streetId').value);
    const eyeColor = ParseSymbols(document.querySelector('#eyeColorId').value);
    const hairColor = ParseSymbols(document.querySelector('#hairColorId').value);
    const heightFt = ParseSymbols(document.querySelector('#heightFtId').value);
    const heightIn = ParseSymbols(document.querySelector('#heightInId').value);
    const weight = ParseSymbols(document.querySelector('#weightId').value);
    const revision = document.querySelector('#revisionsId').value;
    const zipCode = ParseSymbols(document.querySelector('#zipCodeId').value);
    const compliance = document.querySelector('#complianceId').value;
    let gender = 1;
    if ($('#language-toggle').is(':checked')) {
        gender = 1;
    } else {
        gender = 0;
    }
    // let veteran = 1;if($('#veteranId').is(':checked')) { veteran = 1; }else { veteran = 0; }
    let veteran = 1;
    if ($('#icCheckdesImg').hasClass('icCheckdesImgActive')) {
        veteran = 1;
    } else {
        veteran = 0;
    }
    // let organDonor = 1;if($('#organDonorId').is(':checked')) { organDonor = 1; }else { organDonor = 0; }
    let organDonor = 1;
    if ($('#icCheckdesImg1').css('display') == 'none') {
        organDonor = 1;
    } else {
        organDonor = 0;
    }
    // let country   = 'USA';if (document.querySelector('#countryCanId').checked == true){ country   = 'CAN';}
    let country = 'USA';
    if ($('#CloudSwitch1lol-checkbox').val() == 'off') {
        country = 'CAN';
    }

    var documentType = '';
    // if (document.querySelector('#typeDocIdId').checked){
    if ($('#doctypeP2').hasClass('selecteddes1')) {
        documentType = 'CDL';
    } else {
        documentType = 'DL';
    }

    var str91 = $("#dateBirthdayId").val();
    var obr911 = str91.substr(0, 2);
    var obr912 = str91.substr(2, 2);
    var obr913 = str91.substr(4, 4);
    let new911 = '';
    // let dateBirthday = '';
    if ($('#date-toggle').is(':checked')) {
        new911 = obr913 + "-" + obr912 + "-" + obr911;
    } else {
        new911 = obr913 + "-" + obr911 + "-" + obr912;
    }
    const dateBirthday = new911;
    var str92 = $("#dateIssueId").val();
    var obr921 = str92.substr(0, 2);
    var obr922 = str92.substr(2, 2);
    var obr923 = str92.substr(4, 4);
    let new921 = '';
    if ($('#date-toggle').is(':checked')) {
        new921 = obr923 + "-" + obr922 + "-" + obr921;
    } else {
        new921 = obr923 + "-" + obr921 + "-" + obr922;
    }
    const dateIssue = new921;
    var str93 = $("#dateExpiryId").val();
    var obr931 = str93.substr(0, 2);
    var obr932 = str93.substr(2, 2);
    var obr933 = str93.substr(4, 4);
    let new931 = '';
    // var new931 = obr932+""+obr931+""+obr933;
    if ($('#date-toggle').is(':checked')) {
        new931 = obr933 + "-" + obr932 + "-" + obr931;
    } else {
        new931 = obr933 + "-" + obr931 + "-" + obr932;
    }
    const dateExpire = new931;


    let realID = '';
    // if(document.querySelector('#idNoneId').checked) { 
    if ($('#asjdhajk1').hasClass('selecteddes2')) {
        realID = 'None';
        // } else if (document.querySelector('#idRealId').checked) {
    } else if ($('#asjdhajk2').hasClass('selecteddes3')) {
        realID = 'RealID';
    } else {
        realID = 'NotFor';
    }
    const raceCode = ParseSymbols(document.querySelector('#raceCodeId').value);

    const code128 = document.querySelector("#code128InfoId").value;

    const restriction = decodeURIComponent(ParseSymbols(document.querySelector('#restrictionId').value));
    const endosernent = decodeURIComponent(ParseSymbols(document.querySelector('#endosernentId').value));
    const CurrRev = document.querySelector('#revisionsId').value;

    var Rezz = `firstName=${firstName}&middleName=${middleName}&lastName=${lastName}&` +
        `className=${className}&stateName=${stateName}&city=${city}&documentType=${documentType}&` +
        `street=${street}&eyeColor=${eyeColor}&hairColor=${hairColor}&` +
        `heightFt=${heightFt}&heightIn=${heightIn}&weight=${weight}&country=${country}&` +
        `veteran=${veteran}&organDonor=${organDonor}&gender=${gender}&dateBirthday=${dateBirthday}&` +
        `revision=${revision}&dateIssue=${dateIssue}&dateExpire=${dateExpire}&zipCode=${zipCode}&realID=${realID}&` +
        `restriction=${restriction}&endosernent=${endosernent}&compliance=${compliance}&raceCode=${raceCode}&CurrRevisionDate=${CurrRev}&district=${district}&code128=${code128}`;
    return Rezz;

}


function getNames() {
    // const gender        = document.querySelector('#genderFemaleId').checked;
    let gender = false;
    if ($('#language-toggle').is(":checked")) {
        gender = true;
    }
    const requestURL = '/GetNames?' + `gender=${gender}&country=1`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (xhr.status !== 200) {
            return;
        }
        const response = JSON.parse(xhr.response);
        if ((response.FirstName != "undefined") && (response.FirstName != undefined))
            document.querySelector('#firstNameId').value = response.FirstName;
        if ((response.MiddleName != "undefined") && (response.MiddleName != undefined))
            document.querySelector('#middleNameId').value = response.MiddleName;
        if ((response.LastName != "undefined") && (response.LastName != undefined))
            document.querySelector('#lastNameId').value = response.LastName;
    }
    xhr.send();
}


function getRevisions() {
    if ($("#statesId").val() == "Georgia" || $("#statesId").val() == "Oklahoma") $('#District-field').show();
    else $('#District-field').hide();
    // if($("#statesId").val()=="California") ChangeOptionsCalifornia();
    // else RestoreOptionsCalifornia();
    document.querySelector('#OutAamvaStrId').value = "";
    var revis = document.getElementById("revisionsId");
    $(revis).trigger('chosen:updated');
    for (var i = revis.options.length - 1; i >= 0; i--) {
        revis.options[i] = null;
    }

    const xhr = new XMLHttpRequest();
    const requestURL = '/GetRevisions?' + getParamsString();
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (xhr.status !== 200) {
            return;
        }
        const response = JSON.parse(xhr.response);

        //UPD 20.01.2023!!!! ////////////
        const map = new Map(Object.entries(RevDone));

        for (let i = 0, length = response.length; i < length; i++) {
            if (RevDone[$('#statesId').val()]) {
                RevDone[$('#statesId').val()].forEach(function(rev) {
                    if (rev == response[i]) {
                        var newOption = new Option("Rev. " + response[i], response[i]);
                        revis.options[revis.options.length] = newOption;
                    }
                });
            }
        }

        GetRevisionData();
    }
    xhr.send();

}

function getRevisionsPasta() {
    document.querySelector('#OutAamvaStrId').value = "";
    var revis = document.getElementById("revisionsId");
    $(revis).trigger('chosen:updated');
    for (var i = revis.options.length - 1; i >= 0; i--) {
        revis.options[i] = null;
    }

    const xhr = new XMLHttpRequest();
    const requestURL = '/GetRevisions?' + getParamsString();
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (xhr.status !== 200) {
            return;
        }
        const response = JSON.parse(xhr.response);

        for (let i = 0, length = response.length; i < length; i++) {
            var newOption = new Option("Rev. " + response[i], response[i]);
            revis.options[revis.options.length] = newOption;
        }

        GetRevisionData();
    }
    xhr.send();

}

function getAddress() {
    const stateName = document.querySelector('#statesId').value;
    const requestURL = '/GetAddress?' + `stateName=${stateName}`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (xhr.status !== 200) {
            return;
        }
        const response = JSON.parse(xhr.response);
        if ((response.City != "undefined") && (response.City != undefined))
            document.querySelector('#cityId').value = response.City;
        if ((response.Street != "undefined") && (response.Street != undefined))
            document.querySelector('#streetId').value = response.Street;
        if ((response.ZipCode != "undefined") && (response.ZipCode != undefined))
            document.querySelector('#zipCodeId').value = response.ZipCode;
    }
    xhr.send();
}
//===========================================Список классов подтягиваем====================================================
function GetRevisionData() {
    document.querySelector('#restrictionId').value = "";
    document.querySelector('#endosernentId').value = "";
    var RestrElem = document.getElementById("restrSelId");
    $(RestrElem).trigger('chosen:updated');
    for (var i = RestrElem.options.length - 1; i >= 0; i--) {
        RestrElem.options[i] = null;
    }
    var EndosElem = document.getElementById("endosSelId");
    $(EndosElem).trigger('chosen:updated');
    for (var i = EndosElem.options.length - 1; i >= 0; i--) {
        EndosElem.options[i] = null;
    }
    var ClassElem = document.getElementById("classSelId");
    $(ClassElem).trigger('chosen:updated');
    for (var i = ClassElem.options.length - 1; i >= 0; i--) {
        ClassElem.options[i] = null;
    }

    // var documentType ='';
    // if( $('#typeDocDlId').is(':checked') ){
    //     documentType = 'DL';
    // } else {
    //     documentType = 'CDL';
    // }

    let documentType = 'DL';
    if ($("#doctypeP2").hasClass("selecteddes1")) {
        documentType = 'CDL';
    } else {
        documentType = 'DL';
    }
    // console.log(documentType);

    const classInp = document.querySelector('#classId');
    const stateName = document.querySelector('#statesId').value;
    const CurrRev = document.querySelector('#revisionsId').value;
    const requestURL = '/GetRevisionData?' + `stateName=${stateName}&CurrRevisionDate=${CurrRev}&documentType=${documentType}`;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (this.status !== 200) {
            return;
        }
        const response = JSON.parse(this.response);
        if ((response.Rows != "undefined") && (response.Rows != undefined))
            document.querySelector('#rowsId').value = response.Rows;
        if ((response.Columns != "undefined") && (response.Columns != undefined))
            document.querySelector('#columnsId').value = response.Columns;
        if ((response.Ecc != "undefined") && (response.Ecc != undefined))
            document.querySelector('#eccId').value = response.Ecc;
        if ((response.Class != "undefined") && (response.Class != undefined))
            classInp.value = response.Class;
        if ((response.RevisionDate != "undefined") && (response.RevisionDate != undefined))
            RevisionDateStr = response.RevisionDate;

        if ((response.EndosermentArray != "undefined") && (response.EndosermentArray != undefined)) {
            for (let i = 0, Len = response.EndosermentArray.length; i < Len; i++) {
                var newOption = new Option(decodeURIComponent(response.EndosermentArray[i].Value), decodeURIComponent(response.EndosermentArray[i].Value));
                EndosElem.options[EndosElem.options.length] = newOption;
            }
        }
        if ((response.RestrictionArray != "undefined") && (response.RestrictionArray != undefined)) {
            for (let i = 0, Len = response.RestrictionArray.length; i < Len; i++) {
                var newOption = new Option(decodeURIComponent(response.RestrictionArray[i].Value), decodeURIComponent(response.RestrictionArray[i].Value));
                RestrElem.options[RestrElem.options.length] = newOption;
            }
        }
        if ((response.ClassArray != "undefined") && (response.ClassArray != undefined)) {
            for (let i = 0, Len = response.ClassArray.length; i < Len; i++) {
                if (response.ClassArray[i].Value != '') {
                    var newOption = new Option(decodeURIComponent(response.ClassArray[i].Value), decodeURIComponent(response.ClassArray[i].Value));
                    ClassElem.options[ClassElem.options.length] = newOption;
                    // console.log(i);
                    if (i == 0) {
                        $('#classId').val(decodeURIComponent(response.ClassArray[i].Value));
                    } else {
                        if (response.ClassArray[0].Value == '') {
                            $('#classId').val(decodeURIComponent(response.ClassArray[1].Value));
                        }
                    }
                }
            }
        }
        getLicDscInvAud(true, true, true, true);
    }
    xhr.send();

    //new
    if ($('#statesId').val() == 'North Dakota' && $('#revisionsId').val() == '2014.01.18 (0800)') {
        $('#officeCodeIdBlock').show();
    } else if ($('#statesId').val() == 'Oklahoma' && $('#revisionsId').val() == '2000.01.01 (0500)') {
        $('#officeCodeIdBlock').show();
    } else if ($('#statesId').val() == 'Pennsylvania' && $('#revisionsId').val() == '2016.06.07 (0900)') {
        $('#officeCodeIdBlock').show();
    } else if ($('#statesId').val() == 'Pennsylvania' && $('#revisionsId').val() == '2000.01.01 (01)') {
        $('#officeCodeIdBlock').show();
    } else if ($('#statesId').val() == 'Pennsylvania' && $('#revisionsId').val() == '2022.03.25 (1000)') {
        $('#officeCodeIdBlock').show();
    } else if ($('#statesId').val() == 'Utah' && $('#revisionsId').val() == '2021.06.01 (1000)') {
        $('#officeCodeIdBlock').show();
    } else if ($('#statesId').val() == 'Utah' && $('#revisionsId').val() == '2016.04.15 (0800)') {
        $('#officeCodeIdBlock').show();
    } else if ($('#statesId').val() == 'Utah' && $('#revisionsId').val() == '2013.01.01 (0700)') {
        $('#officeCodeIdBlock').show();
    } else if ($('#statesId').val() == 'Louisiana' && $('#revisionsId').val() == '2015.02.10 (0800)') {
        $('#officeCodeIdBlock').show();
    } else {
        $('#officeCodeIdBlock').hide();
    }

    if ($('#statesId').val() == 'Oregon') {
        $('#ReplaceIdBlock').show();
    } else {
        $('#ReplaceIdBlock').hide();
    }
}
//===============================================================================================
function getLicDscInvAud(Lic, Dsc, Inv, Aud) {
    var aStr = getParamsString();
    var aStr1 = getLicDscInvAudParamsString(Lic, Dsc, Inv, Aud);
    if (aStr1 != '') {
        aStr = aStr + '&' + aStr1;
    }
    const requestURL = '/GetDiscrimin?' + aStr;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', requestURL);

    xhr.onload = function() {
        if (xhr.status !== 200) {
            return;
        }
        const response = JSON.parse(xhr.response);
        if ((response.Licence != "undefined") && (response.Licence != undefined)) {
            document.querySelector('#licNumberId').value = response.Licence;
        } else {
            document.querySelector('#licNumberId').value = '';
        }
        if ((response.docDiscr != "undefined") && (response.docDiscr != undefined)) {
            document.querySelector('#docDiscrId').value = response.docDiscr;
        } else {
            document.querySelector('#docDiscrId').value = '';
        }
        if ((response.invNum != "undefined") && (response.invNum != undefined)) {
            document.querySelector('#invNumId').value = response.invNum;
        } else {
            document.querySelector('#invNumId').value = '';
        }
        if ((response.authInfo != "undefined") && (response.authInfo != undefined)) {
            document.querySelector('#auditInfoId').value = response.authInfo;
        } else {
            document.querySelector('#auditInfoId').value = '';
        }
        //   if((response.Info != "undefined")&&(response.Info != undefined)){
        //       document.querySelector('#InfoId').value = response.Info;
        //   }else{document.querySelector('#InfoId').value = '';}
        if ((response.code128Info != "undefined") && (response.code128Info != undefined)) {
            document.querySelector('#code128InfoId').value = response.code128Info;
        } else {
            document.querySelector('#code128InfoId').value = '';
        }
        if ((response.officeCode != "undefined") && (response.officeCode != undefined)) {
            document.querySelector('#officeCodeId').value = response.officeCode;
        } else {
            document.querySelector('#officeCodeId').value = '';
        }
        GetInfo();
    }
    xhr.send();


}

function GetInfo() {
    var aStr = getParamsString() + '&' + getLDIAParamsString();
    const requestURL = '/GetInfo?' + aStr;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', requestURL);

    xhr.onload = function() {
        if (this.status !== 200) {
            return;
        }
        const response = JSON.parse(this.response);
        const resp = this.response;
        if ((response.Info != "undefined") && (response.Info != undefined)) {
            const ostr = decodeURIComponent(response.Info);
            document.querySelector('#InfoId').value = ostr.replace(/\\n/g, String.fromCharCode(10));
            //                document.querySelector('#InfoId').value = decodeURIComponent(response.Info);
        }
        if ((response.RestrictionFront != "undefined") && (response.RestrictionFront != undefined)) {
            document.querySelector('#restrictionFrontId').value = response.RestrictionFront;
        } else {
            document.querySelector('#restrictionFrontId').value = '';
        }
        if ((response.RestrictionBack != "undefined") && (response.RestrictionBack != undefined)) {
            document.querySelector('#restrictionBackId').value = decodeURIComponent(response.RestrictionBack);
        } else {
            document.querySelector('#restrictionBackId').value = '';
        }
        if ((response.EndosernentFront != "undefined") && (response.EndosernentFront != undefined)) {
            document.querySelector('#endosernentFrontId').value = response.EndosernentFront;
        } else {
            document.querySelector('#endosernentFrontId').value = '';
        }
        if ((response.EndosernentBack != "undefined") && (response.EndosernentBack != undefined)) {
            document.querySelector('#endosernentBackId').value = decodeURIComponent(response.EndosernentBack);
        } else {
            document.querySelector('#endosernentBackId').value = '';
        }
        if ((response.ClassFront != "undefined") && (response.ClassFront != undefined)) {
            const ostr = decodeURIComponent(response.ClassFront);
            document.querySelector('#classFrontId').value = decodeURIComponent(response.ClassFront);
        } else {
            document.querySelector('#classFrontId').value = '';
        }
        if ((response.ClassBack != "undefined") && (response.ClassBack != undefined)) {
            const ostr = decodeURIComponent(response.ClassBack);
            document.querySelector('#classBackId').value = decodeURIComponent(response.ClassBack);
        } else {
            document.querySelector('#classBackId').value = '';
        }
        if ((response.DeltaExpiry != "undefined") && (response.DeltaExpiry != undefined)) {
            DeltaExpiryDate = Number(response.DeltaExpiry);
        }
    }
    xhr.send();

    getPreviewImg();
}
//===============================================================================================
function GetAamvaString() {

    var aStr = getParamsString() + '&' + getLDIAParamsString();
    const requestURL = '/GetAamvaString?' + aStr;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', requestURL);

    xhr.onload = function() {
        if (this.status !== 200) {
            return;
        }
        //   console.log('999999999');
        document.querySelector('#OutAamvaStrId').value = this.response;
    }
    xhr.send();


}
//===============================================================================================
//===============================================================================================

function blockBtns() {
    $('#genBtn1').attr('disabled', true);
    $('#genBtn2').attr('disabled', true);
    $('#genBtn3').attr('disabled', true);
    $('#genBtn4').attr('disabled', true);
    $('#genBtn5').attr('disabled', true);
    $('#genBtn6').attr('disabled', true);

    setTimeout(function() {
        $('#genBtn1').attr('disabled', false);
        $('#genBtn2').attr('disabled', false);
        $('#genBtn3').attr('disabled', false);
        $('#genBtn4').attr('disabled', false);
        $('#genBtn5').attr('disabled', false);
        $('#genBtn6').attr('disabled', false);
    }, 3000);

}

function GetPdf417Svg() {
    blockBtns();
    // if($('#otherCountry').val() == 'RUS') { 
    if ($('#rfBarBlock').css('display') == 'block') {
        var firstName999 = $('#firstName999').val();
        var middleName999 = $('#middleName999').val();
        var lastName999 = $('#lastName999').val();
        var dlnumber999 = $('#dlnumber999').val();
        var dateBirthday999 = $('#dateBirthday999').val();
        var dateIssue999 = $('#dateIssue999').val();
        var dateExpiry999 = $('#dateExpiry999').val();
        var divcode999 = $('#divcode999').val();
        var cat999 = $('#cat999').val();
        var reg999 = $('#reg999').val();
        var algo999 = $('#algo999').val();
        $.ajax({
            type: 'POST',
            url: '/api/bar/getRusBar1',
            data: {
                "_token": "{{ csrf_token() }}",
                firstName999: firstName999,
                middleName999: middleName999,
                lastName999: lastName999,
                dlnumber999: dlnumber999,
                dateBirthday999: dateBirthday999,
                dateIssue999: dateIssue999,
                dateExpiry999: dateExpiry999,
                divcode999: divcode999,
                cat999: cat999,
                reg999: reg999,
                algo999: algo999
            },
            success: function(data) {
                if (data.status == 'success') {
                    var main = document.getElementById("barcode11");
                    main.innerHTML = data.bar;
                    $('#downBar1').attr('href', '../RUSbarcode/' + data.codee);
                    $('#barcode11').attr('src', '../RUSbarcode/' + data.codee);
                    $('#downBar1').css('display', 'block');
                    rusBarRes.scrollIntoView(top);
                } else if (data.status == 'error1') {
                    window.location.href = '/barcode?plans';
                }
            }
        });
    } else if ($('#dnrBarBlock').css('display') == 'block') {
        var n = $('#firstName9999').val();
        var f = $('#middleName9999').val();
        var m = $('#lastName9999').val();
        var lic9999 = $('#dlnumber9999').val();
        var dob = $('#dateBirthday9999').val();
        var iss = $('#dateIssue9999').val();
        var exp = $('#dateExpiry9999').val();
        var mreo = $('#divcode9999').val();
        var cat9999 = $('#cat9999').val();
        $.ajax({
            type: 'POST',
            url: '/api/bar/getDnrBar',
            data: {
                "_token": "{{ csrf_token() }}",
                n: n,
                f: f,
                m: m,
                lic9999: lic9999,
                dob: dob,
                iss: iss,
                exp: exp,
                mreo: mreo,
                cat9999: cat9999
            },
            success: function(data) {
                if (data.status == 'success') {
                    var main = document.getElementById("barcode22");
                    main.innerHTML = data.bar;
                    $('#downBar2').attr('href', '../DNRbarcode/' + data.codee);
                    $('#barcode22').attr('src', '../DNRbarcode/' + data.codee);
                    $('#downBar2').css('display', 'block');
                    rusBarRes.scrollIntoView(top);
                } else if (data.status == 'error1') {
                    window.location.href = '/barcode?plans';
                }
            }
        });
    } else {

        let dateType = 1;
        if ($('#date-toggle').is(':checked')) {
            dateType = 1;
        } else {
            dateType = 2;
        }
        var aStr = getParamsString() + '&' + getLDIAParamsString() + '&' + getCodePdf417ParamsString() + '&dateType=' + dateType + '&btn=1';
        const requestURL = '/GetPdf417SvgNew?' + aStr;
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'text';
        xhr.open('GET', requestURL);

        xhr.onload = function() {
            if (xhr.status !== 200) {
                return;
            }
            if (xhr.response == '2222') {
                $('#logoutModal1').css('display', 'block');
                $('#logoutModal1').removeClass('fade');
            } else if (xhr.response == '9876') {
                //   alert('gggg');
                window.location.href = '/barcode?plans';
            } else if (xhr.response == '56789') {
                var modal = document.getElementById("myModalBar");
                modal.style.display = "block";
            } else {
                document.querySelector('#svgPdf417Id').innerHTML = xhr.response;
                svgPdf417Id.scrollIntoView(top);
            }
        }
        xhr.send();
    }
}



function closemodal1() {
    $('#logoutModal1').css('display', 'none');
    $('#logoutModal1').addClass('fade');
}
//===============================================================================================
function GetCode128Svg() {
    blockBtns();
    let dateType = 1;
    if ($('#date-toggle').is(':checked')) {
        dateType = 1;
    } else {
        dateType = 2;
    }
    var aStr = getParamsString() + '&' + getLDIAParamsString() + '&' + getCodePdf417ParamsString() + '&dateType=' + dateType + '&btn=4';

    const requestURL = '/GetPdf417SvgNew?' + aStr;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'text';
    xhr.open('GET', requestURL);

    xhr.onload = function() {
        if (xhr.status !== 200) {
            return;
        }
        if (xhr.response == '2222') {
            $('#logoutModal1').css('display', 'block');
            $('#logoutModal1').removeClass('fade');
        } else if (xhr.response == '9876') {
            //   alert('gggg');
            window.location.href = '/barcode?plans';
        } else if (xhr.response == '56789') {
            var modal = document.getElementById("myModalBar");
            modal.style.display = "block";
        } else {
            document.querySelector('#svgCode128Id').innerHTML = xhr.response;
            svgCode128Id.scrollIntoView(top);
        }
    }
    xhr.send();
}
//===============================================================================================
function SavePdf417Svg() {
    blockBtns();
    if ($('#otherCountry').val() == 'RUS') {
        $('#barcode11').click();
    } else {

        let dateType = 1;
        if ($('#date-toggle').is(':checked')) {
            dateType = 1;
        } else {
            dateType = 2;
        }
        var aStr = getParamsString() + '&' + getLDIAParamsString() + '&' + getCodePdf417ParamsString() + '&dateType=' + dateType + '&btn=2';

        const requestURL = '/GetPdf417SvgNew?' + aStr;
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.open('GET', requestURL);

        xhr.onload = function() {

            // console.log(xhr.response.size);
            if (xhr.status !== 200) {
                return;
            } else if (xhr.response.size == '4') {
                window.location.href = '/barcode?plans';
            } else if (xhr.response.size == '5') {
                var modal = document.getElementById("myModalBar");
                modal.style.display = "block";
            } else {
                var blob = xhr.response;
                var a = document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                var FileName = "Pdf417_" + Date.now() + ".svg";
                a.download = FileName;
                a.click();
            }
        }
        xhr.send();
    }
}


function SavePdf417Png() {
    blockBtns();
    if ($('#otherCountry').val() == 'RUS') {
        $('#barcode11').click();
    } else {
        let dateType = 1;
        if ($('#date-toggle').is(':checked')) {
            dateType = 1;
        } else {
            dateType = 2;
        }

        var aStr = getParamsString() + '&' + getLDIAParamsString() + '&' + getCodePdf417ParamsString() + '&dateType=' + dateType + '&btn=3';

        const requestURL = '/GetPdf417SvgNew?' + aStr;
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'blob';
        xhr.open('GET', requestURL);

        xhr.onload = function() {
            if (xhr.status !== 200) {
                return;
            }
            if (xhr.response.size == '4') {
                //   alert('gggg');
                window.location.href = '/barcode?plans';
            } else if (xhr.response.size == '5') {
                var modal = document.getElementById("myModalBar");
                modal.style.display = "block";
            } else {
                var blob = xhr.response;
                var a = document.createElement("a");
                a.href = window.URL.createObjectURL(blob);
                var FileName = "Pdf417_" + Date.now() + ".png";
                a.download = FileName;
                a.click();
            }
        }
        xhr.send();
    }
}



function SaveCode128Png() {
    blockBtns();
    let dateType = 1;
    if ($('#date-toggle').is(':checked')) {
        dateType = 1;
    } else {
        dateType = 2;
    }
    var aStr = getParamsString() + '&' + getLDIAParamsString() + '&' + getCodePdf417ParamsString() + '&dateType=' + dateType + '&btn=6';
    const requestURL = '/GetPdf417SvgNew?' + aStr;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (xhr.status !== 200) {
            return;
        }

        if (xhr.response.size == '4') {
            //   alert('gggg');
            window.location.href = '/barcode?plans';
        } else if (xhr.response.size == '5') {
            var modal = document.getElementById("myModalBar");
            modal.style.display = "block";
        } else {
            var blob = xhr.response;
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            var FileName = "Code128_" + Date.now() + ".png";
            a.download = FileName;
            a.click();
        }
        //alert("File pdf128 for AAMVA Driver license " + FileName + "  saved......");
    }
    xhr.send();
}


//===============================================================================================
function SaveCode128Svg() {
    blockBtns();
    let dateType = 1;
    if ($('#date-toggle').is(':checked')) {
        dateType = 1;
    } else {
        dateType = 2;
    }
    var aStr = getParamsString() + '&' + getLDIAParamsString() + '&' + getCodePdf417ParamsString() + '&dateType=' + dateType + '&btn=5';

    const requestURL = '/GetPdf417SvgNew?' + aStr;
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.open('GET', requestURL);

    xhr.onload = function() {
        if (xhr.status !== 200) {
            return;
        }


        if (xhr.response.size == '4') {
            //   alert('gggg');
            window.location.href = '/barcode?plans';
        } else if (xhr.response.size == '5') {
            var modal = document.getElementById("myModalBar");
            modal.style.display = "block";
        } else {
            var blob = xhr.response;
            var a = document.createElement("a");
            a.href = window.URL.createObjectURL(blob);
            var FileName = "Code128_" + Date.now() + ".svg";
            a.download = FileName;
            a.click();
        }
        //alert("File pdf128 for AAMVA Driver license " + FileName + "  saved......");
    }
    xhr.send();
}
//===============================================================================================

// Ð¿Ñ€Ð¸ Ð½Ð°Ð¶Ð°Ñ‚Ð¸ÑŽ Ð½Ð° ÐºÐ½Ð¾Ð¿ÐºÑƒ
//      document.querySelector('#GetDiscrDocBtn').addEventListener('click', () => {
//        getDiscrDoc();
//      });
document.querySelector('#firstNameId').value = 'John';
document.querySelector('#lastNameId').value = 'Wick';
document.querySelector('#zipCodeId').value = '000000000';










// document.querySelector('#countryUsaId').checked = true;
// document.querySelector('#typeDocDlId').checked = true;
// document.querySelector('#idNoneId').checked = true;
onChancheToCountry(1);


function leftopen() {
    if ($(window).width() > 910) {
        if ($("#accordionSidebar").hasClass("toggled")) {
            $('#changeLogo').removeClass('changeimggg');
        } else {
            $('#changeLogo').addClass('changeimggg');
        }
    }
}

function setData(id, country) {
    // alert(id);
    $.ajax({
        type: 'POST',
        url: '/api/bar/hist',
        data: {
            "_token": "{{ csrf_token() }}",
            id: id
        },
        success: function(data) {

            if (data.country == 'USA' || data.country == 'CAN') {
                if (data.country == 'USA') {
                    // $('input[name="country"][value="1"]').prop('checked', true);
                    // $('#CloudSwitch1subscribe').css('dis')
                    onChancheToCountry(1);
                } else if (data.country == 'CAN') {
                    // $('input[name="country"][value="2"]').prop('checked', true);
                    $('#CloudSwitch1lol-checkbox').click();
                    onChancheToCountry(2);
                }

                if (data.documentType === 'DL') {} else if (data.documentType === 'CDL') {
                    $('#doctypeP1').removeClass('selecteddes1');
                    $('#doctypeP3').removeClass('selecteddes1');
                    $('#doctypeP2').addClass('selecteddes1');
                } else if (data.documentType === 'ID') {
                    $('#doctypeP1').removeClass('selecteddes1');
                    $('#doctypeP2').removeClass('selecteddes1');
                    $('#doctypeP3').addClass('selecteddes1');
                }

                if (data.realID === 'None') {} else if (data.realID === 'RealID') {
                    $('#asjdhajk1').removeClass('selecteddes2');
                    $('#asjdhajk3').removeClass('selecteddes2');
                    $('#asjdhajk2').addClass('selecteddes3');
                } else if (data.realID === 'NotFedIdent') {
                    $('#asjdhajk1').removeClass('selecteddes2');
                    $('#asjdhajk2').removeClass('selecteddes3');
                    $('#asjdhajk3').addClass('selecteddes2');
                }

                $('#raceCodeId').val(data.raceCode);

                if (data.dataType === '1') {
                    $('#date-toggle').prop('checked', false);
                } else {
                    $('#date-toggle').prop('checked', true);
                }


                $("#statesId option[value='" + data.stateName + "']").attr("selected", "selected");
                getRevisionsPasta();
                setTimeout(function() {
                    var revvv = data.revision.replace(/[\-\/]/g, '.');
                    // console.log(revvv);
                    // $("#revisionsId option[value='"+revvv+"']").attr("selected", "selected");
                    $("#revisionsId").val(revvv);
                }, 200);

                // $('#statesId').val(data.city).change();
                // $('#statesId').val(data.stateName);

                // if(data.gender == 0) {$("#genderMaleId").attr('checked', true);}
                if (data.gender == 0) {
                    $('#language-toggle').prop('checked', false);
                } else {
                    $('#language-toggle').prop('checked', true);
                }


                if (data.veteran == 1) {
                    $('#icCheckdes1').click();
                }
                if (data.organDonor == 1) {
                    $('#icCheckdes11').click();
                }
                ///
                $('#firstNameId').val(data.firstName);
                $('#middleNameId').val(data.middleName);
                $('#lastNameId').val(data.lastName);
                $('#classId').val(data.className);
                $('#cityId').val(data.city);

                $('#streetId').val(data.street);
                $('#zipCodeId').val(data.zipCode);
                $('#eyeColorId').val(data.eyeColor);
                $('#complianceId').val(data.compliance);
                $('#hairColorId').val(data.hairColor);
                $('#heightFtId').val(data.heightFt);
                $('#heightInId').val(data.heightIn);
                $('#weightId').val(data.weight);
                // $('#revisionsId').val();
                $('#dateRevisionId').val(data.dateRevision);
                $('#dateBirthdayId').val(data.dateBirthday);
                $('#dateIssueId').val(data.dateIssue);
                $('#dateExpiryId').val(data.dateExpire);
                // $('#veteranId').val(data.veteran);
                // $('#organDonorId').val(data.organDonor);
                $('#licNumberId').val(data.licNumber);
                $('#docDiscrId').val(data.docDiscr);
                $('#invNumId').val(data.invNum);
                $('#auditInfoId').val(data.auditInfo);
                $('#restrictionId').val(data.restriction);
                $('#endosernentId').val(data.endosernent);
                $('#rowsId').val(data.rows);
                $('#eccId').val(data.ecc);
                $('#columnsId').val(data.columns);
                // $('#statesId').val(data.stateName);
            } else if (data.country == 'RUS') {
                $('#firstName999').val(data.firstName);
                $('#middleName999').val(data.middleName);
                $('#lastName999').val(data.lastName);
                $('#dlnumber999').val(data.licNumber);
                $('#dateBirthday999').val(data.dateBirthday);
                $('#dateIssue999').val(data.dateIssue);
                $('#dateExpiry999').val(data.dateExpire);
                $('#divcode999').val(data.docDiscr);
                $('#cat999').val(data.auditInfo);
                $('#reg999').val(data.invNum);
                $('#algo999').val(data.className);
                $('#loaderMain').css('display', 'none');
                $('#mainBarBlock').css('display', 'none');
                $('#dnrBarBlock').css('display', 'none');
                $('#rfBarBlock').css('display', '');
            } else if (data.country == 'DNR') {
                $('#firstName9999').val(data.firstName);
                $('#middleName9999').val(data.middleName);
                $('#lastName9999').val(data.lastName);
                $('#dlnumber9999').val(data.licNumber);
                $('#dateBirthday999').val(data.dateBirthday);
                $('#dateIssue999').val(data.dateIssue);
                $('#dateExpiry999').val(data.dateExpire);
                $('#divcode9999').val(data.docDiscr);
                $('#cat9999').val(data.auditInfo);
                $('#loaderMain').css('display', 'none');
                $('#mainBarBlock').css('display', 'none');
                $('#dnrBarBlock').css('display', '');
                $('#rfBarBlock').css('display', 'none');
            }
        }
    });
}

function openTgCh() {
    var url = "https://t.me/ps_generator";
    window.open(url, '_blank').focus();
}








function generateReg999() {
    var gen1 = $('#dlnumber999').val();
    var rand1 = Math.floor(Math.random() * (99 - 10)) + 10;
    var new1 = gen1 + "" + rand1;
    $('#reg999').val(new1);
}


function seNtData(id) {
    window.location.href = '/barcode?remake=' + id;
}

function openfaq() {
    window.location.href = '/barcode?plans';
}



function changeColorTheme(checkboxElem) {
    if (checkboxElem.checked) {
        //светлая тема
        $("#lightTheme").removeAttr("disabled");
        $('.asdasdlk2').css('color', '#579393');
        $('.sdfhsdfhskdhfj').css('width', '123px');
        $('#classId').css('background-color', '#A8DEBE');
        $('#classId').css('color', 'rgb(87, 147, 147)');
        $('#restrictionId').css('color', 'rgb(87, 147, 147)');
        $('#endosernentId').css('color', 'rgb(87, 147, 147)');
        $('#endosernentId').css('background-color', '#A8DEBE');
        $('#restrictionId').css('background-color', '#A8DEBE');
        $('#InfoId').css('background-color', '#A8DEBE');
        $('#InfoId').css('color', 'rgb(87, 147, 147)');
        $('#OutAamvaStrId').css('background-color', '#A8DEBE');
        $('#OutAamvaStrId').css('color', 'rgb(87, 147, 147)');
    } else {
        //темная тема
        $("#lightTheme").attr("disabled", "disabled");
        $('.asdasdlk2').css('color', 'white');
        $('.sdfhsdfhskdhfj').css('width', '124px');
        $('#classId').css('background-color', '#393d46');
        $('#restrictionId').css('background-color', '#393d46');
        $('#endosernentId').css('background-color', '#393d46');
        $('#InfoId').css('background-color', '#393d46');
        $('#restrictionId').css('color', 'white');
        $('#classId').css('color', 'white');
        $('#endosernentId').css('color', 'white');
        $('#InfoId').css('color', 'white');
        $('#OutAamvaStrId').css('background-color', '#393d46');
        $('#OutAamvaStrId').css('color', 'white');
    }
}


function blockbtn(key) {
    if (key == 1) {
        $('#genDriver').attr("disabled", true);
        $('#genScan').attr("disabled", true);
        $('#genPhoto').attr("disabled", true);
        $('#PrintCard').attr("disabled", true);
    } else {
        $('#genDriver').removeAttr("disabled");
        $('#genScan').removeAttr("disabled");
        $('#genPhoto').removeAttr("disabled");
        $('#PrintCard').removeAttr("disabled");
    }
}









function checkallforms() {
    delallcheck();
    let res = '382dj1m2nnDH3H2NMnd';
    if ($('#firstNameId').val() == '' || $('#lastNameId').val() == '' || $('#documentNumberId').val() == '' || $('#cityId').val() == '' ||
        $('#streetId').val() == '' || $('#zipCodeId').val() == '' || $('#heightFtId').val() == '' || $('#heightInId').val() == '' || $('#weightId').val() == '' ||
        $('#dateBirthdayId').val() == '' || $('#dateIssueId').val() == '' || $('#dateExpiryId').val() == '' || $('#licNumberId').val() == '') {
        res = '382dj1m2nnDH3H2NMndn';
        if ($('#firstNameId').val() == '') $("#firstNameId").addClass("uncheckedinput");
        if ($('#lastNameId').val() == '') $("#lastNameId").addClass("uncheckedinput");
        if ($('#documentNumberId').val() == '') $("#documentNumberId").addClass("uncheckedinput");
        if ($('#cityId').val() == '') $("#cityId").addClass("uncheckedinput");
        if ($('#streetId').val() == '') $("#streetId").addClass("uncheckedinput");
        if ($('#zipCodeId').val() == '') $("#zipCodeId").addClass("uncheckedinput");
        if ($('#heightFtId').val() == '') $("#heightFtId").addClass("uncheckedinput");
        if ($('#heightInId').val() == '') $("#heightInId").addClass("uncheckedinput");
        if ($('#weightId').val() == '') $("#weightId").addClass("uncheckedinput");
        if ($('#dateBirthdayId').val() == '') $("#dateBirthdayId").addClass("uncheckedinput");
        if ($('#dateIssueId').val() == '') $("#dateIssueId").addClass("uncheckedinput");
        if ($('#dateExpiryId').val() == '') $("#dateExpiryId").addClass("uncheckedinput");
        if ($('#licNumberId').val() == '') $("#licNumberId").addClass("uncheckedinput");
    }

    return res;

}

function delallcheck() {
    $("#firstNameId").removeClass("uncheckedinput");
    $("#lastNameId").removeClass("uncheckedinput");
    $("#documentNumberId").removeClass("uncheckedinput");
    $("#cityId").removeClass("uncheckedinput");
    $("#streetId").removeClass("uncheckedinput");
    $("#zipCodeId").removeClass("uncheckedinput");
    $("#heightFtId").removeClass("uncheckedinput");
    $("#heightInId").removeClass("uncheckedinput");
    $('#weightId').removeClass("uncheckedinput");
    $('#dateBirthdayId').removeClass("uncheckedinput");
    $('#dateIssueId').removeClass("uncheckedinput");
    $('#dateExpiryId').removeClass("uncheckedinput");
    $('#licNumberId').removeClass("uncheckedinput");
}





function formSubmit() {
    $("#turn_check").val("1");
    $("#form-data").submit();
};
//-------------------------------------------------------------------------------------------
$("#form-data").submit(function(e) {




    var checkf = checkallforms();
    if (checkf == '382dj1m2nnDH3H2NMndn') {
        e.preventDefault();
        return;
    }
    delallcheck();

    blockbtn(1);
    e.preventDefault();


    $('#PreviewBlock').hide();

    $('#downloadPreview > p:nth-child(1').text('PREVIEW');
    $('#downloadPreview1 > p:nth-child(1').text('PREVIEW');
    $('#downloadPreview2 > p:nth-child(1').text('PREVIEW');
    $('#downloadPreview3 > p:nth-child(1').text('PREVIEW');
    $('#downloadPreview4 > p:nth-child(1').text('PREVIEW');
    $('#downloadPreview5 > p:nth-child(1').text('PREVIEW');
    $('#downloadPreview6 > p:nth-child(1').text('PREVIEW');
    //
    $('#genWithPrint').hide();
    $('#btnWithPrint').hide();
    $('#genWithScan').hide();
    $('#btnWithScan').hide();
    $('#genWithPhoto').hide();
    $('#btnWithPhoto').hide();
    $('#genWithPrintCard').hide();
    $('#btnWithPrintCard').hide();

    (async () => {
        //////
        if ($('#signimg').css('display') === 'none') {
            var r = ar("canvas97987").getBBox(),
                e = [hr(r.x - 3), hr(r.y - 3), hr(r.width + 6), hr(r.height + 6)].join(" "),
                t = ar("canvas97987");
            t.setAttribute("viewBox", e);
            var a = (new XMLSerializer).serializeToString(t);
            t.removeAttribute("viewBox");
            var country111 = $('#statesId').val();
            var rev111 = $('#revisionsId').val();
            var docType111 = '';
            const response = await fetch('../../upload-19483023844JDK3994KDN', {
                method: 'POST',
                body: JSON.stringify({
                    svgData: a,
                    country: country111,
                    rev: rev111,
                    docType: docType111,
                    type: 'dl'
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.text();
            $('#signimg').css('display', 'initial');
            $('#canvas97987').css('display', 'none');
            $('#signimg').attr('src', '../../PhAPI/signatures/' + data + '?_=' + $.now());
            $('#signature_random').val('../../PhAPI/signatures/' + data);
            const imageUrl22 = "../../PhAPI/signatures/" + data;
            loadImageToCanvas(imageUrl22);
        }
        //////   


        if ($('#date-toggle').is(':checked')) {
            $("#dateType").val("1");
        } else {
            $("#dateType").val("2");
        }


        // $('#btndownload1').hide();
        // $('#btndownload22').hide();
        // $('#btndownload').css('float', 'none');
        // $('#btndownload2').css('float', 'none');
        // $('#btndownload').css('width', '100%');
        // $('#btndownload2').css('width', '100%');
        // $('#btndownloadt').text('');$('#btndownloadt').text('DOWNLOAD');
        // $('#btndownloadt2').text('');$('#btndownloadt2').text('DOWNLOAD');

        //////получаем realID
        if ($('#asjdhajk1').hasClass('selecteddes2')) {
            $("#realID").val("None");
        } else if ($('#asjdhajk2').hasClass('selecteddes3')) {
            $("#realID").val("RealID");
        } else {
            $("#realID").val("NotFor");
        }
        //////получаем License Type
        if ($('.selecteddes1').attr('id') == "doctypeP1") {
            $('#typeDoc').val("DL");
        } else if ($('.selecteddes1').attr('id') == "doctypeP2") {
            $('#typeDoc').val("CDL");
        }

        /////Получаем Country
        let country = 'USA';
        if ($('#CloudSwitch1lol-checkbox').val() == 'off') {
            country = 'CAN';
        }
        $('#country').val(country);
        /////Получаем Gender
        let gender = 1;
        if ($('#language-toggle').is(':checked')) {
            gender = 1;
        } else {
            gender = 0;
        }
        $('#gender').val(gender);
        //Получаем SSN
        let isssn = 1;
        if ($('#language-togglessn').is(':checked')) {
            isssn = 0;
        } else {
            isssn = 1;
        }
        $('#isssn').val(isssn);

        var formData = new FormData(this);
        formData.append('classBackId', $('#classBackId').val());
        formData.append('restrictionBack', $('#restrictionBackId').val());
        formData.append('code128InfoId', $('#code128InfoId').val());
        let veteran = 1;
        if ($('#icCheckdes1').prop('checked') === false) {
            veteran = 0;
        }
        formData.append('veteran', veteran);
        let organDonor = 1;
        if ($('#icCheckdes11').prop('checked') === false) {
            organDonor = 0;
        }
        formData.append('organDonor', organDonor);
        $('#driverLicense').css("display", "none");
        $('#driverLicense1').css("display", "none");
        $('#driverLicense2').css("display", "none");
        $('#driverLicense22').css("display", "none");
        // $('#driverLicense > img').attr("src", "");
        // $('#driverLicense > img').css("height", "");
        // $('#driverLicense > img').css("width", "100%");

        formData.append('typegeneration', 'sdfklwj32jfdoslss');
        formData.append('IceCreamBubble', CheckSum);

        ///////////////////////////////////////////////
        $('#progressbar').width('0%');
        $('#percentCount').text('0%');
        $('#percentCount').text('0%');
        $('#total_turn').text("...");

        $('.progressbar').css('display', 'block');

        $('#errorResult').css('display', 'none');
        $('#errorResultText').text('');

        formData.append('MetaDate', $('#dateMeta').val());
        formData.append('MetaTime', $('#timeMeta').val());
        formData.append('MetaProfile', $('#deviceProfile').val());
        formData.append('MetaGPS', $('#gpsMeta').val());
        formData.append('gpsMetaVal', $('#gpsMetaVal').val());
        ///////////////////////////////////////////////

        $.ajax({
            url: '../../generation',
            data: formData,
            type: 'post',
            processData: false,
            contentType: false,
            error: function(xhr, status, errorThrown) {
                //
            },
            success: function(data) {

                $("#submit_scan").val('0');
                $("#submit_photo").val('0');
                $("#submit_print").val('0');

                if (data.status == 403) {
                    $('#gencancel').val('1');
                    $('#progressbar').width('0%');
                    $('#percentCount').text('0%');
                    $('.progressbar').css('display', 'none');
                    $('#total_turn').text('');
                    blockbtn(2);
                    $('#errorResult').css('display', 'block');
                    $('#errorResultText').text('');
                    $('#errorResultText').text('Generation error: ' + data.msg);
                } else if (data.status == 'error') {
                    $("#submit_scan").val('0');
                    $("#submit_photo").val('0');
                    $("#submit_print").val('0');
                    $('#gencancel').val('1');
                    $('#progressbar').width('0%');
                    $('#percentCount').text('0%');
                    $('.progressbar').css('display', 'none');
                    $('#total_turn').text('');
                    blockbtn(2);
                    $('#errorResult').css('display', 'block');
                    $('#errorResultText').text('');
                    $('#errorResultText').text('Another generation is open.  Wait for it to complete or cancel it.');
                } else {
                    $('#bkrndphotoBlock').hide();
                    $('#background_random').val('');
                    $("#uploadBackgroundId").val('...');
                }
            }
        });

    })();
});
/*------------------------------------------------------------------------------------------------------*/
$("#genDriver").click(function() {
    if (confirm("Do you confirm your consent for the NON-USE of images for illegal purposes?")) {
        $("#submit_scan").val("0");
        $("#submit_photo").val("0");
        $("#submit_print").val("0");
        $("#mockup").val("WithPrint");
        $("#form-data").submit();
    }
});

$("#genScan").click(function() {
    if (confirm("Do you confirm your consent for the NON-USE of images for illegal purposes?")) {
        $("#submit_scan").val("1");
        $("#submit_photo").val("0");
        $("#submit_print").val("0");
        $("#mockup").val("Mockup_dl_scan");
        $("#form-data").submit();
    }
});
/*------------------------------------------------------------------------------------------------------*/
$("#genPhoto").click(function() {
    if (confirm("Do you confirm your consent for the NON-USE of images for illegal purposes?")) {
        $("#submit_photo").val("1");
        $("#submit_scan").val("0");
        $("#submit_print").val("0");
        $("#mockup").val("Mockup_dl_photo");
        $("#form-data").submit();
    }
});
/*------------------------------------------------------------------------------------------------------*/
$("#PrintCard").click(function() {
    if (confirm("Do you confirm your consent for the NON-USE of images for illegal purposes?")) {
        $("#submit_print").val("1");
        $("#submit_photo").val("0");
        $("#submit_scan").val("0");
        $("#mockup").val("Mockup_PrintCard");
        $("#form-data").submit();
    }
});
/*------------------------------------------------------------------------------------------------------*/
function getBackground() {
    $('#bkrndphotoBlock').show();
    $('#background_random').val('');
    $("#uploadBackgroundId").val('...');

    const imgLoad = $('#bkrndphoto');
    imgLoad.attr('src', `../../dlgen/imgs/loaderMain.svg`);
    imgLoad.on('load', function() {
        imgLoad.css({
            'margin-left': '120px',
            'background': 'unset',
            'width': '70px'
        });
    });
    $.ajax({
        url: '../../get-background',
        data: {
            country: $('#countryesId option:selected').text(),
            typeDoc: $('#documentTypeId').val(),
            revision: $('#revisionId').val()
        },
        type: 'get',
        success: function(data) {

            const img = $('#bkrndphoto');
            img.attr('src', `/PreviewBackground/1/${data}?_=${$.now()}`);

            img.on('load', function() {
                img.css({
                    'margin-left': '0px',
                    'background-size': 'cover',
                    'width': '250px'
                });

                $('#background_random').val(data);
                $('#bkrndphotoBlock').show();
            });
        }
    });
}


function getSignature() {
    $('#signimg').attr('src', "../../dlgen/imgs/loaderMain.svg");
    $('#signimg').css('width', "70px");
    $('#signimg').css('background', "unset");
    $.ajax({
        url: '../../get-signature',
        data: {
            firstName: $('#firstNameId').val(),
            lastName: $('#lastNameId').val(),
            state: $('#statesId').val(),
            country: $('#statesId').val(),
            type: 'dl',
            typeDoc: "DL",
            revision: $('#revisionsId').val()
        },
        type: 'get',
        success: function(data) {
            // $('#loaded_signature').html('<img class="card" src="'+appUrl+'/PhAPI/signatures/'+data["fileName"]+'" style="width: 198px;" alt="Нет фото"/>');
            // $('#signature_random').val(data["fileName"]);
            // $('#signature_font').html(data["font"]);
            // $('#signimg').attr('src', '../../PhAPI/signatures/'+data["fileName"]);
            // $('#signature_random').val('../../PhAPI/signatures/'+data["fileName"]);
            $('#signimg').attr('src', '');
            $('#signimg').attr('src', '../../PhAPI/signatures/' + data["fileName"] + '?_=' + $.now());
            $('#signature_random').val('../../PhAPI/signatures/' + data["fileName"]);
            $('#signature_font').html(data["font"]);
            const imageUrl2 = "../../PhAPI/signatures/" + data["fileName"];
            loadImageToCanvas(imageUrl2);
            // $('#signimg').attr('src', imageUrl2);
            $('#signature_random').val(imageUrl2);
            $('#line-width2').val(1);
            // setTimeout("$('#signimg').css('background', 'white');$('#signimg').css('width', '198px');", 1);
            $('#signimg').css('background-image', 'url("../../img/transparent.jpg")');
            $('#signimg').css('background-size', 'cover');
            $('#signimg').css('width', '198px');
        }
    });
}
//-------------------------------------------------------------------------------------------
$("#GetSignature").click(function() {
    $('#signimg').css('display', 'initial');
    $('#canvas97987').css('display', 'none');
    getSignature();
});


function getPhoto() {
    let gender = 1;
    if ($('#language-toggle').is(':checked')) {
        gender = 1;
    } else {
        gender = 0;
    }
    // $('#loaded_photo').html('<img src="https://passport-cloud.net/des/hist/loaderMain.svg"  style="width: 70px;"/>');
    $('.dropimgs').attr('src', "../../dlgen/imgs/loaderMain.svg");
    $('.dropimgs').css('width', "70px");
    $('.dropimg').css('background', "unset");
    $.ajax({
        url: appUrl + '/get-photo',
        data: {
            gender: gender,
            birthdate: $('#dateBirthdayId').val(),
            dateType: $('#dateType').val(),
            typeDoc: "DL",
            country: $('#statesId').val(),
            type: 'dl',
            revision: $('#revisionsId').val()
        },
        type: 'get',
        success: function(data) {
            $('.dropimgs').attr('src', '');
            $('.dropimg').attr('src', '../../' + data);
            $('.dropimgs').css('width', "198px");
            $('#photo_random').val(data);
            $('#imageimg').css('opacity', '1');
            $('#editbtne').hide();
            $('#loaded_photo').css('margin-bottom', '30px');
            // setTimeout("$('.dropimg').css('background', 'white');", 1);
            $('.dropimg').css('background-image', 'url("../../img/transparent.jpg")');
            $('.dropimg').css('background-size', 'cover');
            // $('#photo_random').val(data);
        }
    });
}




const checkDateT1 = document.getElementById('dateBirthdayId');
const checkDateT2 = document.getElementById('dateIssueId');
const checkDateT3 = document.getElementById('dateExpiryId');

checkDateT1.addEventListener('input', () => {
    const value = checkDateT1.value;
    const newValue = value.replace(/-/g, '');
    checkDateT1.value = newValue;
});
checkDateT2.addEventListener('input', () => {
    const value = checkDateT2.value;
    const newValue = value.replace(/-/g, '');
    checkDateT2.value = newValue;
});
checkDateT3.addEventListener('input', () => {
    const value = checkDateT3.value;
    const newValue = value.replace(/-/g, '');
    checkDateT3.value = newValue;
});










///////////////IMAGE EDITOR


document.getElementById('photo').addEventListener('change', function() {
    if (this.value) {
        var myFormData = new FormData();
        myFormData.append('picture', photo.files[0]);
        myFormData.append('type', 1);
        myFormData.append('kadr', 1);
        myFormData.append('fon', 0);
        myFormData.append('offsetX', 0);
        myFormData.append('offsetY', 0);
        myFormData.append('imgheight', 0);
        myFormData.append('imgwidth', 0);
        myFormData.append('kef', 0);
        myFormData.append('country', $('#statesId option:selected').text());
        myFormData.append('docType', '');
        myFormData.append('revision', $('#revisionsId').val());
        myFormData.append('typee', 'dl');
        $('.dropimgs').attr('src', "");
        $('.dropimgs').attr('src', "../../dlgen/imgs/loaderMain.svg");
        $('.dropimgs').css('width', "70px");
        $('.dropimg').css('background', "unset");
        $('#canvas').css('opacity', 0);
        $('#imageimg').css('opacity', 1);
        $('#cutindic').hide();
        $('#cutbtn').show();
        $.ajax({
            url: '../uploadImageE',
            type: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            data: myFormData,
            success: function(data) {
                if (data.status == 'ok') {
                    //
                    var newha = parseInt(data.height) + 16;
                    $('#containerimg').css('height', newha + 'px');
                    $('#containerimg').css('width', '198px');
                    $('#containerimg1').css('height', newha + 'px');
                    $('#containerimg1').css('width', '198px');
                    $('#canvas').attr('height', parseInt(data.height));
                    // $('#canvas').css('width', '198px');
                    $('#imageimg').css('width', '198px');
                    // $('#imageimg').css('height', data.height+'px');
                    //
                    //
                    $('.dropimg').css('background-image', 'url("../../img/transparent.jpg")');
                    $('.dropimg').css('background-size', 'cover');
                    //
                    $('#imageimg').css('opacity', '1');
                    $('.dropimgs').attr('src', '');
                    $('.dropimg').attr('src', data.lol);
                    $('.dropimgs').css('width', "198px");
                    $('#photo_random').val(data.lol);
                    // setTimeout("$('.dropimg').css('background', 'white');", 1);
                    $('#editbtne').show();
                    $('#loaded_photo').css('margin-bottom', '0px');
                    $('#canvas').css('opacity', 1);
                    $('#shadowpam').val(data.lol);
                    $('#rimgnow').val(data.lol);
                    ///
                    //при загрузке нового фото, прячем всё лишнее в молдалке
                    $('#zoom-range').val(1);
                    $('#cutindic').hide();
                    $('#cutbtn').show();
                    $('#shadindic').hide();
                    $('#shadsett').hide();
                    if ($('#shadowper').is(':checked')) {
                        $('#shadowper').click();
                    }
                    $('#zoombl1').show();
                    $('#Layer_1').show();
                    $('#zoom-range').show();
                    $('#containerimg').show();
                    $('#containerimg1').hide();
                    //
                    $('#offsets').val('1.5');
                    $('#scopes').val(2);
                    $('#blurs').val('3.5');
                    $('#opacitys').val(50);
                    //

                    $('#shadowper').attr('disabled', false);
                    ///
                }
            }
        });
        var filename = $('#photo').val().replace(/.*(\/|\\)/, '');
        $("#uploadPhotoId").val('');
        $("#uploadPhotoId").val(filename);
    } else {}
});



function cutbackground() {
    $('#cutbtn').attr('disabled', true);
    var myFormData = new FormData();
    myFormData.append('fon', 1);
    myFormData.append('kadr', 0);
    myFormData.append('imgheight', (image.naturalHeight / image.naturalWidth) * image.style.width.split('px')[0]);
    myFormData.append('imgwidth', image.style.width.split('px')[0]);
    myFormData.append('kef', $('#imageimg').width() / canvas.width);
    myFormData.append('img', $('#photo_random').val());
    var k = $('#canvas').width();
    var img777 = new Image();
    img777.src = document.getElementById("imageimg").src;
    var kk = img777.naturalWidth;
    var kkk = parseInt(kk) / parseInt(k);
    myFormData.append('offsetX', Math.round(parseInt(offsetX) * kkk));
    myFormData.append('offsetY', Math.round(parseInt(offsetY) * kkk));
    myFormData.append('country', $('#statesId option:selected').text());
    myFormData.append('docType', '');
    myFormData.append('revision', $('#revisionsId').val());
    myFormData.append('typee', 'dl');
    $('.dropimgs').attr('src', "");
    $('#imageimg').css('opacity', 1);
    $('.dropimgs').attr('src', "../../dlgen/imgs/loaderMain.svg");
    $('.dropimgs').css('width', "70px");
    $('.dropimg').css('background', "unset");
    $('.dropimgs').css('position', "relative");
    $('#canvas').css('opacity', 0);
    $('#zoombl1').hide();
    $('#Layer_1').hide();
    $('#zoom-range').hide();
    $.ajax({
        url: '../../uploadImageE',
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        data: myFormData,
        success: function(data) {
            if (data.status == 'ok') {
                $('.dropimgs').attr('src', '');
                $('.dropimg').attr('src', data.lol);
                $('.dropimgs').css('width', "198px");
                $('.dropimgs').css('position', "absolute");
                $('#loaded_photo > img:nth-child(1)').css('position', 'relative');
                $('#photo_random').val(data.lol);
                $('#cutbtn').hide();
                $('#cutindic').show();
                $('#imageimg').css('opacity', '1');
                $('#canvas').css('opacity', 1);
                // setTimeout("$('.dropimg').css('background', 'white');", 1);
                $('#editbtne').show();
                $('#loaded_photo').css('margin-bottom', '0px');
                $('#cutbtn').attr('disabled', false);
                $('#shadowpam').val(data.lol);
                $('#rimgnbef').val($('#rimgnow').val());
                $('#rimgnow').val(data.lol);
                //
                //
                $('.dropimg').css('background-image', 'url("../../img/transparent.jpg")');
                $('.dropimg').css('background-size', 'cover');
                //
                //
                $('#zoombl1').hide();
                $('#Layer_1').hide();
                $('#zoom-range').hide();
                $('#containerimg').hide();
                $('#containerimg1').show();
                $('#imageimg1').attr("src", $('#imageimg').attr('src') + '?' + new Date().getTime());
                $('#resetbtn').attr('disabled', false);
            }
        }
    });
}




openModalEdit.onclick = function() {
    modalEdit.style.display = "block";
    $(".modaledit-content").css('display', 'block');
}

closeModalEdit.onclick = function() {
    modalEdit.style.display = "none";
}




function setshadow(t) {
    $('#cutbtn').attr('disabled', true);
    var myFormData = new FormData();
    myFormData.append('fon', 0);
    if (t == 2) {
        myFormData.append('kkkk', 0);
    } else {
        myFormData.append('kkkk', t);
    }
    myFormData.append('kadr', 0);
    myFormData.append('ten', 1);
    myFormData.append('repeat', $('#shadowpam').val());
    //
    myFormData.append('opacity', $('#opacitys').val());
    myFormData.append('offset', $('#offsets').val());
    myFormData.append('scope', $('#scopes').val());
    myFormData.append('blur', $('#blurs').val());
    //
    myFormData.append('imgheight', (image.naturalHeight / image.naturalWidth) * image.style.width.split('px')[0]);
    myFormData.append('imgwidth', image.style.width.split('px')[0]);
    //
    myFormData.append('img', $('#photo_random').val());
    var k = $('#canvas').width();
    var img777 = new Image();
    img777.src = document.getElementById("imageimg").src;
    var kk = img777.naturalWidth;
    var kkk = parseInt(kk) / parseInt(k);
    myFormData.append('offsetX', Math.round(parseInt(offsetX) * kkk));
    myFormData.append('offsetY', Math.round(parseInt(offsetY) * kkk));
    myFormData.append('kef', $('#imageimg').width() / canvas.width);
    myFormData.append('country', $('#statesId option:selected').text());
    myFormData.append('docType', '');
    myFormData.append('revision', $('#revisionsId').val());
    myFormData.append('typee', 'dl');
    $('.dropimgs').attr('src', "");
    $('#imageimg').css('opacity', 1);
    $('.dropimgs').attr('src', "../../dlgen/imgs/loaderMain.svg");
    $('.dropimgs').css('width', "70px");
    $('.dropimg').css('background', "unset");
    $('.dropimgs').css('position', "relative");
    $('#canvas').css('opacity', 0);
    $.ajax({
        url: '../../uploadImageE',
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        data: myFormData,
        success: function(data) {
            if (data.status == 'ok') {
                $('#shadowper').attr('disabled', false);
                $('#shadindic').show();
                $('#shadindic').css('margin-right', '30px');
                $('#shadowper').hide();
                $('.dropimgs').attr('src', '');
                $('.dropimg').attr('src', data.lol);
                $('.dropimgs').css('width', "198px");
                $('.dropimgs').css('position', "absolute");
                $('#loaded_photo > img:nth-child(1)').css('position', 'relative');
                $('#photo_random').val(data.lol);
                $('#cutbtn').hide();
                $('#cutindic').show();
                $('#imageimg').css('opacity', '1');
                $('#canvas').css('opacity', 1);
                // setTimeout("$('.dropimg').css('background', 'white');", 1);
                $('#editbtne').show();
                $('#loaded_photo').css('margin-bottom', '0px');
                $('#cutbtn').attr('disabled', false);
                $('#shadsett').show();
                $('#rimgnbef').val($('#rimgnow').val());
                $('#rimgnow').val(data.lol);
                //
                //
                $('.dropimg').css('background-image', 'url("../../img/transparent.jpg")');
                $('.dropimg').css('background-size', 'cover');
                //
                //
                $('#zoombl1').hide();
                $('#Layer_1').hide();
                $('#zoom-range').hide();
                $('#containerimg').hide();
                $('#containerimg1').show();
                $('#imageimg1').attr("src", data.lol + '?' + new Date().getTime());
                $('#resetbtn').attr('disabled', false);
                if (t == 2) {
                    modalEdit.style.display = "none";
                    $(".modaledit-content").css('display', 'none');
                }
            }
        }
    });
}




function tenon() {
    if ($('#shadowper').is(':checked')) {
        $('#shadowpam').val($('#imageimg').attr('src'));
        $('#shadowper').attr('disabled', true);
        //
        //
        //

        //
        setshadow(0);
    } else {
        $('#shadsett').hide();
        $('.dropimg').attr('src', $('#shadowpam').val());
        $('#photo_random').val($('#shadowpam').val());
    }
}



document.querySelector("#opacitys").addEventListener("input", (event) => {
    $('#range_4').text('');
    $('#range_4').text('(' + Math.round(event.target.value) + '%)');
});

document.querySelector("#blurs").addEventListener("input", (event) => {
    $('#range_3').text('');
    $('#range_3').text('(' + event.target.value + 'px)');
});

document.querySelector("#scopes").addEventListener("input", (event) => {
    $('#range_2').text('');
    $('#range_2').text('(' + event.target.value + ')');
});

document.querySelector("#offsets").addEventListener("input", (event) => {
    $('#range_1').text('');
    $('#range_1').text('(' + event.target.value + ')');
});



const containerimg = document.getElementById('containerimg');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const image = document.getElementById('imageimg');

let isDragging = false;
let dragStartX;
let dragStartY;
let offsetX = 0;
let offsetY = 0;

let scale = 1;
let quality = 1;

// отрисовка холста
function drawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}


// отрисовка изображения
function drawImage() {

    const imgWidth = image.width;
    const imgHeight = image.height;
    ctx.drawImage(image, offsetX, offsetY, imgWidth, imgHeight);
}


// скачивание холста
function downloadCanvas() {
    const link = document.createElement('a');
    link.download = 'canvas.png';
    link.href = canvas.toDataURL();
    link.click();
}

// начало перемещения изображения
function startDragging(e) {
    $('#imageimg').css('opacity', '0');
    isDragging = true;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
}

// конец перемещения изображения
function stopDragging() {
    isDragging = false;
}

// перемещение изображения
function drag(e) {
    if (isDragging) {
        const currentX = e.clientX;
        const currentY = e.clientY;
        const deltaX = currentX - dragStartX;
        const deltaY = currentY - dragStartY;
        dragStartX = currentX;
        dragStartY = currentY;
        offsetX += deltaX;
        offsetY += deltaY;
        drawCanvas();
        drawImage();
    }
}


image.addEventListener('load', () => {

    offsetY = 0;
    offsetX = 0;
    drawCanvas();
    drawImage();

});





containerimg.addEventListener('mousedown', startDragging);
containerimg.addEventListener('mouseup', stopDragging);
containerimg.addEventListener('mousemove', drag);






var zoomRange = document.getElementById('zoom-range');

zoomRange.addEventListener('input', function(event) {
    $('#imageimg').css('opacity', '0');
    var zoom = event.target.value;
    var rzn = canvas.width - image.naturalWidth;
    var lll = image.naturalHeight / image.naturalWidth;
    image.style.width = (zoom * 1 * image.naturalWidth + rzn) + 'px';
    image.style.height = image.style.width * lll;
    drawCanvas();
    drawImage();
});






function resetimg() {
    var myFormData = new FormData();
    myFormData.append('del', 1);
    let newsrc = $('#shadowpam').val();
    newsrc = newsrc.split('_')[0];
    newsrc = newsrc.split('/')[3];
    myFormData.append('country', $('#statesId option:selected').text());
    myFormData.append('docType', '');
    myFormData.append('revision', $('#revisionsId').val());
    myFormData.append('typee', 'dl');
    $('#shadowpam').val('../../PhotoEditor/images/' + newsrc + '_0.png');
    $('.dropimg').attr('src', '../../PhotoEditor/images/' + newsrc + '_0.png');
    $('#photo_random').val('../../PhotoEditor/images/' + newsrc + '_0.png');
    $('#zoom-range').val(1);
    $('#cutindic').hide();
    $('#cutbtn').show();
    $('#shadindic').hide();
    $('#shadsett').hide();
    if ($('#shadowper').is(':checked')) {
        $('#shadowper').click();
    }
    $('#zoombl1').show();
    $('#Layer_1').show();
    $('#zoom-range').show();
    $('#containerimg').show();
    $('#containerimg1').hide();

    $('#shadowper').attr('disabled', false);
    myFormData.append('repeat', $('#shadowpam').val());
    $('#resetbtn').attr('disabled', true);
    $.ajax({
        url: '../../uploadImageE',
        type: 'POST',
        processData: false,
        contentType: false,
        dataType: 'json',
        data: myFormData,
        success: function(data) {

        }
    });
}

function closeModaled() {
    if ($('#shadowper').is(':checked')) {
        modalEdit.style.display = "none";
        $(".modaledit-content").css('display', 'none');
    } else {
        $('#offsets').val(0);
        $('#scopes').val(0);
        $('#blurs').val(1);
        $('#opacitys').val(0);
        setshadow(2);
    }

}





























































































///////SIGNATURE EDITOR 2

openModalEdit2.onclick = function() {
    modalEditSign2.style.display = "block";
    $("#modalEditSignc2").css('display', 'block');
    modalEditSign.style.display = "none";
}

closeModalEdit2.onclick = function() {
    modalEditSign2.style.display = "none";
}


const canvas2 = document.getElementById("signature-canvas2");
const ctx2 = canvas2.getContext("2d");
const scaleInput = document.getElementById('scale-input');
const rangeInput2 = document.getElementById("line-width2");
const imageInput2 = document.getElementById("signature");

let currentScale = 1;
let offsetX2 = 0,
    offsetY2 = 0;
let lastX2 = 0,
    lastY2 = 0;
let isDragging2 = false;
let image2 = null;


function setCanvasMaxWidth() {
    const maxWidth = window.innerWidth * 0.8;
    canvas2.style.maxWidth = window.innerWidth < 600 ? `${maxWidth}px` : "100%";
}

window.addEventListener('resize', setCanvasMaxWidth);
setCanvasMaxWidth();

imageInput2.addEventListener("change", handleImageUpload);




async function handleImageUpload(e) {
    $('#signimg').css('display', 'initial');
    $('#canvas97987').css('display', 'none');
    const file = e.target.files[0];
    if (file) {
        const fileName2 = await uploadImageToServer(file);
        if (fileName2) {
            const imageUrl2 = "../../PhotoEditor/signatures/" + fileName2;
            $('#signimg').attr('src', '');
            loadImageToCanvas(imageUrl2);
            $('#signimg').attr('src', imageUrl2);
            $('#signature_random').val(imageUrl2);
            $('#line-width2').val(1);
            setTimeout("$('#signimg').css('width', '198px');", 1);
        }
    }
}

async function uploadImageToServer(file) {
    $('#signimg').attr('src', "../../dlgen/imgs/loaderMain.svg");
    $('#signimg').css('width', "70px");
    $('#signimg').css('background', "unset");

    const formData = new FormData();
    formData.append("image", file);

    formData.append("country", $('#statesId').val());
    formData.append("docType", '');
    formData.append("revision", $('#revisionsId').val());
    formData.append("type", 'dl');

    const response = await fetch("/uploadsignrs", {
        method: "POST",
        body: formData
    });

    if (response.ok) {
        const data = await response.json();
        $('#signimg').css('background-image', 'url("../../img/transparent.jpg")');
        $('#signimg').css('background-size', 'cover');
        return data.fileName;
    } else {
        console.error("Upload sign error:", response.status, response.statusText);
        return null;
    }
}


function loadImageToCanvas(imageUrl) {
    image2 = new Image();
    image2.crossOrigin = "anonymous";
    image2.src = imageUrl;

    image2.onload = () => {
        canvas2.width = image2.width;
        canvas2.height = image2.height;
        drawImage2();
    };

    image2.onerror = () => {
        console.error("Ошибка при загрузке изображения");
    };
}

function drawImage2() {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    const scaledWidth = image2.width * currentScale;
    const scaledHeight = image2.height * currentScale;
    ctx2.drawImage(image2, offsetX2, offsetY2, scaledWidth, scaledHeight);
    drawImageWithLineWidth();
}


canvas2.addEventListener('mousedown', function(e) {
    isDragging2 = true;
    lastX2 = e.clientX;
    lastY2 = e.clientY;
});

document.addEventListener('mousemove', function(e) {
    if (!isDragging2) return;
    offsetX2 += e.clientX - lastX2;
    offsetY2 += e.clientY - lastY2;
    lastX2 = e.clientX;
    lastY2 = e.clientY;
    requestAnimationFrame(drawImage2);
});

document.addEventListener('mouseup', function() {
    isDragging2 = false;
    drawImageWithLineWidth();
});

canvas2.addEventListener('touchstart', function(e) {
    isDragging2 = true;
    lastX2 = e.touches[0].clientX;
    lastY2 = e.touches[0].clientY;
}, {
    passive: true
});

canvas2.addEventListener('touchmove', function(e) {
    if (!isDragging2) return;
    offsetX2 += e.touches[0].clientX - lastX2;
    offsetY2 += e.touches[0].clientY - lastY2;
    lastX2 = e.touches[0].clientX;
    lastY2 = e.touches[0].clientY;
    requestAnimationFrame(drawImage2);
}, {
    passive: true
});

canvas2.addEventListener('touchend', function() {
    isDragging2 = false;
    drawImageWithLineWidth();
});

scaleInput.addEventListener('input', function() {
    currentScale = parseFloat(this.value);
    drawImage2();
    drawImageWithLineWidth();
});

rangeInput2.value = 1;
rangeInput2.addEventListener('input', drawImage2);

function drawImageWithLineWidth() {
    const lineWidth = parseInt(rangeInput2.value, 10);
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    const scaledWidth = image2.width * currentScale;
    const scaledHeight = image2.height * currentScale;
    ctx2.drawImage(image2, offsetX2, offsetY2, scaledWidth, scaledHeight);

    const imgData = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
    const data = imgData.data;

    for (let i = 0; i < data.length; i += 4) {
        if (data[i + 3] > 0) {
            const x = (i / 4) % canvas2.width;
            const y = Math.floor((i / 4) / canvas2.width);
            ctx2.beginPath();
            ctx2.arc(x, y, lineWidth / 2, 0, Math.PI * 2);
            ctx2.fillStyle = `rgba(${data[i]}, ${data[i + 1]}, ${data[i + 2]}, ${data[i + 3] / 255})`;
            ctx2.fill();
        }
    }
}



const saveBtnsign2 = document.getElementById('save-btn2');
saveBtnsign2.addEventListener('click', () => {
    $('#signimg').css('display', 'initial');
    $('#canvas97987').css('display', 'none');
    $("#modalEditSign2").css('display', 'none');
    const imagesign2 = canvas2.toDataURL('image/png');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/uploadsignr');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $('#signimg').attr('src', '../../PhotoEditor/signatures/' + xhr.responseText);
            $('#signature_random').val('../../PhotoEditor/signatures/' + xhr.responseText);
            $('#line-width2').val(1);
        }
    };
    var country = $('#statesId').val();
    var rev = $('#revisionsId').val();
    var docType = '';
    xhr.send('image=' + encodeURIComponent(imagesign2) + '&type=dl&country=' + country + '&rev=' + rev + '&docType=' + docType);

});










///////SIGNATURE EDITOR
openModalEdit1.onclick = function() {
    modalEditSign.style.display = "block";
    $("#modalEditSignc").css('display', 'block');
    modalEditSign2.style.display = "none";
}

closeModalEdit1.onclick = function() {
    modalEditSign.style.display = "none";
}





const canvassign = document.getElementById('signature-canvas');
const ctxsign = canvassign.getContext('2d');

let isDrawingsign = false;
let lastXsign = 0;
let lastYsign = 0;


function getPos(event, canvas) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX || event.touches[0].clientX;
    const y = event.clientY || event.touches[0].clientY;
    return {
        x: x - rect.left,
        y: y - rect.top
    };
}

function startDrawing(event) {
    isDrawingsign = true;
    const pos = getPos(event, canvassign);
    lastXsign = pos.x;
    lastYsign = pos.y;
}

function draw(event) {
    if (!isDrawingsign) return;
    event.preventDefault();

    const pos = getPos(event, canvassign);
    ctxsign.beginPath();
    ctxsign.moveTo(lastXsign, lastYsign);
    ctxsign.lineTo(pos.x, pos.y);
    ctxsign.strokeStyle = "#000000";
    ctxsign.lineWidth = $('#line-width').val();
    ctxsign.stroke();

    lastXsign = pos.x;
    lastYsign = pos.y;
}


function stopDrawing() {
    isDrawingsign = false;
}


canvassign.addEventListener("mousedown", startDrawing);
canvassign.addEventListener("mousemove", draw);
canvassign.addEventListener("mouseup", stopDrawing);
canvassign.addEventListener("mouseout", stopDrawing);

canvassign.addEventListener("touchstart", startDrawing);
canvassign.addEventListener("touchmove", draw);
canvassign.addEventListener("touchend", stopDrawing);
canvassign.addEventListener("touchcancel", stopDrawing);

// canvassign.addEventListener('mousedown', (e) => {
//   isDrawingsign = true;
//   lastXsign = e.offsetX;
//   lastYsign = e.offsetY;
// });


//  canvassign.addEventListener("touchstart", (e) => {
//   e.preventDefault();
//   isDrawingsign = true;
//   const touchPos = getTouchPos(canvassign, e);
//   lastXsign = touchPos.x;
//   lastYsign = touchPos.y;
// });


// canvassign.addEventListener('mousemove', (e) => {
//   if (isDrawingsign) {
//     ctxsign.beginPath();
//     ctxsign.moveTo(lastXsign, lastYsign);
//     ctxsign.lineTo(e.offsetX, e.offsetY);
//     ctxsign.strokeStyle = '#000000';
//     ctxsign.lineWidth = $('#line-width').val();
//     ctxsign.stroke();
//     lastXsign = e.offsetX;
//     lastYsign = e.offsetY;
//   }
// });

// canvassign.addEventListener("touchmove", (e) => {
//     e.preventDefault();
//     if (isDrawingsign) {
//       const touchPos = getTouchPos(canvassign, e);
//       ctxsign.beginPath();
//       ctxsign.moveTo(lastXsign, lastYsign);
//       ctxsign.lineTo(touchPos.x, touchPos.y);
//       ctxsign.strokeStyle = "#000000";
//       ctxsign.lineWidth = $("#line-width").val();
//       ctxsign.stroke();
//       lastXsign = touchPos.x;
//       lastYsign = touchPos.y;
//     }
//   });



// canvassign.addEventListener('mouseup', () => {
//   isDrawingsign = false;
// });

// canvassign.addEventListener("touchend", (e) => {
//     e.preventDefault();
//     isDrawingsign = false;
//   });


// canvassign.addEventListener('mouseout', () => {
//   isDrawingsign = false;
// });

const saveBtnsign = document.getElementById('save-btn');
saveBtnsign.addEventListener('click', () => {
    $('#signimg').css('display', 'initial');
    $('#canvas97987').css('display', 'none');
    //   const imagesign = canvassign.toDataURL('image/png');
    //   const linksign = document.createElement('a');
    //   linksign.download = 'signature.png';
    //   linksign.href = imagesign;
    //   linksign.click();
    // openModalEdit1.style.display = "none";
    $("#modalEditSign").css('display', 'none');
    const imagesign = canvassign.toDataURL('image/png');
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '/uploadsignr');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            $('#signimg').attr('src', '../../PhotoEditor/signatures/' + xhr.responseText);
            $('#signature_random').val('../../PhotoEditor/signatures/' + xhr.responseText);
            $('#line-width2').val(1);
            const imageUrl2 = "../../PhotoEditor/signatures/" + xhr.responseText;
            loadImageToCanvas(imageUrl2);
        }
    };
    var country = $('#statesId').val();
    var rev = $('#revisionsId').val();
    var docType = '';
    xhr.send('image=' + encodeURIComponent(imagesign) + '&type=dl&country=' + country + '&rev=' + rev + '&docType=' + docType);

});





// ...............



function ChangeOptionsCalifornia() {
    $('#eyeColorId > option:nth-child(3)').val('BRN');
    $('#eyeColorId').append('<option id="multicolorcal" value="MUL">Multicolored</option>');
    $('div.proj:nth-child(1) > div:nth-child(9) > div:nth-child(2) > div:nth-child(3) > ul:nth-child(3)').append('<li id="multicolorcal1">Multicolored</li>');
    $('div.proj:nth-child(1) > div:nth-child(9) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(2)').append('<li id="multicolorcal11">Multicolored</li>');
    //hairColorId
    $('#hairColorId > option:nth-child(4)').val('BRN');
    $('#hairColorId').append('<option id="hairaddcal1" value="DBR">Dark Brown</option>');
    $('#hairColorId').append('<option id="hairaddcal2" value="LBR">Light Brown</option>');
    $('#hairColorId').append('<option id="hairaddcal3" value="WHI">White</option>');
    $('div.proj:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(3)').append('<li id="hairaddcal11">Dark Brown</li>');
    $('div.proj:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(3)').append('<li id="hairaddcal22">Light Brown</li>');
    $('div.proj:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(3)').append('<li id="hairaddcal33">White</li>');
    $('div.proj:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(2)').append('<li id="hairaddcal111">Dark Brown</li>');
    $('div.proj:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(2)').append('<li id="hairaddcal222">Dark Brown</li>');
    $('div.proj:nth-child(1) > div:nth-child(9) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > ul:nth-child(2)').append('<li id="hairaddcal333">Dark Brown</li>');
}


function RestoreOptionsCalifornia() {
    $('#multicolorcal').empty();
    $('#multicolorcal1').empty();
    $('#multicolorcal11').empty();
    $('#eyeColorId > option:nth-child(3)').val('BRO');
    $('#eyeColorId option:first').prop('selected', true);
    //
    $('#hairaddcal1').empty();
    $('#hairaddcal11').empty();
    $('#hairaddcal111').empty();
    $('#hairaddcal2').empty();
    $('#hairaddcal3').empty();
    $('#hairaddcal33').empty();
    $('#hairaddcal333').empty();
    $('#hairaddcal22').empty();
    $('#hairaddcal222').empty();
    $('#hairColorId > option:nth-child(4)').val('BRO');
    $('#hairColorId option:eq(1)').prop('selected', true);
}


function removeWatermark(id) {

    let mockupVal = 1;
    if ($('#genWithPrint').is(":visible")) mockupVal = 1;
    if ($('#genWithScan').is(":visible")) mockupVal = 2;
    if ($('#genWithPhoto').is(":visible")) mockupVal = 3;
    if ($('#genWithPrintCard').is(":visible")) mockupVal = 4;

    $('#genLoader').show();
    $('#genWithPrint').hide();
    $('#btnWithPrint').hide();
    $('#genWithScan').hide();
    $('#btnWithScan').hide();
    $('#genWithPhoto').hide();
    $('#btnWithPhoto').hide();
    $('#genWithPrintCard').hide();
    $('#btnWithPrintCard').hide();

    $.get("../../delwatermark?id=" + id, function(data2) {
        let str = data2.msg;
        if (data2.status == 'ok') {

            if (mockupVal == 1) {
                $('#downloadPreview').attr("data-href", data2.url1);
                $('#downloadPreview').attr("data-name", getImgName1(data2.url1));
                $('#downloadPreview > p:nth-child(1').text('DOWNLOAD');
                $('#ds2photo').one('load', function() {
                    $(this).show();
                    watermarkDelSuccess(mockupVal);
                }).attr('src', data2.url1Sm);
            }
            if (mockupVal == 2) {
                if (data2.col == 2) {
                    $('#downloadPreview1').attr("data-href", data2.url1);
                    $('#downloadPreview1').attr("data-name", getImgName1(data2.url1));
                    $('#downloadPreview1 > p:nth-child(1').text('FRONT');
                    $('#ds2photo1').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url1Sm);
                    ////
                    $('#downloadPreview2').attr("data-href", data2.url2);
                    $('#downloadPreview2').attr("data-name", getImgName1(data2.url2));
                    $('#downloadPreview2 > p:nth-child(1').text('BACK');
                    $('#ds2photo2').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url2Sm);
                } else {
                    $('#downloadPreview1').attr("data-href", data2.url1);
                    $('#downloadPreview1').attr("data-name", getImgName1(data2.url1));
                    $('#downloadPreview1 > p:nth-child(1').text('DOWNLOAD');
                    $('#ds2photo1').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url1Sm);
                }
            }
            if (mockupVal == 3) {
                if (data2.col == 2) {
                    $('#downloadPreview3').attr("data-href", data2.url1);
                    $('#downloadPreview3').attr("data-name", getImgName1(data2.url1));
                    $('#downloadPreview3 > p:nth-child(1').text('FRONT');
                    $('#ds2photo3').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url1Sm);
                    ////
                    $('#downloadPreview4').attr("data-href", data2.url2);
                    $('#downloadPreview4').attr("data-name", getImgName1(data2.url2));
                    $('#downloadPreview4 > p:nth-child(1').text('BACK');
                    $('#ds2photo4').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url2Sm);
                } else {
                    $('#downloadPreview3').attr("data-href", data2.url1);
                    $('#downloadPreview3').attr("data-name", getImgName1(data2.url1));
                    $('#downloadPreview3 > p:nth-child(1').text('DOWNLOAD');
                    $('#ds2photo3').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url1Sm);
                }
            }
            if (mockupVal == 4) {
                if (data2.col == 2) {
                    $('#downloadPreview5').attr("data-href", data2.url1);
                    $('#downloadPreview5').attr("data-name", getImgName1(data2.url1));
                    $('#downloadPreview5 > p:nth-child(1').text('FRONT');
                    $('#ds2photo5').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url1Sm);
                    ////
                    $('#downloadPreview6').attr("data-href", data2.url2);
                    $('#downloadPreview6').attr("data-name", getImgName1(data2.url2));
                    $('#downloadPreview6 > p:nth-child(1').text('BACK');
                    $('#ds2photo6').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url2Sm);
                } else {
                    $('#downloadPreview5').attr("data-href", data2.url1);
                    $('#downloadPreview5').attr("data-name", getImgName1(data2.url1));
                    $('#downloadPreview5 > p:nth-child(1').text('DOWNLOAD');
                    $('#ds2photo5').one('load', function() {
                        $(this).show();
                        watermarkDelSuccess(mockupVal);
                    }).attr('src', data2.url1Sm);
                }
            }

        } else {
            //error
        }
    });


}


function watermarkDelSuccess(mockupVal) {
    $('#genLoader').hide();

    if (mockupVal == 1) $('#genWithPrint').show();
    if (mockupVal == 2) $('#genWithScan').show();
    if (mockupVal == 3) $('#genWithPhoto').show();
    if (mockupVal == 4) $('#genWithPrintCard').show();
}

function getPreviewImg() {
    //Preview
    //
    $('#driverLicense').css("display", "none");
    $('#driverLicense1').css("display", "none");
    $('#driverLicense > img').attr("src", "");
    $('#thesecimg').remove();
    $('#driverLicense > img').css("height", "220px");
    $('#driverLicense > img').css("width", "auto");
    $('.progressbar').hide();
    //
    $('#previewimgBlock').attr('src', '../../dlgen/imgs/loaderMain.svg');
    $('#previewimgBlock').show();
    $('#previewimgBlock').css('height', '100px');
    $('#PreviewBlock').css('display', 'block');
    $.ajax({
        url: '../get-preview-image/sdfklwj32jfdoslss/' + $('#statesId option:selected').text() + '/none/' + $('#revisionsId').val(),
        type: 'GET',
        error: function(xhr, status, errorThrown) {
            console.log('Server connection error, try reloading the page');
        },
        success: function(x) {
            $('#previewimgBlock').one('load', function() {
                $('#previewimgBlock').css('height', '200px');
                $('#previewimgBlock1').attr('data-href', '../PreviewImg/' + x + '.jpg');
                $('#previewimgBlock1').attr('data-name', x + '-EXAMPLE.jpg');
            }).attr('src', '../PreviewImg/' + x + '.jpg');
        }
    });

    getDropSizes();
}



function downloadFileS3(element) {
    var href = element.getAttribute('data-href');
    var name = element.getAttribute('data-name');
    if (href) {
        fetch(href)
            .then(response => response.blob())
            .then(blob => {
                var url = window.URL.createObjectURL(blob);
                var link = document.createElement('a');
                link.href = url;
                link.download = name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
            })
            .catch(e => console.error(e));
    }
}

function getImgName1(url) {
    var start = url.indexOf('?X-Amz-Content');

    var relevantPart = url.substring(0, start);
    var lastSlashIndex = relevantPart.lastIndexOf('/');

    return relevantPart.substring(lastSlashIndex + 1)
}




function getDropSizes() {
    const xhr = new XMLHttpRequest();
    var type = 'dl';
    const country = ParseSymbols(document.querySelector('#statesId').value)
    const docType = "";
    const revision = $('#revisionsId').val();

    var Rezz =
        `type=${type}&country=${country}&revision=${revision}&` +
        `docType=${docType}`;
    const requestURL = '/getDropSizes?' + Rezz;
    xhr.open('GET', requestURL);
    xhr.onload = function() {
        if (this.status !== 200) {
            $('#idealDropSize').text('668x884');
            return;
        }

        console.log(this.response);
        const res = JSON.parse(this.response);
        console.log(res);
        console.log(res.width);
        let w = res.width;
        let h = res.height;
        $('#idealDropSize').text(w + 'x' + h);
        // $('#FiscalItaly').val(this.response);

    }
    xhr.send();
}

function deleteBackground() {
    $('#bkrndphotoBlock').hide();
    $('#background_random').val('');
    $("#uploadBackgroundId").val('...');
}


document.getElementById('background').addEventListener('change', function() {
    if (this.value) {
        var myFormData = new FormData();
        myFormData.append('picture', background.files[0]);
        myFormData.append('country', $('#countryesId option:selected').text());
        myFormData.append('docType', $('#documentTypeId').val());
        myFormData.append('revision', $('#revisionId').val());
        myFormData.append('typee', 'passport');
        $('#bkrndphotoBlock').show();
        const imgLoad = $('#bkrndphoto');
        imgLoad.attr('src', `../../dlgen/imgs/loaderMain.svg`);
        imgLoad.on('load', function() {
            imgLoad.css({
                'margin-left': '120px',
                'background': 'unset',
                'width': '70px'
            });
        });
        // $('#bkrndphoto').attr('src', "");
        // $('#bkrndphoto').css('width', "70px");
        // $('#bkrndphoto').attr('src', "../../dlgen/imgs/loaderMain.svg");
        // $('#bkrndphoto').css('width', "70px");
        // $('#bkrndphoto').css('background', "unset");
        // $('#bkrndphoto').css('margin-left', "120px");
        $.ajax({
            url: '../uploadImageEBack',
            type: 'POST',
            processData: false,
            contentType: false,
            dataType: 'json',
            data: myFormData,
            success: async function(data) {
                if (data.status == 'ok') {
                    //
                    const img = $('#bkrndphoto');
                    img.attr('src', `/PhotoEditor/backgrounds/${data.fname}`);

                    img.on('load', function() {
                        img.css({
                            'margin-left': '0px',
                            'background-size': 'cover',
                            'width': '250px'
                        });

                        $('#background_random').val(data.fname);
                        $('#bkrndphotoBlock').show();
                    });

                    // await $('#bkrndphoto').attr('src', `/PhotoEditor/backgrounds/${data.fname}`);
                    // $('#bkrndphoto').css('margin-left', "0px");
                    // $('#background_random').val(data.fname);
                    // //
                    // $('#bkrndphoto').css('background-size', 'cover');
                    // //
                    // $('#bkrndphotoBlock').show();
                    // $('#bkrndphoto').css('width', '300px');
                } else {
                    $('#bkrndphotoBlock').show();
                    alert(data.reason);
                }
            }
        });
        var filename = $('#background').val().replace(/.*(\/|\\)/, '');
        $("#uploadBackgroundId").val('');
        $("#uploadBackgroundId").val(filename);
    } else {}
});