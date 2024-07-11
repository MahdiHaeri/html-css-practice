let input_date;
let jalali_date;

let dateChange = function(event) {
    console.log("date changed");
    input_date = document.getElementById("datepinker").value;
    jalali_date = jalaali.toJalaali(new Date(input_date));
    document.getElementById("jalali-birthdate").innerHTML = "Your jalali-birthdate is:" + jalali_date.jy + "/" + jalali_date.jm + "/" + jalali_date.jd;
};
