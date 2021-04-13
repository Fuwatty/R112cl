function Cal()

{

gofutsume=document.getElementById("gofutsume").value;
kireaji=document.getElementById("kireaji").value;
tama=document.getElementById("tama").value;
kougeki=document.getElementById("kougeki").value;
furucha=document.getElementById("furucha").value;
sakaurami=document.getElementById("sakaurami").value;
shichu=document.getElementById("shichu").value;
gyakushu=document.getElementById("gyakushu").value;
kajiba=document.getElementById("kajiba").value;
fukutsu=document.getElementById("fukutsu").value;
shusei=document.getElementById("shusei").value;
donki=document.getElementById("donki").value;
chousensha=document.getElementById("chousensha").value;
choukaishin=document.getElementById("choukaishin").value;

inputValueS = document.calForm.s.value - 0;
inputValueC = document.calForm.c.value - 0;



var gofutsume;
var kireaji;
var tama;
var kougeki;
var furucha;
var sakaurami;
var shichu;
var gyakushu;
var kajiba;
var fukutsu;
var shusei;
var donki;
var chousensha;
var choukaishin;

var gof=Number(gofutsume);
var kire=Number(kireaji);
var tm=Number(tama);
var kou=Number(kougeki);
var furu=Number(furucha);
var saka=Number(sakaurami);
var sch=Number(shichu);
var gya=Number(gyakushu);
var kaj=Number(kajiba);
var fuk=Number(fukutsu);
var shu=Number(shusei);
var don=Number(donki);
var cho=Number(chousensha);
var clb=Number(choukaishin);

if(kougeki==7)
	{
	var kougekijousan=1.05;
	}
	else if(kougeki==8)
		{
		var kougekijousan=1.06;
		}
		else if(kougeki==9)
			{
			var kougekijousan=1.08;
			}
			else if(kougeki==10)
				{
				var kougekijousan=1.1;
				}
				else
					{
					var kougekijousan=1;
					}

if(chousensha==20)
	{
	var chousenshajousan=15;
	}
	else if(chousensha==16)
		{
		var chousenshajousan=10;
		}
		else if(chousensha==12)
			{
			var chousenshajousan=7;
			}
			else if(chousensha==8)
				{
				var chousenshajousan=5;
				}
				else if(chousensha==4)
					{
					var chousenshajousan=3;
					}
					else
						{
						var chousenshajousan=0;
						}


a = Math.floor((inputValueS*kougekijousan)+kou);
B = (gof+furu+saka+sch)*gya;

sts1 = Math.floor(a*don+B)*kaj*fuk*shu;
sts2 = Math.floor(a*don+B)*kaj*fuk*shu+cho;

hiikari = Math.floor(sts1*(clb*inputValueC/100+1)*kire*tm);
ikari = Math.floor(sts2*(clb*(inputValueC+chousenshajousan)/100+1)*kire*tm);

heikin = (hiikari+ikari)/2;

document.calForm.hiikari.value=hiikari;
document.calForm.ikari.value=ikari;
document.calForm.heikin.value=heikin;

}