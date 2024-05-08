FROM ubuntu:18.04

# Set non-interactive timezone to avoid prompts during builds
ARG DEBIAN_FRONTEND=noninteractive
ENV TZ=America/Chicago
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

RUN apt-get update && apt-get install -y \
    curl wget git vim locales build-essential tzdata lsof

# Node JS
RUN curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
RUN bash nodesource_setup.sh

RUN apt-get update && apt-get install -y nodejs

# Clean Up package manager cache
RUN rm -rf /var/lib/apt/lists/*

# Create test user
RUN useradd -M correction_tester

# Keep the container running indef
CMD ["tail", "-f", "/dev/null"]
