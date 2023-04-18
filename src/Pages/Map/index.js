import React from 'react';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
};

// ...

export class CurrentLocation extends React.Component {
    // ...
  
    render() {
      const style = Object.assign({}, mapStyles.map);
  
      return (
        <div>
          <div style={style} ref="map">
            Loading map...
          </div>
          {this.renderChildren()}
        </div>
      );
    }
  }
  
  // ...
  export default CurrentLocation;