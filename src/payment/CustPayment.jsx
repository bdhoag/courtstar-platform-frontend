import InputText from '../components/InputText';
import PopupModal from '../components/PopupModal';
import PayPal from '../assets/images/PayPal-QR-code.png';

function CustPayment(props) {

    //CLOSE LOGIN MODAL
    const handleClose = () => {
        props.setIsOpen();
    }

    const html = (
        <div className="w-[440px]">
            <h2 className="text-4xl font-semibold mb-5 text-center">Manager Payment</h2>
            <div>
                <div className="mb-4">
                    <InputText
                        id="Account Number"
                        name="Account Number"
                        placeholder="Account Number of Manager"
                        label="Account Number"
                    />
                </div>
                <div className="mb-0">
                    <InputText
                        id="Account Holder"
                        name="Account Holder"
                        placeholder="Account Holder of Centre"
                        label="Account Holder"
                    />
                </div>
                <div>
                    <img src={PayPal}
                        alt="QR paypal"
                        className='h-auto max-w-lg mx-auto'
                    />
                </div>

                <div className='flex items-center justify-center'>
                    <button className='bg-primary-green w-full rounded-full py-3 text-white hover:bg-teal-900 transition-all duration-300 ease-in-out font-medium'
                        onClick={props.login}
                    >
                        Confirm
                    </button>
                </div>
                <div className='flex justify-center mt-4 '>

                </div>
            </div>
        </div>
    );

    return (
        <div>
            <PopupModal
                html={html}
                isOpen={props.isOpen}
                setIsOpen={handleClose}
            />
        </div>
    );
}

export default CustPayment;