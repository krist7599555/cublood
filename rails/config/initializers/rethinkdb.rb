p "initial rethink START"
require 'rethinkdb'
include RethinkDB::Shortcuts
r.connect(:db => 'cublood', :host => 'localhost', :port => 28015).repl
r.db_create("cublood").run
r.table_create("users").run
r.table('users').index_create('email').run
r.table('users').index_create('phone').run
p "initial rethink END"