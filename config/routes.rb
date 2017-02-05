Rails.application.routes.draw do
  get 'entform_usrprof/ctrl_entform_usrprof'

  get 'entform_usrmail/ctrl_entform_usrmail'

  get 'helloworld/greeting'
  get 'helloworld/say'
  get 'home/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
