import SSH2Promise from 'ssh2-promise'
var sshconfig1 = {
    host: '192.168.0.109',
    username: 'root',
    password: '5'
}

let ssh = new SSH2Promise(sshconfig1);
async function main() {
    var data = await ssh.exec("ifconfig");
    console.log(data);
    console.log(await ssh.exec("echo 1111"));

    let sftp = ssh.sftp()
    let root = await sftp.readdir('/')


    ssh.close() //ubuntu

};
main()