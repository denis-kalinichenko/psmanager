<?php
/**
 * Created by PhpStorm.
 * User: Denis
 * Date: 2014-12-14
 * Time: 23:49
 */

define('ROOT_PATH', dirname(__FILE__));
define('DB_HOST', base64_encode('localhost'));
define('DB_USER', base64_encode('root'));
define('DB_PASS', base64_encode(''));
define('DB_NAME', base64_encode('psmanager'));
define('BASE_URL', '/psmanager');
define('TPL_DIR', 'template');
define('MISC_DIR', 'misc');
define('TPL_URL', BASE_URL."/".TPL_DIR);
define('APP_NAME', 'PSManager');

?>
