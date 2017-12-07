$(document).ready(function() {
    // Handler for .ready() called.
    var triviaQandA = [{
            "question": "Creating awareness or questioning the status quo is the strategy for which stage of the customer journey?",
            "answers": ["Inspire", "Guide", "Captivate", "Persuade"],
            "correct": "Inspire",
            "response": "We want to INSPIRE our potential buyers to create awareness or question their status quo."
        },
        {
            "question": "Which of these tools is NOT likely to be used to create awareness?",
            "answers": ["Videos", "Proposals", "Social Forums", "Email Blasts"],
            "correct": "Proposals",
            "response": "Proposals are not generally used to create awareness, but instead to persuade when the buyer is in the decision phase."
        },
        {

            "question": "The primary intent in sending a prospecting email is what?",
            "answers": ["Create awareness", "Sell", "Invite for a site inspection", "Get a referral"],
            "correct": "Get a referral",
            "response": "Getting a referral is what we hope to accomplish by sending a prospecting email."
        },
        {
            "question": "When writing business correspondence, at what grade level should we be writing?",
            "answers": ["4th - 6th", "6th to 8th", "8th-10th", "10th-12th"],
            "correct": "6th to 8th",
            "response": "6th to 8th grade is the ideal level for the most clear and compelling business writing."
        },
        {
            "question": "How many people are typically involved in the average purchase decision today?",
            "answers": ["3.4", "4.5", "6.8", "12"],
            "correct": "6th to 8th",
            "response": "6.8 people are now typically involved in the average purchase decision today."
        },
        {
            "question": "The initials AAPS stand for this which we should use when responding to prospect questions",
            "answers": ["Acknowledge, Assure, Persuade, Substantiate", "Assure, Ask, Persuade, Sell", "Acknowledge, Ask, Present, Sell", "Ask, Acknowledge, Persuade, Substantiate"],
            "correct": "Acknowledge, Assure, Persuade, Substantiate",
            "response": "Acknowledge, Assure, Persuade and Substantiate is the best practice in writing a compelling email response."
        },
        {
            "question": "When your prospect is in the decision phase of their journey, what should we do as sellers?",
            "answers": ["Inspire", "Guide", "Captivate", "Persuade"],
            "correct": "Persuade",
            "response": "We want to PERSUADE them that our product or solution aligns best with their needs."
        },
        {
            "question": "What percent of the buyer's journey is typically completed before a salesperson gets involved?",
            "answers": ["40%", "50%", "60%", "more than 60%"],
            "correct": "more than 60%",
            "response": "More than 60% - as much as 80% of the purchase journey is complete before a buyer will typically talk to a salesperson."
        },
        {
            "question": "When our prospects are exploring, what strategy should we take as sellers?",
            "answers": ["Inspire", "Guide", "Captivate", "Persuade"],
            "correct": "Guide",
            "response": "We want to GUIDE our potential buyers by positioning ourselves as a valuable resource."
        },
        {
            "question": "When we are in the captivate phase, what is our specific strategy?",
            "answers": ["Be a valuable resource", "Be first and be fabulous", "Create memorable", "Create awareness"],
            "correct": "Be first and be fabulous",
            "response": "We want to be FIRST AND BE FABULOUS because this is our best opportunity to stand apart from our competitors."
        }

    ];

    var questionIndex = 0;
    var correctAnswer = 0
    var wrongAnswer = 0
    var timeOutAnswer = 0

    //Timer program
    var interValID = setInterval(timeIt, 1000);

    var counter = 0
    var timeLeft = 30
    var timer = $("#timer");
    timer.html("<h2>You have " + (timeLeft - counter) + " seconds left</h2>");

    function timeIt() {
        counter++
        timer.html("<h2>You have " + (timeLeft - counter) + " seconds left</h2>");
        if (counter == timeLeft) {
            counter = 0
            timer.html("<h2>Your time is up!</h2>");
            clearInterval(interValID);
        }
    }


    $("#startGame").click(function() {
        getQuestion();
    });

function showProgress() {
                var currentQuestionNumber = questionIndex + 1;
                var element = $("#progress");
                element.innerHTML = "Question " + (currentQuestionNumber) + "of" + question.length;
            }

    function getQuestion() {
        //var a = 0;
        $("#startTheGame").css("visibility", "hidden");
        $("#startGame").css("visibility", "hidden");
        $(".grid").css("visibility", "visible");
        timeIt(30, 1000);
        var selection = triviaQandA[questionIndex];
        this.question = selection["question"];
        this.answers = selection["answers"];
        this.correct = selection["correct"];
        this.response = selection["response"];
        $("#question").html(selection["question"]);
        var answers = selection.answers;
        
        for (var i = 0; i < answers.length; i++) {
            btn = $("button#btn" + [i]).append(answers[i]);
                
                console.log (btn + [i]);
        }
        showProgress();
        questionIndex++

    }


    $("button").click(function() {
        

        clearInterval(interValID);



    });

    

    function checkAnswer() {
        
        if ($("button").hasClass("winner")) {
            correctAnswer++
            console.log (winner);
            $("#response").html("You are correct!" + response);
        } else if (counter == timeLeft) {
            $("#response").html("You ran out of time" + response);
            timeOutAnswer++
        }
            else 
        {

            $("#response").html("You are incorrect!" + response);
            wrongAnswer++
        }

        getQuestion();

    }
 

});