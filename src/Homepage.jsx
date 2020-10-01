import React from 'react';
import { Input, DatePicker, Space, Cascader, Button } from 'antd';
import './style.css';
export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numOfInput: [<Input placeholder="enter a value" style={{ width: 150 }} />,

            ],
            inputValue: '',
            bookList: [],
            book: [{
                article: 'Aniche:er',
                author: 'Aniche, M F and Testing, MA Gerosa Software and {Verification} and {and} and {2010}',
                title: 'Most common mistakes in test-driven development practice: Results from an online survey with developers',
                journal: 'ieeexplore.ieee.org',

            },
            {
                article: 'Janzen:2008fx,',
                author: 'Janzen, D S} and {Saiedian, H',
                title: 'Does Test-Driven Development Really Improve Software Design Quality?',
                journal: 'Software, IEEE',
            },
            {
                article: '2019arXiv190712290R',
                author: 'Romano, Simone and Fucci, Davide and Baldassarre, Maria Teresa and Caivano, Danilo and Scanniello, Giuseppe',
                title: 'An Empirical Assessment on Affective Reactions of Novice Developers when Applying Test-Driven Development',
                journal: 'arXiv.org',
            },
            {
                article: '2020arXiv200407524R',
                author: 'Romano, Simone and Scanniello, Giuseppe and Baldassarre, Maria Teresa and Fucci, Davide and Caivano, Danilo',
                title: 'Results from a replicated experiment on the affective reactions of novice developers when applying test-driven development',
                journal: 'arXiv.org',
            }]
        }
    }
    addInput = () => {
        const lists = this.state.numOfInput;

        lists.push(<Input placeholder="enter a value" style={{ width: 150 }} />)

        this.setState({ numOfInput: lists })



    }
    searchsome = (value, e) => {
        let list=[]
        this.setState({
            bookList:[]
        })
        this.state.book.forEach(element => {
            if (element.article.search(value) !== -1 || element.author.search(value) !== -1
                || element.title.search(value) !== -1 || element.journal.search(value) !== -1) {
                    list.push(element)
                this.setState({
                    bookList: list
                })
            }
        })





    }
    render() {
       console.log(this.state.bookList)
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
        console.log(this.state.bookList)
        let list=this.state.bookList.map((item,index)=>{
        return <li>{item.author}{item.article}</li>
        })
        
        return (
            <div>
                <div className="bodyy">
                    <div>Description</div>
                    <div>
                        <Search className="search"
                            placeholder="input search text"
                            enterButton="Search"
                            size="middle"

                            // onSearch={value => {
                            //     this.state.book.forEach(element => {
                            //         if (element.article.search(value) !== -1||element.author.search(value)!==-1
                            //         ||element.title.search(value)!==-1||element.journal.search(value)!==-1) {
                            //             this.setState({
                            //                 bookList: this.state.bookList.push(element)
                            //             })
                            //         }

                            //     });
                            // }}
                            onSearch={this.searchsome}
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
                            {this.state.numOfInput.map((item, index) => {
                                return item
                            })}
                            <div className="buttonn">
                                <Button shape="circle" onClick={this.addInput}>
                                    +
                            </Button>
                            </div>

                            <div>
                                search result:
                                   {
                                      this.state.bookList.length===0?'no result':list
                                }
                            </div>

                        </div>


                    </div>
                </div>



            </div>
        )
    }
}