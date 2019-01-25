
exports.up = function (knex, Promise) {
    return knex.schema.createTable('students', table => {
        table.increments();
        table.string('name');
        table.integer('cohort_id');
    });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('students');
};
