import React from 'react';
function NewPasswordSuccessful() {
    return (
        <div>
            <div className='max-w-md mx-auto py-8 px-4 bg-white shadow-md rounded-lg'>
                <h2 className='text-4xl font-semibold mb-4 text-center'>Successful</h2>
                <p class="text-gray-400 text-sm font-semibold mb-8 text-center">
                    <span>Congratulation! Your password has been changed.</span>
                    <br />Click continue to log in
                </p>
                <div className='flex items-center justify-center px-10'>
                    <button
                        className='bg-primary-green hover:bg-green-700 text-white border rounded-full w-full h-10'
                        type="submit"
                    > Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
export default NewPasswordSuccessful;