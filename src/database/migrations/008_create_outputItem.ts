
import Knex from 'knex';

export async function up(knex: Knex){
  return knex.schema.createTable('outputItem', table => {
    table.increments('id').primary();
    
  });
}

export async function down(knex: Knex){
  return knex.schema.dropTable('outputItem');
}