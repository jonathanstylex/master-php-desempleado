<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateOrdersTable extends Migration
{
    public function up()
    {
       $this->forge->addField([
            'id_order' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => TRUE,
                'auto_increment' => TRUE
            ],
            'orders' => [
                'type' => 'VARCHAR',
                'constraint' => '100',
            ],
            'email' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ],
            'payer_email' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ],              
            'id_course' => [
                'type' => 'INT',
                'constraint' => '11',
            ],
            'payer_id' => [
                'type' => 'VARCHAR',
                'constraint' => '50',
            ],                                              
        ]);

        $this->forge->addKey('id_order', true);
		$this->forge->createTable('orders');
    }

    public function down()
    {
         $this->forge->dropTable('orders');
    }
}
