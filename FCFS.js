function Node () {
    var processID;
    var time;
    var next;
    console.log("Node");
}

function Queue () {
    var i;
    var num;
//    var processTime;
    var cab;
    var p;
    console.log("Queue");
}

Queue.newNode = function() {
    this.p = new Node();
    p.next = p;
    this.cab = new Node();
    cab = p;
};

Queue.process = function() {
    console.log("procesando: ");
    var random = Math.floor((Math.random() * 30) + 1);
    console.log("random: " + random);
    for (i=1;i<random;i++){
        console.log("ID " + i);
//        processTime = Math.floor((Math.random() * 800) + 1);
        var p1 = new Node();
        p1.processID = i;
        p1.time = Math.floor((Math.random() * 800) + 1);
        console.log("proceso: "+ID+" timepo: "+p1.time);
        this.cab.next = p1;
        p1.next = this.p;
        this.cab = p1;
    }
}

var execute = new Queue();
execure.process();
