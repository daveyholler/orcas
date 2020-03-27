import React, { dangerouslySetInnerHTML } from 'react';
import moment from 'moment';

export default function SearchResultItem(props) {
  return (
    <div className="search__resultItem">
      <span className="tag is-light is-small">{moment(props.result.encounter_date.raw).format('MMM Do \'YY')}</span>
      <span className="tag is-light is-small" style={{marginLeft: '.5rem'}}>From {props.result.start_time.raw} &rarr; {props.result.end_time.raw}</span>
      <h4 className="search__resultTitle">
        <a href={props.result.url.raw}>Encounter No. {props.result.encounter_number.raw} on {props.result.vessel.raw}</a>
      </h4>
      <div dangerouslySetInnerHTML={{__html: props.result.summary.snippet}} />
    </div>
  )
}
