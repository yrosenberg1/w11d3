class Bench < ApplicationRecord
    # required description (string) , lat (float) and lng (float) attributes.
validates :description, :lat, :lng
end