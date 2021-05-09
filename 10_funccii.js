============= zavd 0 ===============================
function Pm (a) {
    if (a ==12 || a ==1 || a==2 ) alert("zyma")
    if (a ==5 || a ==3 || a==4 ) alert("vesna")
    if (a ==8 || a ==6 || a==7 ) alert("lito")
    if (a ==9 || a ==10 || a==11 ) alert("osin'")
}

a = parseInt(prompt())
Pm(a);

================= zavd 1 =============================
function Pm (a) {
    if (a ==12 || a ==1 || a==2 ) alert("zyma")
    if (a ==5 || a ==3 || a==4 ) alert("vesna")
    if (a ==8 || a ==6 || a==7 ) alert("lito")
    if (a ==9 || a ==10 || a==11 ) alert("osin'")
}

a = parseInt(prompt())
Pm(a);

function Nm (b) {
    if (a==1) alert("sicheny")
    if (a==2) alert("lyutyi")
    if (a==3) alert("berezeny")
    if (a==4) alert("kviteny")
    if (a==5) alert("traveny")
    if (a==6) alert("cherveny")
    if (a==7) alert("lypeny")
    if (a==8) alert("serpeny")
    if (a==9) alert("vereseny")
    if (a==10) alert("zhovten")
    if (a==11) alert("lystopad")
    if (a==12) alert("hrudeny")
}

a = parseInt(prompt())
Nm(a);

================== zavd 2 ============================

function n(a) {
    if (0<a<22) alert("34 uroki")
    else if (23<a<35) alert("kanikuli")
    else if (36<a<52) alert("35 uroki")
    else if (a>52) alert("u nas ne tak bahato tyzhniv")

    
}
    
let a1 = parseInt(prompt())
n(a1)

====================== zavd 3 =========================

function f1(a, b, c, d) {
    return a+b+c+d
}

function f2(a, b, c, d) {
    return a*b*c*d
}

function f3(a, b, c, d) {
    return (a+b+c+d)/4
}

function f3(a, b, c, d) {
    return Math.min(a, b, c, d)
}

let a = parseInt(prompt())
let b = parseInt(prompt())
let c = parseInt(prompt())
let d = parseInt(prompt())

alert(f1(a, b, c, d))

alert(f2(a, b, c, d))

alert(f3(a, b, c, d))

alert(f4(a, b, c, d))

=================== zavd 4 ==================
    
function f1(a, b, c) {
    let count = 0
    if (a%2==0) count++;
    if (b%2==0) count++;
    if (c%2==0) count++;
    return count;
}


let a = parseInt(prompt())
let b = parseInt(prompt())
let c = parseInt(prompt())


alert(f1(a, b, c))


============== zavd 5 ======================
    
function f1(a) {
    return a/2.54
}

function f2(a) {
    return a*2,205
}

function f3(a) {
    return a/1.609
}

let a = parseInt(prompt())

alert(f1(a))
alert(f2(a))
alert(f3(a))

============== zavd 6 ======================

let t = document.querySelector('#tt');
let a = parseInt(prompt());
let b = parseInt(prompt());
function aee(a,b){
for (let i = 0; i < a; i++) {
    let tr = document.createElement('tr');
    for (let j = 0; j < b; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    t.appendChild(tr);
}
}
aee(a,b);

============== zavd 7 ======================
    
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function ph() {
    let a = prompt("vvedite put k 1 photo");
    let b = prompt("vvedite put k 2 photo");
    let c = prompt("vvedite put k 3 photo");
    let d = prompt("vvedite put k 4 photo");
    let arr = [a,b,c,d];

    let i = getRandomInt(4);
    document.getElementById(img).src=arr[i];
}
ph();

============== zavd 8 ======================

    
 
