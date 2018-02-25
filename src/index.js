module.exports = function solveEquation(equation) {
    var t = equation.replace("x^2", "Math.pow(x,2)");
    var s = [];
    var count = 0;
    for (var x = -4999999; x < 4999999; x++) {
        if (eval(t) == 0) {
            s[count] = x;
            count++;
            if (count == 2) break;
        }
    }
    return s;
}