import React from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

export class CountSlider extends React.Component {
    state = {
        inputValue: 2,
    }
    onChange = (value) => {
        const isNum = Number(value);
        value = isNum || 2;
        this.setState({
            inputValue: value,
        });
        // call functions passed from DataViewContainer by setting function to CountSlider's props
        if (isNum) {
            this.props.onCountSliderChange(value);
        }
    }
    render() {
        return (
            <Row>
                <Col span={12} offset={4}>
                    <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
                </Col>
                <Col span={4}>
                    <InputNumber
                        min={1}
                        max={20}
                        style={{ marginLeft: 16 }}
                        value={this.state.inputValue}
                        onChange={this.onChange}
                    />
                </Col>
            </Row>
        );
    }
}