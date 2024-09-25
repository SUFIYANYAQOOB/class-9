var userValue = +prompt("Enter the value:");
for (i=1; i<=userValue; i++){
    for(j=userValue; j>i; j--){
        document.write(" &nbsp; ");
    }
    for(k = 1; k<= ((2*i)-1);k++){
        document.write("*");
    }
    document.write("<br>");
}

var userValue = +prompt("Enter the value:");
for (i=userValue; i>=1; i--){
    for (j=userValue; j>i; j--){
        document.write(" &nbsp; ");
    }
    for (k = 1; k<= ((2*i)-1);k++){
        document.write("*");
    }
    document.write("<br>")
}
