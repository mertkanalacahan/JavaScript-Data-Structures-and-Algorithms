function charCount(str)
{
    var obj = {};

    for (var char of str)
    {
        if(isAlphaNumeric(char))
        {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }

    return obj;
}

function isAlphaNumeric(char)
{
    var charCode = char.charCodeAt(0);

    if(!(charCode > 47 && charCode > 58) && //numeric
       !(charCode > 64 && charCode > 91) && //uppercase
       !(charCode > 98 && charCode > 123)) //lowercase
    {
        return false;
    }
    
    return true;
}