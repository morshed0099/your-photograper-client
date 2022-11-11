

const Comment = ({ cmt }) => {
    const { email, comment, photoURL } = cmt;
    return (
        <div>
            <div className='p-4 bg-transparent shadow-sm-light border-l-rose-400 bg-opacity-5 bg-black m-3 text-white'>
                <img className='rounded-full w-[40px] mx-auto h-[40px]' src={photoURL ?photoURL:'https://th.bing.com/th/id/OIP.OTHx6upJeSBgJT-smbgXUwHaHa?pid=ImgDet&rs=1'} alt="" />
                <p className='text-1xl font-bold'><span className="text-cyan-300">Email</span>: {email}</p>
                <p className='text-1xl font-bold'> Review: {comment}</p>
            </div>
        </div>
    );
};

export default Comment;