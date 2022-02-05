<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades;
use DB;
use Illuminate\Support\Str;

class LoginController extends  Controller
{
	public function login(Request $request)
	{
	  $input = $request->all();
	  $ver = DB::select("ci_login '".$input['user']."', '".$input['password']."'");
	
  
	  $rows = count($ver);
  
	  if($rows != 0){
		$token = $this->getToken($input['user'], $ver[0]->ID_Rol);
		  $data = [
			  "name" => $ver[0]->Paterno." ".$ver[0]->Materno." ".$ver[0]->Nombre,
			  "photo" => base64_encode($ver[0]->Foto),
			  "rol"=> $ver[0]->TipoEspec,
			  "id"=> $ver[0]->ID,
			  "token"=> $token,
			  "id_rol"=> $ver[0]->ID_Rol,
		  ];
		  return response()->json($data);
	  } 
	  else {
		  return response()->json(['error'=>'Usuario o contraseña incorrectos'], 401);
	  } 
	 
	  
	}

  public function auth(Request $request){
	$input = $request->all();
	$ver = DB::select("ci_login_by_token '".$input['token']."'");
	$data = [
		"name" => $ver[0]->Paterno." ".$ver[0]->Materno." ".$ver[0]->Nombre,
		"photo" => base64_encode($ver[0]->Foto),
		"rol"=> $ver[0]->TipoEspec,
		"id"=> $ver[0]->ID,
		"token"=> $input['token'],
		"id_rol"=> $ver[0]->ID_Rol,
	];

	return response()->json($data);

  }
  public function verificarToken(Request $request){
    $input = $request->all();
    $res = DB::select("verificarToken '".$input['token']."'");
     
 
    if($res[0]->valid ==1)
    {
        return response()->json([
            'success' => true
        ]);
    }
    else
    {
        return response()->json(['success' => false]);
    }
  }

  public function getToken($user,$rol){
    $token = hash('sha256', Str::random(60));
    
     $res = DB::select('create_token_api ?,?,?',[$token,$user,$rol]);
    return $token;
  }
   
}
