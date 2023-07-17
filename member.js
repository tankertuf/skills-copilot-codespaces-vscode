function skillsMember() {
    var member = {
        name: "John Doe",
        age: 30,
        calculateNumbers: function(var1, var2) {
            return var1 + var2;
        }
    };
    document.getElementById("skillsMember").innerHTML = member.calculateNumbers(10, 20);
}