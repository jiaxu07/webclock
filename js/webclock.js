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
function padding(num, length) 
{
	for(var len = (num + "").length; len < length; len = num.length) {
		num = "0" + num;            
	}
	return num;
}
setInterval(function()
{   
	var date = new Date();   
	var year = date.getFullYear();    //获取当前年份   
	var mon = date.getMonth()+1;      //获取当前月份   
	var da = date.getDate();          //获取当前日   
	var day = date.getDay();          //获取当前星期几   

	var season,season_g;
	
	if (mon>=2 || mon<=4) season='Joseph之春';season_g="Joseph's Frühling"
	if (mon>=5 || mon<=7) season='Joseph之夏';season_g="Joseph's Sommer"
	if (mon>=8 || mon<=10) season='Joseph之秋';season_g="Joseph's Herbst"
	if (mon>=11 || mon<=1) season='Joseph之冬';season_g="Joseph's Winter"

	var day_s;
	
	if (day==1)day_s='一';
	else if (day==2)day_s='二';
	else if (day==3)day_s='三';
	else if (day==4)day_s='四';
	else if (day==5)day_s='五';
	else if (day==6)day_s='六';
	else if (day==0)day_s='日';

	var h = date.getHours();          //获取小时   
	var m = date.getMinutes();        //获取分钟   
	var s = date.getSeconds();        //获取秒   
	var hist = '';
	
	/* 2022 *//****/
	if (mon==1){
		if (da==1)hist='元旦';
		if (da==5)hist='小寒';
		if (da==20)hist='大寒';
		if (da==31)hist='除夕';
	};
	if (mon==2){
		if (da==1)hist='春节';
		if (da==4)hist='立春';
		if (da==14)hist='苏修日';
		if (da==15)hist='元宵节';
		if (da==19)hist='雨水';
	};
	/****/
	
	var d = document.getElementById('time_card');    
	d.innerHTML='<center><hr><font size=160px>'+padding(h,2)+':'+padding(m,2)+':'+padding(s,2)+'</font><br><font>'+year+'年'+mon+'月'+da+'日 星期'+day_s+'<hr><br>'+season+'<br>'+season_g+'<br>'+hist+'</center><br>';  

	var bl_j = document.getElementById('bl');    
	bl_j.innerHTML='<aside id="aside" style="width:' +((60*60*h+60*m+s)/86400*500)+'px;"></aside>'
	var blp_j = document.getElementById('bl_p');    
	blp_j.innerHTML='<center>今日已过去'
		+((60*60*h+60*m+s)/864).toFixed(4)+'%</center><br>';

},1000)