executeAsync = function (funcs, callback) {
        var results = [];
        var count = 0;
        for(var i = 0; i < funcs.length; i++)
        {
            new executeInContext(function(cb) {
                funcs[i](function (result) {
                    cb(result);
                    count++;
                    if (count == funcs.length)
                        callback(results);
                })
            }, i, results);


        }
    }
    function executeInContext(func, i, result){
       func(function (data) {
            result[i] = data;
        });
    }
