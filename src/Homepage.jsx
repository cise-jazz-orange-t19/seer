import React from 'react';
import { Input, DatePicker, Space, Cascader, Button } from 'antd';
import './App.css';
export default class Homepage extends React.Component {

    constructor(props)
    {
        super(props);
        this.state={
        numOfInput: [<Input placeholder="enter a value" style={{ width: 150 }} />,

        ],
        }
    }
    addInput=()=>{
        const lists=this.state.numOfInput;

       lists.push(<Input placeholder="enter a value" style={{ width: 150 }} />)

       this.setState({numOfInput:lists})



    }
    render() {
        const { Search } = Input;
        const { RangePicker } = DatePicker;
        const options = [
            {
                value: 'one',
                label: 'one',
                children: [
                    {
                        value: 'one.opne',
                        label: 'one.opne',

                    },
                ],
            },
            {
                value: 'two',
                label: 'two',
                children: [
                    {
                        value: 'two.two',
                        label: 'two.two',

                    },
                ],
            },
        ];

        function onChange(value) {
            console.log(value);
        }

        return (
            <div>
                <div className="bodyy">
                    <div>Description</div>
                    <div>
                        <Search className="search"
                            placeholder="input search text"
                            enterButton="Search"
                            size="middle"
                            onSearch={value => console.log(value)}
                            style={{ width: 600 }}
                        />
                    </div>

                    <div className="datePicker">
                        <Space direction="vertical" size={12}>
                            <RangePicker style={{ width: 600 }} />

                        </Space>
                    </div>
                    <div className="conditon">
                        <div className="field">
                            <div>
                                field
                    </div>
                            <div>
                                <Cascader options={options} onChange={onChange} placeholder="Please select a field" />
                            </div>
                        </div>
                        <div className="operator">
                            <div>
                                operator
                        </div>
                            <div>
                                <Cascader style={{ width: 180 }} options={options} onChange={onChange} placeholder="Please select an operator" />
                            </div>
                        </div>
                        <div className="valuee">
                            <div>value</div>
                            {this.state.numOfInput.map((item,index)=>{
                                return item
                            })}
                            <div className="buttonn">
                            <Button shape="circle" onClick={this.addInput}>
                            +
                            </Button>
                            </div>

                        </div>


                    </div>
                </div>



            </div>
        )
    }
}
