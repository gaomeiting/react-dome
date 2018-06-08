import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Grid } from 'antd-mobile';



export default class AvatarList extends React.Component {
	static propTypes = {
		avatar: PropTypes.object
	};

	constructor(props) {
		super(props);

	}
	
	render() {
		const data = 'boy,girl,man,woman,bull,chick,crab,hedgehog,hippopotamus,koala,lemur,pig,tiger,whale,zebra'.split(',').map((_val, i) => ({
		  icon: require(`./${_val}.png`),
		  text: _val,
		}));
		const data1 = Array.from(new Array(9)).map(() => ({
		  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
		}));
		const head = this.props.avatar ? (<div className="sub-title">
													<span>已选择头像</span>
													<img style={{ verticalAlign : 'middle' }} src={this.props.avatar.icon} />
												</div>)
									: <div className="sub-title">请选择头像</div>
		return (
			<div>

				{head}
				<Grid data={data}
					isCarousel
				  columnNum={3}
				  onClick={(el, index) => {
				  	this.props.selectAvatar(el, index)
				  }}
				  renderItem={dataItem => (
				    <div style={{ padding: '12.5px' }}>
				      <img src={dataItem.icon} style={{ width: '32px', height: '32px' }} alt="" />
				      <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
				        <span>{dataItem.text}</span>
				      </div>
				    </div>
				  )}
				/>
			</div>
		);
	}
}


