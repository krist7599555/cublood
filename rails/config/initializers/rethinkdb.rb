require 'rethinkdb'
include RethinkDB::Shortcuts
r.connect(:db => 'cublood', :host => 'localhost', :port => 28015).repl