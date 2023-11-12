<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateRolesTable extends Migration
{
    public function up()
    {
       $this->forge->addField([
            'id_role' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => TRUE,
                'auto_increment' => TRUE
            ],
            'role' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ],                                              
        ]);

        $this->forge->addKey('id_role', true);
		$this->forge->createTable('roles');
    }

    public function down()
    {
        $this->forge->dropTable('roles');
    }
}
