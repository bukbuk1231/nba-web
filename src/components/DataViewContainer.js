import React from 'react';
import { ShotChart } from './ShotChart';
import { CountSlider} from "./CountSlider"
import { Radio, Row, Col, Switch } from 'antd';
import _ from 'lodash';

const RadioGroup = Radio.Group;

export class DataViewContainer extends React.Component {
    state = {
        minCount: 2,
        chartType: 'hexbin',
        displayTooltip: true,
    }

    onCountSliderChange = (count) => {
        this.setState({ minCount: count });
    }

    onChartTypeChange = (e) => {
        this.setState({ chartType: e.target.value})
    }

    onTooltipChangeHandler = (displayTooltip) => {
        this.setState({ displayTooltip })
    }

    render() {
        return (
            <div className="data-view">
                <ShotChart
                    playerId={ this.props.playerId }
                    minCount={ this.state.minCount }
                    chartType={ this.state.chartType }
                    displayTooltip={ this.state.displayTooltip }
                />
                <div className="filters">
                    {this.state.chartType === "hexbin" ?
                        <CountSlider onCountSliderChange={_.debounce(this.onCountSliderChange, 500) }/>
                        : null}
                    <br/>
                    <Row>
                        <Col span={12} offset={2}>
                            <RadioGroup onChange={this.onChartTypeChange} value={this.state.chartType}>
                                <Radio value="hexbin">Hexibin</Radio>
                                <Radio value="scatter">Scatter</Radio>
                            </RadioGroup>
                        </Col>
                        <Col span={6}>
                            Tooltip:{' '}
                            <Switch
                                checkedChildren="On"
                                unCheckedChildren="Off"
                                defaultChecked
                                onChange={ this.onTooltipChangeHandler }
                            />
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}