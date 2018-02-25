module.exports = function solveEquation(equation) {
    function compareNumeric(a, b) {
        if (a > b) return 1;
        if (a < b) return -1;
    }

    equation = equation.replace("x^2 - ", "x^2 -");
    equation = equation.replace("x^2 + ", "x^2 +");
    equation = equation.replace("* x + ", "* x +");
    equation = equation.replace("* x - ", "* x -");
    var s = [];
    s = equation.split(" ");
    var a = Number(s[0]);
    var b = Number(s[3]);
    var c = Number(s[6]);

    var d = Math.pow(b, 2) - 4 * a * c;
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    var x2 = (-b - Math.sqrt(d)) / (2 * a);

    var st = [];
    st[0] = Math.round(x1);
    st[1] = Math.round(x2);
    st.sort(compareNumeric);
    return st;
}