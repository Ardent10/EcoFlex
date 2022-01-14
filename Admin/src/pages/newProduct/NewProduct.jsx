import { useState } from "react";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addProducts } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import app from "../../firebase";
import "./newProduct.css";

export default function NewProduct() {

  const [inputs,setInputs] = useState({});
  const [file,setFile] = useState(null);
  const [cat,setCat] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e)=>{
    setInputs(prev=>{
      return { ...prev, [e.target.name]: e.target.value}
    })
  }
  const handleCat = (e)=>{
    setCat(e.target.value.split(","));
  }

  // console.log(inputs);
  // console.log(cat);

  //sending data to DB
  const handleClick = (e)=>{
    e.preventDefault();
    //FIREBASE Project for temporary data storage
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    //FIREBASE CODE
    uploadTask.on('state_changed', (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
        default:
    }
  }, 
  (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, 
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        const product = { ...inputs, img: downloadURL, categories: cat };
        addProducts(product, dispatch);
        console.log('File available at', downloadURL);
    });
  }
);

  }

  console.log(file);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">

        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
        </div>
      
        <div className="addProductItem">
          <label>Title</label>
          <input name="title" type="text" placeholder="eg: Apple Airpods" onChange={handleChange}/>
        </div>
      
        <div className="addProductItem">
          <label>Description</label>
          <input name="desc" type="text" placeholder="eg: Comfortable to ears" onChange={handleChange}/>
        </div>
      
        <div className="addProductItem">
          <label>Price</label>
          <input name="price" type="number" placeholder="eg: 7000" onChange={handleChange}/>
        </div>
      
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="Unisex, Electronics"  onChange={handleCat}/>
        </div>
      
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
             <option value="true">Yes</option>
             <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleClick}>Create</button>
      
      </form>
    </div>
  );
}
