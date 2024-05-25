document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("submitBtn").addEventListener("click", function() {
        var answers = [];
        for (var i = 1; i <= 10; i++) {
            var radios = document.getElementsByName("q" + i);
            for (var j = 0; j < radios.length; j++) {
                if (radios[j].checked) {
                    answers.push(radios[j].value);
                    break;
                }
            }
        }

        var counts = { A: 0, B: 0, C: 0, D: 0, E: 0 };
        for (var i = 0; i < answers.length; i++) {
            counts[answers[i]]++;
        }

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

        var description = "No description available.";
        if (character === "Thor") {
            description = "Kind, charming, and very loyal.";
        } else if (character === "Wanda") {
            description = "You have a lot of potential and often come across as mysterious.";
        } else if (character === "Black Widow") {
            description = "You're strategic and always think ahead. You handle conflicts with skill and precision. Your past experiences have made you emotionally complex. You're loyal to people and have a strong sense of moral justice.";
        } else if (character === "Iron Man") {
            description = "Intelligent and love creating things. You are a charismatic and confident person. You've grown a lot, trying to learn to be more selfless over time. You sometimes struggle with accepting who you really are but always strive to be the best version of yourself.";
        } else if (character === "Hulk") {
            description = "You're incredibly strong but can be emotionally sensitive. You struggle with controlling your anger and inner conflicts. Despite your strength, you're very intelligent. You seek acceptance and a place to belong.";
        }

        document.getElementById("characterName").textContent = character;
        document.getElementById("characterDescription").textContent = description;
    });
});
