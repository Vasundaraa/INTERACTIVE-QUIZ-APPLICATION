var pos = 0,board,status,qus,choice,A,B,C,D,cor=0
var answered = false
var questions = 
[
    ["How do you handle challenges?",
        "Face them head-on","Take time but eventually deal with them","Try to avoid them if possible","Feel overwhelmed and give up easily"],
    ["How do you prefer to spend your weekends?",
        "Exploring new activities","Hanging out with friends or family","Watching shows or playing games","Staying in bed and doing nothing"],
    ["When making decisions, you usually ...",
            "Decide quickly and confidently","Think carefully before choosing","Overthink and struggle to decide","Let others decide for you"],
    ["How social are you?",
            "Very outgoing, love meeting new people","Friendly but prefer small groups","Quiet and prefer my close circle","Introverted and avoid socializing"],
    ["How do you deal with criticism?",
            "Take it positively and improve","Feel bad but learn from it","Get defensive but think about it later","Ignore it or feel hurt"],
    ["Do you like taking risks?",
            "Yes, I love challenges and adventure","Sometimes, but only calculated risks","Rarely, I prefer safety and comfort","No, I avoid risks as much as possible"],
    ["How do you handle stress?",
            "Stay calm and find solutions","Feel stressed but manage it well","Struggle but try to cope","Get overwhelmed easily"],
    ["How organized are you?",
            "Very organized, everything is planned","Mostly organized, but flexible","Somewhat messy, but manageable","Completely disorganized"],
    ["How do you react when meeting new people?",
            "Confidently start conversations","Talk after some time","Wait for them to talk first","Avoid talking altogether"],
    ["How do you feel about trying new things?",
                "Love it, always looking for new experiences","Open to it but prefer familiar things","Hesitant but will try if needed","Dislike change, prefer routine"]
]

function DisplayQuestion()
{
    board=document.getElementById("question");
    answered = false
    if (pos>=questions.length)
    {
        document.getElementById("qno").innerHTML="Quiz Completed";
        

        switch (true) 
        {
            case (cor >= 35 && cor <= 40):
                board.innerHTML="<h2>Your Score "+cor+"<h2>";
                board.innerHTML+="<p>You are ambitious, adventurous, and a natural leader.<br><br>You embrace challenges and inspire those around you.</p>";
                break;
            case (cor >= 25 && cor <= 34):
                board.innerHTML="<h2>Your Score "+cor+"<h2>";
                board.innerHTML+="<p>You are responsible, hardworking, and adaptable.<br><br>You enjoy socializing but also value alone time.</p>";
                break;
            case (cor >= 15 && cor <= 24):
                board.innerHTML="<h2>Your Score "+cor+"<h2>";
                board.innerHTML+="<p>You are kind, calm, and prefer comfort over risks.<br><br>You avoid conflicts and like things to be predictable.</p>";
                break;
            case (cor >= 5 && cor <= 14):
                board.innerHTML="<h2>Your Score "+cor+"<h2>";
                board.innerHTML+="<p>You prefer solitude and routines over new experiences.<br><br>You might need encouragement to step out of your comfort zone.</p>";
                break
            default:
                break;

        }

        // board.innerHTML+=""
        
        pos=0;
        cor=0
        return false
    }
    document.getElementById("qno").innerHTML="Question "+(pos+1)+" of "+questions.length;

    qus=questions [pos][0];
    A=questions [pos] [1];
    B=questions [pos] [2];
    C=questions [pos] [3];
    D=questions [pos] [4];

    board.innerHTML=" <h3>"+qus+"</h3> ";
    board.innerHTML+=`<label><input type='button' name='choices' value="${A}" onclick='answercrt(\"A\")'></label>`;
    board.innerHTML+=`<label><input type='button' name='choices' value="${B}" onclick='answercrt(\"B\")'></label><br><br>`
    board.innerHTML+=`<label><input type='button' name='choices' value="${C}" onclick='answercrt(\"C\")'></label>`
    board.innerHTML+=`<label><input type='button' name='choices' value="${D}" onclick='answercrt(\"D\")'></label><br><br>`

    board.innerHTML+=" <button id='nextbtn' onclick='nextques()' style='text-align: center;'>NEXT</button> ";
}

function answercrt(selcoi)
{
    if(!answered)
    {
        //let choice =questions[pos][5]

        switch (selcoi) 
        {
            case 'A':
                cor=cor+4
                break;
            case 'B':
                cor=cor+3
                break;
            case 'C':
                cor=cor+2
                break;
            case 'D':
                cor++
                break;
            default:
                break
        }

        answered = true
        document.getElementById('nextbtn').style.display = 'block'
    }
    
}

function nextques()
{
    pos++
    document.getElementById('nextbtn').style.display = 'none'
    DisplayQuestion()
}

DisplayQuestion()