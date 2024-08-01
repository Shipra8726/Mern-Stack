'use client';
import React,{useState} from 'react'

const TodoList = () => {
  const[ count, setCount ]=useState(0);

  const [taskList, settaskList] = useState([ 
    { text : 'Ghar ki safai', completed : false, added: new Date()},
    { text : 'Pdhai', completed : false, added: new Date()},
    { text : 'Sona', completed : false, added: new Date()},
    { text : 'Khana', completed : false, added: new Date()},
    { text : 'Ghar ki safai', completed : false, added: new Date()},
    { text : 'Pdhai', completed : false, added: new Date()},
    { text : 'Sona', completed : false, added: new Date()},
    { text : 'Khana', completed : false, added: new Date()},
  ]);
  

const addTask = (e) => {
    console.log(e.code);


    if(e.code === 'Enter'){
        console.log(e.target.value);
        e,target.value = '';
    }
}


  return (
    <div className='max-w-5xl mx-auto mt-6'>
<div className='border shadow rounded-3xl'>
    <div className='p-4 border-b-2'>
        <input
        onKeyDown={addTask}
        placeholder='Add a new task'
        type="text"
          className='w-full px-3  bg-gray-300 rounded-xl outline-none'/>

    </div>
<div className='p-6'>
{/* <h1 className='text-3xl text-red-500'>{count}</h1>
<button className='bg-gray-300 p-4'
onClick={() => {setCount(count+1); console.log(count);}}
>Add Count</button> */}
{
taskList.map(( task, index) => { return (
<div key={index} className='rounded-md border mb-5 shadow p-4-bg-gray-100'>
    <p>{task.text}</p>
    <div className='mt-2 flex justify-end gap-4'>
        <button className='bg-blue-500 text-white px-3 py-1 rounded-full'>Complete</button>
        <button className='bg-red-500 text-white px-3 py-1 rounded-full'>Delete</button>
    </div>
</div>

)})

}
</div>


</div>
    </div>
  )
}

export default TodoList;