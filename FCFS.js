function Node () {
    var ID;
    var execTime;
    var arriveTime;
    var next;
//    console.log("Node");
}

function Queue () {
    var first;
    var lenght;
//    var p;
//    var aux;
//    var p1;
    console.log("Queue");
}

/*Queue.prototype.newNode = function() {
    console.log("newNode");
    this.p = new Node();
    console.log("p "+this.p);
    this.p.next = this.p;
    this.cab = new Node();
    this.cab = this.p;
};*/

Queue.prototype.createProcess = function() {
    console.log("creando procesos... ");
    var random = Math.floor((Math.random() * 10) + 1);
    console.log("random: " + random);

    this.first = new Node();
    this.lenght=6000;
    var tmp = new Node();
    tmp = this.first;
    for (i=1;i<=random;i++){
//        console.log("ID " + i);
        var currentProcess = new Node();
        currentProcess.ID = i;
        currentProcess.execTime = Math.floor((Math.random() * 800) + 1);
//	this.lenght = (this.lenght + currentProcess.execTime);
//	console.log("lenght "+this.lenght);
        currentProcess.arriveTime = Math.floor((Math.random() * this.lenght) + 1);
//        console.log("proceso: "+currentProcess.ID+" timepo rafaga: "+currentProcess.execTime+" timepo llegada: "+currentProcess.arriveTime);

        tmp.next = currentProcess;
        tmp = tmp.next;
    }
};

Queue.prototype.listProcess = function () {
    var tmp = new Node();
    tmp = this.first;
    while ( tmp ){
        console.log("proceso: "+tmp.ID+" timepo rafaga: "+tmp.execTime+" timepo llegada: "+tmp.arriveTime+" sig "+tmp.next+" - ");
        tmp = tmp.next;
    }
}

Queue.prototype.FCFS = function() {
    console.log("FCFS... ");
    var currentProcess = this.first.next;

    while ( currentProcess ){
        console.log("Proceso en ejecucion: "+currentProcess.ID );
        console.log("demoro: " );
        console.log(" "+currentProcess.execTime);
        currentProcess = currentProcess.next;
    }
};
/*
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
        while ( this.p1 != this.p ){
            console.log("Proceso en ejecucion: "+this.p1.ID );
//            setTimeout(function() {
                console.log("demoro: "+this.p1.execTime );
//            }, ( this.p1.execTime ));
            console.log("p next: "+this.p.next.ID+" aux next: "+this.aux.next.ID);
            this.p.next = this.aux.next;
            console.log("p next: "+this.p.next.ID+" aux next: "+this.aux.next.ID);

            console.log("aux "+this.aux.ID+" p next: "+this.p.next.ID);
            this.aux = this.p.next;
            console.log("aux "+this.aux.ID+" p next: "+this.p.next.ID);
        console.log("WHILE p1:"+ this.p1.ID +" p:"+this.p.ID );
        }
    }
};*/

var execute = new Queue();
//execute.newNode();
execute.createProcess();
execute.listProcess();
execute.FCFS();
//execute.main();
