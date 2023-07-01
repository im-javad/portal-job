<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ads', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('employer_id');
            $table->string('title');
            $table->string('img_url');
            $table->string('company_name');
            $table->string('country');
            $table->string('city');
            $table->string('cooperation_type');
            $table->text('description');
            $table->text('responsibilities')->nullable();
            $table->text('required_knowledge_skills')->nullable();
            $table->text('bonus_skills')->nullable();
            $table->integer('vancy');
            $table->integer('need_experience');
            $table->string('gender');
            $table->string('telegram_link')->nullable();
            $table->string('instagram_link')->nullable();
            $table->string('facebook_link')->nullable();
            $table->string('github_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('ads');
    }
};
