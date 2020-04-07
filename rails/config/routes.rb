Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  scope '/api' do
    post '/login', :to => "users#index"
    post '/register', :to => "users#create"
    resources :users, :only => [:index, :show, :create]
  end
end
