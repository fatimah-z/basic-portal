import React,{ useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { json } from 'react-router-dom';

function StudentsAdd(){
  const [form] = Form.useForm();
  const [name,setname] = useState();
  const[reg,setreg] = useState();
  const[ph,setph]= useState();
  const submit=()=>{
    //e.preventDefault()
    console.log('here');
    fetch('http://localhost:3000/admin/addstudent',{method:'POST', mode:'cors',body:{name:name,rollNo:reg}})
  }
  return (
    <div style={{
      padding:'20px',
      alignItems:'center'
    }}>

    <Form
      
      layout={'vertical'}
      style={{
        padding:'15px',
        alignContent:'center'
      }}
      form={form}
      onFinish={submit}
      
    >
      {/* <Form.Item label="Form Layout" name="layout">
        <Radio.Group value={formLayout}>
          <Radio.Button value="horizontal">Horizontal</Radio.Button>
          <Radio.Button value="vertical">Vertical</Radio.Button>
          <Radio.Button value="inline">Inline</Radio.Button>
        </Radio.Group>
      </Form.Item> */}
      <Form.Item label="Name" style={{width:'30pc'}}>
        <Input placeholder="Name"va onChange={(val)=>setname(val)} name='name' />
      </Form.Item>
      <Form.Item label="Registration Number" style={{width:'30pc'}}>
        <Input placeholder="Registration Number" onChange={(val)=>setreg(val)}  name='Registration Number'/>
      </Form.Item>
      <Form.Item label="Phone Number" style={{width:'30pc'}}>
        <Input placeholder="Phone Number" onChange={(val)=>setph(val)} name='Phone Number' />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form>
    </div>
  )
}
export default StudentsAdd;