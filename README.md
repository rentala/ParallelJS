# ParallelJS
Execute asynchronous js functions in parallel and get their results in a common callback function.

##Usage

 
    function executeInContext(func, i, result){
       func(function (data) {
            result[i] = data;
               res[0];  //result of func1
               res[1];  //result of func2
        });
    }
Where func1, func2, func3 are your asyncronous functions. Such as:


    function func1(cb) {
        setTimeout(function () {
            cb("func1");
        },300)
    }
    function func2(cb) {
        setTimeout(function () {
            cb("func2");
        },200)
    }
    function func3(cb) {
        cb({ data : "data", foo: "foo"})
    }
