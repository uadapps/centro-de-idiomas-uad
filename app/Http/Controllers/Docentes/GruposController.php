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
				'id' => $alumno->id,
				"grupo" => $alumno->grupo,
				"id_alumno" => $alumno->id_alumno,
				"name" => $alumno->name,
				"photo" =>  base64_encode($alumno->photo),
				"speaking1"=>$alumno->speaking1,
				"written1"=>$alumno->written1,
				"hpa1"=>$alumno->hpa1,
				"midTerm"=>$alumno->midTerm,
				"speaking2"=>$alumno->speaking2,
				"written2"=>$alumno->written2,
				"hpa2"=>$alumno->hpa2,
				"finalExam"=>$alumno->finalExam,
				"finalGrade"=>$alumno->finalGrade,
			];
			array_push($alumnos, $a);
		}
		return response()->json($alumnos);
	}

	public function updateCalificacion(Request $request) {
		$input = $request->all();
		$res = DB::update('ci_update_calificacion ?,?,?,?,?,?,?,?,?,?',[$input['id'],$input['speaking1'],$input['written1'],$input['hpa1'],$input['midTerm'],$input['speaking2'],$input['written2'],$input['hpa2'],$input['finalExam'],$input['finalGrade']]);
		return response()->json($res);
	}


   
   
}
