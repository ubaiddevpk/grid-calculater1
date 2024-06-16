let marks = prompt("Enter your marks between 1 and 100")
if(marks>100)
    {
        alert("ERROR! Enter marks between 1 and 100")
    }
    else if(marks>=80&&marks<=89)
        {
            alert("Your marks is " + marks + "  " +"your grade is A")
        }
        else if(marks>=70&&marks<=79)
            {
                alert("Your marks is " + marks + "  " +"your grade is B")
            }
            else if(marks>=60&&marks<=69)
                {
                    alert("Your marks is " + marks + "  " +"your grade is C")
                }
                else if(marks>=50&&marks<=59)
                    {
                        alert("Your marks is " + marks + "  " +"your grade is D")
                    }
                    else 
                        {
                            alert("Congrate _ you are failed")
                        }

