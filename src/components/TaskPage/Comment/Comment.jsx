import classes from './Comment.module.css';

const Comment = (props) => {
    return (
        <div className={classes.comment}>
            <div className={classes.whoAuthorComment}>
                <div className={classes.author}>{props.authorComment}</div>
                <div className={classes.dateAdd}>{props.dateAdd}</div>
            </div>
            <div className={classes.textComment}>{props.textComment}</div>
        </div>
    )
}

export default Comment;