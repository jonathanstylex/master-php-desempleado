<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateUsersProductsTable extends Migration
{
    public function up()
    {
        $this->forge->addField([
            'id_user_product' => [
                'type' => 'INT',
                'constraint' => 5,
                'unsigned' => TRUE,
                'auto_increment' => TRUE
            ],            
            'id_user' => [
                'type' => 'INT',
                'constraint' => '11',
            ],
            'id_product' => [
                'type' => 'INT',
                'constraint' => '11',
            ],                                    
        ]);

        $this->forge->addKey('id_user_product', true);
		$this->forge->createTable('users_products');
    }

    public function down()
    {
        $this->forge->dropTable('products');
    }
}
