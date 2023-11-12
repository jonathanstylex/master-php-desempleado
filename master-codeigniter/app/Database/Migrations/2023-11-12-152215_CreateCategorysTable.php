<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateCategorysTable extends Migration
{
    public function up()
    {
      $this->forge->addField([
			'id_category' => [
				'type' => 'INT',
				'constraint' => 5,
				'unsigned' => TRUE,
				'auto_increment' => TRUE
			],			
			'category_name' => [
				'type' => 'VARCHAR',
				'constraint' => '50',
			],								
			'id_product' => [
				'type' => 'INT',
				'constraint' => '11',
			],				                          
		]);

		$this->forge->addKey('id_category', true);
		$this->forge->createTable('categorys'); 
    }

    public function down()
    {
         $this->forge->dropTable('categorys');
    }
}
