Rails.application.routes.draw do
  get 'search', to: 'search_results#index', as: 'search'
  root :to => 'encounter#index'
  resources :encounter
  get 'home/index'
  get 'hello_world', to: 'hello_world#index'
  get 'update_app_search', to: 'encounter#app_search', as: 'update_app_search'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
