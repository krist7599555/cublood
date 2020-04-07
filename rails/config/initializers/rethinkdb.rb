p "initial rethink START"
require 'rethinkdb'
include RethinkDB::Shortcuts
r.connect(:db => 'cublood', :host => 'localhost', :port => 28015).repl
r.db_create("cublood").run rescue nil
r.table_create("users").run rescue nil
r.table('users').index_create('email').run rescue nil
r.table('users').index_create('phone').run rescue nil
p "initial rethink END"