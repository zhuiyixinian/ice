import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IceCard from '@icedesign/card';
import './DataDisplay.scss';

const data = [
  {
    count: 100,
    title: '日活跃数'
  },
  {
    count: '3,000',
    title: '月活跃数'
  },
  {
    count: '20,000',
    title: '年活跃数'
  }
];

export default class DataDisplay extends Component {
  static displayName = 'DataDisplay';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  // ICE: React Component 的生命周期

  componentWillMount() { }

  componentDidMount() { }

  componentWillReceiveProps(nextProps, nextContext) { }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUnmount() { }

  render() {
    return (
      <div className="data-display">
        <IceCard>
          <div style={styles.items}>
            {data.map((item, index) => {
              return (
                <div style={styles.item} key={index}>
                  <h5 style={styles.count}>{item.count}</h5>
                  <span style={styles.splitLine} />
                  <p style={styles.title}>{item.title}</p>
                </div>
              );
            })}
          </div>
        </IceCard>
      </div>
    );
  }
}

const styles = {
  items: { display: 'flex', flexWrap: 'wrap' },
  item: { width: '33%', margin: '20px 0', textAlign: 'center' },
  count: {
    margin: '12px 0',
    fontWeight: 'bold',
    fontSize: '32px',
    color: '#15A0FF'
  },
  title: { color: '#999' },
  splitLine: {
    display: 'block',
    margin: '0 auto',
    width: '24px',
    height: '1px',
    background: '#9B9B9B'
  }
};
