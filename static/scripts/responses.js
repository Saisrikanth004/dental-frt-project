function getBotResponse(input) {
    //rock paper scissors
    
    if (input == "medicines") {
        return "ibuprofen,naproxen,vitamin D tablets";
    } else if (input == "symptoms") {
        return "Toothache, spontaneous pain or pain,Tooth sensitivity,Root Infection,Enamel Erosion";
    } else if (input == "preventions") {
        return "Brush twice a day with a soft-bristled toothbrush";
    }else if (input == "foods") {
        return "Cheese, Milk,Yogurt,Celery,Carrots,Apples,Nuts,Tea,Coffee";
    }else if (input ==  "emergency") {
        return "visit your nearer dental care and seek immediate Oral Care";
    }
    
    

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "hi") {
        return "what is your problem";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input == "thanks") {
        return "you are welcome! have a pleasant day";
    }else {
        return "Try asking something else!";
    }
}
