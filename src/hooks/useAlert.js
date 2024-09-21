import {useState} from 'react'

const useAlert = () => {

    const [alert, setalert] = useState({show:false, text: '', type: 'danger'});

    const showAlert = ({text, type='danger'}) => setalert({
        show:true,
        type,
        text
    });

    const hideAlert = () => setalert({
        show:false,
        type:'',
        text:'danger'
    });

  return {alert, showAlert, hideAlert}
}

export default useAlert