import React from 'react';

type Props = {
  addTodo: string,
  setAddTodo: React.Dispatch<React.SetStateAction<string>>,
  addText: () => void
}

const AddTask: React.FC<Props> = ({ addTodo, setAddTodo, addText }) => {
  
  
  return (
    <div className='addTask'>
      <input 
        type="text"  
        placeholder='Write Your Task Here...'
        className='addTask-input'
        value={addTodo}
        onChange={(e) => setAddTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addText();
          }
        }}
      />
      {/*<button className='addTask-button' onClick={() => addText()}>Add</button>*/}
    </div>
  )
}

export default AddTask;

