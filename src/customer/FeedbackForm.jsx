// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import centre from '../assets/images/demo-centre.png'
import Rating from '../components/Rating';
import React from 'react';
import PopupModal from '../components/PopupModal';

function FeedbackForm(props) {

    //CLOSE ADD 
    const handleClose = () => {
        props.setIsOpen();
    }
    const html = (
        <div className='w-[28rem] mx-auto'>
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-3 text-center">Rate us!</h2>
                <p class="text-gray-600 text-sm mb-3 text-center">
                    Your feedback is useful for us to understand your needs, <br />so we can customize our services to suit you perfectly.
                </p>
                <div class="mb-3">
                    <p class="text-gray-700 font-semibold text-center">How would your rate our centre?</p>
                </div>
                <div>
                    <img src={centre}
                        alt="demo centre"
                        className='w-3/5 mx-auto mb-1'
                    />
                    <h3 className='text-center font-semibold text-lg mb-2'>Sân cầu lông Đại học FPT Hồ Chí Minh</h3>
                </div>
                <div className='flex justify-center mb-2'>
                    <Rating
                        ratingWrapper='flex gap-1'
                        value={0}
                        editable={true}
                    />
                </div>
                <div class="mb-3">
                    <label class="block text-gray-700 font-bold mb-2" for="comment">
                        Add a comment...
                    </label>
                    {/* <CKEditor
                    editor={ClassicEditor}
                    data=""

                /> */}
                    <textarea
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="comment"
                        rows="3"
                        placeholder="Enter your comment here..."
                    ></textarea>

                </div>
                <div class="flex justify-center">
                    <button
                        class="bg-primary-green hover:bg-teal-900 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Send now
                    </button>
                </div>
            </div>
        </div>
    )
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
export default FeedbackForm;
