<?php

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class EventController extends Controller
{
    // Get all events
    public function index()
    {
        $events = Event::all();
        return response()->json([
            'code' => 200,
            'message' => 'Success',
            'data' => $events
        ]);
    }

    // Insert new event
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'participant_name' => 'required|string|max:255',
            'event_name' => 'required|string|max:255',
            'event_date' => 'required|date',
            'registration_number' => 'required|string|unique:events',
            'category' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json(['code' => 400, 'message' => 'Failed'], 400);
        }

        $event = Event::create($request->all());

        return response()->json(['code' => 200, 'message' => 'Success']);
    }
}

