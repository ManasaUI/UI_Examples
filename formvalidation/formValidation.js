function validate()
{
	  if( document.myForm.name.value == "" )
         {
            alert( "Please provide your name!" );
            document.myForm.name.focus() ;
            return false;
       }
         
         if( document.myForm.email.value == "" )
         {
            alert( "Please provide your Email!" );
            document.myForm.EMail.focus() ;
            return false;
         }
         
         if( document.myForm.Zip.value == "" ||
         isNaN( document.myForm.Zip.value ) ||
         document.myForm.Zip.value.length != 5 )
         {
            alert( "Please provide a zip in the format #####." );
            document.myForm.Zip.focus() ;
            return false;
         }
         
         if( document.myForm.country.value == "-1" )
         {
            alert( "Please provide your country!" );
            return false;
         }
         return( true );
}

