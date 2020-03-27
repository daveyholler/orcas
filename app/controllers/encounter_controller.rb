class EncounterController < ApplicationController
  def index
    @encounters = Encounter.all

    render formats: [:html, :json]
  end

  def show
    @encounter = Encounter.find(params[:id])
  end

  def app_search
    @encounters = Encounter.all
    body = @encounters.to_json
    uri = "https://a56981eed45445c09c47c2ff1b141141.app-search.us-west-2.aws.found.io/api/as/v1/engines/orca/documents"
    headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer private-drq732zfnjofyx1rzwzn7dom'
    }
    response = RestClient.post(uri, body, headers: headers)

    puts response.pretty_inspect
    redirect_to :back
  end
end
