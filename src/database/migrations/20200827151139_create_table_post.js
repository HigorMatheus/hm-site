
exports.up = function(knex) {
    return knex.schema.createTable('posts',function(table){
        table.increments('id').primary();
        table.string('description').notNullable();
        table.string('imagem').notNullable();
        table.string('imagem_url').notNullable();
        table.integer('user_id').unsigned().notNullable()
        table.foreign('user_id')
        .references('id')
        .inTable('users').onUpdate('CASCADE').onDelete('CASCADE')
        table.timestamps(true,true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts');
};