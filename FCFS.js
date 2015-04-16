function Node () {
    var processID;
    var time;
    var next;
}

function Queue () {
    var i;
    var num;
//    var processTime;
    var cab;
    var p;
}

Queue.newNode = function() {
    this.p = new Node();
    p.next = p;
    this.cab = new Node();
    cab = p;
};

Queue.process = function() {
    var random = Math.floor((Math.random() * 30) + 1);
    for (i=1;i<random;i++){
//        processTime = Math.floor((Math.random() * 800) + 1);
        var p1 = new Node();
        p1.processID = i;
        p1.time = Math.floor((Math.random() * 800) + 1);
        this.cab.next = p1;
        p1.next = this.p;
        this.cab = p1;
    }
}
