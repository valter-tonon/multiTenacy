<?php

namespace App\Models;


use Auth;
use Illuminate\Database\Eloquent\Model;

class UserTenant extends BaseUser
{
    protected $connection = 'tenant';
    protected $table = 'tenant_users';

    public static function getUser()
    {
        return Auth::guard('pead')->user()->name;
    }


}
