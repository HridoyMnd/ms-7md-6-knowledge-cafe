
import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div>
            <div className='flex justify-between items-center p-4'>
                <h1 className='text-2xl text-headingColor font-extrabold'>Knowledge Cafe</h1>
                <img src={profile} alt="Profile" />
            </div>
            <hr />
        </div>


    );
};

export default Header;