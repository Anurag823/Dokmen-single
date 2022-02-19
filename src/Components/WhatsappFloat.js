import React, {useState} from 'react';
import '../Styles/FloatWhatsapp.css'

const WhatsappFloat = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};



window.addEventListener('scroll', toggleVisible);

return (
	


 <a href="https://api.whatsapp.com/send?phone=+919820043813&text=Hi, I want to place my order at Dokmen" target="_blank" rel='noreferrer' style={{display :visible?'inline':'none'}} id='whatsappBtn'>
<img src="Images/Icons/whatsapp.png" alt='whatsapp'/>
</a> 
);
}

export default WhatsappFloat;
