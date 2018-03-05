<?php
	$target = $_GET['target'];
	$i = 0;

	if(isset($target)) {
		while($i < $target * 1/3) {
			$i++;
		}

		echo json_encode($i);		
	}
?>