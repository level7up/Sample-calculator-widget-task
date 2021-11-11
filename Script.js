


function task(amount) {
    var Vendor, Media, Corporation_spend, Team_Project, sum;
    Vendor = parseFloat(document.getElementById('Vendor/Bills').value);
    Media = parseFloat(document.getElementById('Media/Ad').value);
    Corporation_spend = parseFloat(document.getElementById('Corporation_spend').value);
    Team_Project = parseFloat(document.getElementById('Team_Project').value);
    sum = (Vendor + Media + Corporation_spend + Team_Project);

    val = (sum * amount);
    if(amount == 0.3){
        $('input#val').val('Brex '+val.toFixed(2) + '$');
    }if( amount == 2.9){
        $('input#val').val('Stripe ' + val.toFixed(2) + '$');

    }if (amount == 1.3){
        
        $('input#val').val('Amex ' + val.toFixed(2) + '$');
        
    }
}


$(document).ready(function () {
    //this calculates values automatically 
    calculateSum();

    $(".txt").on("keydown keyup", function () {
        calculateSum();
    });
});

function calculateSum() {
    var unlimited_rewarde = 0;
    var lifetime_rewards = 0;
    //iterate through each textboxes and add the values
    $(".txt").each(function () {
        //add only if the value is number
        if (!isNaN(this.value) && this.value.length != 0) {
            unlimited_rewarde += (parseFloat(this.value) * 1.1);
            lifetime_rewards += parseFloat(this.value)*1.2;
        }
    });

    $("input#unlimited_rewarde").val(unlimited_rewarde.toFixed(2)+'$');
    $("input#lifetime_rewards").val(lifetime_rewards.toFixed(2) + '$');
}

$('button').on('click', function () {
        $('button').removeClass('selected');
        $(this).addClass('selected');
    });


