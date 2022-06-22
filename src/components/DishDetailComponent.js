import React, { Component } from 'react';
import { Card,CardImg,CardText,CardBody,CardTitle } from 'reactstrap';
import dateFormat from 'dateformat';
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    renderComment(comments){
        return(
            comments.map((comment)=>{
                return (
                    <div key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>
                            {comment.author}
                            <br></br>
                            {dateFormat(comment.date,'dd,mm,yyyy')}
                            
                        </p>
                    </div>
                )
            })
        )
    }
    render(){
        if(this.props.dishSelect==null){
        return(
            <div></div>
        )
        }else{
            return(
                
                <div className='row'>
                    <div className='col-6'>
                        <Card>
                        <CardImg width="100%" object src={this.props.dishSelect.image} alt={this.props.dishSelect.name} />
                        <CardBody>
                        <CardTitle >{this.props.dishSelect.name}</CardTitle>
                        <CardText>{this.props.dishSelect.description}</CardText>
                        </CardBody>
                        </Card>
                    </div>
                    <div className='col-6'>
                        <Card>
                            <h4>Comment</h4>
                            <CardBody>
                                {this.renderComment(this.props.dishSelect.comments)}
                            </CardBody>
                        </Card>
                    </div>
                </div>
            )
        }
    }
}

export default DishDetail; 