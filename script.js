var jpdbBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var stdDBName = "SCHOOL-DB";
var stdRelName = "STUDENT-TABLE";
var connToken = "90932212|-31949213967683619|90963560";

$("#stdRoll").focus();

function saveRecNo2LS(jsonObj){
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem('recno', lvData.rec_no);
}

function getstdRollAsJsonObj(){
    var stdRoll = $("#stdRoll").val();
    var jsonStr ={
        RollNo : stdRoll
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj){
    saveRecNo2LS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#stdName").val(record.Name);
    $("#stdClass").val(record.Class);
    $("#stdDOB").val(record.DOB);
    $("#stdadd").val(record.Address);
    $("#stdDOE").val(record.DOE);
}

function resetForm(){
    $("#stdRoll").val("");
    $("#stdName").val("");
    $("#stdClass").val("");
    $("#stdDOB").val("");
    $("#stdadd").val("");
    $("#stdDOE").val("");
    $("#stdRoll").prop("disabled", false);
    $("#save").prop("disabled", true);
    $("#update").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#stdRoll").focus();
}

function validateAndGetFormData() {
    var stdRollVar = $("#stdRoll").val();
    if (stdRollVar === "") {
        alert("Student's Roll Number is Required");
        $("#stdRoll").focus();
        return "";
    }
    var stdNameVar = $("#stdName").val();
    if (stdNameVar === "") {
        alert("Student's Full Name is Required");
        $("#stdName").focus();
        return "";
    }
    var stdClassVar = $("#stdClass").val();
    if (stdClassVar === "") {
        alert("Student's Class is Required");
        $("#stdClass").focus();
        return "";
    }
    var stdDOBVar = $("#stdDOB").val();
    if (stdDOBVar === "") {
        alert("Student's Date Of Birth is Required");
        $("#stdDOB").focus();
        return "";
    }
    var stdaddVar = $("#stdadd").val();
    if (stdaddVar === "") {
        alert("Student's Address is Required");
        $("#stdadd").focus();
        return "";
    }
    var stdDOEVar = $("#stdDOE").val();
    if (stdDOEVar === "") {
        alert("Student's Date Of Enrollment is Required");
        $("#stdDOE").focus();
        return "";
    }
    var jsonStrObj = {
        RollNo : stdRollVar,
        Name : stdNameVar,
        Class : stdClassVar,
        DOB : stdDOBVar,
        Address : stdaddVar,
        DOE : stdDOEVar
    };
    return JSON.stringify(jsonStrObj);
}

function getStd(){
    var stdRollJsonObj = getstdRollAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, stdDBName, stdRelName, stdRollJsonObj);
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdbBaseURL, jpdbIRL);
    jQuery.ajaxSetup({ async: true });
    if (resJsonObj.status === 400){
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#stdName").focus();
    }
    else if (resJsonObj.status === 200){
        $("#stdRoll").prop("disabled", true);
        fillData(resJsonObj);

        $("#update").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#stdName").focus();
    }
}

function saveData() {
    var jsonStrObj = validateAndGetFormData();
            if (jsonStrObj === "") {
                return;
            }
            var putRequest = createPUTRequest(connToken, jsonStrObj, stdDBName, stdRelName);
            jQuery.ajaxSetup({ async: false });
            var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdbBaseURL, jpdbIML);
            jQuery.ajaxSetup({ async: true });

            resetForm();
            $("#stdRoll").focus();
}

function updateData(){
    $("#update").prop("disabled", true);
    jsonObj = validateAndGetFormData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonObj, stdDBName, stdRelName, localStorage.getItem('recno'));
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(updateRequest, jpdbBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    console.log(resJsonObj);
    resetForm();
    $("#stdRoll").focus();
}
