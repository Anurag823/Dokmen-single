import React, {useState} from 'react';
import '../Styles/ShopFloat.css'

const ShopButton = () =>{

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

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	

    <a href='http://dokmen.herokuapp.com' id='shopBtn' target="_blank" rel='noreferrer' style={{display:visible?'inline':'none'}} onClick={scrollToTop} >
<img src="Images/Icons/cart.png" alt="" />
    </a>
);
}

export default ShopButton;