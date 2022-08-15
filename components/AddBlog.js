import { useState } from 'react';

const AddBlog = () => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [img, setImg] = useState("")
    const onChange=(e)=>{
        if(e.target.name==="title"){
          setTitle(e.target.value)
        }else if(e.target.name==="desc"){
          setDesc(e.target.value)
        }else if(e.target.name==="img"){
          setImg(e.target.value)
        }
    }
    const onsubmit=async(e)=>{
        e.preventDefault();
        let res = await fetch(`${process.env.URL_PATH}`+'/api/blogs/addBlog',{
          method: 'POST', 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({title,description:desc,img}),
        })  
        let response=await res.json();
        console.log(response )
    }
  return ( <div>
    <div className='md:w-fit my-3 px-5 mx-auto mt-10 ' ><input onChange={onChange} name="title" value={title}  placeholder='Enter the Blog Title' className='text-black border-2 w-full md:w-[800px] mx-auto h-10 px-2' type="text" /></div> 
    <div className='md:w-fit my-3 px-5 mx-auto '><input onChange={onChange} name="img" value={img}  placeholder='Enter Image URL' className='text-black border-2 w-full md:w-[800px] mx-auto h-10 px-2' type="text" /></div> 
    <div className='md:w-fit my-3 px-5 mx-auto h-fit '><textarea onChange={onChange} name="desc" value={desc}  placeholder='Enter the Blog Content' className='text-black border-2 w-full md:w-[800px] mx-auto h-fit px-2' rows={18} type="text" /></div>
    <div className='w-fit my-3  mx-auto  '><button onClick={onsubmit} className="bg-blue-500 text-white mx-auto px-4 py-2 rounded w-fit" >Login</button></div>
  </div>
  )
}

export default AddBlog