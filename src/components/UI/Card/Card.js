import classes from './Card.module.css';
const Card = (props)=>{
    return(
        <div className={`${classes.card} ${props.className}`}>

        </div>
    );
};
export default Card;