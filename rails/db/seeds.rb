require 'rethinkdb'
include RethinkDB::Shortcuts
r.connect(:db => 'cublood', :host => 'localhost', :port => 28015).repl
r.db_create('cublood').run
r.table_create('users').run
p "finish"