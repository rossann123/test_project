import React from 'react';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class SimpleFormExample extends React.Component {
    state = {
        formData: {
            name: '',
            age: '',
        },
        submitted: false,
    }

    handleChange = (event) => {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}
            >
                <h2>User Information Form</h2>
                <TextValidator
                    label="Name"
                    onChange={this.handleChange}
                    name="name"
                    value={formData.name}
                    validators={['matchRegexp:^[A-Za-z]{2,}$', 'required']}
                    errorMessages={['Enter more characters. No numbers']}
                />
                <br />
                <TextValidator
                    label="Age"
                    onChange={this.handleChange}
                    name="age"
                    value={formData.age}
                    validators={['minNumber:10', 'required']}
                    errorMessages={['Must be a number and greater than 10']}
                />
                <br />
                <Button
                    color="secondary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && "You've successfully submitted!")
                        || (!submitted && 'Submit')
                    }
                </Button>
            </ValidatorForm>
        );
    }
}