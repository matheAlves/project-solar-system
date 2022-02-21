import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <section>
        <div>
          <Title headline="Planetas" />
        </div>
        <div data-testid="solar-system" className="solar-system">
          {Planets
            .map((planet) => (<PlanetCard
              key={planet.name}
              planetName={planet.name}
              planetImage={planet.image}
            />))}
        </div>
      </section>

    );
  }
}

export default SolarSystem;
