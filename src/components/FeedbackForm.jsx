import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";


function FeedbackForm({handleAdd}) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState('10')
  const [btnDisable, setBtnDisable] = useState(true)
  const [message, setMessage] = useState('')
  
    
    const handleTextChange = (e) => {
      if (text === '') {
        setBtnDisable(true)
        setMessage(null)
      } else if(text !== '' && text.trim().length <= 10) {
        setBtnDisable(true)
        setMessage('Text must be at least 10 characters')
      } else {
        setBtnDisable(false)
        setMessage(null)
      }
      setText(e.target.value)
    }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedBack = {
        text,
        rating
      }
      handleAdd(newFeedBack)
      setText('')
    }
  }
  
    return (
    <Card>
        <form onSubmit={ handleSubmit }>
            <h2>How would rate your service with us?</h2>
          <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input
                    onChange={handleTextChange}
                    type='text'
                    placeholder="Write a reiew"
                    value={text}
                />
                <Button type="submit" isDisable={btnDisable}>Send</Button>
          </div>
          {message && <div className="message">{ message }</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
