<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreatePricesTable extends Migration
{
    public function up()
    {
         $this->forge->addField([
            'id_price' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => TRUE,
                'auto_increment' => TRUE
            ],           
            'price' => [
                'type' => 'INT',
                'constraint' => '11',
            ],                                             
        ]);

        $this->forge->addKey('id_price', true);
		$this->forge->createTable('prices');
    }

    public function down()
    {
        $this->forge->dropTable('prices');
    }
}
