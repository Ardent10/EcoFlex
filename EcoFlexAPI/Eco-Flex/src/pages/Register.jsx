import React,{useState} from 'react';
import styled from "styled-components";
import {mobile} from "../Responsive";
import { useDispatch} from 'react-redux';
import { userRegister } from '../redux/apiCalls';
import Navbar from '../components/Navbar';
import { searchLinks } from '../data';


const Main = styled.div`
    overflow-x:hidden;
    overflow-y:hidden;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
                    rgba(255,255,255,0.5),
                    rgba(255,255,255,0.5)
                ), 
                url("https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    border-radius:5px;
    background-color: white;
    ${mobile({
        width: "60%"
        
    })};
`;
const Title = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 300;
    ${mobile({
        fontSize: "18px",
        marginBottom: "5px",
        
    })};

`;
const Form = styled.form`
    display: felx;
    flex-wrap: wrap;
`;
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0;
    padding: 10px;
    ${mobile({
        margin: "10px 0 0 23px",
        
    })};

`;
const Agreement = styled.span`
    font-size: 15px;
    margin: 300px;
    ${mobile({
        margin: "200px",
        fontSize: "12px"
        
    })};
`;
const Button = styled.button`
    width: 40%;
    border: none;
    border-radius:10px;
    padding: 15px 20px;
    margin: 15px 28%;    
    background-color: teal;
    color: white;
    cursor:  pointer;
`;

const Register = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // let errorsObj = {username:"",email:"",password:""}
    // const [errors,setErrors] = useState(errorsObj);
    

    const dispatch = useDispatch();

    // const handleRegister = (e)=>{
    //     e.preventDefault();
    //     // register(dispatch, {username,password});
    // }

    // function onRegister(e){
    //     e.preventDefault();
    //     let error = false;
    //     const errorObj = {...errorsObj};

    //     if(username===""){
    //         errorObj.username = "Username is Required";
    //         error=true;
    //     }
    //     if(email===""){
    //         errorObj.email = "Email is Required";
    //         error=true;
    //     }
    //     if(password===""){
    //         errorObj.password = "Password is Required";
    //         error=true;
    //     }
    //     setErrors(errorObj);

    //     if(!error){
    //        console.log("Registered!"); 
    //     }
    // }

    const onRegister = (e)=>{
        e.preventDefault();
        userRegister(dispatch, {username,email,password});
    }



    return (
        <Main>

            <Navbar data= {searchLinks}/>
        <Container>
            <Wrapper>

                <Title><b>CREATE AN ACCOUNT</b></Title>
                <Form onSubmit={onRegister}>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input 
                        placeholder="Username" 
                        value={username}
                        required
                        minLength="3"
                        maxLength="10"
                        onChange={(e)=>setUsername(e.target.value)}/>
                    {/* {errors.username && <div>{errors.username}</div>} */}
                    <Input 
                        required
                        value={email}
                        placeholder="Email"
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    {/* {errors.email && <div>{errors.email}</div>} */}
                    <Input 
                        required
                        placeholder="Password" type="password"/>
                    <Input 
                        required
                        placeholder="Confirm Password" type="password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}/>
                    {/* {errors.password && <div>{errors.password}</div>} */}
                    <Agreement>
                        <br/>By creating an account, I consent to the processing 
                        of my personal data in accordance with the <b>PRIVACY POLICY</b><br/>
                    </Agreement>
                    <Button 
                        // onClick={handleRegister}
                    >CREATE</Button>
                </Form>

            </Wrapper>
        </Container>
        </Main>
    )
}

export default Register;
