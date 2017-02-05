require 'test_helper'

class EntformUsrmailControllerTest < ActionDispatch::IntegrationTest
  test "should get ctrl_entform_usrmail" do
    get entform_usrmail_ctrl_entform_usrmail_url
    assert_response :success
  end

end
