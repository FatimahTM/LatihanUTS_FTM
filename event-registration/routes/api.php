<?php

use App\Http\Controllers\EventController;

Route::get('/events', [EventController::class, 'index']);
Route::post('/events', [EventController::class, 'store']);
