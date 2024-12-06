import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Category = ({name}) => {

    const navigate = useNavigate();

    return ( 
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <Button><h2 onClick={() => {
            localStorage.setItem('name', name)
            navigate('/form')
        }}>{name}</h2></Button>
    </div>
    )
};

export default Category;