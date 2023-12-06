docker build --no-cache -f SQL\Dockerfile.PostgreSql -t prilozhenie_2-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t prilozhenie_2-java/app ../../..
