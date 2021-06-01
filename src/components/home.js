import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import  React, { useState, useEffect } from "react";
import Model from '../model/model';
import Footer from '../components/footer';

function Home() {
    const [open, setOpen] = useState(false);
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [type,setType] = useState('edit');
    const [data,setData] = useState([]);
    const [id,setId] = useState();

    const handleClickOpen = (event) => {
        setTitle(event.title);
        setDescription(event.description);
        setId(event.id);
        setType('edit');
        setOpen(true);
    };

    const handleClose = (value) => {
        if (value.type == "add") {
            value.id = data.length;
            setData([...data,{
                id : data.length,
                title : value.title,
                description : value.description,
                type : 'add'
            }])
        } else if (value.type == "edit") {
            data[value.id] = value;
            setData(data)
        }
        setOpen(false);
    };
    const handleClickDelete = (value)=> {
        let arr = [];
        data.map(data=>{
            if(value.id !== data.id) {
                arr.push(data);
            }
        })
        setData(arr);
    }
  return (
    <div className="s-to-do-home">
        {data.map(row=>{
           return (<Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography > {row.title}</Typography>
                    <DeleteIcon onClick={()=>handleClickDelete(row)}/>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>{row.description}</Typography>
                    <EditIcon onClick={()=>handleClickOpen(row)} />
                </AccordionDetails>
            </Accordion>)
            
        })}
        
       
        
        <Model close={handleClose} open={open} title={title} description={description} id={id} type={type}/>
        <Footer close={handleClose}/>
    </div>
  );
}

export default Home;
