function send() {
    number1 = document.getElementById("number1").value ;
    number2 = document.getElementById("number2").value ;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br> Answer : <input type='number' id='input_answer'>";
    check_button = "<br><br> <button class= 'btn btn-info' onclick='check()'> Check </button>";
    
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

player_1_name=localStorage.getItem("player1_name");
player_2_name=localStorage.getItem("player2_name");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : " ;
document.getElementById("player2_name").innerHTML = player_2_name + " : " ;

document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;