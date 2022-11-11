

const Comment = ({ cmt }) => {
    const { email, comment, photoURL } = cmt;
    return (
        <div>
            <div className='p-4 shadow-md rounded-md m-3 text-black'>
                <img className='rounded-full w-[40px] mx-auto h-[40px]' src={photoURL ?photoURL:'https://th.bing.com/th/id/OIP.OTHx6upJeSBgJT-smbgXUwHaHa?pid=ImgDet&rs=1'} alt="" />
                <p className='text-1xl font-bold'><span className="text-cyan-700">Email</span>: {email}</p>
                <p className='text-1xl font-bold'><span className="text-cyan-700">Review</span> : {comment}</p>
            </div>
        </div>
    );
};

export default Comment;