# Inherit from Heroku's stack
FROM debian:jessie

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        make gcc libpq-dev ca-certificates npm bzip2 tar git g++ curl
RUN curl -sL https://deb.nodesource.com/setup_4.x | bash -
RUN apt-get install -y nodejs


RUN npm install -g bower
RUN npm update -g

COPY ./ /opt/ismikin/simplegroups

EXPOSE 9000
EXPOSE 9001

WORKDIR /opt/ismikin/simplegroups
RUN bower install --allow-root
RUN npm install
RUN npm install -g grunt-cli
RUN grunt serve
