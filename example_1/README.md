# To start container
docker-compose  up -d
docker ps
docker-compose logs


# To kill container with name = example (our service)
docker kill $(docker ps -f name="example" -q)


# To launch with scaling
docker-compose up --scale=ex1_app_1=4 -d
# To see containers of our service
docker ps -f name="example"
