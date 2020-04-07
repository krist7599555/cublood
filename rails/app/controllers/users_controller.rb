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
    # params[:shirt] = params[:shirt].to_i rescue nil
    # params[:weight] = params[:weight].to_i rescue nil
    # params[:faculty] = params[:faculty].to_i rescue nil
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
