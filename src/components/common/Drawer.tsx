import { Component } from 'react';
import { connect } from 'react-redux';

import { setActiveForm } from '../../store/drawer/actions';
import { AppState } from '../../store';
import { DrawerState } from '../../store/drawer/types';
import './drawer.css';

import Button from '@material-ui/core/Button';

interface DrawerProps {
    setActiveForm: typeof setActiveForm;
    drawer: DrawerState;
}

class Drawer extends Component<DrawerProps> {

    _onDrawerClick = (type: string) => {
        this.props.setActiveForm("activeForm", type);
    }

    render() {
        return (
            <div className="drawer">
                <Button value="Home" 
                    style={{backgroundColor: (this.props.drawer.activeForm === 'Home') ? 'brown' : ''}}
                    onClick={this._onDrawerClick.bind(this, 'Home')} 
                >
                    Home
                </Button>
                <Button value="Customers"
                    style={{backgroundColor: (this.props.drawer.activeForm === 'Customers') ? 'brown' : ''}}
                    onClick={this._onDrawerClick.bind(this, 'Customers')}
                >
                    Customers
                </Button>
                <Button value="Settings"
                    style={{backgroundColor: (this.props.drawer.activeForm === 'Settings') ? 'brown' : ''}}
                    onClick={this._onDrawerClick.bind(this, 'Settings')}
                >
                    Settings
                </Button>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    drawer: state.drawer
});

export default connect(mapStateToProps, {
    setActiveForm
})(Drawer);