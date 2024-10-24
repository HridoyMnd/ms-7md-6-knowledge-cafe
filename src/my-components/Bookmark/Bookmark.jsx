
const Bookmark = ({time, title}) => {

    return (
        <div className='border border-blue-500 p-4'>
            <h2>Spent for read: {time} Minutes</h2>
            <h3 className="text-xl font-bold">Title: {title}</h3>
        </div>
    );
};

export default Bookmark;