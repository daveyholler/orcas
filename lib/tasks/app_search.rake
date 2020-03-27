require 'rest-client'

namespace :appsearch do
  task create_documents: :environment do
    puts "Publishing #{Encounter.all.count} documents to App Search"
    encounters = Encounter.all
    documents = []

    # Insert the URL for each document into the body
    encounters.each do |enc|
        url = {url: "/encounter/#{enc.id}"}
        doc = enc.as_json.merge(url)
        documents.push(doc)
    end

    uri = URI("https://a56981eed45445c09c47c2ff1b141141.app-search.us-west-2.aws.found.io/api/as/v1/engines/orca/documents")

    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_PEER

    req = Net::HTTP::Post.new(uri)
    req.add_field "Authorization", "Bearer private-drq732zfnjofyx1rzwzn7dom"
    req.add_field "Content-Type", "application/json"
    req.body = documents.to_json
    res = http.request(req)

    puts "Response HTTP Status Code: #{res.code}"
    puts "Response HTTP Response Body: #{res.body}"
  end
end

