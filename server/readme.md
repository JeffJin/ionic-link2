# Node server
# upstart configuration

#!upstart
description "node.js server"
author      "Jeff Jin"

start on startup
stop on shutdown

script
    export HOME="/root"

    echo $$ > /var/run/link2ionic.pid
    exec sudo -u admin /usr/local/bin/node /home/jenkins/websites/ionic-link2/server/server.js >> /home/jenkins/log/link2-ionic.sys.log 2>&1
end script

pre-start script
    # Date format same as (new Date()).toISOString() for consistency
    echo "[`date -u +%Y-%m-%dT%T.%3NZ`] (sys) Starting" >> /home/jenkins/log/link2-ionic.sys.log
end script

pre-stop script
    rm /var/run/link2ionic.pid
    echo "[`date -u +%Y-%m-%dT%T.%3NZ`] (sys) Stopping" >> /home/jenkins/log/link2-ionic.sys.log
end script