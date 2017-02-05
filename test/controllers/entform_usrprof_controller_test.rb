require 'test_helper'

class EntformUsrprofControllerTest < ActionDispatch::IntegrationTest
  test "should get ctrl_entform_usrprof" do
    get entform_usrprof_ctrl_entform_usrprof_url
    assert_response :success
  end

end
