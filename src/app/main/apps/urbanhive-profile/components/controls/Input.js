import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

    const { name, label, value,error=null, onChange, rows, maxRows } = props;
    return (
        <TextField
           style={{minWidth: 250}}
            variant="outlined"
            label={label}
            name={name}
            value={value}
            multiline
            rows={rows}
            maxRows={maxRows}
            onChange={onChange}
            {...(error && {error:true,helperText:error})}
        />
    )
}
