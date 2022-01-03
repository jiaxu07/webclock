<?php
/***
    The Source Code of WEB CLOCK
    (C) 2021-2022 Joseph Z.
    All rights reserved.
    license: BSD 3-Clause 
***/

/*
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
    AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
    IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
    FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
    DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
    OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
?>

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>Webclock</title>
    <script src="js/jquery-3.4.1.min.js" type="text/javascript"></script>
    <script src="js/webclock.js" type="text/javascript"></script>
    <script src="js/cale.js" type="text/javascript"></script>
    <link rel="stylesheet" href="css/main.css" type="text/css"/>
    <link rel="stylesheet" href="css/cale.css" type="text/css"/>
</head> 
<body>
    <div class="container">
        <center><h1>Web Clock</h1></center>
        <div id="time_card"></div>
        <div id="bl"></div>
        <div id='bl_p'></div>
    </div>
<?php
	date_default_timezone_set("PRC");
    
    $time = getdate();
    $mday = $time["mday"];
    $mon = $time["mon"];
    $year = $time["year"];
    
    if($mon==4||$mon==6||$mon==9||$mon==11){
        $day = 30;
    }elseif($mon==2){
        if(($year%4==0&&$year%100!=0)||$year%400==0){
            $day = 29;
        }else{
            $day = 28;
        }
    }else{
        $day = 31;
    }
    
    $w = getdate(mktime(0,0,0,$mon,1,$year))["wday"];
    
    $date = function($day,$w,$year,$mon){
        echo "<div class=\"cale\"><center><b>".$year."年".$mon."月</b><table border='0.5'>";
        echo "<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>";
        $arr = array();
        for($i=1;$i<=$day;$i++){
            array_push($arr,$i);
        }
        if($w>=1&&$w<=6){
            for($m=1;$m<=$w;$m++){
                array_unshift($arr,"");
            }
        }
        $n=0;
        for($j=1;$j<=count($arr);$j++){
            $n++;
            if($n==1) echo "<tr>";
            global $mday;
            if($mday==$arr[$j-1]){
                echo "<td width='80px' style='background-color: #90a0ee;'>".$arr[$j-1]."</td>";
            }else{
                echo "<td width='80px'>".$arr[$j-1]."</td>";
            }
            
            if($n==7){
                echo "</tr>";
                $n=0;
            }
        }
        if($n!=7)echo "</tr>";
        
        echo "</table></center></div>";
    };
    $date($day,$w,$year,$mon);
?>
</body>
</html>
