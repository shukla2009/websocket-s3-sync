const websocket = require('websocket-stream');
const source = process.env.SOURCE || 'ws://stream.meetup.com/2/rsvps';
const ws = websocket(source);
const fs = require('fs');
const cron = require('node-cron');

const s3 = process.env.S3_BUCKET || 's3://wt-rahul-test/live/';
const shell = require('shelljs');
var fileout = fs.createWriteStream('/tmp/meetup.json', {flags: 'a'});
ws.pipe(fileout);
cron.schedule('* * * * *', function () {
    shell.exec(`./uploadtos3 ${s3}`);
    fileout.close();
    fileout = fs.createWriteStream('/tmp/meetup.json', {flags: 'a'});
    ws.pipe(fileout);
    console.log('re open file stream');
});