DB_HOST="127.0.0.1"
DB_PORT="5437"
DB_USER="postgres"
DB_DATABASE="contact-manager-database"
DB_PASSWORD=""

# creates database in postgres using data above
createdb -h $DB_HOST -p $DB_PORT -U $DB_USER $DB_DATABASE

# run knex migrations
knex migrate:latest
