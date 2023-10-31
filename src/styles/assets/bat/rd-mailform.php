<?php

if (isset($_POST['emailsend']))
	{
			$myemail = $_POST['myemail'];
            $mysubject = "Website Query - $myemail";
            $mymessage = $_POST['message'];
            $mysubject = stripslashes($mysubject);
            $mymessage = stripslashes($mymessage);
            $headers = "From: $myemail" . "\r\n" .
            "CC: $myemail";
		    mail("info@hlelaprojects.africa",$mysubject,$mymessage,$headers);
			sleep(2);
			header("location:../contacts.html");
	}

?>