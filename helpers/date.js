function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}
 
exports.getCurrentDateTime = function() {
    var curr_date = new Date();
    return curr_date.getUTCFullYear() + "-" + twoDigits(1 + curr_date.getUTCMonth()) + "-" + twoDigits(curr_date.getUTCDate()) + " " + twoDigits(curr_date.getHours()) + ":" + twoDigits(curr_date.getUTCMinutes()) + ":" + twoDigits(curr_date.getUTCSeconds());
};

