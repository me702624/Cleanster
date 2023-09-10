function getBotResponse(input) {
    //Question
    if (input == "service") {
        return "Cleaning,Ironing, Carpet Clecning";
    } else if (input == "Cleaning") {
        return "Ok Great! How many reception rooms do you need cleaning?";
    } else if (input == "1") {
        return "How often would you like someone to clean? [ Twice a Week,Once a Week, Once Every Two Weeks ]  ";
    } else if (input == "Twice a Week") {
        return  "Ok Great! Would you like us to contact you?";
    } else if (input == "yes") {
        return  "Can I take your full name?";
  
    }
    // responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Thank you!";
    } else {
        return "I'm here to assist you with any questions or problems you may have. What can I help you with today? 🤗";
    }
    
}