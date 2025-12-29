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
        Schema::create('jobs-list', function (Blueprint $table) {
            $table->id();

            $table->string('ref_doc')->nullable();
            $table->string('rm_no')->nullable();

            $table->foreignId('branch_id')->constrained()->cascadeOnDelete();

            $table->string('department')->nullable();

            $table->string('requested_by')->nullable();
            $table->string('assignee')->nullable();

            $table->text('item_description')->nullable();
            $table->string('item_id')->nullable();

            $table->text('assessment')->nullable();
            $table->text('action_taken')->nullable();

            $table->enum('status', [
                'Pending',
                'In Progress',
                'On Hold',
                'Completed'
            ])->default('Pending');

            $table->date('date_received')->nullable();
            $table->dateTime('started_at')->nullable();
            $table->dateTime('completed_at')->nullable();

            $table->text('remarks')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs-list');
    }
};
