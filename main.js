// Bài 1: Tính tiền lương nhân viên
/**
 * b1: input
 *  - salaryPerDay, amountOfWorking
 * b2: handle
 * - Tạo biến salaryPerDay, amountOfWorking, totallySalary
 * - Tính totallySalary = salaryPerDay * amountOfWorking
 * b3: output
 * - Xuất ra totallySalary
 */

var salary = document.getElementById('btnSalary');
var resultSalary = document.getElementById('resultSalary');
resultSalary.style.display = 'none';

salary.onclick = function(){
    //Lay gia tri nguoi dung nhap vao
    var salaryPerDay = document.getElementById('ipSalaryPerDay').value;
    var amountOfWorking = document.getElementById('ipAmountOfWorking').value;
    
    //Tinh tien luong
    var totallySalary = salaryPerDay*amountOfWorking;

    //Hien thi thong tin luong
    resultSalary.style.display = 'block';
    resultSalary.innerHTML = 'Your salary is: ' + totallySalary + ' VND';
}

//Bài 2: Tính giá trị trung bình
/**
 * b1: input: giá trị 5 số thực
 * b2: handle
 * - Tạo biến no1, no2, no3, no4, no5, average
 * - Tính giá trung bình: giá trị trung bình = (tổng 5 số thực) / 5 
 * b3: output: xuất ra giá trị trung bình
 */

var average = document.getElementById('btnAverage');
var resultAverage = document.getElementById('resultAverage');
resultAverage.style.display = 'none';

average.onclick = function() {
    //Lay gia tri cua nguoi dung
    var number1 = document.getElementById('ipNumber1').value;
    var number2 = document.getElementById('ipNumber2').value;
    var number3 = document.getElementById('ipNumber3').value;
    var number4 = document.getElementById('ipNumber4').value;
    var number5 = document.getElementById('ipNumber5').value;

    //Tinh trung binh
    var averageOfRealNumber = (number1*1 + number2*1 + number3*1 + number4*1 + number5*1) / 5;

    //Hien thi thong tin
    resultAverage.style.display = 'block';
    resultAverage.innerHTML = "Average of 5 real number is: " + averageOfRealNumber;
}

//Bài 3: Quy đổi tiền
/**
 * b1: input: valueOfUSD, exchangedMoney
 * b2: handle
 * - Tạo biến valueOfUSD, exchangedMoney, moneyAfterExchange
 * - Tính số tiền cần quy đổi: moneyAfterExchange =  exchangedMoney*valueOfValue
 * b3: output: xuất ra số tiền sau quy đổi
 */

var btnChangeMoney = document.getElementById('btnChangeMoney');
var resultMoney = document.getElementById('resultMoney');
resultMoney.style.display = 'none';

btnChangeMoney.onclick = function(){
    //Lay gia tri cua nguoi dung
    var valueOfUSD = document.getElementById('ipValueOfUSD').value;
    var exchangedMoney = document.getElementById('ipExchangedMoney').value;
    
    //Tinh tien quy doi
    var moneyAfterExchange =  valueOfUSD*exchangedMoney;

    //Hien thi thong tin
    resultMoney.style.display = 'block';
    resultMoney.innerHTML = "Money after exchanging is: " + moneyAfterExchange + " VND";
}

//Bài 4: Tính diện tích, chu vi hình chữ nhật
/**
 * b1: input: width, length;
 * b2: handle:
 * - Tạo biến: width, length, peremeter, area
 * - Tính chu vi: peremeter = (width+length)*2 
 * - Tính diện tích: area = width*length
 * b3: xuất ra peremeter, area
 */

var btnRectangle = document.getElementById('btnRectangle');
var resultPeremeter = document.getElementById('resultPeremeter');
resultPeremeter.style.display = 'none';
var resultArea = document.getElementById('resultArea');
resultArea.style.display = 'none';


btnRectangle.onclick = function(){
    //Lay gia tri nguoi dung
    var width = document.getElementById('ipWidth').value;
    var length = document.getElementById('ipLength').value;
    
    //Tinh chu vi va dien tich
    var peremeter = (width*1 + length*1)*2;
    var area = width*length;

    //Hien thi thong tin
    resultPeremeter.style.display = 'block';
    resultPeremeter.innerHTML = "Peremeter of rectangle is: " + peremeter;

    resultArea.style.display = 'block';
    resultArea.innerHTML = "Area of rectangle is: " + area;
    
}

//Bài 5: Tính tổng 2 ký số
 /**
  * b1: input: twoDegitNumber, units, dozens, sumOfTwoNumber
  * b2: handle
  * -Tạo biến: twoDegitNumber, units, dozens, sumOfTwoNumber
  * - Tính units: units = twoDegitNumber%10
  * - Tính dozens: dozens = twơDegitNumber/10
  * - Tính sumOfTwoNumber = units + dozens
  * b3: xuất ra: sumOfNumber
 */
var btnSumDigit = document.getElementById('btnSumDigit');
var resultSumDigit = document.getElementById('resultSumDigit');
resultSumDigit.style.display = 'none';

btnSumDigit.onclick = function(){
    //Lay gia tri nguoi dung
    var twoDigitNumber = document.getElementById('ipTwoDigitsNumber').value;

    //Tinh tong 2 ky so
    var units = Math.abs(twoDigitNumber%10);
    if(twoDigitNumber > 0){
        var dozens = Math.floor(twoDigitNumber/10);
        }else{
            var dozens = Math.ceil(twoDigitNumber/10);
        }
    var sumTwoDigit =  units*1 + dozens*1;

    //Hien thi thong tin
    resultSumDigit.style.display = 'block';
    resultSumDigit.innerHTML = 'Sum of two digit number is: ' + sumTwoDigit;
}



