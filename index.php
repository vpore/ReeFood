<?php
$insert = false;
if(isset($_POST['desc'])){
    // Set connection variables
    $server = "localhost";
    $username = "root";
    $password = "";

    // Create a database connection
    $con = mysqli_connect($server, $username, $password);

    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    // echo "Success connecting to the db";

    // Collect post variables
   
    $desc = $_POST['desc'];
    $name = $_POST['user'];
    $sql = "INSERT INTO `login`.`fridge` (`name`,`data`, `date`) VALUES ('$name','$desc', current_timestamp);";
    // echo $sql;

    // Execute the query
    if($con->query($sql) == true){
        // echo "Successfully inserted";

        // Flag for successful insertion
        $insert = true;
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }

    // Close the database connection
    $con->close();
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FRIDGE</title>
  <link href="https://fonts.googleapis.com/css?family=Roboto|Sriracha&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="normie.css">
</head>

<body>

  <div class="container">
    <h1>Enter your items as shown in the below example</h1>
    <img src="image.jpg" class="img">


    <?php if($insert == true){
      echo "<p class='submitMsg'>Your item was added</p>";
      }
    ?>
    <form action="index.php" method="post">
      Enter your username
      <input type="email" name="user" placeholder="Email"><br>
      Enter the items in your fridge along with the expiry date <br>
      <textarea name="desc" id="desc" cols="30" rows="10" placeholder="'item name' and 'dd/mm/yyyy"></textarea><br>
      <button class="btn">Submit</button>
    </form>
  </div>


</body>

</html>