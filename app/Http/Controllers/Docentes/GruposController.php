<?php

namespace App\Http\Controllers\Docentes;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests; 
use Illuminate\Http\Request;
use Illuminate\Support\Facades;
use DB;
use Illuminate\Support\Str;
use Illuminate\Routing\Controller as BaseController;

class GruposController extends  BaseController
{


	//Trae Grupos de un docente
	public function getGrupos(Request $request) {
		$input = $request->all();
		$grupos = DB::select ('ci_get_grupos_docente ?',[$input['userid']]);
		return response()->json($grupos);
	}

	public function getAlumnosGrupo(Request $request) {
		$input = $request->all();
		$res = DB::select ('ci_get_alumnos_grupo ?',[$request->id]);
		$alumnos = [];

		foreach($res as $alumno){
			$a = [
				"id" => $alumno->ID_Alumno,
				"name" => $alumno->Nombre,
				"photo" =>  base64_encode($alumno->Foto),
				"speaking1" =>0,
				"written1" =>0,
				"hpa1" =>0,
				"midTerm" =>0,
				"speaking2" =>0,
				"written2" =>0,
				"hpa2" =>0,
				"finalExam" =>0,
				"finalGrade" =>0,
			];
			array_push($alumnos, $a);
		}
		return response()->json($alumnos);
	}



   
   
}
