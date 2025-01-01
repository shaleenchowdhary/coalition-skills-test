import '../index.css';

const NavItems = [
  { icon: '/Images/home_FILL0_wght300_GRAD0_opsz24.svg', text: 'Overview' },
  { icon: '/Images/group_FILL0_wght300_GRAD0_opsz24.svg', text: 'Patients' },
  {
    icon: '/Images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg',
    text: 'Schedule',
  },
  {
    icon: '/Images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg',
    text: 'Message',
  },
  {
    icon: '/Images/credit_card_FILL0_wght300_GRAD0_opsz24.svg',
    text: 'Transactions',
  },
];

const Navbar = () => {
  return (
    <nav className="w-full md:h-16 rounded-full bg-white md:px-8 px-2 py-3 flex justify-between items-center font-bold gap-x-1">
      {/* Logo */}
      <div id="logo" className="md:w-44 w-36 cursor-pointer">
        <img
          className="h-full w-full object-cover"
          src="/Images/TestLogo.svg"
          alt="Company's logo"
        />
      </div>

      {/* Options */}
      <div id="options" className="hidden lg:flex h-full md:gap-x-6 gap-x-2">
        {NavItems.map((item) => (
          <div
            key={item.text}
            className="flex text-xs lg:text-sm items-center md:gap-2 gap-1 hover:bg-[#01F0D0] cursor-pointer px-3.5 rounded-full transition-colors duration-300 ease-in-out"
          >
            <img src={item.icon} alt={`${item.text} icon`} />
            {item.text}
          </div>
        ))}
      </div>

      {/* Doctor Info */}
      <div
        id="doc-info"
        className="h-full text-xs flex items-center justify-center gap-x-1 md:gap-x-2"
      >
        <div className="lg:h-12 lg:w-12 h-9 w-9 rounded-full">
          <img
            className="h-full w-full object-contain cursor-pointer"
            src="/Images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png"
            alt="Dr. Jose Simmons"
          />
        </div>
        <div className="text-nowrap">
          <div className="name">Dr. Jose Simmons</div>
          <div className="designation font-normal">General Practitioner</div>
        </div>
        <div className="flex ml-2">
          <div className="lg:h-5 h-4 w-4 lg:w-5 cursor-pointer">
            <img
              className="h-full w-full object-contain"
              src="/Images/settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt="settings icon"
            />
          </div>
          <div className="lg:h-5 h-4 w-4 lg:w-5 cursor-pointer">
            <img
              className="h-full w-full object-contain"
              src="/Images/more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              alt="menu options icon"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
