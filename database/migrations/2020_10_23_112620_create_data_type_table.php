<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_types', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('slug')->unique();
            $table->string('display_name_singular')->nullable();
            $table->string('display_name_plural')->nullable();
            $table->string('icon')->nullable();
            $table->string('model_name')->nullable();
            $table->string('description')->nullable();
            $table->boolean('generate_permissions')->default(false);
            $table->timestamps();
        });

        // Create table for storing roles
        Schema::create('data_rows', function (Blueprint $table) {
            $table->id('id');
            $table->foreignId('data_type_id')->constrained();
            $table->string('field');
            $table->string('type');
            $table->string('display_name');
            $table->boolean('required')->default(false);
            $table->boolean('browse')->default(true);
            $table->boolean('read')->default(true);
            $table->boolean('edit')->default(true);
            $table->boolean('add')->default(true);
            $table->boolean('delete')->default(true);
            $table->text('details')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('data_rows');
        Schema::dropIfExists('data_types');
    }
}
