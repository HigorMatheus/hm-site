
exports.up = function(knex) {
    return knex.schema.createTable('posts',function(table){
        table.increments('id').primary();
        table.string('description');
        table.string('imagem');
        table.foreign('user_id')
        .references('id')
        .inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        table.integer('user_id').unsigned()
        table.timestamps(true,true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};