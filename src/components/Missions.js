import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div>
        <Title headline="Missões" />
        <div data-testid="missions" className="missions">
          {missions
            .map((mission) => (<MissionCard
              key={ mission.name }
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
            />))}
        </div>
      </div>

    );
  }
}

export default Missions;
