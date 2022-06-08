Rails.application.routes.draw do
  get 'letters/', to: 'letters#index'
  get 'letters/new'

  post 'letters/', to: 'letters#create'
end
