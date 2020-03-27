import React from "react";
import AppSearchAPIConnector from "@elastic/search-ui-app-search-connector";

import {
  ErrorBoundary,
  SearchProvider,
  SearchBox,
  WithSearch
} from "@elastic/react-search-ui";
import "@elastic/react-search-ui-views/lib/styles/styles.css";

import {
  buildAutocompleteQueryConfig,
  buildFacetConfigFromConfig,
  buildSearchOptionsFromConfig,
  getConfig,
} from "./config/config-helper";

import ResultItem from './ResultItem';

const { hostIdentifier, searchKey, endpointBase, engineName } = getConfig();
const connector = new AppSearchAPIConnector({
  searchKey,
  engineName,
  hostIdentifier,
  endpointBase
});
const config = {
  searchQuery: {
    facets: buildFacetConfigFromConfig(),
    ...buildSearchOptionsFromConfig()
  },
  autocompleteQuery: buildAutocompleteQueryConfig(),
  apiConnector: connector,
  alwaysSearchOnInitialLoad: false,

};


export default function Search() {
  return (
    <SearchProvider config={config}>
      <WithSearch mapContextToProps={({ wasSearched, results, searchTerm }) => ({ wasSearched, results, searchTerm })}>
        {({ wasSearched, results, searchTerm }) => {
          const escFunction = () => {
            if(event.keyCode === 27) {
              log('Escape was pressed')
            }
          }
          return (
            <div className="navigation__searchWrapper">
              <ErrorBoundary>
                <SearchBox view={({ onChange, value, onSubmit }) => (
                  <form onSubmit={onSubmit} className="searchField">
                    <div className="control is-fullwidth">
                      <input
                        className="input"
                        value={value}
                        placeholder="Search for whales..."
                        onChange={e => onChange(e.currentTarget.value)}
                      />
                    </div>
                    <input className="button is-primary" type="submit" value="Search"/>
                  </form>
                )}/>
                {
                  searchTerm !== '' && results.length > 0
                  ? (
                    <div className="search__resultsWrapper">
                      {results.map(result => {
                        return (
                          <ResultItem key={result.id.raw} result={result} />
                        )
                      })}
                    </div>
                  )
                  : null
                }
              </ErrorBoundary>
            </div>
          );
        }}
      </WithSearch>
    </SearchProvider>
  );
}
