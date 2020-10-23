import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import {CheckCircleOutline} from "@material-ui/icons";
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
                        control={<Checkbox icon={<CheckCircleOutlineIcon/>} checkedIcon={<CheckCircleOutline/>} />}
                        label="CINNAMON ROLLS!" labelPlacement="start"
                    />

                </FormGroup>
            </FormControl>
        </div>
    );
}


