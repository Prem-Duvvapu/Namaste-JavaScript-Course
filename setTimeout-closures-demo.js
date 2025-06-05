function x() {
    // var i=1;

    // function y() {
    //     console.log(i);
    // }

    // setTimeout(y, 3000);

    //this will print five times '6'. Here same 'i' is being reference all the five times
    // for (var i=1;i<=5;i++) {
    //     setTimeout(function() {
    //         console.log(i);
    //     },i*1000);
    // }

    //this will print 1,2,3,4,5. Here 'i' is a new copy of variable in each iteration which forms a closure with the function
    // for (let i=1;i<=5;i++) {
    //     setTimeout(function() {
    //         console.log(i);
    //     },i*1000);
    // }

    //print 1,2,3,4,5 with var
    for (var i=1;i<=5;i++) {
        function close(j) {
            setTimeout(function() {
                console.log(j);
            },j*1000);
        }

        close(i);
    }

    console.log("Prem");
}

x();