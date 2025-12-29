<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $fillable = [
        'ref_doc',
        'rm_no',
        'branch_id',
        'department',
        'requested_by',
        'assignee',
        'item_description',
        'item_id',
        'assessment',
        'action_taken',
        'status',
        'date_received',
        'started_at',
        'completed_at',
        'remarks',
    ];

    protected $casts = [
        'date_received' => 'date',
        'started_at' => 'datetime',
        'completed_at' => 'datetime',
    ];
    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
}
