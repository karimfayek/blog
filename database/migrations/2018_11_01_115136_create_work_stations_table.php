<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkStationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('work_stations', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->longText('descreption');
            $table->integer('brand_id')->nullable()->unsigned();            
            $table->foreign('brand_id')->references('id')->on("brands")->onDelete('set null');
            $table->string('slug');
            $table->string('image')->nullable();  
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('work_stations');
    }
}
