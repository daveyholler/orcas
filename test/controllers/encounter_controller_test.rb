require 'test_helper'

class EncounterControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get encounter_index_url
    assert_response :success
  end

end
