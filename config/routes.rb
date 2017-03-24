Rails.application.routes.draw do
  get  'helloworld/greeting'
  get  'helloworld/say'
  get  'home/index'
  resources :users
  resources :user_profiles

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
