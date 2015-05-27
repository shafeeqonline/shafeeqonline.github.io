<?php

  $email = $_REQUEST['mail'] ;
  $message = $_REQUEST['message'] ;

  mail( "admin@shafeeqonline.com", "Form from shafeeqonline site",$message, "From: $email" );
?>