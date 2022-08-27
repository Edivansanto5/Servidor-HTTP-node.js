process.title = 'WebServer';
    let args = process.argv,
        port = args[2] || 7070,
        WebServer = Require('/.server');

    WebServer.listen(port,function(){
        console.log('Server start at port '+ port);
    });

