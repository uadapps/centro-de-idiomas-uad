<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades;
use DB;

class RvoeController extends  Controller
{
    public function index()
    {
        $res = DB::select("portal_sac_consulta_rvoes");
        return response()->json($res);
    }

    public function store(Request $request)
    {
        $plan = $request->all();
        return response()->json($plan);
    }

    public function nueva_materia(Request $request)
    {
        $plan = $request->all();
        return response()->json($plan);
    }
}
