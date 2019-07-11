import React from 'react';

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100vh',
          width: '20%',
          marginLeft: 40
        }}
      >
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
            fontSize: 20,
          }}
        >
          Step 1
        </div>
        <div
          style={{
            marginTop: 10,
            marginBottom: 10,
            fontSize: 20,
          }}
        >
          Step 2
        </div>
      </div>
    );
  }
}
