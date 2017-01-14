    executeAsync = function (funcs, callback) {
        var results = [];
        var count = 0;
        for(var i = 0; i < funcs.length; i++)
        {
            (function (i) {
                funcs[i](function (result) {
                    results[i] = result;
                    count++;
                    if (count == funcs.length)
                        callback(results);
                })
            })(i);
        }
    }

    //usage

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
    executeAsync([func1, func2, func3], function (res) {
        console.log(res);
        res[0];  //result of func1
        res[1];  //result of func2
    });
