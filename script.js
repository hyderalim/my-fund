
document.querySelector('.payment-methods').addEventListener('change', (event)=>{
    console.log(event.target.attributes.getNamedItem('id').value);
    if(event.target.attributes.getNamedItem('type').value === 'radio'){
        const selectedId = event.target.attributes.getNamedItem('id').value;
        const container = document.getElementById('payment-image-container');
        container.innerHTML = '';

        let imagePath = '';

        switch (selectedId) {
            case 'Sofortuberweisung':
                imagePath = 'Images/Sofortuberweisung.png'
                break;
            case 'Sepa':
                imagePath = 'Images/Sepa.png'
                break;
            case 'CardCollection':
                imagePath = 'Images/CardCollection.png'
                break;
            case 'Ideal':
                imagePath = 'Images/Ideal.png'
                break;
            case 'EPS':
                imagePath = 'Images/EPS.png'
                break;
            case 'paypal':
                imagePath = 'Images/paypal.png'
                break;
            case 'alipay':
                imagePath = 'Images/alipay.png'
                break;
            case 'wechat_pay':
                imagePath = 'Images/wechat_pay.png'
                break;
            case 'klarna':
                imagePath = 'Images/klarna.png'
                break;
            case 'BankTransfer':
                imagePath = 'Images/BankTransfer.png'
                break;
            case 'gocardless':
                imagePath = 'Images/gocardless.png'
                break;
            case 'instantBankPay':
                imagePath = 'Images/instantBankPay.png'
                break;        
            default:
                break;
        }       
      if(imagePath){
        const img = document.createElement('img');
        const span = document.createElement('span');
        span.innerHTML = selectedId;
        img.src = imagePath;
        img.alt = selectedId;
        img.style.maxWidth = '100%';
        img.style.width= '25px';
        img.style.height = 'auto';        
        container.appendChild(img);
        container.appendChild(span);
      }
     
    }
})

document.getElementById('show-btn').addEventListener('click', function() {
        // Hide the button and show the input group
        this.style.display = 'none';
        document.getElementById('apply').style.display = 'flex';
    });
document.getElementById('Sofortuberweisung').checked = true;