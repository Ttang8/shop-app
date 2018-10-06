class Api::ItemsController < ApplicationController
  def create


  end

  def item_params
    params.require(:item).permit()
  end
end
