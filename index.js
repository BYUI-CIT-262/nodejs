var plivo = require('plivo');

(function main() {
    'use strict';
    var client = new plivo.Client("MAYWI5ZMM5ODGWNZK1YJ", "NjBkZjJjZTdlYjI0OTFlZDgzZTI1ZTUyNzEwNTFm");
    client.messages.create(
        "+14308032204", //src
        "+12088813998", // dst
        "Hello, this is a sample text from Plivo", // text
        {
            method: "GET",
            url: "http://foo.com/sms_status/"
        },
    ).then(function (response) {
        console.log(response);
        //Prints only the message_uuid
        console.log(response.messageUuid);
    }, );
})();