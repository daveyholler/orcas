class HomeController < ApplicationController
  def index
    @viewpoints = Viewpoint.all
  end
end
