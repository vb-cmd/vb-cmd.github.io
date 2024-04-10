const surveyForm = document.forms['survey-form'];

$("#p_modal3")
    .find(".btn.btn-success.btn-lg")
    .click(function () {
        console.log(getSurvey())
    })

function getSurvey() {
    const surveyBody = {
        q1: surveyForm.q1.value,
        q2: surveyForm.q2.value,
        q3: surveyForm.q3.value,
        q4: surveyForm.q4.value
    };

    return surveyBody
}
