import React from 'react';
import {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        maxWidth: 752,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));


export default function InteractiveList({getTodos}) {
    const history = useHistory()
    const classes = useStyles();
    const [dense, setDense] = React.useState(false);
    const [items, setItems] = useState([])

    useEffect(() => {
        getTodos()                  /* Se hace asi? */
            .then(res=>{
                console.log(res)
                setItems(res.data)
            })
            .catch(err=>{
                console.log(err)
            })

    },[])
    const goToCustomForm = (todoIndex) => {
        console.log(todoIndex)
        history.push(`todo/${todoIndex}`)
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" className={classes.title}>
                        Todos
                    </Typography>
                    <div className={classes.demo}>
                        <List dense={dense}>
                            {items!=null && items.map((todo,index) => (
                                <ListItem>
                                    <span>{todo.content}</span>
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete" onClick={()=>goToCustomForm(index)}>
                                            <EditIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}