import React from 'react';
import PropTypes from 'prop-types';

const LeggTilBevisKnapp = ({ history }) => (
  <div className="blokk">
    <div className="legg-til-bevis-knapp knapp" onClick={() => history.push('/nytt-bevis')}>
      <i className="fa fa-plus" aria-hidden="true"></i>
      <span>LINUS</span>
    </div>
  </div>
);

LeggTilBevisKnapp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default LeggTilBevisKnapp;
