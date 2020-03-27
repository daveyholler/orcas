# Integrating App Search into my app
* Creating the engine was super straightforward, we know this, there’s really no hiccups there.
* Once the engine was created, though, things started to fall apart for me. It’s too early for things to fall apart. The UI allows the user to paste or upload JSON, which is fine for playground purposes, but obviously not ideal for actual integration. I had a rails app with some data that I wanted to push into AS. The only snippet for a guide under the API was a cUrl request.
* “Easy enough” I thought. I don’t have a lot of experience integrating with 3rd party APIs, but I have enough to at least not be scared off at this step.
* I went to my rails app and proceeded to use the rest-client gem which I’ve used in the past.
* I formatted by URI and my request body and my headers (which included my authorization token/API key)
* I hit go
* I got a response back that my request didn’t have a request body.
* “That’s weird,” I thought to myself.
* I spent roughly the next hour trying to figure out why my request body was empty. I sent a dozen requests to the App Search endpoints, but nothing would show up in the logs. I kept receiving a 401 request.
* Confused and frustrated, I made a sandwich and took a break.
* When I came back I decided, what the heck, I’ll try this with that Net::HTTP thing that I think is in rails.
* I rewrote my request, stuck it in a file that I could execute from the command line and after a few spelling errors, I had successfully pushed some data into App Search. I was pumped.
* “Now what?” I asked.
* Well… I need a search box…
* I went to the App Search dashboard and clicked on Reference UI.
* I was lost.
* I poked around at the fields, I wasn’t sure what to use as a title field as my data about whale sightings in the Salish Sea didn’t have an ideal title field. I knew I was gonna need to build a title from a few fields. So I chose the vessel name and clicked “generate preview.”
* “Cool,” I thought.
* I clicked the big “Download ZIP Package” button
* When I opened it up I was confused… because this was like a full on React app. Setup quite differently than my react_on_rails thing I was building.
* “Argh,” I said to myself… actually I think I said it outloud and my wife asked if everything was ok
* I didn’t feel like reverse-engineering the downloaded package so I figured I’d go about it a different way.
* I went back to reference UI and clicked on both links “Explore the source code” and “Read the Reference UI guide.” Neither was useful in the moment.
* The first link was essentially nothing more than a detailed guide on using the ZIP package that was downloaded as a starting point. This was odd to me, because my app was not at a starting point.
* The second link was docs. Still nothing super useful here. At least not within my context. I just wanted to stick a search bar in my header.
* Additionally, the docs added some confusion because reference UI says that all the fields are optional, but the docs say that the ONLY one that’s optional is the URL field. 🤷‍♂️
* Back to the drawing board.
* I opened up a new Chrome tab and started googling “search-ui.” I knew it was a thing and I thought I’d recalled seeing it show up in Github at some point. I thought it was a Swiftype library so I search Swiftype for it.
* “What was it called? search-ui-react?”
* I couldn’t find it.
* I took another break. I ate another sandwich. Don’t worry, a day has passed, I don’t just sit around chomping sandwiches all day like a sociopath.
* I went back to searching Github. I found the repo under elastic’s org.
* “Cool,” I thought, “we’re off to the races now!”
* I yarn added the things
* I dropped the initial code block into a new JSX file in my app and imported the component into one of my views.
* “Hot damn, Sara!” My documents were showing up.
* I was excited. But I wasn’t done yet. Cause this isn’t actually what I wanted. I wanted a search bar in my header.
* So I started reading through the read me.
* I considered replacing the copy/pasted code with the “headless” version. Though that was confusing to me, because I didn’t want it to be headless, I thought. I needed it to be connected to App Search. I was confused.
* I read some more.
* I decided, ah, “what the hell.” And I put the “headless” code into my app.
* I reloaded my page. No errors. Cool. But also no search box. Sucky.
* I inspected the elements. Screw css.
* I added a class to my input and there it was… in all it’s glory. A search box.
* I typed a thing.
* Nothing
* Hrmn.
* I reloaded the page and opened the console. I typed another thing. I hit enter.
* Error: No onSearch handler provided and no Connector provided. You must configure one or the other.
* Bummer. Back to the readme.
* I think its safe to say that at this point, if I were building something for a client, I would have abandoned App Search and would probably give Algolia a shot.
* Its proving to be overly difficult to follow the guides in the repo to get up and running with search-ui. There’s almost too much information in there to make any of it useful as a starting point.
* We need to find a balance between “here’s an entire search app” and “here’s how you build all the things piece by piece in painstaking detail.”
* So I've moved on to just ripping the contents out of the demo app that reference UI created and pasting them into my app. This appears like it's gonna be a weird way forward.
* Alright... after pasting the code and commenting out everything in the Layout, and moving the `SearchBox` out of the `Layout` I've finally got a Search box in the header with autocomplete. Now I just need to figure out how to navigate to each result's URL.
  * I'm assuming that I need to update my App Search documents with a URL for each item. Let's figure that out.
  * Aight... after fiddling with how to merge a URL field into the documents in Rails, I've successfully updated my documents in App Search. All no include a URL field.
* Now that the URL field is in there, I'm trying to figure out how to navigate the user to the proper article when they click on the autocomplete item
* I'm going to build a dedicated search results page
  * This helped... I broke apart the logic and I think I'm getting a clearer picture of how to put these things together.
* I figured out that I can pass `results` into the `WithSearch` component and just iterate over the results with my own results component.
* Now that I've figured out how to get this mostly working on a single page. I'm gonna try to do this in the modal. I'll draw up a quick little wireframe so I can decide what it'll look like.
* I'm experiencing some crazy slow-downs where it takes SO many seconds to load the page with search on it. Not sure where the hangup is and why it's taking so long.
  * It was slow for totally unrelated reasons
* So I've got search "_mostly_" working. There's a lot more I'd like to do with this, but I'm getting bored. I'd like to show auto-complete results and have some form of keyboard navigation.
![](https://p20.f4.n0.cdn.getcloudapp.com/items/rRu6Kmon/Screen%20Recording%202020-03-27%20at%2011.58%20AM.gif?v=49adcee924d5957ce517ceb5c9bd8cfd)

#app-search
