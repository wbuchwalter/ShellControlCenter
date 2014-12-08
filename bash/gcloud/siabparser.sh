#!/bin/bash

#Parse the URL to find the server and the username
#connect to the server as admin via ssh, create a user with username and fixed pwd
#connect to the server with newly created user


args=$(echo $1 | cut -d'?' -f2)
server=$(echo $args | cut -d'_' -f1)
username=$(echo $args | cut -d'_' -f2)


echo " Connecting to $server as $username ..."
echo "useradd..."
/usr/bin/gcloud compute ssh -q --zone us-central1-a Will@$server --command \"sudo useradd $username -m -s /bin/bash\" 2> /dev/null
echo "mkdir..."
/usr/bin/gcloud compute ssh -q --zone us-central1-a Will@$server --command \"sudo mkdir /home/$username/.ssh\" 2> /dev/null
echo "transfering key..."
/usr/bin/gcloud compute ssh -q --zone us-central1-a Will@$server --command \"sudo cp /home/Will/.ssh/authorized_keys /home/$username/.ssh/authorized_keys\" 2> /dev/null
echo "ssh..."
/usr/bin/gcloud compute ssh -q --zone us-central1-a $username@$server 



