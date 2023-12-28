import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import Postlist from './components/Postlist';
import Createpost from './components/Createpost';
import PostListProvider from './store/Contextprovider';

function App() {

  const [selectedtab,setselectedtab] = useState("");


  return (
    <PostListProvider>
      <div className='containers'>
    <Sidebar selectedtab={selectedtab} setselectedtab={setselectedtab}></Sidebar>
     <div className="contents">
     <Header></Header>
     {selectedtab==="POSTS"?<Postlist></Postlist>: <Createpost></Createpost> }
     <Footer></Footer>
    </div>
    </div>
    </PostListProvider>
    
    
  )
}

export default App;
