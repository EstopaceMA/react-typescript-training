import React, { Component } from 'react';
import { connect } from 'react-redux';

import { inputHomeForm, clearHomeForm } from '../../../store/home/actions';
import { AppState } from '../../../store';
import { HomeState } from '../../../store/home/types';
import '../../home/home.css';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

interface HomeFormProps {
    inputHomeForm: typeof inputHomeForm;
    clearHomeForm: typeof clearHomeForm;
    home: HomeState;
}

class HomeForm extends Component<HomeFormProps> {

    _onHelloClick = () => {
        const { firstName, lastName } = this.props.home;
        window.alert(`Hello ${firstName} ${lastName}`);
    }

    _onClearFormClick = () => {
        this.props.clearHomeForm();
    }

    _onFormInputChange = (type: string, e: React.ChangeEvent<HTMLInputElement>) => {
        this.props.inputHomeForm(type, e.target.value);
    }

    render() {
        return (
            <div className="home-form-container">
                <div className="home-form-container-fields">
                    <TextField
                        label="First name" 
                        variant="filled"
                        className="form-input" 
                        type="text" 
                        placeholder="Enter first name"
                        onChange={this._onFormInputChange.bind(this, 'firstName')}
                        value={this.props.home.firstName} 
                    />
                    <TextField 
                        label="Last name" 
                        variant="filled"
                        className="form-input" 
                        type="text" 
                        placeholder="Enter last name"
                        onChange={this._onFormInputChange.bind(this, 'lastName')} 
                        value={this.props.home.lastName}
                    />
                </div>
                <div className="home-form-container-fields">
                    <Button 
                        variant="contained" color="primary"
                        className="form-input"
                        onClick={this._onHelloClick.bind(this)}
                    >
                        Say Hello
                    </Button>
                    <Button
                        variant="contained" color="secondary"
                        className="form-input"
                        onClick={this._onClearFormClick}
                    >
                        Clear
                    </Button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    home: state.home
});

export default connect(mapStateToProps, {
    inputHomeForm,
    clearHomeForm
})(HomeForm);