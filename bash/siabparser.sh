#!/bin/bash

#Parse the URL to find the server and the username
#connect to the server as admin via ssh, create a user with username and fixed pwd
#connect to the server with newly created user


args=$(echo $1 | cut -d'?' -f2)
server=$(echo $args | cut -d'_' -f1)
username=$(echo $args | cut -d'_' -f2)


echo " Connecting to $server as $username ..."
echo "useradd..."
ssh will@$server sudo useradd $username -m -s /bin/bash
echo "mkdir..."
ssh will@$server sudo mkdir /home/$username/.ssh
echo "transfering key..."
ssh will@$server sudo cp /home/will/.ssh/authorized_keys /home/$username/.ssh/authorized_keys
echo "ssh..."
ssh $username@$server -i /Users/Will/.ssh/id_rsa



