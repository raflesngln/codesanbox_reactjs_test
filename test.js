function angka_deret(jum){
    var a='';
    for(var i=1;i < jum;i++){
        for (var j = 1; j < i ; j++) {
              a +=j+ ' ';
        }
        a +='\n';
    }
        return a;
}
function angka_deret2(n){
    var a='';
    for (var i = 1; i < n; i++) {
            for (var j = i; j < n; j++) {
                a +=j+' ';
            }
            a+='\n';
        }
        return a;
}
function angka_deret3(n){
    var a='';
    for (var i = 1; i < n; i++) {
            for (var j = n; j >= i; j--) {
                a +=j+' ';
            }
            a+='\n';
        }
        return a;
}
function phyramida(n){
    var a='';
    for (var i = 1; i <= n; i++) {
            for (var j = i; j < n; j++) {
                a +=" ";
            }
            for (var k = 1; k <= (2 * i) - 1; k++) {
                a+="*";
            }
            a+='\n';
        }
        return a;
}

function pohon3(jum){
    var a='';
    for(var i=0;i < jum;i++){
        a +='\n';
        for (var j = 0; j < i ; j++) {
              a+="**";
        }
    }
        return a;

}

console.log(angka_deret(12));
console.log(angka_deret2(11));
console.log(angka_deret3(10));

console.log(phyramida(10));
