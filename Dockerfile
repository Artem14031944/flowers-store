FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root

COPY ./databse_students.sql /docker-entrypoint-initdb.d/