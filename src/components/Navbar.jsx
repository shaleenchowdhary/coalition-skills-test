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
    <nav className="w-full h-16 rounded-full bg-white px-8 py-3 flex justify-between items-center font-bold text-xs lg:text-sm">
      <div id="logo" className="w-44 cursor-pointer">
        <img
          className="h-full w-full object-cover"
          src="/Images/TestLogo.svg"
          alt="Company's logo"
        />
      </div>
      <div id="options" className="h-9 flex gap-x-6">
        {NavItems.map((item) => (
          <div
            key={item.text}
            className="flex items-center gap-2 hover:bg-[#01F0D0] cursor-pointer px-3.5 rounded-full transition-colors duration-300 ease-in-out"
          >
            <img src={item.icon} alt={`${item.text} icon`} />
            {item.text}
          </div>
        ))}
      </div>
      <div
        id="doc-info"
        className="h-full flex items-center justify-center gap-x-2"
      >
        <div className="h-12 w-12 rounded-full">
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
          <div className="h-5 w-5 cursor-pointer">
            <img
              className="h-full w-full object-contain"
              src="/Images/settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt="settings icon"
            />
          </div>
          <div className="h-5 w-5 cursor-pointer">
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
