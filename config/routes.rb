Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :events, except: [:new, :edit]
  end
end
