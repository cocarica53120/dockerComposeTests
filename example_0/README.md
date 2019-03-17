Working with env..
https://docs.docker.com/compose/environment-variables/

# Versions
  Work with 2 versions of docker-compose file
  Api lightly different 
  [versionning](https://docs.docker.com/compose/compose-file/compose-versioning/)

# To launch,
docker-compose -f docker-compose-v2.yml up --build --scale=exapp_2=1 -d

# To view logs
docker-compose -f docker-compose-v2.yml logs

# To go into shell
docker-compose -f docker-compose-v2.yml exec exapp_2 sh
