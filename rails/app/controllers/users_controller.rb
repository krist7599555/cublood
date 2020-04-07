require "rethinkdb"

class UsersController < ApplicationController
  include RethinkDB::Shortcuts
  def index
    render :json => User.index
  end
  def show
    render :json => User.show(params[:id])
  end
  def create
    user = User.new(params.except(:controller, :action, :user).to_unsafe_h)
    if user.valid?
      render :json => user.save
    else
      render status: :bad_request, :json => {
        message: 'form is in wrong format', 
        validate: user.errors.messages
      }
    end
  end
end
