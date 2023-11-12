<?php

namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class CreateProductsTable extends Migration
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
			'img' => [
				'type' => 'VARCHAR',
				'constraint' => '50',
			],
			'product_name' => [
				'type' => 'VARCHAR',
				'constraint' => '50',
			],
			'description' => [
				'type' => 'VARCHAR',
				'constraint' => '50',
			],					
			'id_price' => [
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
