import React, {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import styled  from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from "../Responsive";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from "../data";
import './Navbar.css';
import { IconContext } from 'react-icons';
import { useDispatch,useSelector } from "react-redux";
import { userLogout } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";


const  Container = styled.div`
    z-index:999;
    height: 60px;
    ${mobile({
        height: "50px"
        
    })};
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({
        padding: "10px 0",
        
    })};
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
`;
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})};
`;
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display: flex;
    align-items: center;
    margin-Left: 25px;
    padding: 5px;
    ${mobile({
        marginLeft: "5px",
    
    })};
`;

const SearchResult = styled.div`
    position:absolute;
    margin: 5px 97px;
    display:inline-block;
    border-radius: 5px;
    width: 150px;
    height: 150px;
    text-align:center;
    background-color: teal;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    overflow: hidden;
    overflow-y: auto;
    z-index:999;
    ${mobile({
        fontSize:'12px', 
        margin: '5px 0px',
        width: '100px',
        height: '100px',
    })};
`;

const DataItem = styled.div`
    z-index:999;
    padding: 5px 0;
    width: 100%;
    height: 30px;
    align-items: center;
    color: black;
`;

const Input=styled.input`
    border: none;
    ${mobile({width: "50px"})};
`;

const Center = styled.div`
    flex: 1;
    text-align: center;
    color: black;
    
`;
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({
        fontSize: "20px",
        marginLeft: "15px",
        
    })};
`;

const Image = styled.img`
    height: 30px;
    width:30px;
    display: inline-block;
    ${mobile({
        height: "18px", 
        width: "18px", 
        display: "flex", 
        position: "absolute",
        margin: "4px -8px"
    })};
   
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({
        justifyContent: "center",
        flex: 1.5
    })};
`;
const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({
        fontSize: "10px",
        marginLeft: "10px",
        
    })};
`;

const Navbar = ({data}) => {
    //CART QUANTITY FROM REDUX
    const quantity = useSelector(state => state.cart.quantity)
    // console.log(quantity);

    //SIDEBAR
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
   //SIDEBAR END

    //SEARCH FILTER
    const [filteredData,setFilteredData] = useState([]);
    const [wordEntered, setWordEntered]  = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);

        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord===""){
            setFilteredData([]);
        }
        else
        {
            setFilteredData(newFilter);
        }
    };

     const clearInput = ()=>{
        setFilteredData([]);
        setWordEntered("");
    }   
    //SEARCH FILTER END

    const userLogin = useSelector((state)=>state.user.currentUser);
    console.log(userLogin);


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = ()=>{
        userLogout(dispatch);
        navigate("/");
    }
    


    return (
        <Container>
            <Wrapper>
                
                <Left>
                    <Language>

                         <IconContext.Provider value={{ color: '#fff' }}>
                        <div className='navbar'>
                            <Link to='#' className='menu-bars'>
                                <FaIcons.FaBars style={{color:"teal"}} onClick={showSidebar} />
                            </Link>
                        </div>
                        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className='nav-menu-items' onClick={showSidebar}>
                            <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                                <AiIcons.AiOutlineClose />
                            </Link>
                            </li>
                            {SidebarData.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className="span">{item.title}</span>
                                    </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        </nav>
                    </IconContext.Provider>
                    
                    
                    </Language>
                    <SearchContainer> 
                        <Input
                            type="text" 
                            placeholder="Search"
                            value={wordEntered}
                            onChange={handleFilter}    
                        />

                        {filteredData.length ===0 ? 
                           (<SearchIcon style={{color: "grey", fontSize: 16}}/>) 
                           : (<CloseIcon style={{color: "grey", fontSize: 16}} onClick= {clearInput}/>)
                        }
                    </SearchContainer>
                </Left>  
                   

                <Center>
                    <Logo>
                        <Image 
                            src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-leaf-autumn-flatart-icons-flat-flatarticons.png"/> 
                              <Link to="/" style={{ color: '#000' }}>EcoFlex.</Link> 
                    </Logo>
                </Center>  
                
                <Right>
                    {userLogin!==null? 
                        <MenuItem style={{ color: '#000',fontWeight:"600" }} onClick={handleLogout}> 
                                LOGOUT
                        </MenuItem>
                    :
                         <>
                        <MenuItem > 
                            <Link  to="/register" style={{ color: '#000',fontWeight:"600" }}>
                                REGISTER
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/login" style={{ color: '#000',fontWeight:"600" }}>
                                SIGN IN
                            </Link>
                        </MenuItem>
                         </>
                    }
                   
                    <Link to ="/cart">
                        <MenuItem >
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlinedIcon/>
                            </Badge>
                        </MenuItem>
                    </Link>
                </Right>  
            </Wrapper>  

            {/* SEARCH RESULTS HERE DUE TO CSS */}
                    {filteredData.length !== 0 && (
                        <SearchResult>
                        {filteredData.slice(0,3).map((value, key) => {
                            return (
                            <DataItem key={key}>
                            <Link to={value.link} style={{color: "#FFF",zIndex: "999"}}><p>{value.title}</p></Link>
                            </DataItem>
                            );
                        })}
                        </SearchResult>
                    )}
        </Container>
    )
}

export default Navbar;
