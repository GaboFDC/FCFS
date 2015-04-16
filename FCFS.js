function Node () {
    var ID;
    var execTime;
    var arriveTime;
    var next;
    console.log("Node");
}

function Queue () {
    var i;
    var num;
//    var processTime;
    var cab;
    var p;
    var aux;
    var p1;
    console.log("Queue");
}

Queue.prototype.newNode = function() {
    console.log("newNode");
    this.p = new Node();
    console.log("p "+this.p);
    this.p.next = this.p;
    this.cab = new Node();
    this.cab = this.p;
};

Queue.prototype.createProcess = function() {
    console.log("creando procesos... ");
    var random = Math.floor((Math.random() * 5) + 1);
    console.log("random: " + random);
    for (i=1;i<=random;i++){
        console.log("ID " + i);
//        processTime = Math.floor((Math.random() * 800) + 1);
        this.p1 = new Node();
        this.p1.ID = i;
        this.p1.execTime = Math.floor((Math.random() * 800) + 1);
        this.p1.arriveTime = Math.floor((Math.random() * 6000) + 1);
        console.log("proceso: "+this.p1.ID+" timepo rafaga: "+this.p1.execTime+" timepo llegada: "+this.p1.arriveTime);
        this.cab.next = this.p1;
        this.p1.next = this.p;
        this.cab = this.p1;
    }
};

Queue.prototype.main = function () {
    console.log("main");
    this.aux=this.p;
    console.log("aux: "+ this.aux+ " p "+this.p);
    console.log("aux next: "+ this.aux.next.ID );
    if ( this.aux == this.aux.next ) {
        console.log("No hay mas procesos en cola...");
    }else{
        console.log("aux: "+ this.aux.ID +" p next: "+this.p.next.ID );
        this.aux=this.p.next;
        console.log("aux: "+ this.aux.ID +" p next: "+this.p.next.ID );

        console.log("WHILE p1:"+ this.p1.ID +" p:"+this.p.ID );
/*        while ( this.p1 != this.p ){
            console.log("Proceso en ejecucion: "+this.p1.ID );
//            setTimeout(function() {
                console.log("demoro: "+this.p1.execTime );
//            }, ( this.p1.execTime ));
*/            console.log("p next: "+this.p.next.ID+" aux next: "+this.aux.next.ID);
            this.p.next = this.aux.next;
            console.log("p next: "+this.p.next.ID+" aux next: "+this.aux.next.ID);

            console.log("aux "+this.aux.ID+" p next: "+this.p.next.ID);
            this.aux = this.p.next;
            console.log("aux "+this.aux.ID+" p next: "+this.p.next.ID);
        console.log("WHILE p1:"+ this.p1.ID +" p:"+this.p.ID );
/*        }*/
    }
};

var execute = new Queue();
execute.newNode();
execute.createProcess();
execute.main();
