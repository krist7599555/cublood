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
    params[:birth] = Time.new(params[:birth]) rescue nil
    user = User.new(params.except(:controller, :action, :user).to_unsafe_h)
    if user.valid?
      id = user.save
      user = User.find_by(id: id)
      # TODO change hash to object
      render :json => {
        access_token: Jwt.encode(
          id: id,
          name: user["name"] + ' ' + user["surname"],
          exp: Time.now.to_i + 3 * 3600
        )
      }
    else
      render status: :bad_request, :json => {
        message: 'form is in wrong format', 
        validate: user.errors.messages
      }
    end
  end
end
