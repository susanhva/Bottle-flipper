let showerbutton = document.querySelector('#shower');
let hond = document.querySelector('#hond');
let eatbutton = document.querySelector('#eat');
let sleepbutton = document.querySelector('#sleep');
let healtheat = 100
let healthsleep = 100
let healthshower = 100
let healthbareat = document.querySelector ('#healthbareat div')
let healthbarshower = document.querySelector ('#healthbarshower div')
let healthbarsleep = document.querySelector ('#healthbarsleep div')
let background = new Audio ('audio/background.mp3')
background.volume = 0.6

// action -> function wordt uitgevoerd
showerbutton.addEventListener("click", shower1);
sleepbutton.addEventListener("click", sleep1);
eatbutton.addEventListener("click", eat1);


//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.belktile.com%2Fblog%2Fproper-tiles-for-your-dog-shower%2F&psig=AOvVaw048_omISXbqOkr4r6zRuAW&ust=1720112035830000&source=images&cd=vfe&opi=89978449&ved=0CBUQ3YkBahcKEwjQgbfoqouHAxUAAAAAHQAAAAAQBA
function shower1() {
    hond.src = 'pics/shower.jpg';
    //dit is de afbeelding die je krijgt nadat je op de button klikt
    healthshower=healthshower+4
    //dit zorgt ervoor dat iedere keer dat je op de knop drukt dat er ook weer health bij komt zodat de puppy niet dood gaat.
    background.play()
    //muziek start vanaf nu, ik moest dit via een interactie doen want google chrome support autoplay niet omdat het data verbruikt.
}

//https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F6124357-cartoon-cute-dog-sleeping-vector-illustration&psig=AOvVaw0BnvL7n85NUy0ZmQH5y9iF&ust=1720111999904000&source=images&cd=vfe&opi=89978449&ved=0CBUQ3YkBahcKEwiIl8HXqouHAxUAAAAAHQAAAAAQBA
function sleep1() {
    hond.src = 'pics/sleep.png';
    healthsleep=healthsleep+10
    background.play()
}

//https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Fso%2Fdog-eating-clipart&psig=AOvVaw0SSV6hmBvBVXEbKt99ra_r&ust=1720104392560000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDN-auOi4cDFQAAAAAdAAAAABAE
function eat1() {
    hond.src = 'pics/eat.png';
    healtheat=healtheat+7
    background.play()
}

//Hulp van Robin!
//dit is de healthbar en dit update de css style van alle healthbars zodat het ieder height gelijk maakt met de healthvariabele.
function healthbarupdate(){
    healthbareat.style.height=healtheat + '%'
    healthbarsleep.style.height=healthsleep + '%'
    healthbarshower.style.height=healthshower + '%'
}

//dit is de healthbar waardoor de value naar beneden gaat en de health dus ook.
function healthbardrop(){
    healtheat=healtheat-7
    healthsleep=healthsleep-10
    healthshower=healthshower-4
    //als de health lager is dan 0 of 0 is komt er een pop up.
    if (healtheat <=0|| healthsleep <=0|| healthshower <=0){
   alert('oh noes, daggoe is dood!')    
    }
    
}


//Hulp van Robin!
//recalled de functies elk aangegeven miliseconde
setInterval (healthbarupdate,1000)
setInterval (healthbardrop, 1000)
