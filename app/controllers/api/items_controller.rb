class Api::ItemsController < ApplicationController
  def create
    @item = Item.new(item_params)
    if @item.save
      render "api/items/show"
    else
      render json: @item.errors.full_messages, status: 422
    end

  end

  def item_params
    params.require(:item).permit(:name, :item_number, :description, :image_url, :product_info, :price, :category_id)
  end
end
