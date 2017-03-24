require 'test_helper'

class HelloworldControllerTest < ActionDispatch::IntegrationTest
  test "should get greeting" do
    get helloworld_greeting_url
    assert_response :success
  end

end
