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
ekisu=document.getElementById("ekisu").value;
mikiri=document.getElementById("mikiri").value;
konshin=document.getElementById("konshin").value;
jakuten=document.getElementById("jakuten").value;
batto=document.getElementById("batto").value;
zokuseikougeki=document.getElementById("zokuseikougeki").value;
zokuseikaishin=document.getElementById("zokuseikaishin").value;
sokusha=document.getElementById("sokusha").value;

inputValueS = document.calForm.s.value - 0;
inputValueC = document.calForm.c.value - 0;
inputValueE = document.calForm.e.value - 0;

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
var eki=Number(ekisu);
var miki=Number(mikiri);
var kshi=Number(konshin);
var jakutoku=Nunber(jakuten);
var bto=Number(batto);
var zoko=Number(zokuseikougeki);
var zon=Number(zokuseikaishin);
var sks=Number(sokusha);

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

if(zoko==4.00)
	{
	var zokobai=1.05;
	}
	else if(zoko===4.000)
		{
		var zokobai=1.1;	
		}
			else if(zoko===4.0000)
			{
			var zokobai=1.15;
			}

if(kire==0.5)
	{
	var kirezoko=0.25;
	}
	else if(kire==0.75)
		{
		var kirezoko=0.5;
		}
		else if(kire==1.05)
			{
			var kirezoko=1;
			}
			else if(kire==1.2)
				{
				var kirezoko=1.0625;
				}
				else if(kire==1.32)
					{
					var kirezoko=1.15;
					}
					else if(kire==1.39)
						{
						var kirezoko=1.25;
						}
	
cc=inputValueC+miki+kshi+jakutoku+bto
	
var cc

if (cc>100)
	{
	var cc=100
	}
	
ca=cc+chousenshajousan
	
if (ca>100)
	{
	var ca=100
	}
	
a = Math.floor((Math.floor(inputValueS*eki+0.00001)*kougekijousan)+kou);
B = (gof+furu+saka+sch)*gya;

sts1 = Math.floor(a*don+B)*kaj*fuk*shu;
sts2 = Math.floor(a*don+B)*kaj*fuk*shu+cho;

hiikari = Math.floor(sts1*(clb*cc/100+1)*kire*tm*sks);
ikari = Math.floor(sts2*(clb*ca/100+1)*kire*tm*sks);

heikin = (hiikari+ikari)/2;
	
ELhiikari = Math.floor(Math.floor(Math.floor(inputValueE*zokobai+zoko)*(zon*cc/100+1))*kirezoko);
ELikari = Math.floor(Math.floor(Math.floor(inputValueE*zokobai+zoko)*(zon*ca/100+1))*kirezoko);
ELheikin = (ELhiikari+ELikari)/2;

document.calForm.hiikari.value=hiikari;
document.calForm.ikari.value=ikari;
document.calForm.heikin.value=heikin;

document.calForm.ELhiikari.value=ELhiikari;
document.calForm.ELikari.value=ELikari;
document.calForm.ELheikin.value=ELheikin;

}
