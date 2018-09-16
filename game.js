$(document).ready(function () {

    correct: 0;
    incorrect: 0;
    unanswered: 0;
    timer: 0;
    timerId: '';

    var items, item;

    $('.option').on('click', evalChoice());

    var questions = ['Which 70s TV family had eight kids?', 'Which TV undercover cop had a cockatoo named Fred?', 'Before playing Jack Tripper on Three\'s Company,\' John Ritter played a preacher on this feel-good 70s family drama.', 'Which of the following is *not* a spin-off of \'All in the Family\'?', 'Which is ""not" an actor on \'The Mary Tyler Moore Show\'?'];
    var choices = ['The Bradford Family,The Partridge family,The Bundy family,The Brady family', 'Police Woman, Barnaby Jones, Baretta, Rockford', 'Eight is Enough, The Waltons, Family, Room 222', 'One Day at a time, The Jeffersons, Maude, Gloria', 'John Amos, Ted Knight, Ted Baxter, Betty White'];
    var game = {
        // trivia properties
        // questions: {
        //     q1: 'Quesion 1',
        //     q2: 'Question 2',
        //     q3: 'Question 3',
        // },

        // options: {
        //     q1: 'A, B, C',
        //     q2: 'A, B, C',
        //     q3: 'A, B, C',
        // },

        answers: {
            q1: 'The Bradford Family',
            q2: 'Baretta',
            q3: 'The Waltons',
            q4: 'One Day at a time',
            q5: 'Ted Baxter',
        },

    }

    function startGame() {
        var timer = 30000;
        for (var i = 0; i < questions.length; i++) {
            $('#question-content').append(questions[i] + '<br>')
            $('#options').addClass('radio-inline');
            $('#options').append('<form">');


            //     $('#question-content').append('<input type="radio" name=' + val);
            //     $('#question-content').append('<label for=' + val + ">" + val + '</label>')

            // });
            // $('#question-content').append('<br> ')
        }
        $.each(choices, function (index, value) {
            items = value.split(',');

            
        })

        $.each(items, function (index, value) {
            item = value.split(',');
            console.log(item(index));
            
        })
        

    }

    function evalChoice() {
        alert("Hey");
    }
 
    startGame();

});
