import ReactOnRails from 'react-on-rails';
import './application.scss';
import Map from '../bundles/App/components/Map';
import Search from '../bundles/App/components/search/Search';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Map,
  Search,
});
