import React, { Componetnt } from 'react';

class MenuButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var containerClasses = ["container"];
        if (!this.props.state) {
            containerClasses.push("close")
        }
        return (
            // <div className="float-right">
            // </div>
            <span className={containerClasses.join(' '), `menu`}>
                <div className={"bar1"}></div>
                <div className={"bar2"}></div>
                <div className={"bar2"}></div>
            </span>
        );
    }
}


class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    };
    ChangeNav = () => {
        this.setState(
            (prevState) => ({ open: !prevState.open })
        )
    };
    render() {
        var containerClasses = [];
        if (this.state.open) {
            containerClasses.push("open")
        }
        return (
            <div className={containerClasses.join(' ')}>
                <div className={"menubutton"} onClick={() => this.ChangeNav()}><MenuButton state={!this.state.open} /></div>
                <div className={`sidenav`}>
                    <a className="text-white">link1</a>
                    <a className="text-white">link2</a>
                    <a className="text-white">link3</a>
                    <a className="text-white">link4</a>
                    <a className="text-white">link5</a>
                </div>
            </div>
        );
    }
}

export default SideNav;