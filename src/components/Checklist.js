import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Checkbox color="default" {...props} />);



export default function FormControlLabelPosition() {
    return (
        <div>
            <FormControl component="fieldset">
                <FormLabel component="legend">Groceries</FormLabel>
                <FormGroup aria-label="position" column>
                    <FormControlLabel
                        value="start"
                        control={<Checkbox color="primary"/>}
                        label="Pizza"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="start"
                        control={<Checkbox color="primary"/>}
                        label="Cereal"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="start"
                        control={<Checkbox color="primary"/>}
                        label="Cheese"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        value="start"
                        control={<GreenCheckbox/>}
                        label="CINNAMON ROLLS!"
                        labelPlacement="start"
                    />

                </FormGroup>
            </FormControl>
        </div>
    );
}


