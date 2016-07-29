var name1="safa";
var name2="safi";
var count=0;
if (name1[0]==name2[0]) {
	count=count+1;
};
if (name1[1]==name2[1]) {
	count=count+1;
};
if (name1[2]==name2[2]) {
	count=count+1;
};
if (name1[3]==name2[3]) {
	count=count+1;
};


if (count>=2){
	alert('אותיות משותפות'+count+'='+name1+'+'+name2);
}
