var http = require("http");
var url = require("url");
var formidable = require('formidable');
var util = require('util');
var sd = require('silly-datetime');

var server = http.createServer(function (req, res) {
    if (req.url == '/post' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir = "./uploads";
        var fileName = sd.format(new Date(), 'YYYYMMDDHHmm');
        form.on('fileBegin', function (name, file) {
            file.path = "./uploads\\\\" + fileName + file.name.substr(file.name.indexOf("."));
        });
        form.parse(req, function (err, fields, files) {
            if (err) {
                throw err;
            }
            res.writeHead(200, {'content-type': 'text/plain'});
            console.log(fields);
            console.log(files);
            res.write('received upload:\n\n');
            res.end(util.inspect({fields: fields, files: files}));
        });

        return;
    }

});
server.listen(9527, "127.0.0.1");
