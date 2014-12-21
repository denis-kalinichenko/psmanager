<?php
/**
 * Created by PhpStorm.
 * User: Denis Kalinichenko
 * Date: 2014-12-14
 * Time: 23:27
 */

require_once 'config.inc.php';

session_start();

$dbhandle = mysql_connect( base64_decode(DB_HOST), base64_decode(DB_USER), base64_decode(DB_PASS))
or die("Unable to connect to database");
include 'functions.inc.php';
$body = "main";

if($_POST) {
    if($_POST['action']) {
        if($_POST['action']=="generate") {
            echo generateRandomString();
            $body = false;
        }
    }

}

if($_GET) {
    if($_GET['action']) {
        if($_GET['action']=="logout") {
            session_destroy();
            header("Location: ".BASE_URL);
        }
    }
}

if($body) {
    require_once(TPL_DIR."/index.html");
}

?>
