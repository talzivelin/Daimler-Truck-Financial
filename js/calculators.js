$(document).ready(function(){
	$('input.currency, input.percentage').autoNumeric('init', {aSep: '', altDec: ''});
	$('input.months').autoNumeric('init', {aSep: '', altDec:'', mDec:0});
	$('#calculatePayment').click(function(){
		$('#calc2_TruckPrice, #calc2_DownPayment').autoNumeric('update',{mRound:'S', mDec:0});	
	});
	$('#calculateEstimatedMax').click(function(){
		$('#monthlyPayment, #downPayment').autoNumeric('update',{mRound:'S', mDec:0});
	});
	$('input.currency, input.percentage').focus(function(){
		$(this).autoNumeric('update', {mDec:2});
	});
});

function calculateEstimatedMax() {

   

    if ((document.calculator.monthlyPayment.value == null || document.calculator.monthlyPayment.value.length == 0) ||
     (document.calculator.loanLength.value == null || document.calculator.loanLength.value.length == 0)
||
     (document.calculator.interestRate.value == null || document.calculator.interestRate.value.length == 0)) {
 
        document.getElementById('calcResult').innerHTML = "Incomplete data";
    }
    else {
        var monthlyPayment = document.calculator.monthlyPayment.value;


        var loanLength = document.calculator.loanLength.value;


        var interestRate = document.calculator.interestRate.value / 1200;
  


        var totalAmmount = monthlyPayment / (interestRate / (1 - (Math.pow(1 / (1 + interestRate), loanLength))));
   

        var downPayment = document.calculator.downPayment.value * 1.0;
        var subTotal = totalAmmount + downPayment;

        var salesTax = 0;
        salesTax = document.calculator.salesTax.value * 1.0;


        if (salesTax > 0) {
             subTotal = subTotal / (1 + salesTax / 100);
            }

        totalAmmount=Math.round(subTotal*100) /100;
        totalAmmount = Math.floor(totalAmmount);

        totalAmmount = numberWithCommas(totalAmmount);

        document.getElementById('calcResult').innerHTML = "$ " + totalAmmount;

    }



}

function numberWithCommas(n) {
    // format a decimal number to show commas 
    var parts=n.toString().split(".");
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
}

function reformatMoneyEntry(n)
{

     n = n.replace(',', '');
     n = numberWithCommas(n);

    
}


function calculatePayment() {

   //calculate estimated payments

    if ((document.calculator.calc2_TruckPrice.value == null || document.calculator.calc2_TruckPrice.value.length == 0) ||
     (document.calculator.calc2_FinancePeriod.value == null || document.calculator.calc2_FinancePeriod.value.length == 0)
||
     (document.calculator.calc2_InterestRate.value == null || document.calculator.calc2_InterestRate.value.length == 0)) {
   
         document.getElementById('calc2_Result').innerHTML = "Incomplete data";



    }
    else {

        var truckPrice = document.calculator.calc2_TruckPrice.value;
         truckPrice = truckPrice.replace(',', '');

        var DownPayment = document.calculator.calc2_DownPayment.value;
        DownPayment = DownPayment.replace(',', '');


    

        var SalesTax = document.calculator.calc2_SalesTax.value;

        if (SalesTax > 0)
            truckPrice = truckPrice * (1 + SalesTax / 100);

        var term = document.calculator.calc2_FinancePeriod.value;

            truckPrice = truckPrice - DownPayment;


        var interestRate = document.calculator.calc2_InterestRate.value / 1200;
          
        var finalResult = truckPrice * interestRate / (1 - (Math.pow(1 / (1 + interestRate), term)));

        finalResult = Math.round(finalResult * 100) / 100;

        finalResult = Math.floor(finalResult);

        finalResult = numberWithCommas(finalResult);
 

        document.getElementById('calc2_Result').innerHTML = "$ " + finalResult;

    }

 

}



