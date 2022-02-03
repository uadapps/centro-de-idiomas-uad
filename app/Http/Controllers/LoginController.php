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
    $ver = DB::update("mg_iniciar_sesion '".$input['user']."', '".$input['password']."'");
  

 
 
    if($ver!=0)
    {
		$res = DB::select("mg_iniciar_sesion '".$input['user']."', '".$input['password']."'");
        
        $token  = $this->getToken($res[0]);
		 
        return response()->json([
            'success' => true,
            'user' => $res[0],  
            'token' => $token
        ]); 

	 
     
    }
    else
    {
        return response()->json(['error'=>'Usuario o contraseña incorrectos'], 401);
    }
   
    
  }

  public function auth(Request $request)
  {
	$input = $request->all();
	//$ver = DB::select("getApiTokenInfo '".$input['token']."'");
	$res = [
		"user"=>[
			"id_usuario"=>"1",
		"usuario"=>"zsckare",
		"nombre"=>"ALVAREZ GUEVARA ANTONIO",
		"rol"=>"Director de Medicina",
		"id_rol"=>"1"],
		"token"=>"abd85cc87ea6212a939469000bf74ad36e1a79fd787f235e0f59eab6e5e41919"
		];
    return response()->json($res);
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

  public function getToken($user){
    $token = hash('sha256', Str::random(60));
    
     $res = DB::select('create_token_api ?,?,?',[$token,$user->usuario,$user->id_rol]);
    return $token;
  }
   
}
