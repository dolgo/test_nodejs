/**
 * Created by Alexander on 13.12.15.
 */

(function() {

    var ioClient = io.connect('http://localhost:3030');
    window.ioClient = ioClient;

    ioClient.on('connect', function() {
        ioClient.on('getList', function(data) {
            console.log('getList', data);
        });
    });


})();
