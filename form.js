function validate(){
    if(document.myform.Email.value==""){
        alert("please provide mail id")
        document.myform.Email.focus()
        return false
    }else if(document.myform.Password.value==""){
        alert("please provide password")
        document.myform.Password.focus()
        return false
    }else if(document.myform.FirstName.value==""){
        alert("please provide first name")
        document.myform.FirstName.focus()
        return false
    }else if(document.myform.LastName.value==""){
        alert("please provide last name")
        document.myform.LastName.focus()
        return false
    }else{
        return true
    }
    
}