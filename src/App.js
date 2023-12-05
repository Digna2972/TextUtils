
import { useState } from 'react';
import './App.css';
//import About from './componenet/About';
import Navbar from './componenet/Navbar';
import Textform from './componenet/Textform';
//import Alert from './componenet/Alert';



function App() {
  const [mode, setMode]=useState('light'); //weaher dark mode is enable or not
    const toggleMode =()=>{
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>

<Navbar title="TextUtils" abouText="About Textutils" mode={mode} toggleMode={toggleMode} />
{/*<Navbar title="TextUtils"  />*/}
{/*<Alert alert="This is alert"/>*/}
<div className='container' my-3>
<Textform heading="Enter Text analysis" mode={mode}/>
{/*<About/>*/}

</div>



    </>
    
  );
}

export default App;
