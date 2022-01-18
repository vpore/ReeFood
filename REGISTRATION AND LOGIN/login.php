<?php
//This script will handle login
session_start();

// check if the user is already logged in
if(isset($_SESSION['username']))
{
    header("location: welcome.php");
    exit;
}
require_once "config.php";

$username = $password = "";
$err = "";

// if request method is post
if ($_SERVER['REQUEST_METHOD'] == "POST"){
    if(empty(trim($_POST['username'])) || empty(trim($_POST['password'])))
    {
        $err = "Please enter username + password";
    }
    else{
        $username = trim($_POST['username']);
        $password = trim($_POST['password']);
    }


if(empty($err))
{
    $sql = "SELECT id, username, password FROM users WHERE username = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, "s", $param_username);
    $param_username = $username;
    
    
    // Try to execute this statement
    if(mysqli_stmt_execute($stmt)){
        mysqli_stmt_store_result($stmt);
        if(mysqli_stmt_num_rows($stmt) == 1)
        {
            mysqli_stmt_bind_result($stmt, $id, $username, $hashed_password);
            if(mysqli_stmt_fetch($stmt))
            {
                if(password_verify($password, $hashed_password))
                {
                    // this means the password is corrct. Allow user to login
                    session_start();
                    $_SESSION["username"] = $username;
                    $_SESSION["id"] = $id;
                    $_SESSION["loggedin"] = true;

                    //Redirect user to welcome page
                    header("location: welcome.php");
                    
                }
            }

        }

    }
}    


}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="registernew.css">
</head>

<body>
    <div class="panel">

        <!--<div class="pricing-plan">
            <img src="icons/icon1.png" alt="" class="pricing-img">
            <h2 class="pricing-header">Personal</h2>
            <ul class="pricing-features">
                <li class="pricing-features-item">Custom domains</li>
                <li class="pricing-features-item">Sleeps after 30 mins of inactivity</li>
            </ul>
            <span class="pricing-price">Free</span>
            <a href="#/" class="pricing-button">Sign up</a>
        </div>-->
        <form action="" method="post">
            <div class="pricing-plan">
                <img src="icons/icon2.png" alt="" class="pricing-img">
                <h2 class="pricing-header">Website name</h2>
                <ul class="pricing-features">
                    <li class="pricing-features-item">Enter your Email(username) : </li>
                    <input type="text" class="form-control" name="username" id="inputEmail4" placeholder="Email">
                    <li class="pricing-features-item">Enter your password : </li>
                    <input type="password" class="form-control" name="password" id="inputEmail4"
                        placeholder="Password">
                   
                </ul>
            </div>

            
        
       
            <!-- <div class="form-row">
                <div class="form-group username">
                    <label for="inputEmail4">Choose your Username</label>
                    <input type="text" class="form-control" name="username" id="inputEmail4" placeholder="Email">
                </div>
                <div class="form-group password">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" name="password" id="inputPassword4"
                        placeholder="Password">
                </div>
            </div>
            <div class="form-group confirmation">
                <label for="inputPassword4">Confirm Password</label>
                <input type="password" class="form-control" name="confirm_password" id="inputPassword"
                    placeholder="Confirm Password">
            </div>


            <div class="form-group">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck">
                    <label class="form-check-label" for="gridCheck">
                        Check me out
                    </label>
                </div>
            </div> -->
           <button type="submit" id="button">Login</button>
        </form>
    </div> 
       
   
    <!-- <div class="pricing-plan">
            <img src="icons/icon3.png" alt="" class="pricing-img">
            <h2 class="pricing-header">Enterprise</h2>
            <ul class="pricing-features">
                <li class="pricing-features-item">Dedicated</li>
                <li class="pricing-features-item">Simple horizontal scalability</li>
            </ul>
            <span class="pricing-price">$400</span>
            <a href="#/" class="pricing-button">Free trial</a>
        </div> -->

    </div>

</body>

</html>