<?php
    class Connection extends Mysqli
    {
        function __construct()
        {
            parent::__construct('localhost', 'root', '', 'MayaFood');
            $this->set_charset('utf8');
            $this->connect_error == NULL ? 'Conexión exítosa a la DB' : die('Error al conectarse a la db');
        }
    }


