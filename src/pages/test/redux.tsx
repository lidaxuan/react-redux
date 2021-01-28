import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { setPageTitle, setInfoList } from '../../store/actions';

function addTwo() {
  return function (target: any, methodName: string, descriptor: PropertyDescriptor) {
    const fun = descriptor.value;
    descriptor.value = async function () {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self: any = this;
      try {
        const data = await fun.apply(self);
      } catch (error) {
        // error
      }
      const num = self.state.num + 2;
      self.setState({
        num
      });
    };
  };
}

function Class() {
  return function (target: any): any {
    return class extends target {
      constructor(...args: any[]) {
        super(...args);
        if (!this.state) {
          this.state = {};
        }
        this.del = this.del.bind(this);
      }
      del() {
        const num = this.state.num - 1;
        this.setState({
          num
        });
      }
      render() {
        return (
          <div>
            <Button className="mr10" onClick={this.add}>加一</Button>
            {this.state.num}
            <Button className="ml10" onClick={this.del}>减一</Button>
          </div>
        );
      }
    };
  };
}


// @Class()
class In extends Component<any, any> {
  
  constructor(props: any) {
    super(props);
    this.state = {
      num: 0,
      pageTitle: ''
    };
    this.add = this.add.bind(this);
  }
  componentDidMount() {
    let { setPageTitle, setInfoList, pageTitle } = this.props;
    console.log(this.props);
    this.props.setPageTitleFn(this.state.num);
    this.setState({
      pageTitle
    })
  }
  // @addTwo()
  add() {
    const num = this.state.num + 1;
    this.setState({
      num
    }, () => {
      this.props.setPageTitleFn(num);
      let { pageTitle } = this.props;
      console.log(this.props);
      this.setState({
        pageTitle
      })
    });
  }
  render() {
    return (
      <div>
        <Button onClick={this.add}>加一</Button>
        <br/>
        {this.state.num}
        <hr/>
        {this.state.pageTitle}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pageTitle: state.pageTitle,
    infoList: state.infoList
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setPageTitleFn (data) {
      // 如果不懂这里的逻辑可查看前面对redux-thunk的介绍
      dispatch(setPageTitle(data))
      
    },
    setInfoList (data) {
      dispatch(setInfoList(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(In)