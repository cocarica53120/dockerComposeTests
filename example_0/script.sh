#!/bin/sh

echo $0; echo $SHELL;
id;
pwd;
ls -lt;

echo "starting my script infinite loop!!!"
echo "hostname : $(hostname)"
echo "$(date) : The name is $name. The age is $AGE."
echo "Running now an infinite loop, to simulate a service"
while true
do
  sleep 1
done
