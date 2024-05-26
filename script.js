document.addEventListener("DOMContentLoaded", function() {
    // Get the user's answers
    document.getElementById("submitBtn").addEventListener("click", function () {
        var answers = [];
        for (var i = 1; i <= 10; i++) { // Updated to loop through all 10 questions
            var radios = document.getElementsByName("q" + i);
            for (var j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    answers.push(radios[j].value);
                    break;
                }
            }
        }

        // Calculate the result
        var counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
        for (var i = 0; i < answers.length; i++) {
            counts[answers[i]]++;
        }

        // Determine the character based on the answers
        var character = "Unknown";
        if (counts.A >= counts.B && counts.A >= counts.C && counts.A >= counts.D && counts.A >= counts.E) {
            character = "Thor";
        } else if (counts.B >= counts.A && counts.B >= counts.C && counts.B >= counts.D && counts.B >= counts.E) {
            character = "Wanda";
        } else if (counts.C >= counts.A && counts.C >= counts.B && counts.C >= counts.D && counts.C >= counts.E) {
            character = "Black Widow";
        } else if (counts.D >= counts.A && counts.D >= counts.B && counts.D >= counts.C && counts.D >= counts.E) {
            character = "Iron Man";
        } else if (counts.E >= counts.A && counts.E >= counts.B && counts.E >= counts.C && counts.E >= counts.D) {
            character = "Hulk";
        }

        // Display character description
        var description = "No description available.";
        if (character === "Thor") {
            description = "Kind, charming, and very loyal.\n" +
                          "You can be proud and sometimes overly cocky but are learning humility.\n" +
                          "You struggle with family expectations and responsibilities.\n" +
                          "You face problems head-on and get things done.";
        } else if (character === "Wanda") {
            description = "You have a lot of potential and often come across as mysterious.\n" +
                          "You often struggle with your inner challenges and abilities.\n" + 
                          "Your emotions run deep, influenced by your complicated past.\n" 
                          "You're deeply connected to those you care about, like family." ;
        } else if (character === "Black Widow") {
            description = "You're strategic and always think ahead.\n" +
                          "You handle conflicts with skill and precision.\n" +
                          "Your past experiences have made you emotionally complex.\n" +
                          "You're loyal to people and have a strong sense of moral justice.";
        } else if (character === "Iron Man") {
            description = "Intelligent and love creating things.\n" +
                          "You are a charismatic and confident person.\n" +
                          "You've grown a lot, trying to learn to be more selfless over time.\n" +
                          "You sometimes struggle with accepting who you really are but always strive to be the best version of yourself.";
        } else if (character === "Hulk") {
            description = "You're incredibly strong but can be emotionally sensitive.\n" +
                          "You struggle with controlling your anger and inner conflicts.\n" +
                          "Despite your strength, you're very intelligent.\n" +
                          "You seek acceptance and a place to belong.";
        }

        document.getElementById("characterName").textContent = character;
        document.getElementById("characterDescription").textContent = description;

        // Display result header with specified formatting
        var resultHeader = document.createElement('span');
        resultHeader.classList.add('result-header');
        resultHeader.textContent = "You are ";

        var characterSpan = document.createElement('span');
        characterSpan.id = 'characterName';
        characterSpan.textContent = character;

        var resultContainer = document.querySelector('.result-container');
        resultContainer.innerHTML = ''; // Clear previous results
        resultContainer.appendChild(resultHeader);
        resultContainer.appendChild(characterSpan);
        resultContainer.appendChild(document.createElement('br')); // Add line break
        resultContainer.appendChild(document.getElementById('characterDescription'));
    });
});
