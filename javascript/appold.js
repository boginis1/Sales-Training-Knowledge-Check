$(document).ready(function() {
  // Handler for .ready() called.
 var questions = [
                new Question("Creating awareness or questioning the status quo is the strategy for which stage of the customer journey?", ["Inspire", "Guide", "Captivate", "Persuade"],
                    "Inspire",
                    "We want to INSPIRE our potential buyers to create awareness or question their status quo."
                ),
                new Question("Which of these tools is NOT likely to be used to create awareness?", ["Videos", "Proposals", "Social Forums", "Email Blasts"],
                    "Proposals",
                    "Proposals are not generally used to create awareness, but instead to persuade when the buyer is in the decision phase."
                ),

                new Question("The primary intent in sending a prospecting email is what?", ["Create awareness", "Sell", "Invite for a site inspection", "Get a referral"],
                    "Get a referral",
                    "Getting a referral is what we hope to accomplish by sending a prospecting email."
                ),
                new Question("When writing business correspondence, at what grade level should we be writing?", ["4th - 6th", "6th to 8th", "8th-10th", "10th-12th"],
                    "6th to 8th",
                    "6th to 8th grade is the ideal level for the most clear and compelling business writing."
                ),
                new Question("How many people are typically involved in the average purchase decision today?", ["3.4", "4.5", "6.8", "12"],
                    "6th to 8th",
                    "6.8 people are now typically involved in the average purchase decision today."
                ),
                new Question("The initials AAPS stand for this which we should use when responding to prospect questions", ["Acknowledge, Assure, Persuade, Substantiate", "Assure, Ask, Persuade, Sell", "Acknowledge, Ask, Present, Sell", "Ask, Acknowledge, Persuade, Substantiate"],
                    "Acknowledge, Assure, Persuade, Substantiate",
                    "Acknowledge, Assure, Persuade and Substantiate is the best practice in writing a compelling email response."
                ),
                new Question("When your prospect is in the decision phase of their journey, what should we do as sellers?", ["Inspire", "Guide", "Captivate", "Persuade"],
                    "Persuade",
                    "We want to PERSUADE them that our product or solution aligns best with their needs."
                ),
                new Question("What percent of the buyer's journey is typically completed before a salesperson gets involved?", ["40%", "50%", "60%", "more than 60%"],
                    "more than 60%",
                    "More than 60% - as much as 80% of the purchase journey is complete before a buyer will typically talk to a salesperson."
                ),
                new Question("When our prospects are exploring, what strategy should we take as sellers?", ["Inspire", "Guide", "Captivate", "Persuade"],
                    "Guide",
                    "We want to GUIDE our potential buyers by positioning ourselves as a valuable resource."
                ),
                new Question("When we are in the captivate phase, what is our specific strategy?", ["Be a valuable resource", "Be first and be fabulous", "Create memorable", "Create awareness"],
                    "Be first and be fabulous",
                    "We want to be FIRST AND BE FABULOUS because this is our best opportunity to stand apart from our competitors."
                ),
            ];

            var quiz = new Quiz(questions);

            populate();
            function populate() {
                if (quiz.isEnded()) {
                    showScore();

                } else {
                    //show questions
                    var element = $("#question");
                    element.innerHTML = quiz.getQuestionIndex().text;
                }
                //show choices for answers
                var answers = quiz.getQuestionIndex().answers;
                for (var i = 0; i < answers.length; i++) {
                    var element = $("#answers" + i);
                    element.innerHTML = answers[i];
                    guess("btn" + i, answers[i]);
                }
                showProgress();

            };

            function guess(id, guess) {
                var button = $("#id");
                button.onclick = function() {
                    quiz.guess(guess);
                    populate();
                }
            }
            //show choices

            function showProgress() {
                var currentQuestionNumber = quiz.questionIndex + 1;
                var element = $("#progress");
                element.innerHTML = "Questiom " + currentQuestionNumber + "of" + quiz.questions.length;
            }

            function showScores() {
                var gameOverHtml = "<h1>Result</h1>";
                gameOverHtml += "<h2> Your score: " + quiz.score + "</h2>";
                var element = $("#quiz");
                element.innerHTML = gameOverHtml;
            }

            //Timer program

            var counter = 0
            var timeLeft = 5
            var timer = $("#timer");
            timer.html("<h2>You have " + (timeLeft - counter) + " seconds left</h2>");

            function timeIt() {
                counter++
                timer.html("<h2>You have " + (timeLeft - counter) + " seconds left</h2>");
                if (counter == timeLeft) {
                    counter = 0
                    timer.html("<h1>Your time is up!</h1>");

                }

            }
            var interValID = setInterval(timeIt, 1000);


            //stop the timer
            function myStopFunction() {
                clearInterval(interValID, 3000);
                timeIt();
            }

            $("#startTheGame.button").click(function() {
                startGame();
            })

            //start the game
            function startGame() {
                myStopFunction();
                var startGame = $("#startTheGame")
                $(".startTheGame").css("visibility", "hidden");
                $("#grid").css("visibility", "visible");
                getQuestion();
                timeIt();


            }

            // begin questions and answers -- name parameters in our questions class
            //.....................................................................
            function Question(text, answers, correct, response) {
                this.text = text;
                this.answers = answers;
                this.correct = correct;
                this.response = response;

            }

            Question.prototype.correctAnswer = function(answers) {
                return answers === this.correct;
            }


            //select answer
            function Quiz(questions) {
                this.score = 0;
                this.questions = questions;
                this.questionIndex = 0;
            }


            Quiz.prototype.getQuestionIndex = function() {
                return this.questions[this.questionIndex];
            }
            Quiz.prototype.isEnded = function() {
                return this.questions.length === this.questionIndex;
            }
            Quiz.prototype.guess = function(correct) {

                if (this.getQuestionIndex().correctAnswer(correct) {
                        this.questionIndex++;

                        if (this.getQuestionIndex().correctAnswer(correct)) {
                            this.score++;
                        }
                        this.questionindex++
                    }
                });

                // show response


                // start over  
});
            

          