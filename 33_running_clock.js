
        var time = setInterval(timer,1000);
        function timer(){
            var d= new Date();
            hh = d.getHours();
            mm = d.getMinutes();
            ss = d.getSeconds();
            //console.log(`${hh}: ${mm}: ${ss}`);
            process.stdout.write(`${hh}: ${mm}: ${ss}\r`);
        }
            