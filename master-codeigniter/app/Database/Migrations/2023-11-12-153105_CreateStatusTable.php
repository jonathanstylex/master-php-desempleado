<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateStatusTable extends Migration
{
    public function up()
    {
         $this->forge->addField([
            'id_statu' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => TRUE,
                'auto_increment' => TRUE
            ],
            'status' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ],                                              
        ]);

        $this->forge->addKey('id_statu', true);
		$this->forge->createTable('status');
    }

    public function down()
    {
         $this->forge->dropTable('status');
    }
}
