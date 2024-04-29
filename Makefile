# Variables
DOCKER_IMAGE_NAME = atlas_web_react
DOCKER_CONTAINER_NAME = atlas_web_react_container
HOST_DIRECTORY=./
CONTAINER_DIRECTORY=/atlas_web_react
.PHONY: build run exec stop clean


# Builds a docker image for a dev container
build:
	docker build -t $(DOCKER_IMAGE_NAME) .

# This sets up the the container to be connected to the current working directory
# It has a bunch of commonly used ports, simple to make things more convenient
run:
	docker run -d --name $(DOCKER_CONTAINER_NAME) -p 8080:8080 -p 3000:3000 -p 4000:4000 -p 5000:5000 -v ${HOST_DIRECTORY}:${CONTAINER_DIRECTORY} ${DOCKER_IMAGE_NAME}

# Execute a command inside the Docker container
exec:
	docker exec -it $(DOCKER_CONTAINER_NAME) bash

# Stop and remove the Docker container
stop:
	docker stop $(DOCKER_CONTAINER_NAME)
	docker rm $(DOCKER_CONTAINER_NAME)

# Clean up Docker images and containers
clean:
	docker stop $(DOCKER_CONTAINER_NAME) || true
	docker rm $(DOCKER_CONTAINER_NAME) || true
	docker rmi $(DOCKER_IMAGE_NAME) || true

# Remove all docker images, containers, and volumes
nuke:
	docker system prune -af

