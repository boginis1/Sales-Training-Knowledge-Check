$(document).ready(function() {
    // Handler for .ready() called.

    var selection;

    var triviaQandA = [{
            "question": "Creating awareness or questioning the status quo is the strategy for which stage of the customer journey?",
            "answers": ["A - Inspire", "B - Guide", "C - Captivate", "D - Persuade"],
            "correct": "A - Inspire",
            "response": "We want to INSPIRE our potential buyers to create awareness or question their status quo."
        },
        {
            "question": "Which of these tools is NOT likely to be used to create awareness?",
            "answers": ["A - Videos", "B - Proposals", "C - Social Forums", "D - Email Blasts"],
            "correct": "B-Proposals",
            "response": "Proposals are not generally used to create awareness, but instead to persuade when the buyer is in the decision phase."
        },
        {

            "question": "The primary intent in sending a prospecting email is what?",
            "answers": ["A - Create awareness", "B - Sell", "C - Invite for a site inspection", "D - Get a referral"],
            "correct": "D - Get a referral",
            "response": "Getting a referral is what we hope to accomplish by sending a prospecting email."
        },
        {
            "question": "When writing business correspondence, at what grade level should we be writing?",
            "answers": ["A - 4th - 6th", "B - 6th to 8th", "C - 8th-10th", "D - 10th-12th"],
            "correct": "B - 6th to 8th",
            "response": "6th to 8th grade is the ideal level for the most clear and compelling business writing."
        },
        {
            "question": "How many people are typically involved in the average purchase decision today?",
            "answers": ["A - 3.4", "B - 4.5", "C - 6.8", "D - 12"],
            "correct": "C - 6.8",
            "response": "6.8 people are now typically involved in the average purchase decision today."
        },
        {
            "question": "The initials AAPS stand for this which we should use when responding to prospect questions",
            "answers": ["A - Acknowledge, Assure, Persuade, Substantiate", 
            "B - Assure, Ask, Persuade, Sell", "C - Acknowledge, Ask, Present, Sell", "D - Ask, Acknowledge, Persuade, Substantiate"],
            "correct": "A - Acknowledge, Assure, Persuade, Substantiate",
            "response": "Acknowledge, Assure, Persuade and Substantiate is the best practice in writing a compelling email response."
        },
        {
            "question": "When your prospect is in the decision phase of their journey, what should we do as sellers?",
            "answers": ["A - Inspire", "B - Guide", "C - Captivate", "D - Persuade"],
            "correct": "D - Persuade",
            "response": "We want to PERSUADE them that our product or solution aligns best with their needs."
        },
        {
            "question": "What percent of the buyer's journey is typically completed before a salesperson gets involved?",
            "answers": ["A - 40%", "B - 50%", "C - 60%", "D - more than 60%"],
            "correct": "D - more than 60%",
            "response": "More than 60% - as much as 80% of the purchase journey is complete before a buyer will typically talk to a salesperson."
        },
        {
            "question": "When our prospects are exploring, what strategy should we take as sellers?",
            "answers": ["A - Inspire", "B - Guide", "C - Captivate", "D - Persuade"],
            "correct": "B - Guide",
            "response": "We want to GUIDE our potential buyers by positioning ourselves as a valuable resource."
        },
        {
            "question": "When we are in the captivate phase, what is our specific strategy?",
            "answers": ["A - Be a valuable resource", "B - Be first and be fabulous", "C - Create memorable", "D - Create awareness"],
            "correct": "B - Be first and be fabulous",
            "response": "We want to be FIRST AND BE FABULOUS because this is our best opportunity to stand apart from our competitors."
        }

    ];

    var questionIndex = 0;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var timeOutAnswer = 0;

    //Timer program
    var interValID;
    var timeLeft = 30
    var counter = 0;
    var timer = $("#timer");

    function timeIt() {
        
        timer.html("<h2>You have " + (timeLeft - counter) + " seconds left</h2>");
        if (counter == timeLeft) {
            timer.html("<h2>Your time is up!</h2>");
            clearInterval(interValID);
            $("#response").show();
            $("#response").html("You ran out of time. " + selection.response);
            timeOutAnswer++;
            checkEnd();
        }
        counter++
    }


    $("#startGame").click(function() {
        timer.html("<h2>Starting timer...</h2>")
        getQuestion();
    });

    function showProgress() {
        var currentQuestionNumber = questionIndex + 1;
        var element = $("#progress");
        element.text("Question " + currentQuestionNumber + " of " + triviaQandA.length);

    }

    function getQuestion() {
        //var a = 0;

        $("#startTheGame").hide();
        $("#startGame").hide();
        $("#response").hide();
        $(".grid").show();
        interValID = setInterval(timeIt, 1000);
        selection = triviaQandA[questionIndex];
        $("#question").html(selection.question);
        console.log(question);

        for (var i = 0; i < selection.answers.length; i++) {
            btn = $("button#btn" + [i]).text(selection.answers[i]);


        }
        showProgress();
    }


    $("button").click(function() {
        var choice = $(this).text();



        checkAnswer(choice);

    });



    function checkAnswer(choice) {

        if (choice === selection.correct) {
            correctAnswer++
            $("#response").show();
            $("#response").html("Way to go!  You are correct! " + selection.response);

        } else {
            wrongAnswer++
            $("#response").show();
            $("#response").html("Oops, you are incorrect! " + selection.response);
        }

        
        
        clearInterval(interValID);

        checkEnd();


    }

    function showResults() {
        $(".grid").hide();
        $("#results").show();
        $("#results").html("# of Correct Answers = " + correctAnswer + " | " + "# of Incorrect Answers = " + wrongAnswer + " | " + "  # of Timed Out = " + timeOutAnswer);
        
    }

    function checkEnd() {
            questionIndex++;
            if (questionIndex === (triviaQandA.length)){

            showResults();
            } else  {
                counter=0;
                
                setTimeout(getQuestion, 5000);

            }
    }

});